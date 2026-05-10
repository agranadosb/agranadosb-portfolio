interface LanguageToggleProps {
  switchTo: string;
  ariaLabel: string;
  onToggle: () => void;
}

export function LanguageToggle({ switchTo, ariaLabel, onToggle }: LanguageToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={ariaLabel}
      className="inline-flex items-center justify-center w-9 h-9 text-ink-muted hover:text-ink-primary transition-colors cursor-pointer"
    >
      <span className="relative inline-flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
        <span className="absolute -bottom-0.75 -right-1 text-[8px] font-bold leading-none bg-surface-base text-accent px-0.5 rounded-sm">
          {switchTo}
        </span>
      </span>
    </button>
  );
}
