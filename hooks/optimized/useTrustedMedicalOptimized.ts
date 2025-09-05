'use client';

import { getLocalizedField } from "@/lib/helper/getLocalizedField";
import { CarouselItem } from "@/types/carousel-item";
import { useLocale } from "next-intl";
import { useMemo } from "react";
import useSWR from "swr";

interface TrustedMedicalLocalized {
  id: number;
  title: string;
  description: string;
  speaker: string;
  thumbnail: string;
  video: string | null;
  images: string[] | null;
}

export function useTrustedMedicalOptimized(id?: string) {
  const locale = useLocale();
  
  // Use different keys for list vs detail
  const key = id ? `trusted-medical-expert|eq:id-${id}` : 'trusted-medical-expert';
  
  const { data, error, isLoading, mutate } = useSWR(key, {
    revalidateOnMount: true,
  });

  const { items, detail } = useMemo(() => {
    if (!data) return { items: [], detail: null };
    
    if (id) {
      // Single detail
      const singleData = Array.isArray(data) ? data[0] : data;
      const detail: TrustedMedicalLocalized = {
        ...singleData,
        title: getLocalizedField(singleData, "title", locale),
        description: getLocalizedField(singleData, "description", locale),
      };
      
      return { items: [], detail };
    } else {
      // Items list
      const items: CarouselItem[] = (data as any[])
        .filter((item) => !!item.thumbnail)
        .map((item) => ({
          id: item.id.toString(),
          image: item.thumbnail,
          url: `/trusted-by-medical-expert/${item.id}`,
          title: getLocalizedField(item, "title", locale),
        }));
      
      return { items, detail: null };
    }
  }, [data, locale, id]);

  return { 
    items, 
    detail, 
    loading: isLoading, 
    error: error?.message || null,
    mutate 
  };
}