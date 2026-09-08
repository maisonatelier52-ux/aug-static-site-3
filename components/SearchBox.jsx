"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { searchArticles } from "@/lib/search";

export default function SearchBox() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dropdownStyle, setDropdownStyle] = useState({});
  const boxRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setOpen(false);
      return;
    }

    setLoading(true);
    const timer = setTimeout(() => {
      try {
        setResults(searchArticles(query));
      } catch {
        setResults([]);
      } finally {
        setLoading(false);
        setOpen(true);
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [query]);

  useEffect(() => {
    function handleClick(e) {
      if (boxRef.current && !boxRef.current.contains(e.target)) {
        setOpen(false);
        if (!query) setExpanded(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [query]);

  useEffect(() => {
    function updatePosition() {
      if (!boxRef.current) return;
      const rect = boxRef.current.getBoundingClientRect();
      const isMobile = window.innerWidth <= 820;

      if (isMobile) {
        setDropdownStyle({
          position: "fixed",
          top: rect.bottom + 8,
          left: 12,
          right: 12,
          width: "auto",
        });
      } else {
        setDropdownStyle({
          position: "fixed",
          top: rect.bottom + 8,
          right: Math.max(12, window.innerWidth - rect.right),
          left: "auto",
          width: 340,
        });
      }
    }

    if (open) {
      updatePosition();
      window.addEventListener("resize", updatePosition);
      window.addEventListener("scroll", updatePosition, true);
    }

    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [open]);

  function handleIconClick() {
    setExpanded(true);
    setTimeout(() => inputRef.current?.focus(), 50);
  }

  return (
    <div ref={boxRef} className="relative flex items-center normal-case">
      <button
        type="button"
        onClick={handleIconClick}
        aria-label="Open search"
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-[3px] text-ink transition-colors hover:bg-ink/10 ${expanded ? "hidden" : "flex"}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="7" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </button>

      <div
        className={`flex items-center gap-1.5 rounded-[3px] border border-ink/30 bg-ink/5 pl-2.5 transition-all ${
          expanded
            ? "w-[150px] opacity-100 min-[821px]:w-[200px]"
            : "w-0 overflow-hidden border-transparent opacity-0"
        }`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-ink/60">
          <circle cx="11" cy="11" r="7" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          ref={inputRef}
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query && setOpen(true)}
          placeholder="Search…"
          aria-label="Search articles"
          className="w-full bg-transparent py-1.5 pr-2 text-[0.72rem] text-ink normal-case placeholder:text-ink/50 focus:outline-none"
        />
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setResults([]);
              setOpen(false);
            }}
            aria-label="Clear search"
            className="px-2 text-ink/60 hover:text-ink"
          >
            ✕
          </button>
        )}
      </div>

      {open && (
        <div
          style={dropdownStyle}
          className="z-[9999] max-h-[70vh] overflow-y-auto rounded-[3px] border border-ink bg-paper text-ink shadow-[0_12px_30px_rgba(0,0,0,0.25)]"
        >
          {loading ? (
            <p className="p-3 text-[0.75rem] normal-case">Searching…</p>
          ) : results.length === 0 ? (
            <p className="p-3 text-[0.75rem] normal-case">No articles found.</p>
          ) : (
            results.map((r) => (
              <Link
                key={r.slug}
                href={r.href}
                onClick={() => setOpen(false)}
                className="block border-b border-ink/10 p-3 text-left normal-case hover:bg-yellow/40"
              >
                <span className="block text-[0.7rem] font-extrabold uppercase tracking-wide text-blue">
                  {r.category}
                </span>
                <span className="block text-[0.85rem] font-bold leading-snug">{r.title}</span>
                <span className="block text-[0.72rem] leading-snug text-ink/70">{r.snippet}</span>
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  );
}