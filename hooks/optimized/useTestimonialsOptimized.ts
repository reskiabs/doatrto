'use client';

import { getLocalizedField } from "@/lib/helper/getLocalizedField";
import { ITestimonial } from "@/types/testimonial";
import { useLocale } from "next-intl";
import { useMemo } from "react";
import useSWR from "swr";

export function useTestimonialsOptimized() {
  const locale = useLocale();
  
  const { data, error, isLoading, mutate } = useSWR('testimonial', {
    revalidateOnMount: true,
  });

  const testimonials = useMemo(() => {
    if (!data) return [];
    
    return (data as any[]).map((item) => ({
      ...item,
      text: getLocalizedField(item, "text", locale),
      role: getLocalizedField(item, "role", locale),
    }));
  }, [data, locale]);

  return { 
    testimonials: testimonials as ITestimonial[], 
    loading: isLoading, 
    error: error?.message || null,
    mutate 
  };
}