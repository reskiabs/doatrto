import supabase from "@/lib/db";
import { getLocalizedField } from "@/lib/helper/getLocalizedField";
import { IOpenEvidence } from "@/types/open-evidence";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";

export function useOpenEvidenceList() {
  const locale = useLocale();
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
        setList(
          (data || []).map((item) => ({
            ...item,
            id: item.id.toString(),
            title: getLocalizedField(item, "title", locale),
            description: getLocalizedField(item, "description", locale),
          }))
        );
      }

      setLoading(false);
    };

    fetch();
  }, [locale]);

  return { list, loading, error };
}
