"use client";

import { ITheDifferences } from "@/types/the-differences";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

interface Props {
  item: ITheDifferences;
  className?: string;
}

export function DifferentCarouselCard({ item }: Props) {
  return (
    <Link
      href={`/the-difference/${item.id}`}
      className={clsx(
        "relative size-[100px] lg:size-[140px] shrink-0 overflow-hidden rounded-[10px] bg-neutral-900",
        "shadow-lg group"
      )}
    >
      <Image
        src={item.thumbnail}
        alt={item.title}
        fill
        priority
        className="object-cover transition-transform duration-700 group-hover:scale-120"
      />
    </Link>
  );
}
