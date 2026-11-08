export type Language = "es" | "en";

export const DEFAULT_LANGUAGE: Language = "es";

// Each language's home page: the default one at the root, the others under their code.
export const LANGUAGE_HOME: Record<Language, string> = {
  es: "/",
  en: "/en/",
};

const LANGUAGES = Object.keys(LANGUAGE_HOME) as Language[];

export function languageFromPath(pathname: string): Language {
  const segment = pathname.split("/")[1];
  return LANGUAGES.find((language) => language === segment) ?? DEFAULT_LANGUAGE;
}
