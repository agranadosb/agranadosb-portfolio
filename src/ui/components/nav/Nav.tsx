import { DesktopNavLinks } from "@/ui/components/nav/DesktopNavLinks";
import { MobileMenuPanel } from "@/ui/components/nav/MobileMenuPanel";
import { MobileMenuToggle } from "@/ui/components/nav/MobileMenuToggle";
import { GitHubLink, LinkedInLink } from "@/ui/components/nav/SocialLinks";
import { ThemeToggle } from "@/ui/components/theme/ThemeToggle";
import { useMobileMenuPresenter } from "@/ui/hooks/useMobileMenuPresenter";
import { useProfilePresenter } from "@/ui/hooks/useProfilePresenter";
import { useThemePresenter } from "@/ui/hooks/useThemePresenter";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#stack" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Honors", href: "#honors" },
];

export function Nav() {
  const { open, menuId, toggle, close } = useMobileMenuPresenter();
  const { theme, toggle: toggleTheme } = useThemePresenter();
  const profile = useProfilePresenter();

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-surface-base/80 backdrop-blur border-b border-border">
      <nav className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <a
          href="#hero"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
        >
          <img src="/icon.webp" alt={profile.name} className="w-6 h-6 rounded-full" />
          <span className="text-ink-primary font-semibold text-sm tracking-tight">
            {profile.name}
          </span>
        </a>

        <DesktopNavLinks links={NAV_LINKS} />

        <div className="hidden md:flex items-center gap-3 ml-4">
          <LinkedInLink url={profile.linkedin.url} />
          <GitHubLink url={profile.github.url} />
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </div>

        <div className="md:hidden flex items-center gap-1">
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
          <MobileMenuToggle open={open} controls={menuId} onToggle={toggle} />
        </div>
      </nav>

      <MobileMenuPanel id={menuId} open={open} links={NAV_LINKS} onNavigate={close} />
    </header>
  );
}
