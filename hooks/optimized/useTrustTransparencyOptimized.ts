'use client';

import { getLocalizedField } from "@/lib/helper/getLocalizedField";
import { ITrustTransparency } from "@/types/trust-transparency";
import { useLocale } from "next-intl";
import { useMemo } from "react";
import useSWR from "swr";

export function useTrustTransparencyOptimized() {
  const locale = useLocale();
  
  const { data, error, isLoading, mutate } = useSWR('trust-transparency', {
    revalidateOnMount: true,
  });

  const items = useMemo(() => {
    if (!data) return [];
    
    return (data as any[]).map((item) => ({
      ...item,
      title: getLocalizedField(item, "title", locale),
      description: getLocalizedField(item, "description", locale),
      id: item.id.toString(),
    }));
  }, [data, locale]);

  return { 
    items: items as ITrustTransparency[], 
    loading: isLoading, 
    error: error?.message || null,
    mutate 
  };
}