import supabase from "@/lib/db";
import { IOpenEvidence } from "@/types/open-evidence";
import { useEffect, useState } from "react";

export function useOpenEvidenceDetail(id?: string) {
  const [detail, setDetail] = useState<IOpenEvidence | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetch = async () => {
      const { data, error } = await supabase
        .from("open-evidence")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error("Error fetching open evidence detail:", error);
        setError("Failed to fetch detail");
      } else {
        setDetail(data);
      }

      setLoading(false);
    };

    fetch();
  }, [id]);

  return { detail, loading, error };
}
