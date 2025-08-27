"use client";

import ContentTitle from "@/components/typography/ContentTitle";
import PrimaryButton from "../button/PrimaryButton";
import { OpenEvidenceCarousel } from "../common/OpenEvidenceCarousel";

const OpenEvidenceBasedSystem = () => {
  return (
    <main className="mt-[30px] md:mt-[60px] lg:mt-[80px]">
      <div className="flex flex-col justify-center items-center mb-[20px] lg:mb-[30px]">
        <ContentTitle titleKey="openEvidenceBasedSystem" />
      </div>
      <OpenEvidenceCarousel />
      <div className="flex flex-col justify-center items-center mt-[20px] lg:mt-[30px]">
        <PrimaryButton titleKey="seeMore" subtitleKey="watchedCount" />
      </div>
    </main>
  );
};

export default OpenEvidenceBasedSystem;
