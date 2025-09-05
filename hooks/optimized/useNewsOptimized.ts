'use client';

import { getLocalizedField } from "@/lib/helper/getLocalizedField";
import type { INews } from "@/types/news";
import { useLocale } from "next-intl";
import { useMemo } from "react";
import useSWR from "swr";

export function useNewsOptimized() {
  const locale = useLocale();
  
  const { data, error, isLoading, mutate } = useSWR('news', {
    revalidateOnMount: true,
  });

  const news = useMemo(() => {
    if (!data) return [];
    
    return (data as any[]).map((item) => ({
      ...item,
      title: getLocalizedField(item, "title", locale),
      description: getLocalizedField(item, "description", locale),
    }));
  }, [data, locale]);

  return { 
    news: news as INews[], 
    loading: isLoading, 
    error: error?.message || null,
    mutate 
  };
}