"use client";

import NewsCard from "@/components/card/NewsCard";
import LoaderContent from "@/components/common/LoaderContent";
import SomethingWentWrong from "@/components/common/SomethingWentWrong";
import DetailHeader from "@/components/typography/DetailHeader";
import { useNews } from "@/hooks/useNews";

const ArticlePage = () => {
  const { news, loading, error } = useNews();

  if (loading) return <LoaderContent />;
  if (error) return <SomethingWentWrong />;

  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-gradient-to-b from-white via-[#EBF0F8] to-white pt-[50px] lg:pt-[100px]">
        <DetailHeader
          titleKey="theLatestNewsFromDoaTrto"
          descriptionKey="theLatestNewsFromDoaTrto"
        />
      </div>

      <div className="w-full max-w-[1140px] mx-auto mt-[50px] lg:mt-[100px]">
        <div className="grid grid-cols-1 justify-items-center lg:justify-items-start lg:grid-cols-2 lg:gap-6">
          {news.map((item) => (
            <NewsCard
              key={item.id}
              item={item}
              buttonTextKey="readMore"
              page="article"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
