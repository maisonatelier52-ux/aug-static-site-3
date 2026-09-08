// import Link from "next/link";
// import { news } from "@/lib/news";

// export default function Brand({ footer = false }) {
//   return (
//     <Link
//       className={`relative inline-flex items-baseline gap-1.5 font-serif text-xl text-[#101827] ${footer ? "origin-left scale-[0.72]" : ""}`}
//       href="/"
//       aria-label={`${news.site.name} home`}
//     >

//       <span className="absolute -top-3 font-sans text-[0.62rem]  font-bold tracking-[0.12em] uppercase max-[580px]:hidden">The</span>
//       <strong className="text-[clamp(2rem,4.2vw,3.65rem)] leading-[0.8] tracking-[-0.07em] max-[820px]:text-[2.2rem] max-[580px]:text-[1.75rem]">Meridian</strong>
//       <span className="max-[580px]:text-[0.95rem]">Times</span>
//     </Link>
//   );
// }

import Link from "next/link";
import { news } from "@/lib/news";

export default function Brand({ footer = false }) {
  return (
    <Link
      className={`relative inline-flex items-baseline gap-1.5 font-serif text-xl ${
        footer ? "origin-left scale-[0.72] text-white" : "text-[#101827]"
      }`}
      href="/"
      aria-label={`${news.site.name} home`}
    >
      <span className="absolute -top-3 font-sans text-[0.62rem] font-bold tracking-[0.12em] uppercase max-[580px]:hidden">
        The
      </span>
      <strong className="text-[clamp(2rem,4.2vw,3.65rem)] leading-[0.8] tracking-[-0.07em] max-[820px]:text-[2.2rem] max-[580px]:text-[1.75rem]">
        Meridian
      </strong>
      <span className="max-[580px]:text-[0.95rem]">Times</span>
    </Link>
  );
}