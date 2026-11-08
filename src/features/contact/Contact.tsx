import { NetworkIcon } from "@/components/NetworkIcon";
import { SectionHeader } from "@/components/SectionHeader";
import { EmailCard } from "@/features/contact/components/EmailCard";
import { useContact } from "@/features/contact/useContact";
import "@/features/contact/Contact.css";

export function Contact() {
  const { profile, cv, strings } = useContact();

  return (
    <section id="contacto" className="section" aria-labelledby="contacto-title">
      <SectionHeader
        number="04"
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
        <a href={cv.href} download={cv.fileName} className="contact__card">
          <span className="contact__label">{strings.cv}</span>
          <span className="contact__link">
            <svg className="ico" width="26" height="26" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 3h8l4 4v14H6z" />
              <path d="M14 3v4h4M9 12h6M9 16h6" />
            </svg>
            {strings.cvLink} ↓
          </span>
        </a>
      </div>
      <p className="contact__credits">{strings.credits}</p>
    </section>
  );
}
