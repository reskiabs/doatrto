'use client';

import { getLocalizedField } from "@/lib/helper/getLocalizedField";
import { IOpenEvidence } from "@/types/open-evidence";
import { useLocale } from "next-intl";
import { useMemo } from "react";
import useSWR from "swr";

export function useOpenEvidenceListOptimized() {
  const locale = useLocale();
  
  const { data, error, isLoading, mutate } = useSWR('open-evidence', {
    revalidateOnMount: true,
  });

  const list = useMemo(() => {
    if (!data) return [];
    
    return (data as any[]).map((item) => ({
      ...item,
      id: item.id.toString(),
      title: getLocalizedField(item, "title", locale),
      description: getLocalizedField(item, "description", locale),
    }));
  }, [data, locale]);

  return { 
    list: list as IOpenEvidence[], 
    loading: isLoading, 
    error: error?.message || null,
    mutate 
  };
}