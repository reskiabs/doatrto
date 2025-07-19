"use client";

import { Testimonial } from "@/data/testimonials-data";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { VerticalCard } from "./VerticalCard";

interface AnimatedColumnProps {
  items: Testimonial[];
  animationClass: string;
  staggerOffset?: string;
  pauseOnHover?: boolean;
  fadeMask?: boolean;
  randomDelay?: boolean;
}

export function AnimatedColumn({
  items,
  animationClass,
  staggerOffset,
  pauseOnHover,
  fadeMask,
  randomDelay,
}: AnimatedColumnProps) {
  const doubled = [...items, ...items];

  const [delay, setDelay] = useState<string | undefined>();

  useEffect(() => {
    if (randomDelay) {
      setDelay(`-${Math.random() * 50}s`);
    }
  }, [randomDelay]);

  return (
    <div
      className={clsx(
        "relative h-[1250px] w-[360px] overflow-hidden",
        fadeMask && "mask-fade-y",
        pauseOnHover && "group"
      )}
      style={staggerOffset ? { marginTop: staggerOffset } : undefined}
    >
      <div
        className={clsx(
          "flex flex-col gap-6 will-change-transform",
          animationClass,
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
        style={delay ? { animationDelay: delay } : undefined}
      >
        {doubled.map((item, i) => {
          const duplicated = i >= items.length;
          return (
            <div
              key={`${item.id}-${i}`}
              aria-hidden={duplicated ? "true" : undefined}
            >
              <VerticalCard item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
