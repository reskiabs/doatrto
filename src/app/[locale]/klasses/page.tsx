"use client";

import NewsCard from "@/components/card/NewsCard";
import DetailHeader from "@/components/typography/DetailHeader";
import { useKlassesFeatures } from "@/hooks/useKlassesFeatures";

const KlassesPage = () => {
  const { features } = useKlassesFeatures();
  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-gradient-to-b from-white via-[#EBF0F8] to-white pt-[104px]">
        <DetailHeader
          title="Klasses"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        />
      </div>
      <div className="w-full max-w-[1140px] mx-auto grid md:grid-cols-2 gap-6 mt-[100px]">
        {features.map((item) => (
          <NewsCard key={item.id} item={item} buttonText="Book a Session" />
        ))}
      </div>
    </div>
  );
};

export default KlassesPage;
