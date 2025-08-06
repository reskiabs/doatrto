"use client";

import supabase from "@/lib/db";
import { IFeatureFacilitator } from "@/types/feature-facilitator";
import { useEffect, useState } from "react";

export function useFeatureFacilitator() {
  const [facilitators, setFacilitators] = useState<IFeatureFacilitator[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFacilitators = async () => {
      const { data, error } = await supabase
        .from("feature-facilitator")
        .select("*")
        .order("id", { ascending: true });

      if (error) {
        setError(error.message);
      } else {
        setFacilitators(data || []);
      }

      setLoading(false);
    };

    fetchFacilitators();
  }, []);

  return { facilitators, loading, error };
}
