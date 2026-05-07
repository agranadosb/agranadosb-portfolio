interface MobileMenuToggleProps {
  open: boolean;
  controls: string;
  onToggle: () => void;
}

export function MobileMenuToggle({ open, controls, onToggle }: MobileMenuToggleProps) {
  return (
    <button
      type="button"
      aria-expanded={open}
      aria-controls={controls}
      aria-label={open ? "Close menu" : "Open menu"}
      onClick={onToggle}
      className="md:hidden inline-flex items-center justify-center w-9 h-9 -mr-2 text-ink-primary hover:text-accent transition-colors cursor-pointer"
    >
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
        {open ? (
          <>
            <line x1="6" y1="6" x2="18" y2="18" />
            <line x1="6" y1="18" x2="18" y2="6" />
          </>
        ) : (
          <>
            <line x1="4" y1="7" x2="20" y2="7" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="17" x2="20" y2="17" />
          </>
        )}
      </svg>
    </button>
  );
}
