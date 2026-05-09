import type { Stat as StatData } from "@/domain/profile/About";

export function Stat({ label, value }: StatData) {
  return (
    <div className="text-center p-4 rounded-lg bg-surface-overlay border border-border">
      <p className="text-ink-primary font-semibold">{value}</p>
      <p className="text-ink-muted text-sm mt-1">{label}</p>
    </div>
  );
}
