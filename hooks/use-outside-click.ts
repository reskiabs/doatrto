import * as React from "react";

export function useOutsideClick<T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T | null>,
  onOutsideClick: (event: MouseEvent | TouchEvent) => void
) {
  React.useEffect(() => {
    const handleEvent = (event: MouseEvent | TouchEvent) => {
      const el = ref.current;
      if (!el) return;
      if (el.contains(event.target as Node)) return;
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
