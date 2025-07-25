"use client";

import { CarouselItem } from "@/data/trusted-media-carousel-data";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

interface Props {
  item: CarouselItem;
  className?: string;
}

export function CarouselCard({ item }: Props) {
  return (
    <Link
      href={item.url}
      className={clsx(
        "relative h-[225px] w-[500px] shrink-0 overflow-hidden rounded-[20px] bg-neutral-900",
        "shadow-lg group"
      )}
    >
      <Image
        src={item.image}
        alt="Trusted Media Carousel Card Image"
        fill
        priority
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
    </Link>
  );
}
