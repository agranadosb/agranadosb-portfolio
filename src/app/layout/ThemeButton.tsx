import { useTheme } from "@/lib/theme/useTheme";

interface ThemeButtonProps {
  className?: string;
  withTip: boolean;
  labels: { toLightTheme: string; toDarkTheme: string; changeTheme: string };
}

export function ThemeButton({ className, withTip, labels }: ThemeButtonProps) {
  const { theme, toggleTheme } = useTheme();
  const label =
    theme === null
      ? labels.changeTheme
      : theme === "dark"
        ? labels.toLightTheme
        : labels.toDarkTheme;

  return (
    <button type="button" className={className} onClick={toggleTheme} aria-label={label}>
      <svg
        className="ico theme-icon theme-icon--sun"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2.5v2.5M12 19v2.5M2.5 12H5M19 12h2.5M5.3 5.3l1.8 1.8M16.9 16.9l1.8 1.8M5.3 18.7l1.8-1.8M16.9 7.1l1.8-1.8" />
      </svg>
      <svg
        className="ico theme-icon theme-icon--moon"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5z" />
      </svg>
      {withTip && (
        <span className="tip" aria-hidden="true">
          {label}
        </span>
      )}
    </button>
  );
}
