import type { Route } from "./+types/search";
import { useSearchParams } from "react-router";
import { useState, useEffect } from "react";
import { Header } from "~/components/header";
import { FooterSection } from "~/components/footer-section";
import { ContentProvider } from "~/lib/content-context";
import { EnhancedSEO } from "~/components/seo/enhanced-seo";
import { siteMeta, marketingSections } from "~/lib/site-metadata";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/ui/card";

export function meta({}: Route.MetaArgs) {
  const title = `Search – ${siteMeta.name}`;
  const description = "Search Krixum pages and content - Find information about booking services, features, and more.";
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

interface SearchResult {
  title: string;
  description: string;
  url: string;
  type: 'page' | 'section';
}

export default function SearchPage() {
  const [params, setParams] = useSearchParams();
  const [query, setQuery] = useState(params.get("q")?.trim() ?? "");
  const [results, setResults] = useState<SearchResult[]>([]);
  const q = params.get("q")?.trim() ?? "";

  // Searchable content for better site search
  const searchableContent: SearchResult[] = [
    {
      title: "Home",
      description: "Search once. Book anything. Compare and book local services in one place with payment protection.",
      url: "/",
      type: "page"
    },
    {
      title: "Overview",
      description: "What Krixum does and where it works - Search once, compare clearly, and book with protection",
      url: "/#overview",
      type: "section"
    },
    {
      title: "Real Examples",
      description: "See how Krixum compares old vs new flows - Stop wasting time, start booking smarter",
      url: "/#highlights",
      type: "section"
    },
    {
      title: "How It Works",
      description: "From search to booking with protection - Search, compare, book, all protected",
      url: "/#how-it-works",
      type: "section"
    },
    {
      title: "Advantages",
      description: "Why Krixum saves time and reduces hassle across categories",
      url: "/#advantages",
      type: "section"
    },
    {
      title: "FAQ",
      description: "Get answers to common questions about searching, comparing, and booking services with Krixum",
      url: "/#faq",
      type: "section"
    },
    {
      title: "Features",
      description: "Explore Krixum features for simpler, faster booking across taxis, home services, and more",
      url: "/features",
      type: "page"
    },
    {
      title: "Pricing",
      description: "Provider partnerships and platform options - Learn how we work with service providers",
      url: "/pricing",
      type: "page"
    },
    {
      title: "Categories",
      description: "See the service categories supported today and what's next - Taxis, home services, and more",
      url: "/models",
      type: "page"
    },
    {
      title: "Contact",
      description: "Reach out for demos, partnerships, provider integrations, or customer support",
      url: "/contact",
      type: "page"
    },
  ];

  useEffect(() => {
    if (q.trim()) {
      const filtered = searchableContent.filter(item =>
        item.title.toLowerCase().includes(q.toLowerCase()) ||
        item.description.toLowerCase().includes(q.toLowerCase())
      );
      setResults(filtered);
      setQuery(q);
    } else {
      setResults([]);
    }
  }, [q]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setParams({ q: query });
    }
  };

  return (
    <ContentProvider>
      <EnhancedSEO
        title={q ? `Search results for "${q}"` : "Search"}
        description={`Search ${siteMeta.name} for booking features, pricing, service categories, and more.`}
        canonical={`${siteMeta.siteUrl}/search${q ? `?q=${encodeURIComponent(q)}` : ''}`}
        breadcrumbs={[
          { name: "Home", url: siteMeta.siteUrl },
          { name: "Search", url: `${siteMeta.siteUrl}/search` }
        ]}
      />
      
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 bg-primary-foreground py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <h1 className="text-3xl font-bold mb-8">Search</h1>
              
              <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-2 mb-8">
                <Input
                  type="search"
                  placeholder="Search Krixum..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1"
                />
                <Button type="submit">Search</Button>
              </form>

              {q && (
                <div className="mb-6">
                  <p className="text-muted-foreground">
                    {results.length} result{results.length !== 1 ? 's' : ''} for "{q}"
                  </p>
                </div>
              )}

              <div className="space-y-4">
                {results.map((result, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>
                        <a href={result.url} className="text-primary hover:underline">
                          {result.title}
                        </a>
                      </CardTitle>
                      <CardDescription className="text-sm text-muted-foreground">
                        {siteMeta.siteUrl}{result.url}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{result.description}</p>
                    </CardContent>
                  </Card>
                ))}
                
                {q && results.length === 0 && (
                  <Card>
                    <CardContent className="pt-6">
                      <p className="text-center text-muted-foreground">
                        No results found for "{q}". Try different keywords or browse our main sections.
                      </p>
                    </CardContent>
                  </Card>
                )}

                {!q && (
                  <div className="text-center text-muted-foreground">
                    <p>Enter a query to search our content including Features, Pricing, Categories, and FAQ.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
        <FooterSection />
      </div>
    </ContentProvider>
  );
}
