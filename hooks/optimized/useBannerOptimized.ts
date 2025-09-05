'use client';

import { getLocalizedField } from "@/lib/helper/getLocalizedField";
import { LocalizedBanner, UseBannerReturn } from "@/types/banner";
import { BannerSupabaseRow } from "@/types/supabase";
import { useLocale } from "next-intl";
import { useMemo } from "react";
import useSWR from "swr";

export function useBannerOptimized(id?: string): UseBannerReturn {
  const locale = useLocale();
  
  // Use different keys for list vs detail
  const key = id ? `banner|eq:id-${id}` : 'banner';
  
  const { data, error, isLoading, mutate } = useSWR(key, {
    revalidateOnMount: true,
  });

  const { heros, hero, allThumbnails } = useMemo(() => {
    if (!data) return { heros: undefined, hero: undefined, allThumbnails: undefined };
    
    if (id) {
      // Single banner detail
      const singleData = Array.isArray(data) ? data[0] : data;
      const hero: LocalizedBanner = {
        ...singleData,
        title: getLocalizedField(singleData, "title", locale),
        quotes: getLocalizedField(singleData, "quotes", locale),
        description: getLocalizedField(singleData, "description", locale),
      };
      
      return { heros: undefined, hero, allThumbnails: undefined };
    } else {
      // Banner list
      const heros: LocalizedBanner[] = (data as BannerSupabaseRow[]).map((item) => ({
        ...item,
        title: getLocalizedField(item, "title", locale),
        quotes: getLocalizedField(item, "quotes", locale),
        description: getLocalizedField(item, "description", locale),
      }));
      
      const allThumbnails = heros.map((h) => ({
        id: h.id,
        src: h.thumbnail || "",
        title: h.title,
      }));
      
      return { heros, hero: undefined, allThumbnails };
    }
  }, [data, locale, id]);

  return { 
    heros, 
    hero, 
    allThumbnails, 
    loading: isLoading, 
    error: error?.message || null,
    mutate 
  };
}