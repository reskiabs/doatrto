import supabase from "@/lib/db";
import { ITheDifferences } from "@/types/the-differences";
import { useEffect, useState } from "react";

export function useTheDifferences() {
  const [items, setItems] = useState<ITheDifferences[]>([]);
  const [detail, setDetail] = useState<ITheDifferences | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("the-differences")
        .select("*");

      if (error) {
        setError("Failed to fetch differences data");
        console.error("Supabase error:", error);
      } else {
        const mapped = (data || [])
          .filter((item) => !!item.thumbnail)
          .map((item) => ({
            ...item,
            id: item.id.toString(), // ubah jadi string jika perlu
          }));
        setItems(mapped);
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  return {
    loading,
    error,
    items,
    detail,
  };
}
