"use client";

import { useOpenEvidenceListOptimized } from "@/hooks/optimized/useOpenEvidenceListOptimized";
import { memo, useMemo, useState } from "react";
import LoaderContent from "../common/LoaderContent";
import SomethingWentWrong from "../common/SomethingWentWrong";
import OpenEvidenceDesktopCarousel from "./OpenEvidenceDesktopCarousel";
import OpenEvidenceGrid from "./OpenEvidenceGrid";
import OpenEvidenceMobileSlider from "./OpenEvidenceMobileSlider";

interface OpenEvidenceSectionProps {
  className?: string;
  layout?: "grid" | "slider" | "carousel" | "auto"; // auto = carousel on desktop, slider on mobile
}

const OpenEvidenceSection = memo(function OpenEvidenceSection({
  className = "",
  layout = "auto",
}: OpenEvidenceSectionProps) {
  const { list, loading, error } = useOpenEvidenceListOptimized();
  const [activeIndex, setActiveIndex] = useState(0);

  const slideData = useMemo(() => {
    if (!list?.length) return [];
    return list.map((item) => ({
      id: Number(item.id),
      src: item.thumbnail,
    }));
  }, [list]);

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
  };

  if (loading) {
    return (
      <div className={`w-full ${className}`}>
        <LoaderContent />
      </div>
    );
  }

  if (error) {
    return (
      <div className={`w-full ${className}`}>
        <SomethingWentWrong />
      </div>
    );
  }

  if (!slideData.length) {
    return (
      <div className={`w-full ${className}`}>
        <div className="flex justify-center items-center h-48 text-gray-500">
          <p>No open evidence data available</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full ${className}`}>
      {layout === "grid" && (
        <OpenEvidenceGrid
          data={slideData}
          activeIndex={activeIndex}
          onCardClick={handleCardClick}
        />
      )}

      {layout === "slider" && (
        <OpenEvidenceMobileSlider
          data={slideData}
          autoPlay={true}
          autoPlayInterval={4000}
        />
      )}

      {layout === "carousel" && (
        <OpenEvidenceDesktopCarousel
          data={slideData}
          autoPlay={true}
          autoPlayInterval={5000}
        />
      )}

      {layout === "auto" && (
        <>
          {/* Mobile: Show slider */}
          <div className="block lg:hidden">
            <OpenEvidenceMobileSlider
              data={slideData}
              autoPlay={true}
              autoPlayInterval={4000}
            />
          </div>

          {/* Desktop: Show carousel */}
          <div className="hidden lg:block">
            <OpenEvidenceDesktopCarousel
              data={slideData}
              autoPlay={true}
              autoPlayInterval={8000}
            />
          </div>
        </>
      )}
    </div>
  );
});

export default OpenEvidenceSection;