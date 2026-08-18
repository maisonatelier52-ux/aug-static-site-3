// import { notFound } from "next/navigation";
// import SectionHeading from "@/components/shared/SectionHeading";
// import StoryCard from "@/components/shared/StoryCard";
// import StickyRail from "@/components/shared/StickyRail";
// import { getArticlesByCategory, getCategory, news } from "@/lib/news";
// import { shell } from "@/lib/styles";

// export function generateStaticParams() {
//   return news.categories.map((category) => ({ category: category.slug }));
// }

// export async function generateMetadata({ params }) {
//   const { category: categorySlug } = await params;
//   const category = getCategory(categorySlug);
//   if (!category) return {};

//   return {
//     title: category.name,
//     description: category.description,
//     alternates: { canonical: `/${category.slug}/` },
//     openGraph: {
//       title: `${category.name} | ${news.site.name}`,
//       description: category.description,
//       url: `/${category.slug}/`,
//     },
//   };
// }

// export default async function CategoryPage({ params }) {
//   const { category: categorySlug } = await params;
//   const category = getCategory(categorySlug);
//   if (!category) notFound();

//   const articles = getArticlesByCategory(category.slug);
//   const otherStories = news.articles.filter((article) => article.category !== category.slug);

//   return (
//     <main id="main-content" className="pb-[72px]">
//       <header className={`${shell} relative mt-7 grid content-end border-t-8 border-t-blue border-b border-b-ink py-6 max-[580px]:py-5`}>
//         <h1 className="relative z-[1] mt-1 mb-2 font-serif text-[clamp(3.5rem,8vw,7rem)] leading-[0.85] tracking-[-0.07em] max-[580px]:text-[3.4rem]">{category.name}</h1>
//         <p className="relative z-[1] m-0 max-w-[650px] font-serif text-[1.15rem] leading-[1.4] text-muted">{category.description}</p>
//       </header>

//       <div className={`${shell} grid grid-cols-[minmax(0,1fr)_286px] items-start gap-[34px] pt-7 max-[1080px]:grid-cols-[minmax(0,1fr)_250px] max-[820px]:grid-cols-1`}>
//         <div>
//           {articles[0] ? <div className="border-b border-ink pb-[26px]"><StoryCard article={articles[0]} variant="wide" priority /></div> : null}
//           <SectionHeading title={`Latest ${category.name}`} />
//           <div className="grid grid-cols-2 gap-x-[22px] gap-y-[30px] max-[580px]:grid-cols-1">
//             {articles.slice(1).map((article) => (
//               <StoryCard key={article.slug} article={article} />
//             ))}
//           </div>
//         </div>
//         <div className="max-[820px]:[&>aside]:static max-[820px]:[&>aside]:grid max-[820px]:[&>aside]:grid-cols-2 max-[820px]:[&>aside]:gap-5 max-[820px]:[&>aside>div:nth-child(2)]:mt-0 max-[820px]:[&>aside>div:last-child]:hidden max-[580px]:[&>aside]:grid-cols-1">
//           <StickyRail articles={otherStories} title="Across the newsroom" />
//         </div>
//       </div>
//     </main>
//   );
// }

import { notFound } from "next/navigation";
import SectionHeading from "@/components/shared/SectionHeading";
import StoryCard from "@/components/shared/StoryCard";
import StickyRail from "@/components/shared/StickyRail";
import { getArticlesByCategory, getCategory, news } from "@/lib/news";
import { shell } from "@/lib/styles";

export function generateStaticParams() {
  return news.categories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }) {
  const { category: categorySlug } = await params;
  const category = getCategory(categorySlug);
  if (!category) return {};

  return {
    title: category.name,
    description: category.description,
    alternates: { canonical: `/${category.slug}/` },
    openGraph: {
      title: `${category.name} | ${news.site.name}`,
      description: category.description,
      url: `/${category.slug}/`,
    },
  };
}

export default async function CategoryPage({ params }) {
  const { category: categorySlug } = await params;
  const category = getCategory(categorySlug);
  if (!category) notFound();

  const articles = getArticlesByCategory(category.slug);
  const otherStories = news.articles.filter((article) => article.category !== category.slug);

  return (
    <main id="main-content" className="pb-[72px]">
      <header className={`${shell} relative mt-7 grid content-end border-t-8 border-t-blue border-b border-b-ink py-6 max-[580px]:py-5`}>
        <h1 className="relative z-[1] mt-1 mb-2 font-serif text-[clamp(3.5rem,8vw,7rem)] leading-[0.85] tracking-[-0.07em] max-[580px]:text-[3.4rem]">{category.name}</h1>
        <p className="relative z-[1] m-0 max-w-[650px] font-serif text-[1.15rem] leading-[1.4] text-muted">{category.description}</p>
      </header>

      <div className={`${shell} grid grid-cols-[minmax(0,1fr)_286px] gap-[34px] pt-7 max-[1080px]:grid-cols-[minmax(0,1fr)_250px] max-[820px]:grid-cols-1 max-[820px]:items-start`}>
        <div>
          {articles[0] ? <div className="border-b border-ink pb-[26px]"><StoryCard article={articles[0]} variant="wide" priority /></div> : null}
          <SectionHeading title={`Latest ${category.name}`} />
          <div className="grid grid-cols-2 gap-x-[22px] gap-y-[30px] max-[580px]:grid-cols-1">
            {articles.slice(1).map((article) => (
              <StoryCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
        <div className="max-[820px]:[&>aside]:static max-[820px]:[&>aside]:grid max-[820px]:[&>aside]:grid-cols-2 max-[820px]:[&>aside]:gap-5 max-[820px]:[&>aside>div:nth-child(2)]:mt-0 max-[820px]:[&>aside>div:last-child]:hidden max-[580px]:[&>aside]:grid-cols-1">
          <StickyRail articles={otherStories} title="Across the newsroom" />
        </div>
      </div>
    </main>
  );
}