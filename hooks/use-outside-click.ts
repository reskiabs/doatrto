import * as React from "react";

type OutsideClickHandler = (event: MouseEvent | TouchEvent) => void;

export function useOutsideClick<T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T>,
  onOutsideClick: OutsideClickHandler
) {
  React.useEffect(() => {
    const handleEvent = (event: MouseEvent | TouchEvent) => {
      const el = ref.current;
      if (!el) return;
      if (el.contains(event.target as Node)) return; // clicked inside
      onOutsideClick(event);
    };

    document.addEventListener("mousedown", handleEvent);
    document.addEventListener("touchstart", handleEvent);

    return () => {
      document.removeEventListener("mousedown", handleEvent);
      document.removeEventListener("touchstart", handleEvent);
    };
  }, [ref, onOutsideClick]);
}
