"use client";

import NewsCard from "@/components/card/NewsCard";
import DetailHeader from "@/components/typography/DetailHeader";
import { useNews } from "@/hooks/useNews";

const ArticlePage = () => {
  const { news, loading, error } = useNews();

  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-gradient-to-b from-white via-[#EBF0F8] to-white pt-[104px]">
        <DetailHeader
          title="The Latest News from D.O.A TRTO"
          description="Lebih dari 500 orang sudah terbantu dan merasakan kebahagiaan
          dengan Divine Oracular Assistance Tension Releasing Technique Online"
        />
      </div>

      <div className="w-full max-w-[1140px] mx-auto mt-[150px]">
        {loading ? (
          <div className="flex justify-center">Loading news...</div>
        ) : error ? (
          <div className="text-red-500 text-center">{error}</div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {news.map((item) => (
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
        )}
      </div>
    </div>
  );
};

export default ArticlePage;
