"use client";

import LoaderContent from "@/components/common/LoaderContent";
import SomethingWentWrong from "@/components/common/SomethingWentWrong";
import { useTestimonials } from "@/hooks/useTestimonials";
import { splitIntoColumns } from "@/lib/split-into-columns";
import clsx from "clsx";
import { useEffect, useState } from "react";
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
  const { testimonials, loading, error } = useTestimonials();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const cols = splitIntoColumns(testimonials, isMobile ? 1 : columns);

  const animationMap = isMobile
    ? ["animate-scroll-y-slow"]
    : [
        "animate-scroll-y-slow",
        "animate-scroll-y-fast",
        "animate-scroll-y-medium",
      ];

  const offsets = ["0px"];

  if (loading) return <LoaderContent />;
  if (error) return <SomethingWentWrong />;

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
    </section>
  );
}
