"use client";

import NewsCard from "@/components/card/NewsCard";
import LoaderContent from "@/components/common/LoaderContent";
import SomethingWentWrong from "@/components/common/SomethingWentWrong";
import DetailHeader from "@/components/typography/DetailHeader";
import { useKlassesFeaturesOptimized } from "@/hooks/optimized/useKlassesFeaturesOptimized";

const KlassesPage = () => {
  const { features, loading, error } = useKlassesFeaturesOptimized();

  if (loading) return <LoaderContent />;
  if (error) return <SomethingWentWrong />;

  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-gradient-to-b from-white via-[#EBF0F8] to-white pt-[50px] lg:pt-[100px]">
        <DetailHeader titleKey="klasses" descriptionKey="klasses" />
      </div>

      <div className="w-full max-w-[1140px] mx-auto mt-[50px] lg:mt-[100px]">
        <div className="flex flex-wrap justify-center gap-6 md:grid md:grid-cols-2">
          {features.map((item) => (
            <NewsCard key={item.id} item={item} buttonTextKey="bookSession" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default KlassesPage;
