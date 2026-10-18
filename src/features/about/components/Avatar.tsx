interface AvatarProps {
  src: string;
  alt: string;
}

export function Avatar({ src, alt }: AvatarProps) {
  return (
    <div className="w-44 h-44 rounded-full p-0.75 bg-linear-to-br from-accent to-accent/10 shrink-0">
      <div className="w-full h-full rounded-full overflow-hidden bg-surface-raised flex items-center justify-center">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
          width={320}
          height={320}
        />
      </div>
    </div>
  );
}
