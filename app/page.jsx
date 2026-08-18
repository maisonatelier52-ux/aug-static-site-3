import LeadDesk from "@/components/home/LeadDesk";
import Newsletter from "@/components/home/Newsletter";
import VisualFeature from "@/components/home/VisualFeature";
import OpinionGrid from "@/components/home/OpinionGrid";
import PhotoStrip from "@/components/home/PhotoStrip";
import FeaturedDesk from "@/components/home/FeaturedDesk";
import CategoryBand from "@/components/home/CategoryBand";
import { getArticlesByCategory, news } from "@/lib/news";
import { shell } from "@/lib/styles";

export const metadata = {
  title: "The Meridian Times — Independent world news",
  description: news.site.description,
};

export default function HomePage() {
  const articles = news.articles;
  const categoryBands = news.categories.filter((category) => category.slug !== "science");

  return (
    <main id="main-content">
      <div className={`${shell} pt-7 max-[580px]:pt-[18px]`}>
        <LeadDesk articles={articles.slice(0, 10)} />
        <Newsletter />
        <VisualFeature
          articles={[articles[1], articles[5], articles[7], articles[11], articles[17]]}
        />
        <OpinionGrid articles={articles.slice(6, 12)} />
      </div>

      <PhotoStrip articles={[articles[8], articles[14], articles[9], articles[17]]} />

      <div className={`${shell} pt-[22px]`}>
        <FeaturedDesk articles={[articles[2], articles[4], articles[12], ...articles.slice(0, 5)]} />
        {categoryBands.map((category) => (
          <CategoryBand
            key={category.slug}
            category={category}
            articles={getArticlesByCategory(category.slug)}
          />
        ))}
      </div>
    </main>
  );
}
