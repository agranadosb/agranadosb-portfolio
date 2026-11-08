import type { ReactNode } from "react";
import { createContext, useContext, useState } from "react";
import type { Language } from "@/lib/i18n/Language";

const STORAGE_KEY = "language";
const WARN_MESSAGE = "Unable to access localStorage, language preference will not be saved.";

interface LanguageContextValue {
  language: Language;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(
    () => readStoredLanguage() ?? detectBrowserLanguage(),
  );

  function toggleLanguage() {
    const next = language === "en" ? "es" : "en";
    storeLanguage(next);
    setLanguage(next);
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (ctx === null) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

function readStoredLanguage(): Language | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "es") return stored;
    return null;
  } catch {
    console.warn(WARN_MESSAGE);
    return null;
  }
}

function storeLanguage(language: Language): void {
  try {
    localStorage.setItem(STORAGE_KEY, language);
  } catch {
    console.warn(WARN_MESSAGE);
  }
}

function detectBrowserLanguage(): Language {
  try {
    return navigator.language.toLowerCase().startsWith("es") ? "es" : "en";
  } catch {
    return "en";
  }
}
