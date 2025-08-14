"use client";

import { useOpenEvidenceList } from "@/hooks/useOpenEvidenceList";
import { Carousel } from "../ui/open-evidence-carousel";
import LoaderContent from "./LoaderContent";
import SomethingWentWrong from "./SomethingWentWrong";

export function OpenEvidenceCarousel() {
  const { list, loading, error } = useOpenEvidenceList();

  if (loading) return <LoaderContent />;
  if (error) return <SomethingWentWrong />;

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
