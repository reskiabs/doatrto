"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import OpenEvidenceCard from "./OpenEvidenceCard";

interface OpenEvidenceData {
  id: number;
  src: string;
}

interface OpenEvidenceDesktopCarouselProps {
  data: OpenEvidenceData[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
}

const OpenEvidenceDesktopCarousel = function OpenEvidenceDesktopCarousel({
  data,
  autoPlay = false,
  autoPlayInterval = 8000,
  className = "",
}: OpenEvidenceDesktopCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isUserInteracting, setIsUserInteracting] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (!data?.length) return;
    const safeIndex = ((index % data.length) + data.length) % data.length;
    setCurrentIndex(safeIndex);
  }, [data?.length]);

  const nextSlide = useCallback(() => {
    goToSlide(currentIndex + 1);
  }, [currentIndex, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide(currentIndex - 1);
  }, [currentIndex, goToSlide]);

  // Auto play functionality
  useEffect(() => {
    if (!autoPlay || !data?.length || isUserInteracting) return;

    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, nextSlide, isUserInteracting, data?.length]);

  // Handle user interaction
  const handleUserInteraction = useCallback(() => {
    setIsUserInteracting(true);
    setTimeout(() => setIsUserInteracting(false), 3000);
  }, []);

  if (!data?.length) {
    return (
      <div className="flex justify-center items-center h-96">
        <p className="text-gray-500">No evidence data available</p>
      </div>
    );
  }

  // Get slides to display (current + adjacent for both sides)
  const getVisibleSlides = () => {
    const slides = [];
    const totalSlides = data.length;
    
    // Always show left, current, and right slides
    for (let i = -1; i <= 1; i++) {
      const index = ((currentIndex + i) % totalSlides + totalSlides) % totalSlides;
      slides.push({
        ...data[index],
        position: i,
        isActive: i === 0,
      });
    }
    
    return slides;
  };

  const visibleSlides = getVisibleSlides();

  return (
    <div className={`relative w-full ${className}`}>
      {/* Carousel Container - Full width, no padding */}
      <div className="relative h-[585px] w-full overflow-visible">
        {/* Slides */}
        <div className="flex items-center justify-center h-full relative w-full">
          {visibleSlides.map((slide) => {
            const { position, isActive } = slide;
            
            // Calculate 30% visibility = 210px (30% of 700px)
            const sideSlideVisible = 210;
            
            return (
              <div
                key={`${slide.id}-${position}`}
                className="absolute transition-all duration-700 ease-in-out cursor-pointer"
                style={{
                  // Positioning slides - side slides fill viewport edges
                  left: position === 0 
                    ? '50%' // Main slide center
                    : position < 0 
                    ? '0px' // Left slide: starts from left edge of viewport
                    : `calc(100% - ${sideSlideVisible}px)`, // Right slide: ends at right edge of viewport
                  marginLeft: position === 0 ? '-520px' : '0',
                  zIndex: isActive ? 10 : 5,
                  opacity: 1,
                }}
                onClick={() => {
                  if (!isActive) {
                    handleUserInteraction();
                    goToSlide(currentIndex + position);
                  }
                }}
              >
                {/* Wrapper untuk cropping side slides - 30% visibility */}
                <div 
                  className="transition-all duration-700 ease-in-out"
                  style={{
                    width: !isActive && position !== 0 ? `${sideSlideVisible}px` : 'auto',
                    height: !isActive && position !== 0 ? '393px' : '585px',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      transform: !isActive && position < 0 
                        ? `translateX(-${700 - sideSlideVisible}px)` // Left slide: shift to show right part (30%)
                        : 'translateX(0)',
                    }}
                    className="transition-all duration-700 ease-in-out"
                  >
                    <OpenEvidenceCard
                      id={slide.id}
                      src={slide.src}
                      isActive={isActive}
                      size="large"
                      className={`
                        transition-all duration-700 ease-in-out
                        ${isActive 
                          ? 'w-[1040px] h-[585px]' 
                          : 'w-[700px] h-[393px]'
                        }
                      `}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Buttons - attached to main slide edges */}
        <button
          onClick={() => {
            handleUserInteraction();
            prevSlide();
          }}
          className="absolute top-1/2 -translate-y-1/2 z-20
            flex items-center justify-center
            w-16 h-16 bg-black/50 hover:bg-black/70 text-white
            rounded-full backdrop-blur-sm
            transition-all duration-300 hover:cursor-pointer
            focus:outline-none focus:ring-2 focus:ring-white/50"
          style={{
            // Position further out from left edge of main slide - minimal overlap
            left: 'calc(50% - 520px - 86px)', // Main slide left edge minus 86px (minimal button overlap)
          }}
          aria-label="Previous slide"
        >
          <ChevronLeft size={28} />
        </button>

        <button
          onClick={() => {
            handleUserInteraction();
            nextSlide();
          }}
          className="absolute top-1/2 -translate-y-1/2 z-20
            flex items-center justify-center
            w-16 h-16 bg-black/50 hover:bg-black/70 text-white
            rounded-full backdrop-blur-sm
            transition-all duration-300 hover:cursor-pointer
            focus:outline-none focus:ring-2 focus:ring-white/50"
          style={{
            // Position further out from right edge of main slide - minimal overlap
            left: 'calc(50% + 520px + 22px)', // Main slide right edge plus 22px (minimal button overlap)
          }}
          aria-label="Next slide"
        >
          <ChevronRight size={28} />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-3 mt-6">
        {data.map((_, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => {
              handleUserInteraction();
              goToSlide(slideIndex);
            }}
            className={`
              w-3 h-3 rounded-full transition-all duration-300
              ${slideIndex === currentIndex 
                ? "bg-white scale-125 shadow-lg" 
                : "bg-white/40 hover:bg-white/60 hover:scale-110"
              }
            `}
            aria-label={`Go to slide ${slideIndex + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="text-center mt-4">
        <span className="text-white/70 text-sm font-medium">
          {currentIndex + 1} / {data.length}
        </span>
      </div>
    </div>
  );
};

export default OpenEvidenceDesktopCarousel;