"use client";

import supabase from "@/lib/db";
import { getLocalizedField } from "@/lib/helper/getLocalizedField";
import { LocalizedBanner, UseBannerReturn } from "@/types/banner";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";

export function useBanner(id?: string): UseBannerReturn {
  const locale = useLocale();
  const [heros, setBanners] = useState<LocalizedBanner[]>();
  const [hero, setBanner] = useState<LocalizedBanner>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      if (id) {
        const { data, error } = await supabase
          .from("banner")
          .select("*")
          .eq("id", id)
          .single();

        if (error) {
          console.error("Error fetching hero:", error);
          setError("Failed to fetch hero");
        } else if (data) {
          setBanner({
            ...data,
            title: getLocalizedField(data, "title", locale),
            quotes: getLocalizedField(data, "quotes", locale),
            description: getLocalizedField(data, "description", locale),
          });
        }
      } else {
        const { data, error } = await supabase
          .from("banner")
          .select("*")
          .order("id", { ascending: true });

        if (error) {
          setError("Error fetching hero data");
          console.error("Supabase error:", error);
        } else {
          const localized = (data || []).map((item) => ({
            ...item,
            title: getLocalizedField(item, "title", locale),
            quotes: getLocalizedField(item, "quotes", locale),
            description: getLocalizedField(item, "description", locale),
          }));
          setBanners(localized);
        }
      }

      setLoading(false);
    };

    fetchData();
  }, [id, locale]);

  const allThumbnails = heros?.map((h) => ({
    id: h.id,
    src: h.thumbnail || "",
    title: h.title,
  }));

  return { heros, hero, allThumbnails, loading, error };
}
