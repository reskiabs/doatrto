import supabase from "@/lib/db";
import { getLocalizedField } from "@/lib/helper/getLocalizedField";
import { ITrustTransparency } from "@/types/trust-transparency";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";

export function useTrustTransparency() {
  const locale = useLocale();
  const [items, setItems] = useState<ITrustTransparency[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const { data, error } = await supabase
        .from("trust-transparency")
        .select("*")
        .order("id", { ascending: true });

      if (error) {
        console.error("Supabase error:", error);
        setError("Failed to fetch trust-transparency data");
      } else {
        const localizedItems = (data || []).map((item) => ({
          ...item,
          title: getLocalizedField(item, "title", locale),
          description: getLocalizedField(item, "description", locale),
          id: item.id.toString(),
        }));
        setItems(localizedItems);
      }

      setLoading(false);
    };

    fetchData();
  }, [locale]);

  return { items, loading, error };
}
