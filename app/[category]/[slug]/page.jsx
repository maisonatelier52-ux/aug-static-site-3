// import Image from "next/image";
// import Link from "next/link";
// import { notFound } from "next/navigation";
// import AuthorBio from "@/components/shared/AuthorBio";
// import SectionHeading from "@/components/shared/SectionHeading";
// import ShareBar from "@/components/shared/ShareBar";
// import StoryCard from "@/components/shared/StoryCard";
// import {
//   articlePath,
//   formatDate,
//   getArticle,
//   getAuthor,
//   getCategory,
//   getRelatedArticles,
//   news,
// } from "@/lib/news";
// import { shell } from "@/lib/styles";

// export function generateStaticParams() {
//   return news.articles.map((article) => ({
//     category: article.category,
//     slug: article.slug,
//   }));
// }

// export async function generateMetadata({ params }) {
//   const { category, slug } = await params;
//   const article = getArticle(category, slug);
//   if (!article) return {};

//   const author = getAuthor(article.author);
//   const canonical = articlePath(article);

//   return {
//     title: article.title,
//     description: article.dek,
//     authors: author ? [{ name: author.name, url: `/author/${author.slug}/` }] : undefined,
//     alternates: { canonical },
//     openGraph: {
//       type: "article",
//       title: article.title,
//       description: article.dek,
//       url: canonical,
//       publishedTime: article.published,
//       modifiedTime: article.updated,
//       authors: author ? [author.name] : undefined,
//       section: getCategory(article.category)?.name,
//       images: [{ url: article.image, alt: article.imageAlt, width: 1600, height: 900 }],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: article.title,
//       description: article.dek,
//       images: [article.image],
//     },
//   };
// }

// export default async function ArticlePage({ params }) {
//   const { category: categorySlug, slug } = await params;
//   const article = getArticle(categorySlug, slug);
//   if (!article) notFound();

//   const author = getAuthor(article.author);
//   const category = getCategory(article.category);
//   const related = getRelatedArticles(article, 3);
//   const shareUrl = `${news.site.url}${articlePath(article)}`;

//   const jsonLd = {
//     "@context": "https://schema.org",
//     "@type": "NewsArticle",
//     headline: article.title,
//     description: article.dek,
//     image: [article.image],
//     datePublished: article.published,
//     dateModified: article.updated,
//     author: author ? { "@type": "Person", name: author.name } : undefined,
//     publisher: { "@type": "Organization", name: news.site.name },
//     mainEntityOfPage: `${news.site.url}${articlePath(article)}`,
//   };

//   return (
//     <main id="main-content" className="pb-[72px]">
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
//       />

//       <article>
//         <nav
//           className={`${shell} flex items-center gap-2 pt-[26px] pb-4 text-[0.68rem] font-bold tracking-[0.06em] text-muted uppercase max-[580px]:pt-[18px]`}
//           aria-label="Breadcrumbs"
//         >
//           <Link className="hover:text-blue" href="/">Home</Link>
//           <span>/</span>
//           <Link className="hover:text-blue" href={`/${article.category}/`}>
//             {category?.name}
//           </Link>
//           <span>/</span>
//           <span className="font-black text-ink">{article.slug}</span>
//         </nav>

//         <header className={`${shell} border-t border-rule pt-7 max-[580px]:pt-5`}>
//           <div className="grid grid-cols-[minmax(0,1fr)_460px] items-start gap-[54px] max-[1080px]:grid-cols-[minmax(0,1fr)_360px] max-[820px]:grid-cols-1">

//             <div className="flex flex-col justify-center h-full">
//               <h1 className="m-0 font-serif text-[clamp(2.4rem,4.4vw,3.6rem)] leading-[1] tracking-[-0.03em] max-[580px]:text-[2.15rem]">
//                 {article.title}
//               </h1>

//               <p className="mt-4 mb-0 max-w-[560px] text-[1.05rem] leading-[1.5] text-muted">
//                 {article.dek}
//               </p>

//               <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-rule pt-[18px] text-[0.78rem] text-muted leading-none">

//                 <span className="inline-flex items-center gap-1.5">
//                   <svg
//                     className="h-[13px] w-[13px] shrink-0"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <rect x="3" y="4" width="18" height="18" rx="2" />
//                     <path d="M16 2v4M8 2v4M3 10h18" />
//                   </svg>

//                   <time
//                     className="font-bold text-ink"
//                     dateTime={article.published}
//                   >
//                     {formatDate(article.published)}
//                   </time>
//                 </span>

//                 <span aria-hidden="true">•</span>

