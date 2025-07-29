"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const ImageCarousel = ({ images }: { images: string[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="relative w-[98.5%] h-[770px] rounded-[40px] overflow-hidden">
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={src}
            fill
            className={`absolute top-0 left-0 object-cover transition-opacity duration-1000 ease-in-out ${
              index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            priority
          />
        ))}
      </div>

      <div className="flex justify-center mt-2.5 space-x-2 md:space-x-[15px] lg:space-x-[20px] md:mt-5">
        {images.map((_, i) => (
          <div
            key={i}
            className={`rounded-full transition-all duration-300 ${
              i === activeIndex ? "bg-primary w-7 h-3" : "bg-gray-300 size-3"
            }`}
          />
        ))}
      </div>
    </>
  );
};

export default ImageCarousel;
