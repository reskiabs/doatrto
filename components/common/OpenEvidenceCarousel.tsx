"use client";

import { useOpenEvidenceList } from "@/hooks/useOpenEvidenceList";
import { Carousel } from "../ui/open-evidence-carousel";

export function OpenEvidenceCarousel() {
  const { list, loading } = useOpenEvidenceList();

  if (loading) {
    return <div>Loading...</div>;
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
