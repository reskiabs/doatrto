"use client";

import ContentTitle from "@/components/typography/ContentTitle";
import PrimaryButton from "../button/PrimaryButton";
import { OpenEvidenceCarousel } from "../common/OpenEvidenceCarousel";

const OpenEvidenceBasedSystem = () => {
  return (
    <main className="mt-[50px] md:mt-[80px] lg:mt-[100px]">
      <div className="flex flex-col justify-center items-center mb-[20px] lg:mb-[30px]">
        <ContentTitle titleKey="openEvidenceBasedSystem" />
      </div>
      <OpenEvidenceCarousel />
      <div className="flex flex-col justify-center items-center mt-[20px] lg:mt-[30px]">
        <PrimaryButton
          title="Lihat Lainnya"
          subtitle="2000 orang telah menonton podcast ini."
        />
      </div>
    </main>
  );
};

export default OpenEvidenceBasedSystem;
