"use client";

import { useTheDifferences } from "@/hooks/useTheDifferences";
import { ITheDifferences } from "@/types/the-differences";
import { DifferentCarouselCard } from "./DifferentCarouselCard";

interface RowProps {
  items: ITheDifferences[];
  animationClass: string;
  pauseOnHover?: boolean;
}

function ScrollRow({ items, animationClass, pauseOnHover }: RowProps) {
  const doubled = [...items, ...items];

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className={[
          "flex w-max gap-2.5",
          animationClass,
          pauseOnHover && "hover:[animation-play-state:paused]",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {doubled.map((item, i) => (
          <DifferentCarouselCard key={`${item.id}-${i}`} item={item} />
        ))}
      </div>
    </div>
  );
}

export function DifferentContinuousCarousel() {
  const { items, loading, error } = useTheDifferences();

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  const mid = Math.ceil(items.length / 2);
  const carouselRow1 = items.slice(0, mid);
  const carouselRow2 = items.slice(mid);

  return (
    <section className="relative space-y-[10px]">
      <ScrollRow
        items={carouselRow1}
        animationClass="animate-scroll-slow"
        pauseOnHover
      />
      <ScrollRow
        items={carouselRow2}
        animationClass="animate-scroll-fast"
        pauseOnHover
      />
    </section>
  );
}
