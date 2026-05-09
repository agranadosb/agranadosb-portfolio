interface AvatarProps {
  src?: string;
}

export function Avatar({ src }: AvatarProps) {
  return (
    <div className="w-40 h-40 rounded-full overflow-hidden bg-surface-overlay border-2 border-border flex items-center justify-center shrink-0">
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
  );
}
