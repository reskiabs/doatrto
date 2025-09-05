"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { memo } from "react";

interface OpenEvidenceNavigationProps {
  onPrevious: () => void;
  onNext: () => void;
  currentIndex: number;
  totalSlides: number;
  disabled?: boolean;
  className?: string;
}

const OpenEvidenceNavigation = memo(function OpenEvidenceNavigation({
  onPrevious,
  onNext,
  currentIndex,
  totalSlides,
  disabled = false,
  className = "",
}: OpenEvidenceNavigationProps) {
  const canGoPrevious = currentIndex > 0;
  const canGoNext = currentIndex < totalSlides - 1;

  return (
    <div className={`flex items-center justify-between ${className}`}>
      {/* Previous Button */}
      <button
        onClick={onPrevious}
        disabled={disabled || !canGoPrevious}
        className={`
          group flex items-center justify-center
          w-12 h-12 lg:w-14 lg:h-14
          rounded-full backdrop-blur-sm
          transition-all duration-300 ease-out
          ${
            disabled || !canGoPrevious
              ? "bg-black/20 text-white/30 cursor-not-allowed"
              : "bg-black/40 hover:bg-black/70 text-white cursor-pointer hover:scale-105"
          }
        `}
        aria-label="Previous slide"
      >
        <ChevronLeft
          size={24}
          className={`
            transition-transform duration-200
            ${!disabled && canGoPrevious ? "group-hover:-translate-x-0.5" : ""}
          `}
        />
      </button>

      {/* Slide Counter */}
      <div className="flex flex-col items-center gap-2">
        <div className="flex gap-1.5">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <div
              key={index}
              className={`
                h-1.5 rounded-full transition-all duration-300
                ${
                  index === currentIndex
                    ? "w-8 bg-white"
                    : "w-1.5 bg-white/40 hover:bg-white/60"
                }
              `}
            />
          ))}
        </div>
        <span className="text-xs text-white/70 font-medium">
          {currentIndex + 1} / {totalSlides}
        </span>
      </div>

      {/* Next Button */}
      <button
        onClick={onNext}
        disabled={disabled || !canGoNext}
        className={`
          group flex items-center justify-center
          w-12 h-12 lg:w-14 lg:h-14
          rounded-full backdrop-blur-sm
          transition-all duration-300 ease-out
          ${
            disabled || !canGoNext
              ? "bg-black/20 text-white/30 cursor-not-allowed"
              : "bg-black/40 hover:bg-black/70 text-white cursor-pointer hover:scale-105"
          }
        `}
        aria-label="Next slide"
      >
        <ChevronRight
          size={24}
          className={`
            transition-transform duration-200
            ${!disabled && canGoNext ? "group-hover:translate-x-0.5" : ""}
          `}
        />
      </button>
    </div>
  );
});

export default OpenEvidenceNavigation;