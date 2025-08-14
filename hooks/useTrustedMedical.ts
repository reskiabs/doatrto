"use client";

import supabase from "@/lib/db";
import { getLocalizedField } from "@/lib/helper/getLocalizedField";
import { CarouselItem } from "@/types/carousel-item";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";

interface TrustedMedicalLocalized {
  id: number;
  title: string;
  description: string;
  speaker: string;
  thumbnail: string;
  video: string | null;
  images: string[] | null;
}

export function useTrustedMedical(id?: string) {
  const locale = useLocale();
  const [items, setItems] = useState<CarouselItem[]>([]);
  const [detail, setDetail] = useState<TrustedMedicalLocalized | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      if (id) {
        // Fetch detail
        const { data, error } = await supabase
          .from("trusted-medical-expert")
          .select("*")
          .eq("id", id)
          .single();

        if (error) {
          console.error("Error fetching medical expert detail:", error);
          setError("Failed to fetch medical expert detail");
        } else if (data) {
          setDetail({
            ...data,
            title: getLocalizedField(data, "title", locale),
            description: getLocalizedField(data, "description", locale),
          });
        }
      } else {
        // Fetch list
        const { data, error } = await supabase
          .from("trusted-medical-expert")
          .select("*")
          .order("id", { ascending: true });

        if (error) {
          console.error("Error fetching medical experts list:", error);
          setError("Failed to fetch medical experts list");
        } else {
          setItems(
            (data || [])
              .filter((item) => !!item.thumbnail)
              .map((item) => ({
                id: item.id.toString(),
                image: item.thumbnail,
                url: `/trusted-by-medical-expert/${item.id}`,
                title: getLocalizedField(item, "title", locale),
              }))
          );
        }
      }

      setLoading(false);
    };

    fetchData();
  }, [id, locale]);

  return { items, detail, loading, error };
}
