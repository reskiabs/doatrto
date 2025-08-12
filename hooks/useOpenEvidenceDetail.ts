import supabase from "@/lib/db";
import { getLocalizedField } from "@/lib/helper/getLocalizedField";
import { IOpenEvidence } from "@/types/open-evidence";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";

export function useOpenEvidenceDetail(id?: string) {
  const locale = useLocale();
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
      } else if (data) {
        setDetail({
          ...data,
          id: data.id.toString(),
          title: getLocalizedField(data, "title", locale),
          description: getLocalizedField(data, "description", locale),
        });
      }

      setLoading(false);
    };

    fetch();
  }, [id, locale]);

  return { detail, loading, error };
}
