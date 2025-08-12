"use client";

import supabase from "@/lib/db";
import { getLocalizedField } from "@/lib/helper/getLocalizedField";
import { IFeature } from "@/types/feature";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";

export function useKlassesFeatures() {
  const locale = useLocale();
  const [features, setFeatures] = useState<IFeature[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeatures = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("feature-klasses")
        .select("*")
        .order("id", { ascending: true });

      if (error) {
        setError(error.message);
      } else {
        const localized = (data || []).map((item) => ({
          ...item,
          title: getLocalizedField(item, "title", locale),
          description: getLocalizedField(item, "description", locale),
        }));
        setFeatures(localized);
      }
      setLoading(false);
    };

    fetchFeatures();
  }, [locale]);

  return { features, loading, error };
}
