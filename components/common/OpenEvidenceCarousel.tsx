"use client";

import { useOpenEvidenceListOptimized } from "@/hooks/optimized/useOpenEvidenceListOptimized";
import { memo } from "react";
import { Carousel } from "../ui/open-evidence-carousel";
import LoaderContent from "./LoaderContent";
import SomethingWentWrong from "./SomethingWentWrong";

export const OpenEvidenceCarousel = memo(function OpenEvidenceCarousel() {
  const { list, loading, error } = useOpenEvidenceListOptimized();

  if (loading) return <LoaderContent />;
  if (error) return <SomethingWentWrong />;

  const slideData = list.map((item) => ({
    id: item.id,
    src: item.thumbnail,
  }));

  return (
    <div className="relative overflow-hidden w-full pb-6 lg:pb-8 h-full">
      <Carousel slides={slideData} />
    </div>
  );
});
