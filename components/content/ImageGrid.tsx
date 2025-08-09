"use client";

import { useMobileScrollOffset } from "@/hooks/useMobileScrollOffset";
import Image from "next/image";

interface ImageGridProps {
  images: string[];
}

const ImageGrid = ({ images }: ImageGridProps) => {
  const columns = [[], [], []] as { src: string; height: number }[][];
  const scrollRef = useMobileScrollOffset(0.14, [columns]);

  const heights = [240, 480];

  // Distribusi untuk desktop
  images.forEach((src, index) => {
    const column = index % 3;
    const height = heights[index % 2];
    columns[column].push({ src, height });
  });

  return (
    <>
      {/* Desktop */}
      <div className="hidden md:flex max-w-[1140px] mx-auto justify-between mt-[100px] gap-[30px]">
        {columns.map((column, colIndex) => (
          <div key={colIndex} className="flex flex-col gap-[30px]">
            {column.map((img, index) => (
              <div
                key={index}
                className="rounded-[25px] relative w-[360px] overflow-hidden bg-surface"
                style={{ height: `${img.height}px` }}
              >
                <Image
                  src={img.src}
                  alt={`Grid Image ${colIndex}-${index}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Mobile */}
      <div
        ref={scrollRef}
        className="md:hidden mt-[50px] px-[15px] lg:px-0 overflow-x-auto scrollbar-hide"
      >
        <div
          className="
            flex flex-wrap gap-4 min-w-max
            max-h-[520px] snap-x snap-mandatory
          "
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="
                size-[250px] rounded-[15px] lg:rounded-[25px] relative overflow-hidden bg-surface
                flex-shrink-0 snap-start
              "
            >
              <Image
                src={src}
                alt={`Grid Image mobile-${index}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageGrid;
