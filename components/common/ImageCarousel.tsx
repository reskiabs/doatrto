"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface CarouselImage {
  id: number;
  src: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
}

const ImageCarousel = ({ images }: ImageCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length === 0) return;
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);

  if (images.length === 0) {
    return <div className="w-full h-[400px] bg-gray-100">No images found.</div>;
  }

  return (
    <>
      <div className="relative w-[98.5%] h-[770px] rounded-[40px] overflow-hidden bg-gray-50">
        {images.map(({ id, src }, index) => (
          <Link href={`/banner/${id}`} key={id}>
            <Image
              src={src}
              alt={`Hero Thumbnail ${id}`}
              fill
              className={`absolute top-0 left-0 object-cover transition-opacity duration-1000 ease-in-out ${
                index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
              priority={index === 0}
            />
          </Link>
        ))}
      </div>

      <div className="flex justify-center mt-2.5 space-x-2 md:space-x-[15px] lg:space-x-[20px] md:mt-5">
        {images.map((_, i) => (
          <div
            key={i}
            className={`rounded-full transition-all duration-300 ${
              i === activeIndex ? "bg-primary w-7 h-3" : "bg-gray-300 w-3 h-3"
            }`}
          />
        ))}
      </div>
    </>
  );
};

export default ImageCarousel;
