import supabase from "@/lib/db";
import { getLocalizedField } from "@/lib/helper/getLocalizedField";
import { FaqLocalized } from "@/types/faq";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";

export function useHowItWorks() {
  const locale = useLocale();
  const [items, setItems] = useState<FaqLocalized[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHowItWorks = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("how-it-works")
        .select("*")
        .order("id", { ascending: true });

      if (error) {
        console.error("Failed to fetch How It Works:", error);
        setError("Failed to fetch How It Works");
      } else {
        const localized = (data || []).map((item) => ({
          ...item,
          title: getLocalizedField(item, "title", locale),
          description: getLocalizedField(item, "description", locale),
        }));
        setItems(localized);
      }

      setLoading(false);
    };

    fetchHowItWorks();
  }, [locale]);

  return { items, loading, error };
}
