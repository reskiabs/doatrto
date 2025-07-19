"use client";

import ContentTitle from "@/components/typography/ContentTitle";
import Image from "next/image";

const news = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet",
    description:
      "Divine Oracular Assistance Tension Releasing Technique Online adalah sebuah cara baru di dunia teknologi pikiran (founded in 2020) yang bermanfa...",
    image:
      "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet",
    description:
      "Divine Oracular Assistance Tension Releasing Technique Online adalah sebuah cara baru di dunia teknologi pikiran (founded in 2020) yang bermanfa...",
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
          <div
            key={item.id}
            className="rounded-3xl w-[555px] overflow-hidden bg-white 
            shadow-xs
              hover:shadow-2xl 
              hover:shadow-tertiary
              transition-all duration-300 ease-out hover:scale-[1.02]"
          >
            <div className="relative w-full h-[285px]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-[30px]">
              <h3 className="font-bold text-2xl mb-5">{item.title}</h3>
              <p className="text-gray-800 text-sm mb-7 font-normal text-md">
                {item.description}
              </p>
              <a
                href="#"
                className="text-blue-600 text-sm font-medium hover:underline"
              >
                Baca Selengkapnya &gt;
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default News;
