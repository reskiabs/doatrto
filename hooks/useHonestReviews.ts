"use client";

import supabase from "@/lib/db";
import { getLocalizedField } from "@/lib/helper/getLocalizedField";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";

interface HonestReviewLocalized {
  id: number;
  name: string;
  title: string;
  description: string;
  thumbnail: string;
  images: string[] | null;
}

export function useHonestReviews(id?: string) {
  const locale = useLocale();
  const [reviews, setReviews] = useState<HonestReviewLocalized[]>([]);
  const [review, setReview] = useState<HonestReviewLocalized | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      if (id) {
        // Fetch detail
        const { data, error } = await supabase
          .from("honest-review")
          .select("*")
          .eq("id", id)
          .single();

        if (error) {
          console.error("Error fetching honest review detail:", error);
          setError("Failed to fetch honest review detail");
        } else if (data) {
          setReview({
            ...data,
            title: getLocalizedField(data, "title", locale),
            description: getLocalizedField(data, "description", locale),
          });
        }
      } else {
        // Fetch list
        const { data, error } = await supabase
          .from("honest-review")
          .select("*")
          .order("id", { ascending: true });

        if (error) {
          console.error("Error fetching honest reviews:", error);
          setError("Failed to fetch honest reviews");
        } else {
          setReviews(
            (data || []).map((item) => ({
              ...item,
              title: getLocalizedField(item, "title", locale),
              description: getLocalizedField(item, "description", locale),
            }))
          );
        }
      }

      setLoading(false);
    };

    fetchData();
  }, [id, locale]);

  return { reviews, review, loading, error };
}
