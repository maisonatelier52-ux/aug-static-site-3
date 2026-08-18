import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { news } from "@/lib/news";
import "./globals.css";

export const metadata = {
  metadataBase: new URL(news.site.url),
  title: {
    default: news.site.name,
    template: `%s | ${news.site.name}`,
  },
  description: news.site.description,
  applicationName: news.site.name,
  authors: news.authors.map((author) => ({ name: author.name })),
  creator: news.site.name,
  publisher: news.site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: news.site.name,
    title: news.site.name,
    description: news.site.description,
    url: "/",
    images: [
      {
        url: news.articles[0].image,
        width: 1600,
        height: 900,
        alt: news.articles[0].imageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: news.site.name,
    description: news.site.description,
    images: [news.articles[0].image],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
