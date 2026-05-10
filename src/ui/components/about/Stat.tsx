import type { Stat as StatData } from "@/domain/profile/About";

export function Stat({ label, value }: StatData) {
  return (
    <div className="text-center p-5 rounded-xl bg-surface-overlay border border-border">
      <p className="text-lg font-bold text-ink-primary mb-1 leading-snug">{value}</p>
      <p className="text-ink-muted text-xs uppercase tracking-widest mt-2">{label}</p>
    </div>
  );
}
