interface AvatarProps {
  src?: string;
}

export function Avatar({ src }: AvatarProps) {
  return (
    <div className="w-44 h-44 rounded-full p-0.75 bg-linear-to-br from-accent to-accent/10 shrink-0">
      <div className="w-full h-full rounded-full overflow-hidden bg-surface-raised flex items-center justify-center">
        {src ? (
          <img
            src={src}
            alt="Alejandro Granados"
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
            width={320}
            height={320}
          />
        ) : (
          <span className="text-4xl font-bold text-ink-secondary select-none">AG</span>
        )}
      </div>
    </div>
  );
}
