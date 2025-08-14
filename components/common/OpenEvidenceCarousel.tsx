"use client";

import { useOpenEvidenceList } from "@/hooks/useOpenEvidenceList";
import { Carousel } from "../ui/open-evidence-carousel";
import ContentLoader from "./ContentLoader";

export function OpenEvidenceCarousel() {
  const { list, loading } = useOpenEvidenceList();

  if (loading) {
    return <ContentLoader />;
  }

  const slideData = list.map((item) => ({
    id: item.id,
    src: item.thumbnail,
  }));

  return (
    <div className="relative overflow-hidden w-full h-full">
      <Carousel slides={slideData} />
    </div>
  );
}
