const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#stack" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Honors", href: "#honors" },
];

export function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-surface-base/80 backdrop-blur border-b border-border">
      <nav className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <a
          href="#hero"
          className="text-ink-primary font-semibold text-sm tracking-tight hover:text-accent transition-colors"
        >
          Alejandro Granados
        </a>
        <ul className="flex items-center gap-6">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-ink-secondary text-sm hover:text-ink-primary transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
