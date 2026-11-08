import type { ReactNode } from "react";

export function CVSectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-[10px] font-bold uppercase tracking-widest text-blue-600 mb-1.5 pb-0.5 border-b border-gray-200">
      {children}
    </h2>
  );
}
