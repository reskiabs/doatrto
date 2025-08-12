"use client";

import supabase from "@/lib/db";
import { getLocalizedField } from "@/lib/helper/getLocalizedField";
import type { INews } from "@/types/news";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";

export function useNewsDetail(id: string) {
  const locale = useLocale();
  const [detail, setDetail] = useState<INews | null>(null);
  const [related, setRelated] = useState<INews[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchDetail = async () => {
      setLoading(true);

      const { data, error } = await supabase
        .from("news")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        setError(error.message);
        setLoading(false);
        return;
      }

      const localizedDetail = {
        ...data,
        title: getLocalizedField(data, "title", locale),
        description: getLocalizedField(data, "description", locale),
      };

      setDetail(localizedDetail);

      const { data: relatedNews, error: relatedError } = await supabase
        .from("news")
        .select("*")
        .neq("id", id)
        .order("id", { ascending: false })
        .limit(4);

      if (relatedError) {
        console.error("Failed to fetch related news:", relatedError);
        setRelated([]);
      } else {
        const mappedRelated = (relatedNews || []).map((item) => ({
          ...item,
          title: getLocalizedField(item, "title", locale),
          description: getLocalizedField(item, "description", locale),
        }));
        setRelated(mappedRelated);
      }

      setLoading(false);
    };

    fetchDetail();
  }, [id, locale]);

  return { detail, related, loading, error };
}
