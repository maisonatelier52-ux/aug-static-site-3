import Image from "next/image";
import Link from "next/link";

const socialIcons = {
  x: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M18.24 2.75h3.03l-6.62 7.57 7.79 10.93h-6.1l-4.78-6.55-5.47 6.55H2.06l7.08-8.24L1.66 2.75h6.26l4.32 5.99 5.99-5.99Zm-1.06 16.66h1.68L7.9 4.49H6.09l11.09 14.92Z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M12 2.2c2.7 0 3 .01 4.12.06 1.11.05 1.87.23 2.53.48.68.27 1.26.62 1.83 1.19.57.57.92 1.15 1.19 1.83.25.66.43 1.42.48 2.53.05 1.12.06 1.42.06 4.12 0 2.7-.01 3-.06 4.12-.05 1.11-.23 1.87-.48 2.53a5.1 5.1 0 0 1-1.19 1.83 5.1 5.1 0 0 1-1.83 1.19c-.66.25-1.42.43-2.53.48-1.12.05-1.42.06-4.12.06-2.7 0-3-.01-4.12-.06-1.11-.05-1.87-.23-2.53-.48a5.1 5.1 0 0 1-1.83-1.19 5.1 5.1 0 0 1-1.19-1.83c-.25-.66-.43-1.42-.48-2.53C2.21 15 2.2 14.7 2.2 12c0-2.7.01-3 .06-4.12.05-1.11.23-1.87.48-2.53.27-.68.62-1.26 1.19-1.83A5.1 5.1 0 0 1 5.76 2.33c.66-.25 1.42-.43 2.53-.48C9.41 1.8 9.7 1.8 12 1.8Zm0 1.8c-2.67 0-2.94.01-3.98.06-.9.04-1.4.19-1.72.32-.43.17-.74.37-1.07.7-.33.33-.53.64-.7 1.07-.13.32-.28.82-.32 1.72-.05 1.04-.06 1.3-.06 3.98s.01 2.94.06 3.98c.04.9.19 1.4.32 1.72.17.43.37.74.7 1.07.33.33.64.53 1.07.7.32.13.82.28 1.72.32 1.04.05 1.3.06 3.98.06s2.94-.01 3.98-.06c.9-.04 1.4-.19 1.72-.32.43-.17.74-.37 1.07-.7.33-.33.53-.64.7-1.07.13-.32.28-.82.32-1.72.05-1.04.06-1.3.06-3.98s-.01-2.94-.06-3.98c-.04-.9-.19-1.4-.32-1.72a2.87 2.87 0 0 0-.7-1.07 2.87 2.87 0 0 0-1.07-.7c-.32-.13-.82-.28-1.72-.32-1.04-.05-1.3-.06-3.98-.06Zm0 4.1a3.9 3.9 0 1 1 0 7.8 3.9 3.9 0 0 1 0-7.8Zm0 1.8a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2Zm4.96-1.98a.91.91 0 1 1-1.82 0 .91.91 0 0 1 1.82 0Z" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M13.5 21v-8.1h2.72l.41-3.16h-3.13V7.75c0-.91.25-1.53 1.56-1.53h1.66V3.4C15.94 3.34 14.9 3.25 13.7 3.25c-2.47 0-4.16 1.51-4.16 4.28v2.31H6.8v3.16h2.74V21h3.96Z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M6.94 8.5H3.56V21h3.38V8.5ZM5.25 3a1.96 1.96 0 1 0 0 3.91 1.96 1.96 0 0 0 0-3.91ZM20.4 21h.02v-6.63c0-3.24-.7-5.74-4.49-5.74-1.82 0-3.04.99-3.54 1.94h-.05V8.5h-3.24V21h3.38v-6.19c0-1.63.31-3.21 2.33-3.21 1.99 0 2.02 1.86 2.02 3.31V21h3.57Z" />
    </svg>
  ),
};

const socialLabels = {
  x: "X (Twitter)",
  instagram: "Instagram",
  facebook: "Facebook",
  linkedin: "LinkedIn",
};

export default function AuthorBio({ author }) {
  if (!author) return null;

  const social = author.social || {};
  const socialEntries = Object.entries(social).filter(([, href]) => Boolean(href));

  return (
    <div className="flex items-start gap-5 border border-rule bg-paper p-6 max-[580px]:flex-col max-[580px]:items-center max-[580px]:text-center max-[580px]:p-5">
      <span className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full [&_img]:object-cover">
        <Image src={author.image} alt={author.name} fill sizes="80px" />
      </span>
      <div className="min-w-0">
        <span className="text-[0.6rem] font-black tracking-[0.12em] text-blue uppercase">About the author</span>
        <h3 className="mt-1 mb-0 font-serif text-[1.5rem] leading-[1.05] tracking-[-0.02em]">
          <Link className="hover:text-blue" href={`/author/${author.slug}/`}>{author.name}</Link>
        </h3>
        <p className="mt-1 mb-3 text-[0.68rem] font-bold uppercase tracking-[0.06em] text-muted">{author.role}</p>
        <p className="mb-4 max-w-[560px] font-serif text-[0.98rem] leading-[1.55] text-[#50545c]">{author.bio}</p>
        {socialEntries.length ? (
          <div className="flex flex-wrap items-center gap-2 max-[580px]:justify-center">
            {socialEntries.map(([key, href]) => (
              <a
                key={key}
                className="grid h-8 w-8 place-items-center rounded-full border border-rule text-ink transition-colors hover:border-blue hover:bg-blue hover:text-white"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${author.name} on ${socialLabels[key] || key}`}
                title={socialLabels[key] || key}
              >
                {socialIcons[key] || null}
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
