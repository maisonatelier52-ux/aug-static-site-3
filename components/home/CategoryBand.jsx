import SectionHeading from "@/components/shared/SectionHeading";
import StoryCard from "@/components/shared/StoryCard";

export default function CategoryBand({ category, articles }) {
  if (!articles.length) return null;

  return (
    <section className="mt-[46px]" aria-labelledby={`category-${category.slug}`}>
      <SectionHeading  title={category.name} href={`/${category.slug}/`} />
      <span className="sr-only" id={`category-${category.slug}`}>Latest {category.name} stories</span>
      <div className="grid grid-cols-[1.45fr_repeat(3,1fr)] gap-[22px] max-[820px]:grid-cols-2 max-[580px]:[&>*:first-child]:col-span-full">
        {articles.slice(0, 4).map((article, index) => (
          <StoryCard key={article.slug} article={article} variant={index === 0 ? "standard" : "compact"} />
        ))}
      </div>
    </section>
  );
}
