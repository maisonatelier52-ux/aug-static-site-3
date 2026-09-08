import { news } from "@/lib/news";

function getSnippet(text, query, radius = 60) {
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return text.slice(0, radius * 2);
  const start = Math.max(0, idx - radius);
  const end = Math.min(text.length, idx + query.length + radius);
  return `${start > 0 ? "…" : ""}${text.slice(start, end)}${end < text.length ? "…" : ""}`;
}

export function searchArticles(query, limit = 8) {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const results = [];
  const articles = news.articles;

  for (const article of articles) {
    const haystacks = [
      article.title,
      article.dek,
      article.author,
      ...(article.takeaways ?? []),
      ...article.body.flatMap((section) => [
        section.heading,
        ...section.paragraphs,
      ]),
    ];

    const hit = haystacks.find(
      (text) => typeof text === "string" && text.toLowerCase().includes(q)
    );

    if (hit) {
      results.push({
        slug: article.slug,
        title: article.title,
        category: article.category,
        snippet: getSnippet(hit, q),
        href: `/${article.category}/${article.slug}/`,
      });
    }

    if (results.length >= limit) break;
  }

  return results;
}