"use client";

import {
  carouselRow1,
  carouselRow2,
} from "@/data/the-differences-carousel-data";
import { DifferentCarouselCard } from "./DifferentCarouselCard";

interface RowProps {
  items: typeof carouselRow1;
  animationClass: string;
  pauseOnHover?: boolean;
  reverse?: boolean;
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
