import { getProfileContent } from "@/api/profile";
import type { Language } from "@/lib/i18n/Language";
import { useLanguage } from "@/lib/i18n/useLanguage";

const STRINGS: Record<
  Language,
  {
    eyebrow: string;
    title: string;
    email: string;
    emailPending: string;
    professionalNetwork: string;
    code: string;
    linkedin: string;
    github: string;
    credits: string;
  }
> = {
  es: {
    eyebrow: "Enlaces y documentos",
    title: "Contacto",
    email: "Correo",
    emailPending: "[TU EMAIL DE CONTACTO]",
    professionalNetwork: "Red profesional",
    code: "Código",
    linkedin: "LinkedIn",
    github: "GitHub",
    credits: "Diseñado y construido por Alejandro Granados · Valencia",
  },
};

export function useContact() {
  const { language } = useLanguage();
  return { profile: getProfileContent(language).profile, strings: STRINGS[language] };
}
