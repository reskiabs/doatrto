import supabase from "@/lib/db";
import { IInformationalPages } from "@/types/informational-pages";
import { useEffect, useState } from "react";

export function useInformationalPages() {
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
        setItem(data || []);
      }

      setLoading(false);
    };

    fetchInformationalPages();
  }, []);

  return { item, loading, error };
}
