import supabase from "@/lib/db";
import { getLocalizedField } from "@/lib/helper/getLocalizedField";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";

export interface IBeyond {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
}

export function useBeyond() {
  const locale = useLocale();
  const [beyond, setBeyond] = useState<IBeyond[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBeyond = async () => {
      const { data, error } = await supabase
        .from("beyond")
        .select("*")
        .order("id", { ascending: true });

      if (error) {
        console.error("Error fetching beyond:", error);
        setError("Failed to fetch beyond data");
      } else if (data) {
        const mapped = data.map((item) => ({
          id: item.id,
          title: getLocalizedField(item, "title", locale),
          description: getLocalizedField(item, "description", locale),
          thumbnail: item.thumbnail,
        }));
        setBeyond(mapped);
      }

      setLoading(false);
    };

    fetchBeyond();
  }, [locale]);

  return { beyond, loading, error };
}
