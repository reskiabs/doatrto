"use client";

import supabase from "@/lib/db";
import { getLocalizedField } from "@/lib/helper/getLocalizedField";
import { IFeatureFacilitator } from "@/types/feature-facilitator";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";

export function useFeatureFacilitator() {
  const locale = useLocale();
  const [facilitators, setFacilitators] = useState<IFeatureFacilitator[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFacilitators = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("feature-facilitator")
        .select("*")
        .order("id", { ascending: true });

      if (error) {
        setError(error.message);
      } else {
        const localized = (data || []).map((item) => ({
          ...item,
          role: getLocalizedField(item, "role", locale),
        }));
        setFacilitators(localized);
      }
      setLoading(false);
    };

    fetchFacilitators();
  }, [locale]);

  return { facilitators, loading, error };
}
