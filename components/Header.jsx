import Link from "next/link";
import Brand from "@/components/Brand";
import { news } from "@/lib/news";
import { shell } from "@/lib/styles";

export default function Header() {
  return (
    <>
      <a className="fixed top-2.5 left-2.5 z-[200] -translate-y-[150%] bg-blue px-3.5 py-2.5 text-white focus:translate-y-0" href="#main-content">
        Skip to content
      </a>
      <div className="grid min-h-[94px] grid-cols-[90px_minmax(0,1fr)_auto] items-center gap-[22px] border-b-4 border-white bg-navy px-[max(20px,calc((100vw-1240px)/2))] py-2.5 text-white shadow-[inset_0_-6px_0_#275fbd] max-[820px]:min-h-[74px] max-[820px]:grid-cols-[58px_1fr] max-[820px]:gap-3 max-[580px]:px-3.5" role="banner">
        <div className="relative h-[62px] w-[74px] overflow-hidden max-[820px]:h-[50px] max-[820px]:w-[55px]" aria-hidden="true">
          <span className="absolute bottom-0 left-3 h-11 w-3 bg-red" />
          <span className="absolute bottom-0 left-[31px] h-[58px] w-3 bg-red" />
          <span className="absolute bottom-0 left-[50px] h-9 w-3 bg-red" />
          <span className="absolute top-[27px] -left-[9px] h-[7px] w-[92px] -rotate-[27deg] bg-white" />
        </div>
        <p className="m-0 grid text-center leading-none uppercase">
          <span className="text-[0.8rem] font-extrabold tracking-[0.5em] text-red max-[820px]:text-[0.54rem] max-[820px]:tracking-[0.25em]">Stories against the noise</span>
          <strong className="mt-[5px] text-[clamp(1.45rem,2vw,2rem)] tracking-[0.04em] max-[820px]:text-[1.15rem]">Memory Remains</strong>
          <small className="mt-1 text-[0.65rem] font-bold max-[820px]:text-[0.5rem]">Independent journalism • Summer 2026</small>
        </p>
        <Link className="rounded-[3px] bg-red px-3.5 py-[11px] text-[0.7rem] font-extrabold whitespace-nowrap uppercase max-[820px]:hidden" href="/world/">Read the series</Link>
      </div>

      <header className="bg-paper">
        <div className={`${shell} flex min-h-[126px] items-center justify-between border-b border-ink max-[820px]:min-h-[95px]`}>
          <Brand />
          <div className="grid justify-items-end gap-2 text-right text-[0.7rem] uppercase max-[580px]:text-[0.55rem]">
            <span className="max-[820px]:hidden">Monday, August 17, 2026</span>
            <strong className="bg-yellow px-[9px] py-1.5 text-[0.62rem] max-[580px]:p-[5px] max-[580px]:text-[0.48rem]">Independent daily edition</strong>
          </div>
        </div>

        <div className="sticky top-0 z-[100] border-b border-ink bg-[rgb(253_252_249/95%)] backdrop-blur-[10px]">
          <nav className={`${shell} flex min-h-12 items-center gap-6 overflow-x-auto text-[0.72rem] font-extrabold tracking-[0.02em] uppercase [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [&_a]:whitespace-nowrap [&_a:hover]:text-blue max-[820px]:gap-[18px] max-[580px]:min-h-11`} aria-label="Primary navigation">
            <Link href="/">News</Link>
            {news.categories.map((category) => (
              <Link key={category.slug} href={`/${category.slug}/`}>
                {category.name}
              </Link>
            ))}
            <Link href="/author/maya-chen/">Authors</Link>
            <span className="flex-1" />
            
          </nav>
        </div>
      </header>
    </>
  );
}
