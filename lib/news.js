import articleData from "@/json/articel.json";
import authorData from "@/json/author.json";

export const news = {
  ...articleData,
  authors: authorData.authors,
};

export const getArticle = (category, slug) =>
  news.articles.find(
    (article) => article.category === category && article.slug === slug,
  );

export const getCategory = (slug) =>
  news.categories.find((category) => category.slug === slug);

export const getAuthor = (slug) =>
  news.authors.find((author) => author.slug === slug);

export const getArticlesByCategory = (slug) =>
  news.articles.filter((article) => article.category === slug);

export const getArticlesByAuthor = (slug) =>
  news.articles.filter((article) => article.author === slug);

export const getRelatedArticles = (article, count = 3) =>
  news.articles
    .filter(
      (candidate) =>
        candidate.slug !== article.slug && candidate.category === article.category,
    )
    .slice(0, count);

export const articlePath = (article) => `/${article.category}/${article.slug}/`;

export const formatDate = (value) =>
  new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${value}T12:00:00Z`));
