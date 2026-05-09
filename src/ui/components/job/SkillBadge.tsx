export function SkillBadge({ label }: { label: string }) {
  return (
    <span className="px-2 py-1 rounded text-xs bg-surface-overlay border border-border text-ink-secondary">
      {label}
    </span>
  );
}