//                 <span className="inline-flex items-center gap-1.5 font-bold uppercase">
//                   <svg
//                     className="h-[13px] w-[13px] shrink-0"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <circle cx="12" cy="12" r="9" />
//                     <path d="M12 7v5l3 3" />
//                   </svg>

//                   {article.readingTime}
//                 </span>

//                 {author ? (
//                   <>
//                     <span aria-hidden="true">•</span>

//                     <span className="inline-flex items-center">
//                       By{" "}
//                       <Link
//                         className="ml-1 font-bold text-ink hover:text-blue"
//                         href={`/author/${author.slug}/`}
//                       >
//                         {author.name}
//                       </Link>
//                     </span>
//                   </>
//                 ) : null}

//               </div>
//             </div>

//             <figure className="m-0">
//               <span className="relative block aspect-[4/3] overflow-hidden bg-[#d7d9dc] [&_img]:object-cover">
//                 <Image
//                   src={article.image}
//                   alt={article.imageAlt}
//                   fill
//                   priority
//                   sizes="(max-width: 820px) 100vw, 460px"
//                 />
//               </span>

//               <figcaption className="mt-[7px] text-[0.68rem] leading-[1.35] text-muted italic">
//                 {news.site.name}: {article.title} • Global Archive
//               </figcaption>
//             </figure>

//           </div>
//         </header>

//         <div className={`${shell} mt-11 grid grid-cols-[minmax(0,720px)_280px] items-start justify-center gap-[72px] max-[1080px]:gap-[42px] max-[820px]:grid-cols-[minmax(0,1fr)] max-[580px]:mt-[26px]`}>
//           <div className="min-w-0">
//             <div className="font-serif [&_section]:scroll-mt-[76px] [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:text-[clamp(1.8rem,3vw,2.55rem)] [&_h2]:leading-none [&_h2]:tracking-[-0.035em] [&_p]:mb-[22px] [&_p]:text-[1.16rem] [&_p]:leading-[1.75] max-[580px]:[&_p]:text-[1.07rem] max-[580px]:[&_p]:leading-[1.7]">
//               <p className="first-letter:float-left first-letter:mt-1 first-letter:mr-[9px] first-letter:text-[4.5rem] first-letter:font-bold first-letter:leading-[0.78] first-letter:text-blue">
//                 {article.body[0]?.paragraphs[0]}
//               </p>
//               {article.body.map((section, index) => (
//                 <section id={section.id} key={section.id}>
//                   <h2>{section.heading}</h2>
//                   {section.paragraphs.slice(index === 0 ? 1 : 0).map((paragraph) => (
//                     <p key={paragraph}>{paragraph}</p>
//                   ))}
//                 </section>
//               ))}

//             </div>

//             <div className="mt-11 border-t border-rule pt-7">
//               <div className="mb-6 flex flex-wrap items-center gap-3">
//                 <span className="text-[0.65rem] font-black uppercase tracking-[0.1em] text-muted">Share this story</span>
//                 <ShareBar url={shareUrl} title={article.title} />
//               </div>
//               <AuthorBio author={author} />
//             </div>
//           </div>

//           <aside className="sticky top-[72px] self-start max-[820px]:static max-[820px]:row-start-1 max-[820px]:grid max-[820px]:grid-cols-2 max-[820px]:gap-[18px] max-[580px]:grid-cols-1" aria-label="On this page">
//             <div className="bg-navy p-[18px] text-white">
//               <span className="block border-b-[3px] border-current pb-2 text-[0.65rem] font-black tracking-[0.12em] uppercase">Key takeaways</span>
//               <ul className="mt-[13px] mb-0 pl-[18px]">
//                 {article.takeaways.map((takeaway) => (
//                   <li className="mb-2.5 font-serif text-[0.86rem] leading-[1.35] text-[#d9dfeb]" key={takeaway}>{takeaway}</li>
//                 ))}
//               </ul>
//             </div>
//             <nav className="mt-[18px] border border-rule bg-paper p-[18px] max-[820px]:mt-0">
//               <span className="block border-b-[3px] border-current pb-2 text-[0.65rem] font-black tracking-[0.12em] text-blue uppercase">In this story</span>
//               <ol className="mt-3 mb-0 pl-[18px]">
//                 {article.body.map((section) => (
//                   <li className="mb-[9px] text-[0.76rem] leading-[1.3] text-muted" key={section.id}>
//                     <a className="hover:text-blue" href={`#${section.id}`}>{section.heading}</a>
//                   </li>
//                 ))}
//               </ol>
//             </nav>
//           </aside>
//         </div>
//       </article>

