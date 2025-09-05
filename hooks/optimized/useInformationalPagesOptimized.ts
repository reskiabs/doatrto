'use client';

import { getLocalizedField } from "@/lib/helper/getLocalizedField";
import { IInformationalPages } from "@/types/informational-pages";
import { useLocale } from "next-intl";
import { useMemo } from "react";
import useSWR from "swr";

export function useInformationalPagesOptimized() {
  const locale = useLocale();
  
  const { data, error, isLoading, mutate } = useSWR('informational-pages', {
    revalidateOnMount: true,
  });

  const item = useMemo(() => {
    if (!data) return [];
    
    return (data as any[]).map((item) => ({
      ...item,
      title: getLocalizedField(item, "title", locale),
      description: getLocalizedField(item, "description", locale),
    }));
  }, [data, locale]);

  return { 
    item: item as IInformationalPages[], 
    loading: isLoading, 
    error: error?.message || null,
    mutate 
  };
}