'use client';

import { getLocalizedField } from "@/lib/helper/getLocalizedField";
import { FaqLocalized } from "@/types/faq";
import { useLocale } from "next-intl";
import { useMemo } from "react";
import useSWR from "swr";

export function useFaqOptimized() {
  const locale = useLocale();
  
  const { data, error, isLoading, mutate } = useSWR('faq', {
    revalidateOnMount: true,
  });

  const items = useMemo(() => {
    if (!data) return [];
    
    return (data as any[]).map((item) => ({
      ...item,
      title: getLocalizedField(item, "title", locale),
      description: getLocalizedField(item, "description", locale),
    }));
  }, [data, locale]);

  return { 
    items: items as FaqLocalized[], 
    loading: isLoading, 
    error: error?.message || null,
    mutate 
  };
}