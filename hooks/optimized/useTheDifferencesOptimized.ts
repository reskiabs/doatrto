'use client';

import { getLocalizedField } from "@/lib/helper/getLocalizedField";
import { ITheDifferences } from "@/types/the-differences";
import { useLocale } from "next-intl";
import { useMemo } from "react";
import useSWR from "swr";

export function useTheDifferencesOptimized(id?: string) {
  const locale = useLocale();
  
  // Use different keys for list vs detail
  const key = id ? `the-differences|eq:id-${id}` : 'the-differences';
  
  const { data, error, isLoading, mutate } = useSWR(key, {
    revalidateOnMount: true,
  });

  const { items, detail } = useMemo(() => {
    if (!data) return { items: [], detail: null };
    
    if (id) {
      // Single detail
      const singleData = Array.isArray(data) ? data[0] : data;
      const detail: ITheDifferences = {
        ...singleData,
        id: singleData.id.toString(),
        title: getLocalizedField(singleData, "title", locale),
        description: getLocalizedField(singleData, "description", locale),
      };
      
      return { items: [], detail };
    } else {
      // Items list
      const items: ITheDifferences[] = (data as any[])
        .filter((item) => !!item.thumbnail)
        .map((item) => ({
          ...item,
          id: item.id.toString(),
          title: getLocalizedField(item, "title", locale),
          description: getLocalizedField(item, "description", locale),
        }));
      
      return { items, detail: null };
    }
  }, [data, locale, id]);

  return { 
    loading: isLoading, 
    error: error?.message || null, 
    items, 
    detail,
    mutate 
  };
}