import supabase from "@/lib/db";
import { FaqLocalized } from "@/types/faq";
import { useEffect, useState } from "react";

export function useHowItWorks() {
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
        setItems(data || []);
      }

      setLoading(false);
    };

    fetchHowItWorks();
  }, []);

  return { items, loading, error };
}
