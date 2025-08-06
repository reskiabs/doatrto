"use client";

import Image from "next/image";

interface ImageGridProps {
  images: string[];
}

const ImageGrid = ({ images }: ImageGridProps) => {
  const columns = [[], [], []] as { src: string; height: number }[][];

  const heights = [240, 480];

  images.forEach((src, index) => {
    const column = index % 3;
    const height = heights[index % 2];
    columns[column].push({ src, height });
  });

  return (
    <div className="max-w-[1140px] mx-auto flex justify-between gap-[30px]">
      {columns.map((column, colIndex) => (
        <div key={colIndex} className="flex flex-col gap-[30px]">
          {column.map((img, index) => (
            <div
              key={index}
              className={`rounded-[25px] relative w-[360px] overflow-hidden bg-surface`}
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
  );
};

export default ImageGrid;
