"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import OpenEvidenceCard from "./OpenEvidenceCard";

interface OpenEvidenceData {
  id: number;
  src: string;
}

interface OpenEvidenceMobileSliderProps {
  data: OpenEvidenceData[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
}

const OpenEvidenceMobileSlider = function OpenEvidenceMobileSlider({
  data,
  autoPlay = true,
  autoPlayInterval = 4000,
  className = "",
}: OpenEvidenceMobileSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const goToSlide = useCallback((index: number) => {
    if (!containerRef.current || !data?.length) return;
    
    const container = containerRef.current;
    const cardWidth = container.children[0]?.clientWidth || 0;
    const gap = 16; // 1rem = 16px gap
    
    container.scrollTo({
      left: index * (cardWidth + gap),
      behavior: "smooth",
    });
    
    setCurrentIndex(index);
  }, [data?.length]);

  const nextSlide = useCallback(() => {
    if (!data?.length) return;
    const nextIndex = (currentIndex + 1) % data.length;
    goToSlide(nextIndex);
  }, [currentIndex, data?.length, goToSlide]);


  // Auto play functionality
  useEffect(() => {
    if (!autoPlay || !data?.length || isUserInteracting) return;

    autoPlayRef.current = setInterval(nextSlide, autoPlayInterval);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
        autoPlayRef.current = null;
      }
    };
  }, [autoPlay, autoPlayInterval, nextSlide, isUserInteracting, data?.length]);

  // Handle user interaction
  const handleUserInteraction = useCallback(() => {
    setIsUserInteracting(true);
    
    // Resume auto-play after 3 seconds of no interaction
    setTimeout(() => {
      setIsUserInteracting(false);
    }, 3000);
  }, []);

  // Handle scroll events to update current index
  useEffect(() => {
    const container = containerRef.current;
    if (!container || !data?.length) return;

    const handleScroll = () => {
      const cardWidth = container.children[0]?.clientWidth || 0;
      const gap = 16;
      const scrollLeft = container.scrollLeft;
      const newIndex = Math.round(scrollLeft / (cardWidth + gap));
      
      if (newIndex !== currentIndex) {
        setCurrentIndex(Math.min(newIndex, data.length - 1));
      }
    };

    // Enhanced touch handling for better mobile experience
    const handleTouchEnd = () => {
      // Snap to closest slide after touch ends
      setTimeout(() => {
        const cardWidth = container.children[0]?.clientWidth || 0;
        const gap = 16;
        const scrollLeft = container.scrollLeft;
        const newIndex = Math.round(scrollLeft / (cardWidth + gap));
        goToSlide(newIndex);
      }, 100);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    container.addEventListener("touchend", handleTouchEnd, { passive: true });
    
    return () => {
      container.removeEventListener("scroll", handleScroll);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, [currentIndex, data?.length, goToSlide]);

  if (!data?.length) {
    return (
      <div className="flex justify-center items-center h-48">
        <p className="text-gray-500">No evidence data available</p>
      </div>
    );
  }

  return (
    <div className={`w-full ${className}`}>
      {/* Slider Container */}
      <div
        ref={containerRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide px-4 py-2"
        onTouchStart={handleUserInteraction}
        onMouseDown={handleUserInteraction}
        style={{
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          scrollBehavior: "smooth",
          touchAction: "pan-x",
        }}
      >
        {data.map((item, index) => (
          <div
            key={item.id}
            className="flex-shrink-0"
            style={{ scrollSnapAlign: "start" }}
          >
            <OpenEvidenceCard
              id={item.id}
              src={item.src}
              isActive={index === currentIndex}
              onClick={() => {
                handleUserInteraction();
                goToSlide(index);
              }}
              size="medium"
            />
          </div>
        ))}
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {data.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              handleUserInteraction();
              goToSlide(index);
            }}
            className={`
              w-2 h-2 rounded-full transition-all duration-300
              ${index === currentIndex 
                ? "bg-white scale-125 shadow-md" 
                : "bg-white/50 hover:bg-white/75"
              }
            `}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default OpenEvidenceMobileSlider;