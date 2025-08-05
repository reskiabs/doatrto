import { CarouselItem } from "@/types/carousel-item";
import { CarouselCard } from "./CarouselCard";

interface CarouselProps {
  items: CarouselItem[];
}

function ScrollRow({
  items,
  animationClass,
  pauseOnHover,
}: {
  items: CarouselItem[];
  animationClass: string;
  pauseOnHover?: boolean;
}) {
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

export function ContinuousCarousel({ items }: CarouselProps) {
  // Bagi dua baris
  const mid = Math.ceil(items.length / 2);
  const row1 = items.slice(0, mid);
  const row2 = items.slice(mid);

  return (
    <section className="relative space-y-[30px]">
      <ScrollRow
        items={row1}
        animationClass="animate-scroll-slow"
        pauseOnHover
      />
      <ScrollRow
        items={row2}
        animationClass="animate-scroll-fast"
        pauseOnHover
      />
    </section>
  );
}
