"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface OpenEvidenceAutoSliderProps {
  slideData: { src: string }[];
}

export default function OpenEvidenceAutoSlider({
  slideData,
}: OpenEvidenceAutoSliderProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.innerWidth >= 768) return; // hanya mobile

    const interval = setInterval(() => {
      if (!scrollRef.current) return;

      const container = scrollRef.current;
      const cardWidth = container.children[0]?.clientWidth || 0;
      const nextIndex = (index + 1) % slideData.length;

      container.scrollTo({
        left: nextIndex * (cardWidth + 15), // 15px gap
        behavior: "smooth",
      });

      setIndex(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [index, slideData.length]);

  return (
    <div className="mt-5 w-full">
      <div
        ref={scrollRef}
        className="flex md:grid md:grid-cols-3 px-[15px] lg:px-0 gap-[15px] lg:gap-[30px] overflow-x-auto md:overflow-visible no-scrollbar"
      >
        {slideData.map((item, i) => (
          <div
            key={i}
            className="relative w-[360px] h-[202px] rounded-[10px] overflow-hidden flex-shrink-0"
          >
            <Image
              src={item.src}
              alt="Open Evidence Based System"
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
