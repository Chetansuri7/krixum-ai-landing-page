import { siteMeta } from '~/lib/site-metadata';

// Pure React Router SEO - No external dependencies

interface EnhancedSEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  openGraph?: {
    title?: string;
    description?: string;
    images?: Array<{
      url: string;
      width?: number;
      height?: number;
      alt?: string;
    }>;
    type?: 'website' | 'article' | 'product';
  };
  breadcrumbs?: Array<{
    name: string;
    url: string;
  }>;
  additionalJsonLd?: any[];
  keywords?: string[];
  pageType?: 'home' | 'product' | 'service' | 'about' | 'contact' | 'pricing' | 'features';
}

export function EnhancedSEO({
  title = siteMeta.title,
  description = siteMeta.description,
  canonical,
  openGraph,
  breadcrumbs = [],
  additionalJsonLd = [],
  keywords = [...siteMeta.keywords],
  pageType = 'home'
}: EnhancedSEOProps) {
  const now = new Date();
  // Use UTC so the JSON-LD stays identical between server and client and avoids hydration warnings.
  const priceValidUntil = new Date(Date.UTC(now.getUTCFullYear() + 1, 11, 31))
    .toISOString()
    .split('T')[0];

  const fullTitle = title.includes(siteMeta.name) ? title : `${title} | ${siteMeta.name}`;
  const ogImage = openGraph?.images?.[0]?.url || new URL(siteMeta.socialImagePath, siteMeta.siteUrl).toString();

  // Enhanced Organization Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'LocalBusiness'],
    '@id': `${siteMeta.siteUrl}/#organization`,
    name: siteMeta.name,
    legalName: siteMeta.name,
    url: siteMeta.siteUrl,
    logo: {
      '@type': 'ImageObject',
      url: new URL(siteMeta.logoPath, siteMeta.siteUrl).toString(),
    },
    image: new URL(siteMeta.socialImagePath, siteMeta.siteUrl).toString(),
    description: siteMeta.description,
    foundingDate: '2024',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        email: siteMeta.contactEmail,
        contactType: 'customer support',
        availableLanguage: 'English',
        areaServed: 'Worldwide',
      },
    ],
    sameAs: [
      'https://www.linkedin.com/company/krixum',
      'https://twitter.com/krixumai',
    ],
    businessType: 'Technology Company',
    knowsAbout: [
      'Service Aggregation',
      'Local Services',
      'Booking Platform',
      'Ride Hailing',
      'Home Services',
      'Quick Commerce',
      'Payment Escrow',
    ],
  };

  // Website Schema with Search Action and Navigation
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteMeta.siteUrl}/#website`,
    url: siteMeta.siteUrl,
    name: siteMeta.name,
    description: siteMeta.description,
    inLanguage: siteMeta.locale,
    publisher: {
      '@id': `${siteMeta.siteUrl}/#organization`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteMeta.siteUrl}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    // Add main navigation for sitelinks
    mainEntity: {
      '@type': 'SiteNavigationElement',
      name: 'Main Navigation',
      hasPart: [
        {
          '@type': 'WebPage',
          '@id': `${siteMeta.siteUrl}/benefits`,
          name: 'Benefits',
          description: 'Why Krixum saves time and reduces hassle',
          url: `${siteMeta.siteUrl}/benefits`,
        },
        {
          '@type': 'WebPage',
          '@id': `${siteMeta.siteUrl}/overview`,
          name: 'Overview',
          description: 'What Krixum does and where it works',
          url: `${siteMeta.siteUrl}/overview`,
        },
        {
          '@type': 'WebPage',
          '@id': `${siteMeta.siteUrl}/highlights`,
          name: 'Real Examples',
          description: 'See how Krixum compares old vs new flows',
          url: `${siteMeta.siteUrl}/highlights`,
        },
        {
          '@type': 'WebPage',
          '@id': `${siteMeta.siteUrl}/how-it-works`,
          name: 'How It Works',
          description: 'From search to booking with protection',
          url: `${siteMeta.siteUrl}/how-it-works`,
        },
        {
          '@type': 'WebPage',
          '@id': `${siteMeta.siteUrl}/faq`,
          name: 'FAQ',
          description: 'Frequently asked questions',
          url: `${siteMeta.siteUrl}/faq`,
        },
        {
          '@type': 'WebPage',
          '@id': `${siteMeta.siteUrl}/contact`,
          name: 'Contact',
          description: 'Reach out for demos, partnerships, or support',
          url: `${siteMeta.siteUrl}/contact`,
        },
        {
          '@type': 'WebPage',
          '@id': `${siteMeta.siteUrl}/about`,
          name: 'About',
          description: 'Meet the team, mission, and trust commitments',
          url: `${siteMeta.siteUrl}/about`,
        },
        {
          '@type': 'WebPage',
          '@id': `${siteMeta.siteUrl}/careers`,
          name: 'Careers',
          description: 'Join the Krixum team',
          url: `${siteMeta.siteUrl}/careers`,
        },
      ],
    },
  };

  // Software Application Schema
  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: siteMeta.name,
    description: siteMeta.description,
    applicationCategory: 'LifestyleApplication',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      price: '0',
      priceCurrency: 'INR',
      priceValidUntil,
      seller: {
        '@id': `${siteMeta.siteUrl}/#organization`,
      },
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '150',
      bestRating: '5',
      worstRating: '1',
    },
    featureList: [
      'Unified service search',
      'Side-by-side comparison',
      'Multi-provider booking',
      'Escrow payment protection',
      'Real-time availability',
      'Verified local providers',
    ],
  };

  // Breadcrumb Schema - Only show on non-home pages
  const breadcrumbSchema = breadcrumbs.length > 0 && pageType !== 'home' ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  } : null;

  // Sitelinks Schema - Only for homepage
  const sitelinksSchema = pageType === 'home' ? {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Krixum Site Navigation',
    description: 'Main navigation pages and sections for Krixum booking platform',
    itemListElement: [
      {
        '@type': 'SiteNavigationElement',
        position: 1,
        name: 'Benefits',
        description: 'Why Krixum saves time and reduces hassle',
        url: `${siteMeta.siteUrl}/benefits`,
      },
      {
        '@type': 'SiteNavigationElement',
        position: 2,
        name: 'Overview',
        description: 'What Krixum does and where it works',
        url: `${siteMeta.siteUrl}/overview`,
      },
      {
        '@type': 'SiteNavigationElement',
        position: 3,
        name: 'Real Examples',
        description: 'See how Krixum compares old vs new flows',
        url: `${siteMeta.siteUrl}/highlights`,
      },
      {
        '@type': 'SiteNavigationElement',
        position: 4,
        name: 'How It Works',
        description: 'From search to booking with protection',
        url: `${siteMeta.siteUrl}/how-it-works`,
      },
      {
        '@type': 'SiteNavigationElement',
        position: 5,
        name: 'FAQ',
        description: 'Frequently asked questions',
        url: `${siteMeta.siteUrl}/faq`,
      },
      {
        '@type': 'SiteNavigationElement',
        position: 6,
        name: 'Contact',
        description: 'Reach out for demos, partnerships, or support',
        url: `${siteMeta.siteUrl}/contact`,
      },
      {
        '@type': 'SiteNavigationElement',
        position: 7,
        name: 'About',
        description: 'Meet the team, mission, and trust commitments',
        url: `${siteMeta.siteUrl}/about`,
      },
      {
        '@type': 'SiteNavigationElement',
        position: 8,
        name: 'Careers',
        description: 'Join the Krixum team',
        url: `${siteMeta.siteUrl}/careers`,
      },
    ],
  } : null;

  return (
    <>
      {/* Standard Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content={siteMeta.name} />
      <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="application-name" content={siteMeta.name} />
      <meta name="theme-color" content="#050816" />
      
      {/* Open Graph */}
      <meta property="og:type" content={openGraph?.type || 'website'} />
      <meta property="og:locale" content={siteMeta.locale} />
      <meta property="og:url" content={canonical || siteMeta.siteUrl} />
      <meta property="og:site_name" content={siteMeta.name} />
      <meta property="og:title" content={openGraph?.title || fullTitle} />
      <meta property="og:description" content={openGraph?.description || description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={siteMeta.twitterHandle} />
      <meta name="twitter:creator" content={siteMeta.twitterHandle} />
      <meta name="twitter:title" content={openGraph?.title || fullTitle} />
      <meta name="twitter:description" content={openGraph?.description || description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Links */}
      {canonical && <link rel="canonical" href={canonical} />}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/logo.svg" sizes="180x180" />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareSchema),
        }}
      />
      
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
      )}

      {sitelinksSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(sitelinksSchema),
          }}
        />
      )}

      {/* Additional JSON-LD */}
      {additionalJsonLd.map((jsonLd, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      ))}
    </>
  );
}
