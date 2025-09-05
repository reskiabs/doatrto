'use client';

import { getLocalizedField } from "@/lib/helper/getLocalizedField";
import { useLocale } from "next-intl";
import { useMemo } from "react";
import useSWR from "swr";

export interface IBeyond {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
}

export function useBeyondOptimized() {
  const locale = useLocale();
  
  const { data, error, isLoading, mutate } = useSWR('beyond', {
    revalidateOnMount: true,
  });

  const beyond = useMemo(() => {
    if (!data) return [];
    
    return (data as any[]).map((item) => ({
      id: item.id,
      title: getLocalizedField(item, "title", locale),
      description: getLocalizedField(item, "description", locale),
      thumbnail: item.thumbnail,
    }));
  }, [data, locale]);

  return { 
    beyond: beyond as IBeyond[], 
    loading: isLoading, 
    error: error?.message || null,
    mutate 
  };
}