import supabase from "@/lib/db";
import { getLocalizedField } from "@/lib/helper/getLocalizedField";
import { IInformationalPages } from "@/types/informational-pages";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";

export function useInformationalPages() {
  const locale = useLocale();
  const [item, setItem] = useState<IInformationalPages[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInformationalPages = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("informational-pages")
        .select("*")
        .order("id", { ascending: true });

      if (error) {
        console.error("Failed to fetch Informational Pages:", error);
        setError("Failed to fetch Informational Pages");
      } else {
        const localized = (data || []).map((item) => ({
          ...item,
          title: getLocalizedField(item, "title", locale),
          description: getLocalizedField(item, "description", locale),
        }));
        setItem(localized);
      }

      setLoading(false);
    };

    fetchInformationalPages();
  }, [locale]);

  return { item, loading, error };
}
