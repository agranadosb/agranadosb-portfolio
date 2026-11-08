import { getProfileContent } from "@/api/profile";
import { CV } from "@/config/site";
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
    cv: string;
    cvLink: string;
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
    cv: "Currículum",
    cvLink: "CV · PDF",
    credits: "Diseñado y construido por Alejandro Granados · Valencia",
  },
  en: {
    eyebrow: "Links and documents",
    title: "Contact",
    email: "Email",
    emailPending: "[YOUR CONTACT EMAIL]",
    professionalNetwork: "Professional network",
    code: "Code",
    linkedin: "LinkedIn",
    github: "GitHub",
    cv: "Curriculum vitae",
    cvLink: "CV · PDF",
    credits: "Designed and built by Alejandro Granados · Valencia",
  },
};

export function useContact() {
  const { language } = useLanguage();
  return {
    profile: getProfileContent(language).profile,
    cv: { href: `/${CV[language].path}`, fileName: CV[language].fileName },
    strings: STRINGS[language],
  };
}
