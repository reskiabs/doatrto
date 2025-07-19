"use client";

import { carouselRow1, carouselRow2 } from "../common/carousel-data";
import { CarouselCard } from "./CarouselCard";

interface RowProps {
  items: typeof carouselRow1;
  animationClass: string;
  pauseOnHover?: boolean;
  reverse?: boolean;
}

function ScrollRow({ items, animationClass, pauseOnHover }: RowProps) {
  // Gandakan list untuk seamless loop
  const doubled = [...items, ...items];

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className={[
          "flex w-max gap-6",
          animationClass,
          pauseOnHover && "hover:[animation-play-state:paused]",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        {doubled.map((item, i) => (
          <CarouselCard key={`${item.id}-${i}`} item={item} />
        ))}
      </div>
      {/* Fade Edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-white via-white/70 to-transparent dark:from-neutral-900 dark:via-neutral-900/80" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-white via-white/70 to-transparent dark:from-neutral-900 dark:via-neutral-900/80" />
    </div>
  );
}

export function ContinuousCarousel() {
  return (
    <section className="relative mx-auto max-w-[1640px] space-y-10 py-10">
      <ScrollRow
        items={carouselRow1}
        animationClass="animate-scroll-fast"
        pauseOnHover
      />
      <ScrollRow
        items={carouselRow2}
        animationClass="animate-scroll-slow-reverse"
        pauseOnHover
      />
    </section>
  );
}
