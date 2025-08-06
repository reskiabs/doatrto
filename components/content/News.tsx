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
      <div className="flex flex-col justify-center items-center mb-8">
        <ContentTitle title="The Latest News from D.O.A TRTO" />
      </div>
      <div className="w-full max-w-[1140px] mx-auto grid md:grid-cols-2 gap-6">
        {news.slice(0, 2).map((item) => (
          <NewsCard
            key={item.id}
            item={{
              ...item,
              image: item.thumbnail,
            }}
            buttonText="Baca Selengkapnya"
          />
        ))}
      </div>
    </main>
  );
};

export default News;
