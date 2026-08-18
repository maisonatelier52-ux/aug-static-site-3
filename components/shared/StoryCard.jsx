import Image from "next/image";
import Link from "next/link";
import { articlePath, formatDate, getAuthor, getCategory } from "@/lib/news";

const variants = {
  standard: {
    article: "",
    image: "aspect-[16/10]",
    title: "text-[clamp(1.08rem,1.6vw,1.45rem)]",
  },
  compact: {
    article: "",
    image: "aspect-[16/10]",
    title: "text-[clamp(1rem,1.35vw,1.22rem)] leading-[1.06]",
  },
  wide: {
    article: "",
    image: "aspect-[16/8.9]",
    title: "max-w-[92%] text-[clamp(2rem,3.2vw,3.35rem)] leading-[0.96] max-[580px]:max-w-full max-[580px]:text-[2rem]",
  },
  overlay: {
    article: "absolute inset-0 text-white",
    image: "absolute inset-0 h-full",
    title: "max-w-[90%] text-[clamp(1.6rem,3vw,3rem)]",
  },
};

export default function StoryCard({ article, variant = "standard", priority = false }) {
  const category = getCategory(article.category);
  const author = getAuthor(article.author);
  const style = variants[variant];
  const isOverlay = variant === "overlay";

  return (
    <article className={`group min-w-0 ${style.article}`}>
      <Link className={`relative block overflow-hidden bg-[#d7d9dc] ${style.image}`} href={articlePath(article)} tabIndex={-1}>
        <Image
          className="object-cover transition-transform duration-[350ms] group-hover:scale-[1.025]"
          src={article.image}
          alt={article.imageAlt}
          fill
          sizes={variant === "wide" ? "(max-width: 760px) 100vw, 66vw" : "(max-width: 760px) 100vw, 33vw"}
          priority={priority}
        />
        {isOverlay ? <span className="absolute inset-0 bg-[linear-gradient(180deg,transparent_40%,rgb(0_0_0/92%)_100%)]" /> : null}
      </Link>
      <div className={isOverlay ? "absolute right-6 bottom-6 left-6 z-[2]" : "pt-2.5"}>
        <Link className="text-[0.62rem] font-black tracking-[0.11em] text-blue uppercase" href={`/${article.category}/`}>{category?.name}</Link>
        <h3 className={`mt-[5px] mb-1.5 font-serif leading-[1.04] tracking-[-0.025em] ${style.title}`}>
          <Link className="hover:text-blue" href={articlePath(article)}>{article.title}</Link>
        </h3>
        {variant !== "compact" && !isOverlay ? <p className="mt-0 mb-2.5 font-serif text-[0.9rem] leading-[1.45] text-[#4d5158]">{article.dek}</p> : null}
        <div className={`flex flex-wrap gap-x-2.5 gap-y-[5px] text-[0.6rem] font-bold tracking-[0.04em] uppercase ${isOverlay ? "text-[#c9cbd0] [&_a]:text-white" : "text-muted [&_a]:text-ink"} ${variant === "compact" ? "mt-2" : ""}`}>
          {author ? <Link href={`/author/${author.slug}/`}>{author.name}</Link> : null}
          <time dateTime={article.published}>{formatDate(article.published)}</time>
        </div>
      </div>
    </article>
  );
}
