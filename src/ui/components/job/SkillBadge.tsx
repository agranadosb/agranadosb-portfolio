export function SkillBadge({ label }: { label: string }) {
  return (
    <span className="px-2.5 py-0.5 rounded-full text-xs bg-surface-overlay border border-border text-ink-secondary">
      {label}
    </span>
  );
}
