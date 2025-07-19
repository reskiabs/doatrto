"use client";

import clsx from "clsx";
import Image from "next/image";
import { CarouselItem } from "../common/carousel-data";

interface Props {
  item: CarouselItem;
  className?: string;
}

export function CarouselCard({ item }: Props) {
  return (
    <div
      className={clsx(
        "relative h-56 w-[500px] shrink-0 overflow-hidden rounded-[20px] bg-neutral-900",
        "shadow-lg group"
      )}
    >
      <Image
        src={item.image}
        alt={`${item.line1} ${item.line2}`}
        fill
        priority
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
    </div>
  );
}
