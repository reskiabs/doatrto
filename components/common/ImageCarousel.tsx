"use client";

import { ChevronLeft, ChevronRight, MoveRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface CarouselImage {
  id: number;
  src: string;
  title: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
}

// ...imports & interfaces tetap

const ImageCarousel = ({ images }: ImageCarouselProps) => {
  const t = useTranslations("button");
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length === 0) return;
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [images]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  if (images.length === 0) {
    return <div className="w-full h-[400px] bg-gray-100">No images found.</div>;
  }

  return (
    <>
      {/* tambahkan `group` di wrapper */}
      <div className="relative w-[90%] lg:w-[90%] lg:h-[770px] h-[482px] rounded-[20px] lg:rounded-[40px] overflow-hidden bg-gray-50 group">
        {images.map(({ id, src, title }, index) => (
          <div key={id}>
            <div
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <Image
                src={src}
                alt={`Hero Thumbnail ${id}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

              <div className="absolute top-1/2 left-[5%] -translate-y-1/2 max-w-[75%] sm:max-w-[60%] lg:max-w-[50%] text-white">
                <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg">
                  {title}
                </h2>
                <Link
                  href={`/banner/${id}`}
                  className="mt-4 sm:mt-5 lg:mt-6 inline-flex items-center px-4 py-2 sm:px-5 sm:py-2.5 lg:px-6 lg:py-3 gap-1 sm:gap-2 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full text-white font-medium hover:opacity-90 transition text-sm sm:text-base lg:text-lg"
                >
                  {t("seeDetail")}{" "}
                  <MoveRight size={16} className="sm:w-5 sm:h-5" />
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Tombol Navigasi Kiri/Kanan */}
        <button
          onClick={handlePrev}
          aria-label="Previous slide"
          className="absolute left-4 bottom-4 bg-white/40 hover:bg-white/60 text-white p-1.5 lg:p-2 rounded-full flex z-30 transition-opacity lg:opacity-0 lg:group-hover:opacity-100 lg:pointer-events-none lg:group-hover:pointer-events-auto backdrop-blur-sm hover:cursor-pointer"
        >
          <ChevronLeft className="size-5 lg:size-7" />
        </button>

        <button
          onClick={handleNext}
          aria-label="Next slide"
          className="absolute right-4 bottom-4 bg-white/40 hover:bg-white/60 text-white p-1.5 lg:p-2 rounded-full flex z-30 transition-opacity lg:opacity-0 lg:group-hover:opacity-100 lg:pointer-events-none lg:group-hover:pointer-events-auto backdrop-blur-sm hover:cursor-pointer"
        >
          <ChevronRight className="size-5 lg:size-7" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-3 space-x-2 md:space-x-[15px] lg:space-x-[20px] md:mt-5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 hover:cursor-pointer ${
              i === activeIndex
                ? "bg-primary h-2 w-4 lg:w-7 lg:h-3"
                : "bg-gray-300 size-2 lg:size-3"
            }`}
          />
        ))}
      </div>
    </>
  );
};

export default ImageCarousel;
