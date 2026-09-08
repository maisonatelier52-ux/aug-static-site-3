// import Link from "next/link";
// import Brand from "@/components/Brand";
// import { news } from "@/lib/news";
// import { shell } from "@/lib/styles";

// const headingClass = "mb-3 block text-[0.65rem] font-black tracking-[0.12em] uppercase";
// const linkListClass = "[&_a]:mb-2 [&_a]:block [&_a]:font-serif [&_a]:text-[0.83rem] [&_a]:text-[#4d5158]";

// export default function Footer() {
//   return (
//     <footer className="mt-[50px] border-t-8 border-navy bg-[#f2f1ed] pt-[38px]">
//       <div className={`${shell} grid grid-cols-[1.6fr_repeat(3,1fr)] gap-9 pb-[35px] max-[820px]:grid-cols-[1.5fr_repeat(2,1fr)] max-[580px]:grid-cols-2 max-[580px]:gap-7`}>
//         <div className="max-[580px]:col-span-full">
//           <Brand footer />
//           <p className="mt-1.5 mb-0 max-w-[250px] font-serif text-[0.88rem] text-muted">{news.site.tagline}</p>
//         </div>

//         <div className={linkListClass}>
//           <strong className={headingClass}>Explore</strong>
//           {news.categories.map((category) => (
//             <Link key={category.slug} href={`/${category.slug}/`}>{category.name}</Link>
//           ))}
//         </div>

//         <div className={linkListClass}>
//           <strong className={headingClass}>Newsroom</strong>
//           <Link href="/author/maya-chen/">Our authors</Link>
//           <a href="mailto:desk@meridian-times.example">Contact the desk</a>
//           <a href="#newsletter">Daily briefing</a>
//         </div>

//         <div className="max-[820px]:col-[2/-1] max-[580px]:col-span-full">
//           <strong className={headingClass}>Follow</strong>
//           <div className="flex gap-[7px]" aria-label="Social links">
//             {[["X", "X"], ["IG", "Instagram"], ["YT", "YouTube"]].map(([label, name]) => (
//               <a className="grid h-7 w-7 place-items-center rounded-full bg-navy text-[0.6rem] font-black text-white" href="#" aria-label={`Meridian Times on ${name}`} key={label}>{label}</a>
//             ))}
//           </div>
//           <small className="mt-3 block text-[0.58rem] leading-[1.45] text-muted">Demo publication. All stories and organizations are fictional.</small>
//         </div>
//       </div>
//       <div className={`${shell} flex justify-between border-t border-rule pt-3.5 pb-[18px] text-[0.58rem] text-muted uppercase max-[580px]:grid max-[580px]:gap-[5px]`}>
//         <span>© 2026 The Meridian Times</span>
//         <span>Built for fast, static delivery</span>
//       </div>
//     </footer>
//   );
// }

import Link from "next/link";
import Brand from "@/components/Brand";
import { news } from "@/lib/news";
import { shell } from "@/lib/styles";

const socialLinks = [
  {
    name: "X",
    href: "https://x.com/meridiantimes",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-[15px] w-[15px]">
        <path d="M18.9 2H22l-7.6 8.7L23 22h-6.9l-5.4-6.9L4.5 22H1.4l8.1-9.3L1 2h7.1l4.9 6.3L18.9 2Zm-1.2 18h1.9L7.4 4h-2l12.3 16Z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com/meridiantimes",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-[15px] w-[15px]">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Substack",
    href: "https://meridiantimes.substack.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-[15px] w-[15px]">
        <path d="M3 3h18v3.2H3V3Zm0 5.4h18v3.2H3V8.4ZM3 13.8h18V21L12 15.8 3 21v-7.2Z" />
      </svg>
    ),
  },
  {
    name: "Medium",
    href: "https://medium.com/@meridiantimes",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-[15px] w-[15px]">
        <path d="M3 6v12M3 6l5 5.5L13 6M13 6v12M17 6.5c1.4 0 2.3 2.5 2.3 5.5S18.4 17.5 17 17.5s-2.3-2.5-2.3-5.5S15.6 6.5 17 6.5Z" strokeLinejoin="round" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const directoryLinks = [
    ...news.categories.map((c) => ({ label: c.name, href: `/${c.slug}/` })),
    { label: "Our authors", href: "/author/maya-chen/" },
    { label: "Contact the desk", href: "mailto:desk@meridian-times.example" },
  ];

  return (
    <footer className="border-t-[6px] mt-6 border-red bg-navy text-white">
      <div className={`${shell} py-7`}>
        <div className="flex items-start justify-between gap-6 max-[580px]:flex-col max-[580px]:gap-4">
          <div className="min-w-0">
            <Brand footer />
            <p className="mt-2.5 max-w-[36ch] font-serif text-[0.92rem] leading-snug text-white/70 italic">
              {news.site.tagline}
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-2" aria-label="Social links">
            {socialLinks.map((s) => (
              <a
                key={s.name}
                href={s.href}
                aria-label={`Meridian Times on ${s.name}`}
                className="grid h-8 w-8 place-items-center border border-white/30 text-white/75 hover:border-white hover:bg-white hover:text-navy"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap text-[0.76rem] max-[580px]:mt-5 max-[580px]:flex-col max-[580px]:gap-0">
          {directoryLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={`py-1 text-white/75 hover:text-white max-[580px]:w-full max-[580px]:border-t max-[580px]:border-white/15 max-[580px]:py-2.5 ${
                i === 0 ? "pr-4" : "border-l border-white/20 px-4 max-[580px]:border-l-0 max-[580px]:px-0"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="#newsletter"
            className="border-l border-white/20 px-4 py-1 text-yellow hover:text-white max-[580px]:w-full max-[580px]:border-t max-[580px]:border-l-0 max-[580px]:border-white/15 max-[580px]:px-0 max-[580px]:py-2.5"
          >
            Daily briefing
          </a>
        </div>
      </div>

      <div className={`${shell} flex justify-between border-t border-white/15 py-3 text-[0.66rem] text-white/45 max-[580px]:flex-col max-[580px]:gap-1`}>
        <span>© {year} The Meridian Times. Demo publication — all stories and organizations are fictional.</span>
        <span className="whitespace-nowrap">Built for fast, static delivery</span>
      </div>
    </footer>
  );
}