"use client";

import { testimonials } from "@/data/testimonials-data";
import { splitIntoColumns } from "@/lib/split-into-columns";
import clsx from "clsx";
import { AnimatedColumn } from "./AnimatedColumn";

interface Props {
  columns?: number;
  pauseOnHover?: boolean;
  className?: string;
}

export function InfiniteVerticalCards({
  columns = 3,
  pauseOnHover = true,
  className,
}: Props) {
  const cols = splitIntoColumns(testimonials, columns);

  const animationMap = [
    "animate-scroll-y-slow",
    "animate-scroll-y-fast",
    "animate-scroll-y-medium",
  ];

  const offsets = ["0px", "80px", "40px"];

  return (
    <section
      className={clsx(
        "relative mx-auto flex w-full max-w-7xl justify-center gap-8",
        className
      )}
    >
      {cols.map((items, idx) => (
        <AnimatedColumn
          key={idx}
          items={items}
          animationClass={animationMap[idx % animationMap.length]}
          staggerOffset={offsets[idx % offsets.length]}
          pauseOnHover={pauseOnHover}
          fadeMask
          randomDelay
        />
      ))}

      {/* Optional background subtle */}
      {/* <div className="pointer-events-none absolute inset-0 -z-10 rounded-[40px] bg-gradient-to-b from-neutral-100 via-neutral-50 to-neutral-100 dark:from-neutral-900 dark:via-neutral-950 dark:to-neutral-900" /> */}
    </section>
  );
}
