"use client";

import { Carousel } from "../ui/open-evidence-carousel";

export function OpenEvidenceCarousel() {
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
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}
