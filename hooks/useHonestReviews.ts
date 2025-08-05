import supabase from "@/lib/db";
import { IHonestReview } from "@/types/honest-review";
import { useEffect, useState } from "react";

export function useHonestReviews(id?: string) {
  const [reviews, setReviews] = useState<IHonestReview[]>([]);
  const [review, setReview] = useState<IHonestReview | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      setLoading(true);

      if (id) {
        const { data, error } = await supabase
          .from("honest-review")
          .select("*")
          .eq("id", id)
          .single();

        if (error) {
          console.error("Error fetching honest review detail:", error);
          setError("Failed to fetch honest review detail");
        } else {
          setReview(data);
        }
      } else {
        const { data, error } = await supabase
          .from("honest-review")
          .select("*");

        if (error) {
          console.error("Error fetching honest reviews:", error);
          setError("Failed to fetch honest reviews");
        } else {
          setReviews(data || []);
        }
      }

      setLoading(false);
    };

    fetchReviews();
  }, [id]);

  return {
    reviews,
    review,
    loading,
    error,
  };
}
