"use client";

import supabase from "@/lib/db";
import { getLocalizedField } from "@/lib/helper/getLocalizedField";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";

export type HeroRow = {
  id: string;
  title_id: string;
  title_en: string;
  quotes_id: string;
  quotes_en: string;
  description_id: string;
  description_en: string;
  thumbnail: string | null;
  images: string[] | null;
};

type LocalizedHero = HeroRow & {
  title: string;
  quotes: string;
  description: string;
};

type UseHeroReturn = {
  heros?: LocalizedHero[];
  hero?: LocalizedHero;
  allThumbnails?: { id: string; src: string; title: string }[];
  loading: boolean;
  error: string | null;
};

export function useHero(id?: string): UseHeroReturn {
  const locale = useLocale();
  const [heros, setHeros] = useState<LocalizedHero[]>();
  const [hero, setHero] = useState<LocalizedHero>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      if (id) {
        const { data, error } = await supabase
          .from("hero-section")
          .select("*")
          .eq("id", id)
          .single();

        if (error) {
          console.error("Error fetching hero:", error);
          setError("Failed to fetch hero");
        } else if (data) {
          setHero({
            ...data,
            title: getLocalizedField(data, "title", locale),
            quotes: getLocalizedField(data, "quotes", locale),
            description: getLocalizedField(data, "description", locale),
          });
        }
      } else {
        const { data, error } = await supabase
          .from("hero-section")
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
          setHeros(localized);
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
