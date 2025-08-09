"use client";
import { useEffect, useRef } from "react";

export function useMobileScrollOffset(offsetRatio: number = 0.35) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.innerWidth < 768 && scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const offset = container.scrollWidth * offsetRatio;
      container.scrollLeft = offset;
    }
  }, [offsetRatio]);

  return scrollContainerRef;
}
