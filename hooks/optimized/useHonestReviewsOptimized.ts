'use client';

import { getLocalizedField } from "@/lib/helper/getLocalizedField";
import { useLocale } from "next-intl";
import { useMemo } from "react";
import useSWR from "swr";

interface HonestReviewLocalized {
  id: number;
  name: string;
  title: string;
  description: string;
  thumbnail: string;
  images: string[] | null;
}

export function useHonestReviewsOptimized(id?: string) {
  const locale = useLocale();
  
  // Use different keys for list vs detail
  const key = id ? `honest-review|eq:id-${id}` : 'honest-review';
  
  const { data, error, isLoading, mutate } = useSWR(key, {
    revalidateOnMount: true,
  });

  const { reviews, review } = useMemo(() => {
    if (!data) return { reviews: [], review: null };
    
    if (id) {
      // Single review detail
      const singleData = Array.isArray(data) ? data[0] : data;
      const review: HonestReviewLocalized = {
        ...singleData,
        title: getLocalizedField(singleData, "title", locale),
        description: getLocalizedField(singleData, "description", locale),
      };
      
      return { reviews: [], review };
    } else {
      // Reviews list
      const reviews: HonestReviewLocalized[] = (data as any[]).map((item) => ({
        ...item,
        title: getLocalizedField(item, "title", locale),
        description: getLocalizedField(item, "description", locale),
      }));
      
      return { reviews, review: null };
    }
  }, [data, locale, id]);

  return { 
    reviews, 
    review, 
    loading: isLoading, 
    error: error?.message || null,
    mutate 
  };
}