"use client";

import supabase from "@/lib/db";
import { IFeature } from "@/types/feature";
import { useEffect, useState } from "react";

export function useSessionFeatures() {
  const [features, setFeatures] = useState<IFeature[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFeatures = async () => {
      const { data, error } = await supabase
        .from("feature-session")
        .select("*")
        .order("id", { ascending: true });

      if (error) {
        setError(error.message);
      } else {
        setFeatures(data || []);
      }

      setLoading(false);
    };

    fetchFeatures();
  }, []);

  return { features, loading, error };
}
