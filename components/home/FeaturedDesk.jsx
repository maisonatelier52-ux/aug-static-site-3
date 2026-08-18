import Link from "next/link";
import SectionHeading from "@/components/shared/SectionHeading";
import StoryCard from "@/components/shared/StoryCard";
import { articlePath } from "@/lib/news";

export default function FeaturedDesk({ articles }) {
  return (
    <section aria-labelledby="featured-heading">
      <SectionHeading  title="Features" />
      <span className="sr-only" id="featured-heading">Culture</span>
      <div className="grid grid-cols-[minmax(0,1.65fr)_minmax(220px,0.75fr)_270px] items-start gap-[22px] max-[1080px]:grid-cols-[minmax(0,1.5fr)_minmax(220px,0.7fr)] max-[820px]:grid-cols-2 max-[580px]:grid-cols-1">
        <StoryCard article={articles[0]} variant="wide" />
        <div className="grid gap-[22px] max-[580px]:grid-cols-2">
          {articles.slice(1, 3).map((article) => (
            <StoryCard key={article.slug} article={article} variant="compact" />
          ))}
        </div>
        <ol className="m-0 list-none p-0 max-[1080px]:col-span-full max-[1080px]:grid max-[1080px]:grid-cols-4 max-[1080px]:gap-3.5 max-[580px]:grid-cols-1">
          <li className="block border-b-4 border-ink pb-[9px] text-[0.65rem] font-black tracking-[0.12em] uppercase max-[1080px]:col-span-full">Most read</li>
          {articles.slice(3, 7).map((article, index) => (
            <li className="grid grid-cols-[28px_1fr] gap-[9px] border-b border-rule py-2.5" key={article.slug}>
              <span className="font-serif text-[1.2rem] font-bold text-blue">{index + 1}</span>
              <Link className="font-serif text-[0.86rem] font-bold leading-[1.1] hover:text-blue" href={articlePath(article)}>{article.title}</Link>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
