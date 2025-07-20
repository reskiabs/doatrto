"use client";

import { TheDifferencesCarouselItem } from "@/data/the-differences-carousel-data";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

interface Props {
  item: TheDifferencesCarouselItem;
  className?: string;
}

export function DifferentCarouselCard({ item }: Props) {
  return (
    <Link
      href={item.url}
      className={clsx(
        "relative size-[140px] shrink-0 overflow-hidden rounded-[10px] bg-neutral-900",
        "shadow-lg group"
      )}
    >
      <Image
        src={item.image}
        alt="Trusted Media Carousel Card Image"
        fill
        priority
        className="object-cover transition-transform duration-700 group-hover:scale-120"
      />
    </Link>
  );
}
