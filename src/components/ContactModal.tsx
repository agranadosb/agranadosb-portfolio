interface ContactModalProps {
  onClose: () => void;
}

export function ContactModal({ onClose }: ContactModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      <button
        type="button"
        className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-default"
        onClick={onClose}
        aria-label="Close modal"
      />

      <div className="relative z-10 w-full max-w-sm bg-surface-raised border border-border rounded-2xl p-8 shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-ink-muted hover:text-ink-primary transition-colors cursor-pointer"
          aria-label="Close"
        >
          <CloseIcon />
        </button>

        <h2 className="text-xl font-bold text-ink-primary mb-1">Get in touch</h2>
        <p className="text-ink-secondary text-sm mb-6">
          Feel free to reach out — I'll get back to you as soon as I can.
        </p>

        <a
          href="mailto:agranadosb55199@outlook.com"
          className="flex items-center gap-3 w-full px-4 py-3 rounded-lg bg-surface-overlay border border-border hover:border-accent hover:text-accent text-ink-secondary transition-colors"
        >
          <MailIcon />
          <span className="text-sm font-medium">agranadosb55199@outlook.com</span>
        </a>
      </div>
    </div>
  );
}

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
