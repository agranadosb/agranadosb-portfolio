interface NetworkIconProps {
  network: "linkedin" | "github";
  size: number;
}

export function NetworkIcon({ network, size }: NetworkIconProps) {
  return (
    <svg className="ico" width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      {network === "linkedin" ? (
        <>
          <rect x="3" y="5" width="18" height="14" />
          <circle cx="9" cy="10.5" r="2.2" />
          <path d="M5.5 16.5c.8-1.9 2-2.8 3.5-2.8s2.7.9 3.5 2.8" />
          <path d="M15 10h3.5M15 13.5h3.5" />
        </>
      ) : (
        <path d="M8 7l-5 5 5 5M16 7l5 5-5 5M13.5 4.5l-3 15" />
      )}
    </svg>
  );
}
