import supabase from "@/lib/db";
import { ITrustTransparency } from "@/types/trust-transparency";
import { useEffect, useState } from "react";

export function useTrustTransparency() {
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
        setItems(data || []);
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  return { items, loading, error };
}
