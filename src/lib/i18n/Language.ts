export type Language = "en" | "es";

export const DEFAULT_LANGUAGE: Language = "en";

// Each language's home page: the default one at the root, the others under their code.
export const LANGUAGE_HOME: Record<Language, string> = {
  en: "/",
  es: "/es/",
};

const LANGUAGES = Object.keys(LANGUAGE_HOME) as Language[];

export function languageFromPath(pathname: string): Language {
  const segment = pathname.split("/")[1];
  return LANGUAGES.find((language) => language === segment) ?? DEFAULT_LANGUAGE;
}
