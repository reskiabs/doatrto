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
    const fetchReviews = async () => {
      setLoading(true);

      if (id) {
        const { data, error } = await supabase
          .from("honest-review")
          .select(
            `id, name, title_id, title_en, description_id, description_en, thumbnail, images`
          )
          .eq("id", id)
          .single();

        if (error) {
          console.error("Error fetching honest review detail:", error);
          setError("Failed to fetch honest review detail");
        } else if (data) {
          setReview({
            id: data.id,
            name: data.name,
            title: getLocalizedField(data, "title", locale),
            description: getLocalizedField(data, "description", locale),
            thumbnail: data.thumbnail,
            images: data.images,
          });
        }
      } else {
        const { data, error } = await supabase
          .from("honest-review")
          .select(
            `id, name, title_id, title_en, description_id, description_en, thumbnail, images`
          );

        if (error) {
          console.error("Error fetching honest reviews:", error);
          setError("Failed to fetch honest reviews");
        } else {
          const mapped =
            data?.map((item) => ({
              id: item.id,
              name: item.name,
              title: getLocalizedField(item, "title", locale),
              description: getLocalizedField(item, "description", locale),
              thumbnail: item.thumbnail,
              images: item.images,
            })) || [];
          setReviews(mapped);
        }
      }

      setLoading(false);
    };

    fetchReviews();
  }, [id, locale]);

  return {
    reviews,
    review,
    loading,
    error,
  };
}
