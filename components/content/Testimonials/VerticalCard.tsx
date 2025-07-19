"use client";

import { Testimonial } from "@/data/testimonials-data";
import clsx from "clsx";
import Image from "next/image";

interface Props {
  item: Testimonial;
  className?: string;
}

export function VerticalCard({ item, className }: Props) {
  return (
    <div
      className={clsx(
        "flex flex-col rounded-2xl bg-white border border-surface",
        "p-[30px] w-[360px] flex-none",
        "text-sm leading-relaxed",
        className
      )}
    >
      <div className="flex items-center gap-5">
        <div className="relative size-[60px] overflow-hidden rounded-full bg-neutral-200">
          <Image
            src={item.avatar}
            alt={item.name}
            fill
            sizes="56px"
            className="object-cover"
            priority={false}
          />
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-lg">{item.name}</span>
          <span className="text-md font-normal">{item.username}</span>
        </div>
      </div>
      <p className="mt-5 text-muted font-medium text-md">{item.text}</p>
    </div>
  );
}
