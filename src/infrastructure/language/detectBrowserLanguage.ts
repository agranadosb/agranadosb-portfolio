import type { Language } from "@/domain/language/Language";

export function detectBrowserLanguage(): Language {
  try {
    return navigator.language.toLowerCase().startsWith("es") ? "es" : "en";
  } catch {
    return "en";
  }
}
