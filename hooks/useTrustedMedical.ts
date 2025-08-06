import supabase from "@/lib/db";
import { CarouselItem } from "@/types/carousel-item";
import { ITrustedMedical } from "@/types/trusted-medical-expert";
import { useEffect, useState } from "react";

export function useTrustedMedical(id?: string) {
  const [items, setItems] = useState<CarouselItem[]>([]);
  const [detail, setDetail] = useState<ITrustedMedical | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      if (id) {
        const { data, error } = await supabase
          .from("trusted-medical-expert")
          .select("*")
          .eq("id", id)
          .single();

        if (error) {
          setError("Failed to fetch medical expert detail");
          console.error("Supabase detail error:", error);
        } else {
          setDetail(data);
        }
      } else {
        const { data, error } = await supabase
          .from("trusted-medical-expert")
          .select("*");

        if (error) {
          setError("Failed to fetch medical experts list");
          console.error("Supabase list error:", error);
        } else {
          const mapped = (data || [])
            .filter((item: ITrustedMedical) => !!item.thumbnail)
            .map((item: ITrustedMedical) => ({
              id: item.id.toString(),
              image: item.thumbnail,
              url: `/trusted-by-medical-expert/${item.id}`,
            }));
          setItems(mapped);
        }
      }

      setLoading(false);
    };

    fetchData();
  }, [id]);

  return {
    loading,
    error,
    items,
    detail,
  };
}
