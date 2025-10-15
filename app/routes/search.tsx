import type { Route } from "./+types/search";
import { useSearchParams } from "react-router";
import { Header } from "~/components/header";
import { FooterSection } from "~/components/footer-section";
import { siteMeta } from "~/lib/site-metadata";

export function meta({}: Route.MetaArgs) {
  const title = `Search – ${siteMeta.name}`;
  const description = "Search Krixum AI pages and content.";
  const canonicalUrl = new URL("/search", siteMeta.siteUrl).toString();

  return [
    { title },
    { name: "description", content: description },
    { name: "robots", content: "noindex, follow" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: canonicalUrl },
    { property: "og:image", content: new URL(siteMeta.socialImagePath, siteMeta.siteUrl).toString() },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: new URL(siteMeta.socialImagePath, siteMeta.siteUrl).toString() },
  ];
}

export const links: Route.LinksFunction = () => {
  const canonicalUrl = new URL("/search", siteMeta.siteUrl).toString();
  return [{ rel: "canonical", href: canonicalUrl }];
};

export default function SearchPage() {
  const [params] = useSearchParams();
  const q = params.get("q")?.trim() ?? "";

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold mb-4">Search</h1>
        <form action="/search" method="get" className="mb-6 flex gap-2">
          <input
            type="text"
            name="q"
            defaultValue={q}
            placeholder="Search Krixum AI"
            className="border rounded px-3 py-2 w-full"
          />
          <button type="submit" className="px-4 py-2 rounded bg-primary text-primary-foreground">Search</button>
        </form>
        {q ? (
          <p className="text-muted-foreground">Showing results for: <strong>{q}</strong></p>
        ) : (
          <p className="text-muted-foreground">Enter a query to search pages like Features, Pricing, FAQ.</p>
        )}
        {/* Hook up real search here (content index or API). */}
      </main>
      <FooterSection />
    </div>
  );
}
