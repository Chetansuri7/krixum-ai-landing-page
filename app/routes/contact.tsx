import type { Route } from "./+types/contact";
import { FormEvent, useState } from "react";

import { Header } from "~/components/header";
import { FooterSection } from "~/components/footer-section";
import { ContentProvider } from "~/lib/content-context";
import { marketingSections, siteMeta } from "~/lib/site-metadata";
import { SectionHeader } from "~/components/ui/section-header";

const pageDetails = marketingSections.find((section) => section.id === "contact");

const pageTitle = pageDetails ? `${pageDetails.title} – ${siteMeta.name}` : `Contact – ${siteMeta.name}`;

const pageDescription =
  "Talk with the Krixum AI team. Request a demo, discuss enterprise pricing, or get hands-on support for your upcoming launch.";

export function meta({}: Route.MetaArgs) {
  const canonicalUrl = new URL("/contact", siteMeta.siteUrl).toString();

  return [
    { title: pageTitle },
    { name: "description", content: pageDescription },
    { name: "robots", content: "index, follow" },
    { name: "keywords", content: "krixum contact, ai platform demo, ai sales" },
    { property: "og:title", content: pageTitle },
    { property: "og:description", content: pageDescription },
    { property: "og:type", content: "website" },
    { property: "og:url", content: canonicalUrl },
    { property: "og:image", content: new URL(siteMeta.socialImagePath, siteMeta.siteUrl).toString() },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: pageTitle },
    { name: "twitter:description", content: pageDescription },
    { name: "twitter:image", content: new URL(siteMeta.socialImagePath, siteMeta.siteUrl).toString() },
  ];
}

export const links: Route.LinksFunction = () => {
  const canonicalUrl = new URL("/contact", siteMeta.siteUrl).toString();

  return [
    { rel: "canonical", href: canonicalUrl },
    { rel: "alternate", href: canonicalUrl, hrefLang: "x-default" },
  ];
};

const officeLocations = [
  {
    city: "San Francisco, CA",
    description: "Product, design, and go-to-market teams work out of our headquarters in SoMa.",
  },
  {
    city: "Austin, TX",
    description: "Home to our developer relations group and North America support hub.",
  },
  {
    city: "London, UK",
    description: "Security, compliance, and EMEA customer success operate from our London office.",
  },
];

const contactReasons = [
  "Request a live demo",
  "Discuss enterprise pricing",
  "Review security & compliance",
  "Explore partnership opportunities",
  "Get product support",
];

export default function ContactPage() {
  const [formState, setFormState] = useState<{ status: "idle" | "submitting" | "success" | "error"; message?: string }>({
    status: "idle",
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormState({ status: "submitting" });

    // Simulate async submission
    setTimeout(() => {
      setFormState({ status: "success", message: "Thanks! We’ll be in touch within one business day." });
    }, 800);
  };

  return (
    <ContentProvider>
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1">
          <section className="bg-primary-foreground border-b border-border/40">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 py-20 space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-primary/80 font-semibold">Get in touch</p>
              <h1 className="text-4xl sm:text-5xl font-bold text-foreground leading-tight">
                Speak with the Krixum AI team
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl leading-relaxed">
                Whether you are launching your first AI project or rolling AI out company-wide, our product specialists and solution engineers are ready to help.
              </p>
            </div>
          </section>

          <section className="mx-auto max-w-5xl px-4 sm:px-6 py-16 grid gap-10 lg:grid-cols-2">
            <div className="rounded-3xl border border-border bg-card/80 p-8 shadow-sm">
              <SectionHeader
                badge="Contact"
                title="Tell us about your project"
                description="Share a few details and we’ll match you with the right expert."
              />
              <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="fullName" className="text-sm font-medium text-foreground">
                    Full name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
                    placeholder="Ada Lovelace"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Work email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="text-sm font-medium text-foreground">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
                    placeholder="Krixum Labs"
                  />
                </div>
                <div>
                  <label htmlFor="reason" className="text-sm font-medium text-foreground">
                    I’m interested in
                  </label>
                  <select
                    id="reason"
                    name="reason"
                    className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
                  >
                    {contactReasons.map((reason) => (
                      <option key={reason}>{reason}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Tell us more
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
                    placeholder="Share context, timelines, and goals so we can tailor the session."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
                  disabled={formState.status === "submitting" || formState.status === "success"}
                >
                  {formState.status === "submitting" ? "Sending…" : formState.status === "success" ? "Request received" : "Submit request"}
                </button>
                {formState.message ? (
                  <p className="text-sm text-muted-foreground">{formState.message}</p>
                ) : null}
              </form>
            </div>

            <div className="space-y-8">
              <div className="rounded-3xl border border-border bg-primary-foreground p-8 shadow-sm">
                <h2 className="text-lg font-semibold text-foreground">How we partner with you</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  From the first conversation to long-term adoption, you’ll work with specialists who understand your industry. We help model leaders, compliance teams, and executives align on a shared roadmap.
                </p>
                <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span aria-hidden className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    Tailored demos based on your use cases and data requirements
                  </li>
                  <li className="flex items-start gap-2">
                    <span aria-hidden className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    Security & compliance review with detailed documentation
                  </li>
                  <li className="flex items-start gap-2">
                    <span aria-hidden className="mt-1 h-2 w-2 rounded-full bg-primary" />
                    Collaborative rollout plans with adoption best practices
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl border border-border bg-card/80 p-8 shadow-sm">
                <SectionHeader
                  badge="Locations"
                  title="Global teams, local expertise"
                  description="Meet us where your teams build."
                />
                <div className="mt-6 space-y-4">
                  {officeLocations.map((office) => (
                    <div key={office.city}>
                      <h3 className="text-sm font-semibold text-foreground">{office.city}</h3>
                      <p className="text-sm text-muted-foreground">{office.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-border bg-card/80 p-8 shadow-sm">
                <h2 className="text-lg font-semibold text-foreground">Prefer a faster path?</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Jump straight into Krixum AI. You can invite teammates later and we’ll reach out once you’re ready for a guided session.
                </p>
                <a
                  href="https://chat.krixum.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90"
                >
                  Start free trial
                </a>
              </div>
            </div>
          </section>
        </main>
        <FooterSection />
      </div>
    </ContentProvider>
  );
}
