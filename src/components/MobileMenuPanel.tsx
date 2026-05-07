interface MobileMenuPanelProps {
  id: string;
  open: boolean;
  links: { label: string; href: string }[];
  onNavigate: () => void;
}

export function MobileMenuPanel({ id, open, links, onNavigate }: MobileMenuPanelProps) {
  return (
    <div
      id={id}
      className={`md:hidden border-t border-border bg-surface-base/95 backdrop-blur overflow-hidden transition-[max-height] duration-200 ease-out ${
        open ? "max-h-96" : "max-h-0"
      }`}
    >
      <ul className="px-6 py-2 flex flex-col">
        {links.map(({ label, href }) => (
          <li key={href}>
            <a
              href={href}
              onClick={onNavigate}
              className="block py-3 text-ink-secondary text-sm hover:text-ink-primary transition-colors"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
