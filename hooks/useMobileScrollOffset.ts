"use client";
import { useEffect, useRef } from "react";

export function useMobileScrollOffset<T extends ReadonlyArray<unknown>>(
  offsetRatio: number = 0.35,
  deps: T = [] as unknown as T
) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.innerWidth < 768 && scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const offset = container.scrollWidth * offsetRatio;

      container.scrollTo({
        left: offset,
        behavior: "smooth",
      });
    }
  }, [offsetRatio, ...deps]);

  return scrollContainerRef;
}
