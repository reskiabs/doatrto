"use client";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

interface SlideData {
  id: number;
  src: string;
}

interface SlideProps {
  slide: SlideData;
  index: number;
  current: number;
  handleSlideClick: (index: number) => void;
}

const Slide = ({ slide, index, current, handleSlideClick }: SlideProps) => {
  const t = useTranslations("button");
  const slideRef = useRef<HTMLLIElement>(null);
  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;

      const x = xRef.current;
      const y = yRef.current;

      slideRef.current.style.setProperty("--x", `${x}px`);
      slideRef.current.style.setProperty("--y", `${y}px`);

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    const el = slideRef.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };

  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };

  const imageLoaded = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.style.opacity = "1";
  };

  const { src, id } = slide;

  return (
    <div className="[perspective:1200px] [transform-style:preserve-3d]">
      <li
        ref={slideRef}
        className="flex flex-1 flex-col items-center justify-center relative text-center text-white opacity-100 transition-all duration-300 ease-in-out w-[340px] lg:w-[1140px] h-[191px] lg:h-[641px] mx-[0.1vmin] z-10 "
        onClick={() => handleSlideClick(index)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: current !== index ? "scale(0.70) " : "scale(1)",
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          transformOrigin: "center",
        }}
      >
        <div
          className="absolute top-0 w-full h-full bg-[#1D1F2F] rounded-[10px] lg:rounded-[20px] overflow-hidden transition-all duration-150 ease-out"
          style={{
            transform:
              current === index
                ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)"
                : "none",
          }}
        >
          <Image
            alt={`Open Evidence Image ${index}`}
            src={src}
            onLoad={imageLoaded}
            loading="eager"
            decoding="sync"
            fill
            style={{
              opacity: current === index ? 1 : 0.5,
            }}
            className="absolute inset-0 object-cover opacity-100 transition-opacity duration-600 ease-in-out"
          />
          {current === index && (
            <div className="absolute inset-0 bg-black/30 transition-all duration-1000" />
          )}
        </div>
        <article
          className={`relative p-[4vmin] transition-opacity duration-1000 ease-in-out ${
            current === index ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <Link
            href={`/open-evidence/${id}`}
            className="mt-6 flex items-center gap-1 lg:gap-2 px-4 py-2.5 lg:px-7 lg:py-3.5 bg-white/50 hover:bg-white mx-auto font-semibold text-xs lg:text-md text-tertiary rounded-full justify-center hover:shadow-xl 
              hover:shadow-white/30
              transition-all duration-300 ease-out hover:scale-[1.02] hover:cursor-pointer"
          >
            <Play size={20} /> {t("playVideo")}
          </Link>
        </article>
      </li>
    </div>
  );
};

interface CarouselProps {
  slides: SlideData[];
}

export function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(1);

  const handleSlideClick = (index: number) => {
    if (current !== index) {
      setCurrent(index);
    }
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const id = useId();

  useEffect(() => {
    const isMobile = window.innerWidth < 1024;
    if (!isMobile) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div
      className="relative w-[340px] lg:w-[1140px] h-[191px] lg:h-[641px] mx-auto"
      aria-labelledby={`carousel-heading-${id}`}
    >
      {/* Button Prev */}
      <button
        onClick={handlePrev}
        className="hidden lg:flex absolute top-1/2 -left-6 transform -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full z-20 transition"
      >
        <ChevronLeft size={28} />
      </button>

      {/* Button Next */}
      <button
        onClick={handleNext}
        className="hidden lg:flex absolute top-1/2 -right-6 transform -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white p-3 rounded-full z-20 transition"
      >
        <ChevronRight size={28} />
      </button>

      <ul
        className="absolute flex mx-[-0.1vmin] transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${current * (100 / slides.length)}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <Slide
            key={index}
            slide={slide}
            index={index}
            current={current}
            handleSlideClick={handleSlideClick}
          />
        ))}
      </ul>
    </div>
  );
}
