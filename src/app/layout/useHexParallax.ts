import type { RefObject } from "react";
import { useEffect } from "react";

const PARALLAX_FACTOR = 0.3;

export function useHexParallax(target: RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(() => {
        ticking = false;
        target.current?.style.setProperty("--hexY", `${-window.scrollY * PARALLAX_FACTOR}px`);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [target]);
}
