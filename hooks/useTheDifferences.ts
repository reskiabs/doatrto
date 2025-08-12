import supabase from "@/lib/db";
import { getLocalizedField } from "@/lib/helper/getLocalizedField";
import { ITheDifferences } from "@/types/the-differences";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";

export function useTheDifferences(id?: string) {
  const locale = useLocale();
  const [items, setItems] = useState<ITheDifferences[]>([]);
  const [detail, setDetail] = useState<ITheDifferences | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchList = async () => {
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
            id: item.id.toString(),
            title: getLocalizedField(item, "title", locale),
            description: getLocalizedField(item, "description", locale),
          }));
        setItems(mapped);
      }

      setLoading(false);
    };

    const fetchDetail = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("the-differences")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        setError("Failed to fetch difference detail");
        console.error("Supabase error:", error);
      } else {
        setDetail({
          ...data,
          id: data.id.toString(),
          title: getLocalizedField(data, "title", locale),
          description: getLocalizedField(data, "description", locale),
        });
      }

      setLoading(false);
    };

    if (id) {
      fetchDetail();
    } else {
      fetchList();
    }
  }, [id, locale]);

  return { loading, error, items, detail };
}
