import type { ReactNode } from "react";
import { useRef, useState } from "react";
import { Rail } from "@/app/layout/Rail";
import { useHexParallax } from "@/app/layout/useHexParallax";
import "@/app/layout/PageShell.css";

export function PageShell({ children }: { children: ReactNode }) {
  const shell = useRef<HTMLDivElement>(null);
  const [navOpen, setNavOpen] = useState(true);
  useHexParallax(shell);

  return (
    <div ref={shell} className={navOpen ? "hexbg with-rail" : "hexbg"}>
      <Rail open={navOpen} onToggle={() => setNavOpen((open) => !open)} />
      {children}
    </div>
  );
}
