"use client";

import supabase from "@/lib/db";
import { getLocalizedField } from "@/lib/helper/getLocalizedField";
import type { INews } from "@/types/news";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";

export function useNews() {
  const locale = useLocale();
  const [news, setNews] = useState<INews[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);

      const { data, error } = await supabase
        .from("news")
        .select("*")
        .order("id", { ascending: true });

      if (error) {
        setError(error.message);
      } else {
        const localizedNews = (data || []).map((item) => ({
          ...item,
          title: getLocalizedField(item, "title", locale),
          description: getLocalizedField(item, "description", locale),
        }));
        setNews(localizedNews);
      }

      setLoading(false);
    };

    fetchNews();
  }, [locale]);

  return { news, loading, error };
}