//       {related.length ? (
//         <section className={`${shell} mt-[70px]`} aria-labelledby="related-heading">
//           <SectionHeading eyebrow={category?.name} title="More on this story" />
//           <span className="sr-only" id="related-heading">Related stories</span>
//           <div className="grid grid-cols-3 gap-[22px] max-[820px]:grid-cols-2 max-[820px]:[&>*:last-child]:hidden max-[580px]:grid-cols-1 max-[580px]:[&>*:last-child]:block">
//             {related.map((item) => (
//               <StoryCard key={item.slug} article={item} />
//             ))}
//           </div>
//         </section>
//       ) : null}
//     </main>
//   );
// }

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import AuthorBio from "@/components/shared/AuthorBio";
import SectionHeading from "@/components/shared/SectionHeading";
import ShareBar from "@/components/shared/ShareBar";
import StoryCard from "@/components/shared/StoryCard";
import {
  articlePath,
  formatDate,
  getArticle,
  getAuthor,
  getCategory,
  getRelatedArticles,
  news,
} from "@/lib/news";
import { shell } from "@/lib/styles";

// Normalizes data-authored relative paths ("../images/x.webp", "./images/x.webp")
// into root-relative paths ("/images/x.webp") that resolve correctly from any
// route depth (home "/", category "/us-news/", article "/us-news/slug/", etc.)
function resolveImagePath(path) {
  if (!path) return path;
  return path.replace(/^(\.\.\/|\.\/)+/, "/");
}

