import Image from "next/image";
import Link from "next/link";
import { articlePath } from "@/lib/news";
import { shell } from "@/lib/styles";

export default function PhotoStrip({ articles }) {
  return (
    <section className="mt-[42px] bg-blue py-[27px] pb-[34px] text-white shadow-[inset_0_1px_0_rgb(255_255_255/30%)]" aria-labelledby="photos-heading">
      <div className={shell}>
        <div className="mb-4 flex items-baseline gap-[13px]">
          <h2 className="m-0 font-serif text-[1.65rem]" id="photos-heading">Science</h2>
        </div>
        <div className="grid grid-cols-4 gap-[18px] max-[820px]:grid-cols-2 max-[580px]:flex max-[580px]:snap-x max-[580px]:overflow-x-auto">
          {articles.slice(0, 4).map((article) => (
            <article className="group max-[580px]:min-w-[78vw] max-[580px]:snap-start" key={article.slug}>
              <Link href={articlePath(article)}>
                <span className="relative block aspect-video overflow-hidden bg-blue-dark">
                  <Image className="object-cover transition-transform duration-[350ms] group-hover:scale-[1.025]" src={article.image} alt={article.imageAlt} fill sizes="(max-width: 760px) 80vw, 25vw" />
                </span>
                <h3 className="mt-2 mb-0 font-serif text-[0.98rem] leading-[1.08]">{article.title}</h3>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
