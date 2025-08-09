"use client";

import ContentTitle from "@/components/typography/ContentTitle";
import { useNews } from "@/hooks/useNews";
import NewsCard from "../card/NewsCard";

const News = () => {
  const { news, loading, error } = useNews();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <main className="mt-[50px] md:mt-[80px] lg:mt-[100px]">
      <div className="flex flex-col justify-center items-center mb-[20px] lg:mb-[30px]">
        <ContentTitle title="The Latest News from D.O.A TRTO" />
      </div>
      <div className="w-full lg:max-w-[1140px] mx-auto grid grid-cols-1 justify-items-center lg:justify-items-start lg:grid-cols-2 lg:gap-6">
        {news.slice(0, 2).map((item) => (
          <NewsCard
            key={item.id}
            item={item}
            buttonText="Baca Selengkapnya"
            page="article"
          />
        ))}
      </div>
    </main>
  );
};

export default News;
