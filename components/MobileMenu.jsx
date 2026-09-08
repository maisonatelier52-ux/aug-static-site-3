"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function MobileMenu({ categories }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[3px] text-ink hover:bg-ink/10 min-[821px]:hidden"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      {open && (
        <div className="fixed inset-0 z-[500] flex h-screen w-screen flex-col bg-navy text-white min-[821px]:hidden">
          <div className="flex min-h-[74px] shrink-0 items-center justify-between border-b border-white/20 px-4">
            <span className="text-[0.8rem] font-extrabold uppercase tracking-[0.2em] text-red">Menu</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="flex h-9 w-9 items-center justify-center rounded-[3px] hover:bg-white/10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          <div className="flex flex-1 flex-col overflow-y-auto px-4 py-2">
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="border-b border-white/15 py-5 text-[1.05rem] font-extrabold uppercase tracking-wide"
            >
              Home
            </Link>
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/${category.slug}/`}
                onClick={() => setOpen(false)}
                className="border-b border-white/15 py-5"
              >
                <span className="block text-[1.05rem] font-extrabold uppercase tracking-wide">
                  {category.name}
                </span>
                {category.description && (
                  <span className="mt-1 block text-[0.72rem] font-normal normal-case leading-snug tracking-normal text-white/60">
                    {category.description}
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}