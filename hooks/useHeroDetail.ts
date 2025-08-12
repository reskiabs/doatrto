"use client";

import supabase from "@/lib/db";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";

export type HeroRow = {
  id: number;
  title_id: string;
  title_en: string;
  quotes_id: string;
  quotes_en: string;
  description_id: string;
  description_en: string;
  thumbnail: string | null;
  images: string[] | null;
};

export function useHeroDetail(id?: string) {
  const locale = useLocale() as "id" | "en";
  const [hero, setHero] = useState<HeroRow | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchHero = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("hero-section")
        .select(
          "id, title_id, title_en, quotes_id, quotes_en, description_id, description_en, thumbnail, images"
        )
        .eq("id", id)
        .single();

      if (error) {
        console.error("Error fetching hero:", error);
        setError("Failed to fetch hero");
      } else {
        setHero(data as HeroRow);
      }
      setLoading(false);
    };

    fetchHero();
  }, [id]);

  return { hero, loading, error, locale };
}
