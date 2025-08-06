import supabase from "@/lib/db";
import { FaqItem } from "@/types/faq";
import { useEffect, useState } from "react";

export function useFaq() {
  const [items, setItems] = useState<FaqItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFaq = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("faq")
        .select("*")
        .order("id", { ascending: true });

      if (error) {
        console.error("Failed to fetch FAQ:", error);
        setError("Failed to fetch FAQ");
      } else {
        setItems(data || []);
      }

      setLoading(false);
    };

    fetchFaq();
  }, []);

  return { items, loading, error };
}
