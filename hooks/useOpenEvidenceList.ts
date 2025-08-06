import supabase from "@/lib/db";
import { IOpenEvidence } from "@/types/open-evidence";
import { useEffect, useState } from "react";

export function useOpenEvidenceList() {
  const [list, setList] = useState<IOpenEvidence[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetch = async () => {
      const { data, error } = await supabase.from("open-evidence").select("*");

      if (error) {
        console.error("Error fetching open evidence list:", error);
        setError("Failed to fetch list");
      } else {
        setList(data || []);
      }

      setLoading(false);
    };

    fetch();
  }, []);

  return { list, loading, error };
}
