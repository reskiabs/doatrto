'use client';

import { getLocalizedField } from "@/lib/helper/getLocalizedField";
import { IFeature } from "@/types/feature";
import { useLocale } from "next-intl";
import { useMemo } from "react";
import useSWR from "swr";

export function useSessionFeaturesOptimized() {
  const locale = useLocale();
  
  const { data, error, isLoading, mutate } = useSWR('feature-session', {
    revalidateOnMount: true,
  });

  const features = useMemo(() => {
    if (!data) return [];
    
    return (data as any[]).map((item) => ({
      ...item,
      title: getLocalizedField(item, "title", locale),
      description: getLocalizedField(item, "description", locale),
    }));
  }, [data, locale]);

  return { 
    features: features as IFeature[], 
    loading: isLoading, 
    error: error?.message || null,
    mutate 
  };
}