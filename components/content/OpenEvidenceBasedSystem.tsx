"use client";

import ContentTitle from "@/components/typography/ContentTitle";
import PrimaryButton from "../button/PrimaryButton";
import OpenEvidenceSection from "../open-evidence/OpenEvidenceSection";

const OpenEvidenceBasedSystem = () => {
  return (
    <main className="mt-[30px] md:mt-[60px] lg:mt-[80px]">
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center mb-[20px] lg:mb-[30px]">
        <ContentTitle titleKey="openEvidenceBasedSystem" />
      </div>

      {/* Content Section - Full width, no container */}
      <OpenEvidenceSection 
        layout="auto"
        className="w-full"
      />

      {/* Action Section */}
      <div className="flex flex-col justify-center items-center mt-[20px] lg:mt-[30px]">
        <PrimaryButton titleKey="seeMore" subtitleKey="watchedCount" />
      </div>
    </main>
  );
};

export default OpenEvidenceBasedSystem;
