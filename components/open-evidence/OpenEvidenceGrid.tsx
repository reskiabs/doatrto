"use client";

import { memo } from "react";
import OpenEvidenceCard from "./OpenEvidenceCard";

interface OpenEvidenceData {
  id: number;
  src: string;
}

interface OpenEvidenceGridProps {
  data: OpenEvidenceData[];
  activeIndex?: number;
  onCardClick?: (index: number) => void;
  className?: string;
}

const OpenEvidenceGrid = memo(function OpenEvidenceGrid({
  data,
  activeIndex,
  onCardClick,
  className = "",
}: OpenEvidenceGridProps) {
  if (!data?.length) {
    return (
      <div className="flex justify-center items-center h-48">
        <p className="text-gray-500">No evidence data available</p>
      </div>
    );
  }

  return (
    <div className={`w-full ${className}`}>
      {/* Mobile: Horizontal scroll */}
      <div className="block lg:hidden">
        <div className="flex gap-4 px-4 overflow-x-auto pb-4 scrollbar-hide">
          {data.map((item, index) => (
            <div key={item.id} className="flex-shrink-0">
              <OpenEvidenceCard
                id={item.id}
                src={item.src}
                isActive={index === activeIndex}
                onClick={() => onCardClick?.(index)}
                size="medium"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: Grid layout */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 px-4 lg:px-0">
          {data.map((item, index) => (
            <OpenEvidenceCard
              key={item.id}
              id={item.id}
              src={item.src}
              isActive={index === activeIndex}
              onClick={() => onCardClick?.(index)}
              size="large"
              className="mx-auto"
            />
          ))}
        </div>
      </div>
    </div>
  );
});

export default OpenEvidenceGrid;