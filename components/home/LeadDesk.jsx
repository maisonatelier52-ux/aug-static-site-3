import Link from "next/link";
import StoryCard from "@/components/shared/StoryCard";
import StickyRail from "@/components/shared/StickyRail";
import { articlePath, formatDate, getAuthor, getCategory } from "@/lib/news";
import { visuallyHidden } from "@/lib/styles";

export default function LeadDesk({ articles }) {
  const [lead, ...rest] = articles;
  const author = getAuthor(lead.author);
  const category = getCategory(lead.category);

  return (
    <section className="grid grid-cols-[minmax(0,1.65fr)_minmax(220px,0.72fr)_286px] grid-rows-[auto_auto] items-start gap-x-[22px] gap-y-[22px] max-[1080px]:grid-cols-[minmax(0,1.5fr)_minmax(220px,0.7fr)] max-[820px]:block" aria-labelledby="top-stories">
      <h1 className={visuallyHidden} id="top-stories">Today&apos;s top stories</h1>

      <div className="col-start-1 min-w-0">
        <StoryCard article={lead} variant="wide" priority />
      </div>

      <div className="col-start-2 min-w-0 max-[820px]:mt-[22px] max-[820px]:grid max-[820px]:grid-cols-3 max-[820px]:gap-4 max-[580px]:grid-cols-1 max-[580px]:gap-0">
        <p className="m-0 mb-[7px] border-b-4 border-blue pb-[7px] text-[0.65rem] font-black tracking-[0.12em] uppercase max-[820px]:col-span-full max-[820px]:mb-0">The morning desk</p>
        {rest.slice(0, 3).map((article, index) => (
          <article className="border-b border-rule py-[11px] max-[820px]:border-b-0 max-[580px]:border-b" key={article.slug}>
            <Link className="text-[0.62rem] font-black tracking-[0.11em] text-blue uppercase" href={`/${article.category}/`}>{getCategory(article.category)?.name}</Link>
            <h2 className="mt-1 mb-1.5 font-serif text-[1.16rem] leading-[1.06]">
              <Link className="hover:text-blue" href={articlePath(article)}>{article.title}</Link>
            </h2>
            {index === 0 ? <p className="mt-0 mb-[7px] font-serif text-[0.78rem] leading-[1.35] text-muted">{article.dek}</p> : null}
            <small className="text-[0.57rem] font-bold text-muted uppercase">{article.readingTime}</small>
          </article>
        ))}
      </div>

      <StickyRail
        articles={rest.slice(3)}
        className="col-start-3 row-[1/3] max-[1080px]:static max-[1080px]:col-[1/-1] max-[1080px]:row-auto max-[1080px]:grid max-[1080px]:grid-cols-[0.9fr_1.3fr] max-[1080px]:gap-5 max-[1080px]:border-t max-[1080px]:border-ink max-[1080px]:pt-[22px] max-[1080px]:[&>div:nth-child(2)]:mt-0 max-[1080px]:[&>div:last-child]:hidden max-[820px]:mt-[26px] max-[580px]:grid-cols-1"
      />

      <div className="col-[1/3] grid grid-cols-3 gap-5 border-t border-ink pt-5 max-[580px]:grid-cols-1 max-[580px]:[&>article]:grid max-[580px]:[&>article]:grid-cols-[120px_1fr] max-[580px]:[&>article]:gap-3 max-[580px]:[&_article>a]:aspect-square max-[580px]:[&_article>div]:pt-0">
        {rest.slice(0, 3).map((article) => (
          <StoryCard key={article.slug} article={article} variant="compact" />
        ))}
      </div>

      <div className="hidden">
        <span>{category?.name}</span>
        <span>{author?.name}</span>
        <time dateTime={lead.published}>{formatDate(lead.published)}</time>
      </div>
    </section>
  );
}
