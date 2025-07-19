"use client";

import clsx from "clsx";
import Image from "next/image";
import { CarouselItem } from "../common/carousel-data";

interface Props {
  item: CarouselItem;
  className?: string;
}

export function CarouselCard({ item, className }: Props) {
  return (
    <div
      className={clsx(
        "relative h-64 w-[380px] shrink-0 overflow-hidden rounded-2xl bg-neutral-900",
        "shadow-lg group",
        className
      )}
    >
      <Image
        src={item.image}
        alt={`${item.line1} ${item.line2}`}
        fill
        sizes="380px"
        priority
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/20 to-black/30" />

      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <div className="text-white font-bold leading-tight tracking-tight text-lg">
          {item.line1}
        </div>
        <div className="text-white font-extrabold text-2xl md:text-[28px] leading-none tracking-tight">
          {item.line2}
        </div>
        <div className="mt-2 flex flex-wrap items-center gap-x-3 text-xs font-medium text-white/80">
          {item.sessions && <span>{item.sessions}</span>}
          {item.meta && <span>{item.meta}</span>}
        </div>
      </div>
    </div>
  );
}
