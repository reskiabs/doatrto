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
        // DETAIL → ambil semua bahasa
        const { data, error } = await supabase
          .from("trusted-medical-expert")
          .select(
            `id, title_id, title_en, description_id, description_en, speaker, thumbnail, video, images`
          )
          .eq("id", id)
          .single();

        if (error) {
          setError("Failed to fetch medical expert detail");
          console.error("Supabase detail error:", error);
        } else if (data) {
          setDetail({
            id: data.id,
            title: getLocalizedField(data, "title", locale),
            description: getLocalizedField(data, "description", locale),
            speaker: data.speaker,
            thumbnail: data.thumbnail,
            video: data.video,
            images: data.images,
          });
        }
      } else {
        // LIST → ambil semua bahasa (kalau mau title lokal juga)
        const { data, error } = await supabase
          .from("trusted-medical-expert")
          .select(`id, title_id, title_en, thumbnail`);

        if (error) {
          setError("Failed to fetch medical experts list");
          console.error("Supabase list error:", error);
        } else {
          const mapped = (data || [])
            .filter((item) => !!item.thumbnail)
            .map((item) => ({
              id: item.id.toString(),
              image: item.thumbnail,
              url: `/trusted-by-medical-expert/${item.id}`,
              title: getLocalizedField(item, "title", locale), // opsional
            }));
          setItems(mapped);
        }
      }

      setLoading(false);
    };

    fetchData();
  }, [id, locale]);

  return {
    loading,
    error,
    items,
    detail,
  };
}
