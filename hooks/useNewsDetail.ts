"use client";

import supabase from "@/lib/db";
import type { INews } from "@/types/news";
import { useEffect, useState } from "react";

export function useNewsDetail(id: string) {
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

      setDetail(data);

      // Fetch related news
      const { data: relatedNews } = await supabase
        .from("news")
        .select("*")
        .neq("id", id)
        .order("id", { ascending: false })
        .limit(4);

      setRelated(relatedNews || []);
      setLoading(false);
    };

    fetchDetail();
  }, [id]);

  return { detail, related, loading, error };
}
