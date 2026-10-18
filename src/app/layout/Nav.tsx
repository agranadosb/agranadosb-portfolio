import { DesktopNavLinks } from "@/app/layout/DesktopNavLinks";
import { LanguageToggle } from "@/app/layout/LanguageToggle";
import { MobileMenuPanel } from "@/app/layout/MobileMenuPanel";
import { MobileMenuToggle } from "@/app/layout/MobileMenuToggle";
import { ThemeToggle } from "@/app/layout/ThemeToggle";
import { useMobileMenu } from "@/app/layout/useMobileMenu";
import { useNav } from "@/app/layout/useNav";
import { SocialLink } from "@/components/SocialLink";
import { useTheme } from "@/lib/theme/useTheme";

export function Nav() {
  const { open, menuId, toggle, close } = useMobileMenu();
  const { theme, toggleTheme } = useTheme();
  const { profile, links, strings, toggleLanguage } = useNav();

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-surface-base/80 backdrop-blur border-b border-border">
      <nav className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <img src="/icon.webp" alt={profile.name} className="w-6 h-6 rounded-full" />
          <span className="text-ink-primary font-semibold text-sm tracking-tight">
            {profile.name}
          </span>
        </a>

        <DesktopNavLinks links={links} />

        <div className="hidden md:flex items-center gap-3 ml-4">
          <SocialLink network="linkedin" url={profile.linkedin.url} />
          <SocialLink network="github" url={profile.github.url} />
          <LanguageToggle
            switchTo={strings.switchLanguageTo}
            ariaLabel={strings.switchLanguageLabel}
            onToggle={toggleLanguage}
          />
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </div>

        <div className="md:hidden flex items-center gap-1">
          <LanguageToggle
            switchTo={strings.switchLanguageTo}
            ariaLabel={strings.switchLanguageLabel}
            onToggle={toggleLanguage}
          />
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
          <MobileMenuToggle open={open} controls={menuId} onToggle={toggle} />
        </div>
      </nav>

      <MobileMenuPanel id={menuId} open={open} links={links} onNavigate={close} />
    </header>
  );
}
