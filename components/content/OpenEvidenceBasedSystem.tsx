"use client";

import ContentTitle from "@/components/typography/ContentTitle";
import { Carousel } from "@/components/ui/open-evidence-carousel";

const slideData = [
  {
    src: "/images/open-evidence-1.png",
  },
  {
    src: "/images/open-evidence-2.png",
  },
  {
    src: "/images/open-evidence-3.png",
  },
  {
    src: "/images/open-evidence-1.png",
  },
];

const OpenEvidenceBasedSystem = () => {
  return (
    <main className="mt-[50px] md:mt-[80px] lg:mt-[100px]">
      <div className="flex flex-col justify-center items-center mb-8">
        <ContentTitle title="Open Evidence Based System" />
      </div>
      <Carousel slides={slideData} />
    </main>
  );
};

export default OpenEvidenceBasedSystem;
