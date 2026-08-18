import { news } from "@/lib/news";

export const dynamic = "force-static";

export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${news.site.url}/sitemap.xml`,
  };
}
