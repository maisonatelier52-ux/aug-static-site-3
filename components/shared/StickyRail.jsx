import Image from "next/image";
import Link from "next/link";
import { articlePath, getCategory } from "@/lib/news";

export default function StickyRail({ articles, title = "Just in", className = "" }) {
  return (
    <aside className={`sticky top-[66px] min-w-0 self-start ${className}`} aria-label={title}>
      <div className="relative flex min-h-[190px] flex-col justify-end overflow-hidden bg-[radial-gradient(circle_at_80%_10%,#315da5,transparent_36%)] bg-navy p-5 text-white after:absolute after:top-[-22px] after:right-[5px] after:font-serif after:text-[9rem] after:font-black after:text-[rgb(255_255_255/12%)] after:content-['M']">
        <span className="relative text-[0.6rem] font-black tracking-[0.16em] text-[#ff8487] uppercase">Special report</span>
        <strong className="relative mt-1 font-serif text-[1.8rem] leading-none">What we keep.</strong>
        <p className="relative mt-1.5 mb-3 font-serif text-[0.82rem] text-[#d9deea]">Five stories about memory, place and public life.</p>
        <Link className="relative self-start bg-red px-[9px] py-[7px] text-[0.6rem] font-black uppercase" href="/culture/museum-labels-become-a-conversation/">Explore report</Link>
      </div>

      <div className="mt-5">
        <h2 className="m-0 border-b-4 border-ink pb-2 text-[0.65rem] font-black tracking-[0.12em] uppercase">{title}</h2>
        <ol className="m-0 list-none p-0">
          {articles.slice(0, 5).map((article, index) => (
            <li className="grid grid-cols-[30px_1fr] gap-[9px] border-b border-rule py-2.5" key={article.slug}>
              <span className="font-serif text-xl font-bold text-blue">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <Link className="block font-serif text-[0.82rem] font-bold leading-[1.12]" href={articlePath(article)}>{article.title}</Link>
                <small className="mt-1 block text-[0.53rem] font-extrabold text-muted uppercase">{getCategory(article.category)?.name}</small>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {articles[5] ? (
        <div className="group mt-5">
          <h2 className="m-0 border-b-4 border-ink pb-2 text-[0.65rem] font-black tracking-[0.12em] uppercase">Editor&apos;s pick</h2>
          <Link href={articlePath(articles[5])}>
            <span className="relative mt-2.5 block aspect-[16/10] overflow-hidden">
              <Image className="object-cover transition-transform duration-[350ms] group-hover:scale-[1.025]" src={articles[5].image} alt={articles[5].imageAlt} fill sizes="250px" />
            </span>
            <strong className="mt-2 block font-serif text-[0.95rem] leading-[1.08]">{articles[5].title}</strong>
          </Link>
        </div>
      ) : null}
    </aside>
  );
}
