import type { Profile } from "@/api/profile";

export function CVHeader({ profile }: { profile: Profile }) {
  return (
    <header className="mb-4 pb-3 border-b-2 border-gray-800 flex items-center justify-between gap-6">
      <div>
        <h1 className="text-[26px] font-bold tracking-tight text-gray-900 leading-tight">
          {profile.name}
        </h1>
        <p className="text-sm text-gray-600 font-medium mt-0.5 mb-2">{profile.title}</p>
        <div className="flex flex-wrap gap-x-3 gap-y-0.5 text-xs text-gray-500">
          <span>{profile.location}</span>
          <span>·</span>
          <a href={`mailto:${profile.email}`} className="hover:text-blue-600">
            {profile.email}
          </a>
          <span>·</span>
          <a
            href={profile.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            {profile.linkedin.display}
          </a>
          <span>·</span>
          <a
            href={profile.github.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            {profile.github.display}
          </a>
        </div>
      </div>
      <img
        src="/me.webp"
        alt={profile.name}
        width={80}
        height={80}
        decoding="async"
        className="rounded-full shrink-0 object-cover border border-gray-200"
      />
    </header>
  );
}
