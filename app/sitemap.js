import { articlePath, news } from "@/lib/news";

export const dynamic = "force-static";

export default function sitemap() {
  return [
    { url: news.site.url, lastModified: news.articles[0].updated, priority: 1 },
    ...news.categories.map((category) => ({
      url: `${news.site.url}/${category.slug}/`,
      lastModified: news.articles.find((article) => article.category === category.slug)?.updated,
      priority: 0.8,
    })),
    ...news.authors.map((author) => ({
      url: `${news.site.url}/author/${author.slug}/`,
      lastModified: news.articles.find((article) => article.author === author.slug)?.updated,
      priority: 0.6,
    })),
    ...news.articles.map((article) => ({
      url: `${news.site.url}${articlePath(article)}`,
      lastModified: article.updated,
      priority: article.featured ? 0.9 : 0.7,
    })),
  ];
}
