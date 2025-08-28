import supabase from "@/lib/db";
import { getLocalizedField } from "@/lib/helper/getLocalizedField";
import { ITestimonial } from "@/types/testimonial";
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";

export function useTestimonials() {
  const locale = useLocale();
  const [testimonials, setTestimonials] = useState<ITestimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const { data, error } = await supabase
        .from("testimonial")
        .select("*")
        .order("id", { ascending: true });

      if (error) {
        console.error("Error fetching testimonials:", error);
        setError("Failed to fetch testimonials");
      } else if (data) {
        const mapped = data.map((item) => ({
          ...item,
          text: getLocalizedField(item, "text", locale),
          role: getLocalizedField(item, "role", locale),
        }));
        setTestimonials(mapped);
      }

      setLoading(false);
    };

    fetchTestimonials();
  }, [locale]);

  return { testimonials, loading, error };
}
