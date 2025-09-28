import { faqData } from "~/lib/faq-data";
import { marketingSections, siteMeta } from "~/lib/site-metadata";

const absoluteUrl = (path: string) =>
  path.startsWith("http")
    ? path
    : `${siteMeta.siteUrl.replace(/\/$/, "")}${path.startsWith("/") ? path : `/${path}`}`;

const graph = [
  {
    "@type": "Organization",
    "@id": `${siteMeta.siteUrl}/#organization`,
    name: siteMeta.name,
    url: siteMeta.siteUrl,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl(siteMeta.logoPath),
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: siteMeta.contactEmail,
        contactType: "customer support",
      },
    ],
    sameAs: [
      "https://www.linkedin.com/company/krixum",
      "https://twitter.com/krixumai",
    ],
  },
  {
    "@type": "WebSite",
    "@id": `${siteMeta.siteUrl}/#website`,
    url: siteMeta.siteUrl,
    name: siteMeta.name,
    inLanguage: siteMeta.locale,
    description: siteMeta.description,
    publisher: { "@id": `${siteMeta.siteUrl}/#organization` },
  },
  {
    "@type": "SoftwareApplication",
    "@id": `${siteMeta.siteUrl}/#software`,
    applicationCategory: "BusinessApplication",
    name: siteMeta.name,
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      price: "0",
      priceCurrency: "USD",
      priceValidUntil: new Date(new Date().getFullYear() + 1, 11, 31).toISOString().split('T')[0],
      seller: {
        "@type": "Organization",
        "@id": `${siteMeta.siteUrl}/#organization`
      }
    },
    image: absoluteUrl(siteMeta.socialImagePath),
    description: siteMeta.description,
    url: siteMeta.siteUrl,
    publisher: { "@id": `${siteMeta.siteUrl}/#organization` },
  },
  {
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  },
  {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteMeta.siteUrl,
      },
      ...marketingSections.map((section, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: section.title,
        item: absoluteUrl(section.path),
      })),
    ],
  },
] as const;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": graph,
};

interface BreadcrumbStructuredDataProps {
  items?: Array<{ name: string; url: string }>;
}

function BreadcrumbStructuredData({ items = [] }: BreadcrumbStructuredDataProps) {
  if (items.length === 0) return null;
  
  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
    />
  );
}

export function StructuredData({ breadcrumbs }: { breadcrumbs?: Array<{ name: string; url: string }> }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <BreadcrumbStructuredData items={breadcrumbs} />
    </>
  );
}
