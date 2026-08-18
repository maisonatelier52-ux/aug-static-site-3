import Link from "next/link";
import Brand from "@/components/Brand";
import { news } from "@/lib/news";
import { shell } from "@/lib/styles";

const headingClass = "mb-3 block text-[0.65rem] font-black tracking-[0.12em] uppercase";
const linkListClass = "[&_a]:mb-2 [&_a]:block [&_a]:font-serif [&_a]:text-[0.83rem] [&_a]:text-[#4d5158]";

export default function Footer() {
  return (
    <footer className="mt-[50px] border-t-8 border-navy bg-[#f2f1ed] pt-[38px]">
      <div className={`${shell} grid grid-cols-[1.6fr_repeat(3,1fr)] gap-9 pb-[35px] max-[820px]:grid-cols-[1.5fr_repeat(2,1fr)] max-[580px]:grid-cols-2 max-[580px]:gap-7`}>
        <div className="max-[580px]:col-span-full">
          <Brand footer />
          <p className="mt-1.5 mb-0 max-w-[250px] font-serif text-[0.88rem] text-muted">{news.site.tagline}</p>
        </div>

        <div className={linkListClass}>
          <strong className={headingClass}>Explore</strong>
          {news.categories.map((category) => (
            <Link key={category.slug} href={`/${category.slug}/`}>{category.name}</Link>
          ))}
        </div>

        <div className={linkListClass}>
          <strong className={headingClass}>Newsroom</strong>
          <Link href="/author/maya-chen/">Our authors</Link>
          <a href="mailto:desk@meridian-times.example">Contact the desk</a>
          <a href="#newsletter">Daily briefing</a>
        </div>

        <div className="max-[820px]:col-[2/-1] max-[580px]:col-span-full">
          <strong className={headingClass}>Follow</strong>
          <div className="flex gap-[7px]" aria-label="Social links">
            {[["X", "X"], ["IG", "Instagram"], ["YT", "YouTube"]].map(([label, name]) => (
              <a className="grid h-7 w-7 place-items-center rounded-full bg-navy text-[0.6rem] font-black text-white" href="#" aria-label={`Meridian Times on ${name}`} key={label}>{label}</a>
            ))}
          </div>
          <small className="mt-3 block text-[0.58rem] leading-[1.45] text-muted">Demo publication. All stories and organizations are fictional.</small>
        </div>
      </div>
      <div className={`${shell} flex justify-between border-t border-rule pt-3.5 pb-[18px] text-[0.58rem] text-muted uppercase max-[580px]:grid max-[580px]:gap-[5px]`}>
        <span>© 2026 The Meridian Times</span>
        <span>Built for fast, static delivery</span>
      </div>
    </footer>
  );
}
