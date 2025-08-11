"use client";

import supabase from "@/lib/db";
import { FaqLocalized, FaqRow } from "@/types/faq";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";

export function useFaq() {
  const locale = useLocale();
  const [items, setItems] = useState<FaqLocalized[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFaq = async () => {
      setLoading(true);
      const lang = locale as "id" | "en";

      const { data, error } = await supabase
        .from("faq")
        .select(`id, title_id, title_en, description_id, description_en`)
        .order("id", { ascending: true });

      if (error) {
        console.error("Failed to fetch FAQ:", error);
        setError("Failed to fetch FAQ");
      } else {
        const mapped: FaqLocalized[] =
          (data as FaqRow[])?.map((row) => ({
            id: row.id,
            title: row[`title_${lang}` as keyof FaqRow] as string,
            description: row[`description_${lang}` as keyof FaqRow] as string,
          })) || [];
        setItems(mapped);
      }

      setLoading(false);
    };

    fetchFaq();
  }, [locale]);

  return { items, loading, error };
}
