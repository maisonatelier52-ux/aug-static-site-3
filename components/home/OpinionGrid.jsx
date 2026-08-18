import SectionHeading from "@/components/shared/SectionHeading";
import StoryCard from "@/components/shared/StoryCard";

export default function OpinionGrid({ articles }) {
  return (
    <section aria-labelledby="opinion-heading">
      <SectionHeading  title="Opinion & analysis" />
      <span className="sr-only" id="opinion-heading">Opinion and analysis</span>
      <div className="grid grid-cols-3 gap-x-[22px] gap-y-7 max-[820px]:grid-cols-2 max-[580px]:grid-cols-1 max-[580px]:[&>article]:grid max-[580px]:[&>article]:grid-cols-[120px_1fr] max-[580px]:[&>article]:gap-3 max-[580px]:[&_article>a]:aspect-square max-[580px]:[&_article>div]:pt-0">
        {articles.slice(0, 6).map((article) => (
          <StoryCard key={article.slug} article={article} variant="compact" />
        ))}
      </div>
    </section>
  );
}
