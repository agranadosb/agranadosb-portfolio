interface BioProps {
  paragraphs: string[];
}

export function Bio({ paragraphs }: BioProps) {
  return (
    <div className="space-y-4">
      {paragraphs.map((paragraph) => (
        <p key={paragraph} className="text-ink-secondary leading-relaxed text-lg">
          {paragraph}
        </p>
      ))}
    </div>
  );
}
