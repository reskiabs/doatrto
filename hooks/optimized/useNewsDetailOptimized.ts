'use client';

import { getLocalizedField } from "@/lib/helper/getLocalizedField";
import type { INews } from "@/types/news";
import { useLocale } from "next-intl";
import { useMemo } from "react";
import useSWR from "swr";

export function useNewsDetailOptimized(id: string) {
  const locale = useLocale();
  
  // Fetch detail and all news
  const detailKey = id ? `news|eq:id-${id}` : null;
  const { data: detailData, error: detailError, isLoading: detailLoading } = useSWR(detailKey, {
    revalidateOnMount: true,
  });
  
  const { data: allNewsData, error: allNewsError, isLoading: allNewsLoading } = useSWR('news', {
    revalidateOnMount: true,
  });

  const { detail, related } = useMemo(() => {
    if (!detailData || !allNewsData || !id) {
      return { detail: null, related: [] };
    }

    // Process detail
    const singleData = Array.isArray(detailData) ? detailData[0] : detailData;
    const detail: INews = {
      ...singleData,
      title: getLocalizedField(singleData, "title", locale),
      description: getLocalizedField(singleData, "description", locale),
    };

    // Process related news (exclude current news and limit to 4)
    const related: INews[] = (allNewsData as any[])
      .filter(item => item.id.toString() !== id)
      .slice(0, 4)
      .map((item) => ({
        ...item,
        title: getLocalizedField(item, "title", locale),
        description: getLocalizedField(item, "description", locale),
      }));

    return { detail, related };
  }, [detailData, allNewsData, locale, id]);

  const loading = detailLoading || allNewsLoading;
  const error = detailError?.message || allNewsError?.message || null;

  return { 
    detail, 
    related, 
    loading, 
    error 
  };
}