export function generateStaticParams() {
  return news.articles.map((article) => ({
    category: article.category,
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { category, slug } = await params;
  const article = getArticle(category, slug);
  if (!article) return {};

  const author = getAuthor(article.author);
  const canonical = articlePath(article);
  const image = resolveImagePath(article.image);

  return {
    title: article.title,
    description: article.dek,
    authors: author ? [{ name: author.name, url: `/author/${author.slug}/` }] : undefined,
    alternates: { canonical },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.dek,
      url: canonical,
      publishedTime: article.published,
      modifiedTime: article.updated,
      authors: author ? [author.name] : undefined,
      section: getCategory(article.category)?.name,
      images: [{ url: image, alt: article.imageAlt, width: 1600, height: 900 }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.dek,
      images: [image],
    },
  };
}

export default async function ArticlePage({ params }) {
  const { category: categorySlug, slug } = await params;
  const article = getArticle(categorySlug, slug);
  if (!article) notFound();

  const author = getAuthor(article.author);
  const category = getCategory(article.category);
  const related = getRelatedArticles(article, 3);
  const shareUrl = `${news.site.url}${articlePath(article)}`;
  const heroImage = resolveImagePath(article.image);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.dek,
    image: [heroImage],
    datePublished: article.published,
    dateModified: article.updated,
    author: author ? { "@type": "Person", name: author.name } : undefined,
    publisher: { "@type": "Organization", name: news.site.name },
    mainEntityOfPage: `${news.site.url}${articlePath(article)}`,
  };

  return (
    <main id="main-content" className="pb-[72px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article>
        <nav
          className={`${shell} flex items-center gap-2 pt-[26px] pb-4 text-[0.68rem] font-bold tracking-[0.06em] text-muted uppercase max-[580px]:pt-[18px]`}
          aria-label="Breadcrumbs"
        >
          <Link className="hover:text-blue" href="/">Home</Link>
          <span>/</span>
          <Link className="hover:text-blue" href={`/${article.category}/`}>
            {category?.name}
          </Link>
          <span>/</span>
          <span className="font-black text-ink">{article.slug}</span>
        </nav>

        <header className={`${shell} border-t border-rule pt-7 max-[580px]:pt-5`}>
          <div className="grid grid-cols-[minmax(0,1fr)_460px] items-start gap-[54px] max-[1080px]:grid-cols-[minmax(0,1fr)_360px] max-[820px]:grid-cols-1">

            <div className="flex flex-col justify-center h-full">
              <h1 className="m-0 font-serif text-[clamp(2.4rem,4.4vw,3.6rem)] leading-[1] tracking-[-0.03em] max-[580px]:text-[2.15rem]">
                {article.title}
              </h1>

              <p className="mt-4 mb-0 max-w-[560px] text-[1.05rem] leading-[1.5] text-muted">
                {article.dek}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-rule pt-[18px] text-[0.78rem] text-muted leading-none">

                <span className="inline-flex items-center gap-1.5">
                  <svg
                    className="h-[13px] w-[13px] shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                  </svg>

                  <time
                    className="font-bold text-ink"
                    dateTime={article.published}
                  >
                    {formatDate(article.published)}
                  </time>
                </span>

                <span aria-hidden="true">•</span>

                <span className="inline-flex items-center gap-1.5 font-bold uppercase">
                  <svg
                    className="h-[13px] w-[13px] shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 3" />
                  </svg>

                  {article.readingTime}
                </span>

                {author ? (
                  <>
                    <span aria-hidden="true">•</span>

                    <span className="inline-flex items-center">
                      By{" "}
                      <Link
                        className="ml-1 font-bold text-ink hover:text-blue"
                        href={`/author/${author.slug}/`}
                      >
                        {author.name}
                      </Link>
                    </span>
                  </>
                ) : null}

              </div>
            </div>

            <figure className="m-0">
              <span className="relative block aspect-[4/3] overflow-hidden bg-[#d7d9dc] [&_img]:object-cover">
                <Image
                  src={heroImage}
                  alt={article.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 820px) 100vw, 460px"
                />
              </span>

              <figcaption className="mt-[7px] text-[0.68rem] leading-[1.35] text-muted italic">
                {news.site.name}: {article.title} • Global Archive
              </figcaption>
            </figure>

          </div>
        </header>

        <div className={`${shell} mt-11 grid grid-cols-[minmax(0,720px)_280px] items-start justify-center gap-[72px] max-[1080px]:gap-[42px] max-[820px]:grid-cols-[minmax(0,1fr)] max-[580px]:mt-[26px]`}>
          <div className="min-w-0">
            <div className="font-serif [&_section]:scroll-mt-[76px] [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:text-[clamp(1.8rem,3vw,2.55rem)] [&_h2]:leading-none [&_h2]:tracking-[-0.035em] [&_p]:mb-[22px] [&_p]:text-[1.16rem] [&_p]:leading-[1.75] max-[580px]:[&_p]:text-[1.07rem] max-[580px]:[&_p]:leading-[1.7]">
              <p className="first-letter:float-left first-letter:mt-1 first-letter:mr-[9px] first-letter:text-[4.5rem] first-letter:font-bold first-letter:leading-[0.78] first-letter:text-blue">
                {article.body[0]?.paragraphs[0]}
              </p>
              {article.body.map((section, index) => (
                <section id={section.id} key={section.id}>
                  <h2>{section.heading}</h2>
                  {section.paragraphs.slice(index === 0 ? 1 : 0).map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </section>
              ))}

            </div>

            <div className="mt-11 border-t border-rule pt-7">
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <span className="text-[0.65rem] font-black uppercase tracking-[0.1em] text-muted">Share this story</span>
                <ShareBar url={shareUrl} title={article.title} />
              </div>
              <AuthorBio author={author} />
            </div>
          </div>

          <aside className="sticky top-[72px] self-start max-[820px]:static max-[820px]:row-start-1 max-[820px]:grid max-[820px]:grid-cols-2 max-[820px]:gap-[18px] max-[580px]:grid-cols-1" aria-label="On this page">
            <div className="bg-navy p-[18px] text-white">
              <span className="block border-b-[3px] border-current pb-2 text-[0.65rem] font-black tracking-[0.12em] uppercase">Key takeaways</span>
              <ul className="mt-[13px] mb-0 pl-[18px]">
                {article.takeaways.map((takeaway) => (
                  <li className="mb-2.5 font-serif text-[0.86rem] leading-[1.35] text-[#d9dfeb]" key={takeaway}>{takeaway}</li>
                ))}
              </ul>
            </div>
            <nav className="mt-[18px] border border-rule bg-paper p-[18px] max-[820px]:mt-0">
              <span className="block border-b-[3px] border-current pb-2 text-[0.65rem] font-black tracking-[0.12em] text-blue uppercase">In this story</span>
              <ol className="mt-3 mb-0 pl-[18px]">
                {article.body.map((section) => (
                  <li className="mb-[9px] text-[0.76rem] leading-[1.3] text-muted" key={section.id}>
                    <a className="hover:text-blue" href={`#${section.id}`}>{section.heading}</a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>
        </div>
      </article>
{/* test */}
      {related.length ? (
        <section className={`${shell} mt-[70px]`} aria-labelledby="related-heading">
          <SectionHeading eyebrow={category?.name} title="More on this story" />
          <span className="sr-only" id="related-heading">Related stories</span>
          <div className="grid grid-cols-3 gap-[22px] max-[820px]:grid-cols-2 max-[820px]:[&>*:last-child]:hidden max-[580px]:grid-cols-1 max-[580px]:[&>*:last-child]:block">
            {related.map((item) => (
              <StoryCard key={item.slug} article={item} />
            ))}
          </div>
        </section>
      ) : null}
    </main>
  );
}