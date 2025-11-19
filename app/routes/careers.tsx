import type { FormEvent } from "react";
import { useState } from "react";

import { Header } from "~/components/header";
import { FooterSection } from "~/components/footer-section";
import { ContentProvider } from "~/lib/content-context";
import { siteMeta } from "~/lib/site-metadata";
import { EnhancedSEO } from "~/components/seo/enhanced-seo";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";
import { Button } from "~/components/ui/button";

const pageTitle = `Careers – ${siteMeta.name}`;
const pageDescription =
  "We are not hiring right now, but our waitlist keeps interested people informed when new roles open.";

export default function CareersPage() {
  const [formState, setFormState] = useState<{
    status: "idle" | "submitting" | "success";
    message?: string;
  }>({ status: "idle" });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formState.status === "submitting") {
      return;
    }
    setFormState({ status: "submitting" });
    setTimeout(() => {
      setFormState({
        status: "success",
        message:
          "Thanks for your interest—whenever we have open roles, you'll be among the first to know.",
      });
    }, 600);
  };

  return (
    <ContentProvider>
      <EnhancedSEO
        title={pageTitle}
        description={pageDescription}
        canonical={new URL("/careers", siteMeta.siteUrl).toString()}
        keywords={["krixum careers", "krixum jobs", "join krixum ai"]}
        pageType="about"
        breadcrumbs={[
          { name: "Home", url: siteMeta.siteUrl },
          { name: "Careers", url: `${siteMeta.siteUrl}/careers` },
        ]}
        openGraph={{
          title: pageTitle,
          description: pageDescription,
          type: "website",
        }}
      />

      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 bg-background">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 py-16 space-y-10">
            <section className="space-y-4">
              <p className="text-sm uppercase tracking-widest text-muted-foreground">
                Careers
              </p>
              <h1 className="text-3xl font-bold text-foreground">
                We will list open roles when hiring resumes
              </h1>
              <p className="text-base text-muted-foreground">
                Krixum AI is currently not actively hiring, but we welcome you to share
                your details and how you’d like to help. We’ll notify the people on our list
                the moment new opportunities open up.
              </p>
            </section>

            <form
              onSubmit={handleSubmit}
              className="space-y-6 rounded-3xl border border-border bg-card p-6 sm:p-8"
            >
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-semibold text-foreground">
                  Full name
                </label>
                <Input id="name" name="name" required placeholder="Your full name" />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-foreground">
                  Email address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@email.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="link" className="text-sm font-semibold text-foreground">
                  Portfolio / LinkedIn
                </label>
                <Input
                  id="link"
                  name="link"
                  placeholder="https://linkedin.com/in/yourname"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-foreground">
                  Tell us where you’d like to contribute
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="AI research, partnerships, engineering, growth—whatever inspires you."
                />
              </div>

              <div className="flex items-center justify-between gap-4">
                <Button
                  type="submit"
                  disabled={formState.status === "submitting" || formState.status === "success"}
                >
                  {formState.status === "submitting" ? "Sending…" : "Save my interest"}
                </Button>
                {formState.message && (
                  <p className="text-sm text-green-600">{formState.message}</p>
                )}
              </div>
            </form>
          </div>
        </main>
        <FooterSection />
      </div>
    </ContentProvider>
  );
}
