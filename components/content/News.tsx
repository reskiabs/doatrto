"use client";

import ContentTitle from "@/components/typography/ContentTitle";
import { useNewsOptimized } from "@/hooks/optimized/useNewsOptimized";
import { memo } from "react";
import NewsCard from "../card/NewsCard";
import LoaderContent from "../common/LoaderContent";
import SomethingWentWrong from "../common/SomethingWentWrong";

const News = memo(() => {
  const { news, loading, error } = useNewsOptimized();

  if (loading) return <LoaderContent />;
  if (error) return <SomethingWentWrong />;
  return (
    <main className="mt-[30px] md:mt-[60px] lg:mt-[80px]">
      <div className="flex flex-col justify-center items-center mb-[20px] lg:mb-[30px]">
        <ContentTitle titleKey="latestNews" />
      </div>
      <div className="w-full lg:max-w-[1140px] mx-auto grid grid-cols-1 justify-items-center lg:justify-items-start lg:grid-cols-2 lg:gap-6">
        {news.slice(0, 2).map((item) => (
          <NewsCard
            key={item.id}
            item={item}
            buttonTextKey="readMore"
            page="article"
          />
        ))}
      </div>
    </main>
  );
});

News.displayName = 'News';

export default News;
