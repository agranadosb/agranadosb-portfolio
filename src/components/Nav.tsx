import { DesktopNavLinks } from "@/components/DesktopNavLinks";
import { MobileMenuPanel } from "@/components/MobileMenuPanel";
import { MobileMenuToggle } from "@/components/MobileMenuToggle";
import { useMobileMenu } from "@/components/useMobileMenu";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#stack" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Honors", href: "#honors" },
];

export function Nav() {
  const { open, menuId, toggle, close } = useMobileMenu();

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-surface-base/80 backdrop-blur border-b border-border">
      <nav className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <a
          href="#hero"
          className="text-ink-primary font-semibold text-sm tracking-tight hover:text-accent transition-colors"
        >
          Alejandro Granados
        </a>

        <DesktopNavLinks links={NAV_LINKS} />

        <MobileMenuToggle open={open} controls={menuId} onToggle={toggle} />
      </nav>

      <MobileMenuPanel id={menuId} open={open} links={NAV_LINKS} onNavigate={close} />
    </header>
  );
}
