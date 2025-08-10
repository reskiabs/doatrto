"use client";

import { TrustAndTransparencyListCard } from "@/components/content/TrustAndTransparencyListCard";
import DetailHeader from "@/components/typography/DetailHeader";

const TrustAndTransparency = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-b from-white via-[#EBF0F8] to-white pt-[50px] lg:pt-[100px]">
      <DetailHeader
        title="Trust and Transparency"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard."
      />
      <div className="px-[15px] lg:px-0">
        <TrustAndTransparencyListCard />
      </div>
    </div>
  );
};

export default TrustAndTransparency;
