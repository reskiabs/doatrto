"use client";

import ContentLoader from "@/components/common/ContentLoader";
import DetailHeader from "@/components/typography/DetailHeader";
import { useHowItWorks } from "@/hooks/useHowItWorks";

const HowItWorksPage = () => {
  const { items, loading, error } = useHowItWorks();

  if (loading) {
    return <ContentLoader />;
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[300px] text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-b from-white via-[#EBF0F8] to-white pt-[50px] lg:pt-[100px] px-[15px] lg:px-0">
      <DetailHeader titleKey="howItWorks" descriptionKey="howItWorks" />
      <div className="mt-[50px] lg:mt-[100px] grid grid-cols-1 lg:grid-cols-2 gap-6">
        {items.map((item, index) => (
          <div
            key={item.id}
            className="w-[365px] lg:w-[555px] flex flex-col justify-center px-[30px] pb-[30px] pt-[10px] shadow-lg bg-white rounded-[15px] lg:rounded-[25px]"
          >
            <p className="text-tertiary font-bold text-[50px] lg:text-[70px]">
              0{index + 1}
            </p>
            <p className="font-bold text-[20px] lg:text-[30px] my-1.5 lg:my-3">
              {item.title}
            </p>
            <div
              className="text-muted font-medium text-sm lg:text-xl"
              dangerouslySetInnerHTML={{ __html: item.description }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorksPage;
