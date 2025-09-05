'use client';

import { getLocalizedField } from "@/lib/helper/getLocalizedField";
import { IOpenEvidence } from "@/types/open-evidence";
import { useLocale } from "next-intl";
import { useMemo } from "react";
import useSWR from "swr";

export function useOpenEvidenceDetailOptimized(id?: string) {
  const locale = useLocale();
  
  const key = id ? `open-evidence|eq:id-${id}` : null;
  const { data, error, isLoading, mutate } = useSWR(key, {
    revalidateOnMount: true,
  });

  const detail = useMemo(() => {
    if (!data || !id) return null;
    
    const singleData = Array.isArray(data) ? data[0] : data;
    return {
      ...singleData,
      id: singleData.id.toString(),
      title: getLocalizedField(singleData, "title", locale),
      description: getLocalizedField(singleData, "description", locale),
    } as IOpenEvidence;
  }, [data, locale, id]);

  return { 
    detail, 
    loading: isLoading, 
    error: error?.message || null,
    mutate 
  };
}