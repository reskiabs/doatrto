'use client';

import { getLocalizedField } from "@/lib/helper/getLocalizedField";
import { IFeatureFacilitator } from "@/types/feature-facilitator";
import { useLocale } from "next-intl";
import { useMemo } from "react";
import useSWR from "swr";

export function useFeatureFacilitatorOptimized() {
  const locale = useLocale();
  
  const { data, error, isLoading, mutate } = useSWR('feature-facilitator', {
    revalidateOnMount: true,
  });

  const facilitators = useMemo(() => {
    if (!data) return [];
    
    return (data as any[]).map((item) => ({
      ...item,
      role: getLocalizedField(item, "role", locale),
    }));
  }, [data, locale]);

  return { 
    facilitators: facilitators as IFeatureFacilitator[], 
    loading: isLoading, 
    error: error?.message || null,
    mutate 
  };
}