interface EmailCardProps {
  email: string | null;
  label: string;
  pendingText: string;
}

export function EmailCard({ email, label, pendingText }: EmailCardProps) {
  if (email === null) {
    return (
      <div className="contact__card contact__card--email">
        <span className="contact__label">{label}</span>
        <span className="contact__email ph">{pendingText}</span>
      </div>
    );
  }

  return (
    <a href={`mailto:${email}`} className="contact__card contact__card--email">
      <span className="contact__label">{label}</span>
      <span className="contact__email">{email}</span>
    </a>
  );
}
