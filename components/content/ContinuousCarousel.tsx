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
    </div>
  );
}

export function ContinuousCarousel() {
  return (
    <section className="relative space-y-[30px] pt-9">
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
