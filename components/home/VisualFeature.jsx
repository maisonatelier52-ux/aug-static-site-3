import StoryCard from "@/components/shared/StoryCard";

export default function VisualFeature({ articles }) {
  const [lead, ...rest] = articles;

  return (
    <section className="my-[38px] mb-6 grid min-h-[520px] grid-cols-[1.5fr_1fr] bg-[#07090c] max-[820px]:grid-cols-1 max-[580px]:mx-[-14px]" aria-labelledby={`feature-${lead.slug}`}>
      <div className="relative min-h-[520px] max-[580px]:min-h-[470px]">
        <StoryCard article={lead} variant="overlay" />
        
      </div>
      <div className="grid grid-cols-2 border-l border-[#41444a] max-[820px]:grid-cols-[repeat(4,minmax(210px,1fr))] max-[820px]:overflow-x-auto max-[820px]:border-l-0 max-[580px]:grid-cols-[repeat(4,78vw)]">
        {rest.slice(0, 4).map((article) => (
          <div className="border-r border-b border-[#41444a] p-[18px] text-white [&_a]:text-white [&_div:last-child]:text-[#aeb1b7] even:border-r-0 max-[820px]:border-t" key={article.slug}>
            <StoryCard article={article} variant="compact" />
          </div>
        ))}
      </div>
    </section>
  );
}
