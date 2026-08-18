"use client";

import { useState } from "react";

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "currentColor",
  className: "h-4 w-4",
};

const icons = {
  x: (
    <svg {...iconProps} aria-hidden="true">
      <path d="M18.24 2.75h3.03l-6.62 7.57 7.79 10.93h-6.1l-4.78-6.55-5.47 6.55H2.06l7.08-8.24L1.66 2.75h6.26l4.32 5.99 5.99-5.99Zm-1.06 16.66h1.68L7.9 4.49H6.09l11.09 14.92Z" />
    </svg>
  ),
  facebook: (
    <svg {...iconProps} aria-hidden="true">
      <path d="M13.5 21v-8.1h2.72l.41-3.16h-3.13V7.75c0-.91.25-1.53 1.56-1.53h1.66V3.4C15.94 3.34 14.9 3.25 13.7 3.25c-2.47 0-4.16 1.51-4.16 4.28v2.31H6.8v3.16h2.74V21h3.96Z" />
    </svg>
  ),
  linkedin: (
    <svg {...iconProps} aria-hidden="true">
      <path d="M6.94 8.5H3.56V21h3.38V8.5ZM5.25 3a1.96 1.96 0 1 0 0 3.91 1.96 1.96 0 0 0 0-3.91ZM20.4 21h.02v-6.63c0-3.24-.7-5.74-4.49-5.74-1.82 0-3.04.99-3.54 1.94h-.05V8.5h-3.24V21h3.38v-6.19c0-1.63.31-3.21 2.33-3.21 1.99 0 2.02 1.86 2.02 3.31V21h3.57Z" />
    </svg>
  ),
  whatsapp: (
    <svg {...iconProps} aria-hidden="true">
      <path d="M17.47 14.38c-.28-.14-1.67-.82-1.93-.92-.26-.09-.45-.14-.64.14-.19.28-.73.92-.9 1.11-.16.19-.33.21-.61.07-.28-.14-1.18-.44-2.24-1.39-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.5.14-.16.19-.28.28-.47.09-.19.05-.35-.02-.5-.07-.14-.64-1.55-.88-2.13-.23-.55-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.35-.26.28-1 .98-1 2.4s1.02 2.78 1.16 2.97c.14.19 2 3.06 4.86 4.29.68.29 1.21.47 1.62.6.68.22 1.3.19 1.79.11.55-.08 1.67-.68 1.9-1.34.24-.66.24-1.22.16-1.34-.07-.12-.26-.19-.54-.33Z" />
      <path d="M12.02 2C6.5 2 2 6.48 2 12c0 1.85.5 3.58 1.36 5.07L2 22l5.06-1.33A9.96 9.96 0 0 0 12.02 22C17.53 22 22 17.52 22 12S17.53 2 12.02 2Zm0 18.1a8.07 8.07 0 0 1-4.13-1.13l-.3-.18-3 .79.8-2.92-.19-.3A8.09 8.09 0 1 1 20.1 12a8.1 8.1 0 0 1-8.08 8.1Z" />
    </svg>
  ),
  instagram: (
    <svg {...iconProps} aria-hidden="true">
      <path d="M12 2.2c2.7 0 3 .01 4.12.06 1.11.05 1.87.23 2.53.48.68.27 1.26.62 1.83 1.19.57.57.92 1.15 1.19 1.83.25.66.43 1.42.48 2.53.05 1.12.06 1.42.06 4.12 0 2.7-.01 3-.06 4.12-.05 1.11-.23 1.87-.48 2.53a5.1 5.1 0 0 1-1.19 1.83 5.1 5.1 0 0 1-1.83 1.19c-.66.25-1.42.43-2.53.48-1.12.05-1.42.06-4.12.06-2.7 0-3-.01-4.12-.06-1.11-.05-1.87-.23-2.53-.48a5.1 5.1 0 0 1-1.83-1.19 5.1 5.1 0 0 1-1.19-1.83c-.25-.66-.43-1.42-.48-2.53C2.21 15 2.2 14.7 2.2 12c0-2.7.01-3 .06-4.12.05-1.11.23-1.87.48-2.53.27-.68.62-1.26 1.19-1.83A5.1 5.1 0 0 1 5.76 2.33c.66-.25 1.42-.43 2.53-.48C9.41 1.8 9.7 1.8 12 1.8Zm0 1.8c-2.67 0-2.94.01-3.98.06-.9.04-1.4.19-1.72.32-.43.17-.74.37-1.07.7-.33.33-.53.64-.7 1.07-.13.32-.28.82-.32 1.72-.05 1.04-.06 1.3-.06 3.98s.01 2.94.06 3.98c.04.9.19 1.4.32 1.72.17.43.37.74.7 1.07.33.33.64.53 1.07.7.32.13.82.28 1.72.32 1.04.05 1.3.06 3.98.06s2.94-.01 3.98-.06c.9-.04 1.4-.19 1.72-.32.43-.17.74-.37 1.07-.7.33-.33.53-.64.7-1.07.13-.32.28-.82.32-1.72.05-1.04.06-1.3.06-3.98s-.01-2.94-.06-3.98c-.04-.9-.19-1.4-.32-1.72a2.87 2.87 0 0 0-.7-1.07 2.87 2.87 0 0 0-1.07-.7c-.32-.13-.82-.28-1.72-.32-1.04-.05-1.3-.06-3.98-.06Zm0 4.1a3.9 3.9 0 1 1 0 7.8 3.9 3.9 0 0 1 0-7.8Zm0 1.8a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2Zm4.96-1.98a.91.91 0 1 1-1.82 0 .91.91 0 0 1 1.82 0Z" />
    </svg>
  ),
  link: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
      <path d="M10 13a5 5 0 0 0 7.54.54l2-2a5 5 0 0 0-7.07-7.07l-1.12 1.11" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-2 2a5 5 0 0 0 7.07 7.07l1.11-1.12" />
    </svg>
  ),
};

export default function ShareBar({ url, title }) {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const links = [
    {
      key: "x",
      label: "Share on X",
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    },
    {
      key: "facebook",
      label: "Share on Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
    {
      key: "linkedin",
      label: "Share on LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
    {
      key: "whatsapp",
      label: "Share on WhatsApp",
      href: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
    },
  ];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  const handleInstagram = async () => {
    // Instagram has no public web share intent, so copy the link
    // and send the user to Instagram to paste it themselves.
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    } finally {
      window.open("https://instagram.com", "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      {links.map((item) => (
        <a
          key={item.key}
          className="grid h-9 w-9 place-items-center rounded-full border border-rule text-ink transition-colors hover:border-blue hover:bg-blue hover:text-white"
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={item.label}
          title={item.label}
        >
          {icons[item.key]}
        </a>
      ))}
      <button
        type="button"
        className="grid h-9 w-9 place-items-center rounded-full border border-rule text-ink transition-colors hover:border-blue hover:bg-blue hover:text-white"
        onClick={handleInstagram}
        aria-label="Share on Instagram"
        title="Share on Instagram"
      >
        {icons.instagram}
      </button>
      <button
        type="button"
        className="grid h-9 w-9 place-items-center rounded-full border border-rule text-ink transition-colors hover:border-blue hover:bg-blue hover:text-white"
        onClick={handleCopy}
        aria-label="Copy link"
        title="Copy link"
      >
        {icons.link}
      </button>
      {copied ? (
        <span className="text-[0.68rem] font-bold uppercase tracking-[0.06em] text-blue">Link copied</span>
      ) : null}
    </div>
  );
}
