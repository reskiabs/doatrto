"use client";

import ContentTitle from "@/components/typography/ContentTitle";
import NewsCard from "../card/NewsCard";

const news = [
  {
    id: 1,
    title: "Mindfulness untuk Hidup Lebih Tenang",
    description:
      "Divine Oracular Assistance Tension Releasing Technique Online adalah sebuah cara baru di dunia teknologi pikiran (founded in 2020) yang bermanfaat...",
    image:
      "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Teknik Pernapasan untuk Mengurangi Stres",
    description:
      "Divine Oracular Assistance Tension Releasing Technique Online adalah sebuah cara baru di dunia teknologi pikiran (founded in 2020) yang bermanfaat...",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
  },
];

const News = () => {
  return (
    <main className="mt-[50px] md:mt-[80px] lg:mt-[100px]">
      <div className="flex flex-col justify-center items-center mb-8">
        <ContentTitle title="The Latest News from D.O.A TRTO" />
      </div>
      <div className="w-full max-w-[1140px] mx-auto grid md:grid-cols-2 gap-6">
        {news.map((item) => (
          <NewsCard key={item.id} item={item} buttonText="Baca Selengkapnya" />
        ))}
      </div>
    </main>
  );
};

export default News;
