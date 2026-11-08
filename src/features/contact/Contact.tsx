import { NetworkIcon } from "@/components/NetworkIcon";
import { SectionHeader } from "@/components/SectionHeader";
import { EmailCard } from "@/features/contact/components/EmailCard";
import { useContact } from "@/features/contact/useContact";
import "@/features/contact/Contact.css";

export function Contact() {
  const { profile, strings } = useContact();

  return (
    <section id="contacto" className="section" aria-labelledby="contacto-title">
      <SectionHeader
        code="A-04"
        eyebrow={strings.eyebrow}
        title={strings.title}
        titleId="contacto-title"
      />
      <div className="contact">
        <EmailCard email={profile.email} label={strings.email} pendingText={strings.emailPending} />
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="contact__card"
        >
          <span className="contact__label">{strings.professionalNetwork}</span>
          <span className="contact__link">
            <NetworkIcon network="linkedin" size={26} />
            {strings.linkedin} ↗
          </span>
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="contact__card"
        >
          <span className="contact__label">{strings.code}</span>
          <span className="contact__link">
            <NetworkIcon network="github" size={26} />
            {strings.github} ↗
          </span>
        </a>
      </div>
      <p className="contact__credits">{strings.credits}</p>
    </section>
  );
}
