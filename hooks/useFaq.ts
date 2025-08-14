"use client";

import supabase from "@/lib/db";
import { getLocalizedField } from "@/lib/helper/getLocalizedField";
import { FaqLocalized } from "@/types/faq";
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
      const { data, error } = await supabase
        .from("faq")
        .select("*")
        .order("id", { ascending: true });

      if (error) {
        console.error("Failed to fetch FAQ:", error);
        setError("Failed to fetch FAQ");
      } else {
        const localized: FaqLocalized[] = (data || []).map((item) => ({
          ...item,
          title: getLocalizedField(item, "title", locale),
          description: getLocalizedField(item, "description", locale),
        }));
        setItems(localized);
      }

      setLoading(false);
    };

    fetchFaq();
  }, [locale]);

  return { items, loading, error };
}
