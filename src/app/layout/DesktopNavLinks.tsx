interface DesktopNavLinksProps {
  links: { label: string; href: string }[];
}

export function DesktopNavLinks({ links }: DesktopNavLinksProps) {
  return (
    <ul className="hidden md:flex items-center gap-6">
      {links.map(({ label, href }) => (
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
  );
}
