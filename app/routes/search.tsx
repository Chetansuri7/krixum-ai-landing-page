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
      description: "Unify ChatGPT, Claude, Gemini in One App - Access top AI models in one private workspace",
      url: "/",
      type: "page"
    },
    {
      title: "Features",
      description: "Explore the workflows and collaboration tools available in Krixum AI",
      url: "/features",
      type: "page"
    },
    {
      title: "Pricing",
      description: "Flexible pricing for teams of every size. Compare Free, Hobby, Standard, and Enterprise plans",
      url: "/pricing",
      type: "page"
    },
    {
      title: "AI Models",
      description: "See all of the AI models you can mix and match in real time - ChatGPT, Claude, Gemini, Llama",
      url: "/models",
      type: "page"
    },
    {
      title: "Advantages",
      description: "Understand the ROI of consolidating every AI workflow inside one secure workspace",
      url: "/advantages",
      type: "page"
    },
    {
      title: "FAQ",
      description: "Get answers to the questions we hear most often about our AI platform",
      url: "/faq",
      type: "page"
    },
    {
      title: "Contact",
      description: "Reach out to our team for demos, partnerships, or support",
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
        description={`Search ${siteMeta.name} for AI tools, features, pricing, and more.`}
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
              
              <form onSubmit={handleSearch} className="flex gap-2 mb-8">
                <Input
                  type="search"
                  placeholder="Search Krixum AI..."
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
                    <p>Enter a query to search our content including Features, Pricing, AI Models, and FAQ.</p>
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
