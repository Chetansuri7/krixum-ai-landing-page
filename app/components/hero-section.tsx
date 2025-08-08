import { CreditCard } from "lucide-react";
import { Button } from "~/components/ui/button";
import { useHeroContent } from "~/lib/content-context";

export function HeroSection() {
  const heroContent = useHeroContent();

  return (
    <div className="relative w-full flex-col gap-12 overflow-hidden py-10">
      <section className="mx-auto flex max-w-7xl px-6 relative w-full flex-col gap-12 overflow-hidden py-0">
        <div className="container relative mx-auto grid items-center gap-6 px-4 sm:px-6 py-16 lg:grid-cols-2">
          {/* Left Content */}
          <div className="flex flex-col gap-6">
            <h1 className="font-medium text-[42px] text-foreground leading-[2.9rem] tracking-tight lg:text-5xl lg:text-[4.4rem] lg:leading-[5rem]">
              {heroContent.headline}
            </h1>
            <p className="text-[16px] text-muted-foreground md:text-xl lg:w-[90%]">
              {heroContent.description}
            </p>
            <div className="mt-2 flex flex-col gap-4 md:flex-row md:items-center">
              <div className="relative mb-2 inline-block">
                <div className="absolute bottom-2 h-4 w-full translate-y-full rounded-b-lg bg-gradient-to-br from-[#FB923C] via-[#F472B6] to-[#E879F9]"></div>
                <Button asChild size="lg" className="relative h-12 w-full px-8 text-lg bg-primary text-white hover:bg-primary rounded-xl shadow-inner-sm">
                  <a
                    href="https://chat.krixum.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sign In / Try for Free
                  </a>
                </Button>
              </div>
              <Button asChild variant="outline" size="lg" className="h-12 px-8 text-lg rounded-xl">
                <a
                  href="#pricing"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('pricing')?.scrollIntoView({ 
                      behavior: 'smooth',
                      block: 'start'
                    });
                  }}
                >
                  View Pricing
                </a>
              </Button>
              <div className="flex items-center gap-2 self-center font-medium text-muted-foreground text-sm">
                <CreditCard className="h-4 w-4" />
                No credit card required
              </div>
            </div>
          </div>

          {/* Right Content - Video */}
          <div className="group relative aspect-[0.939] w-full overflow-hidden rounded-3xl">
            <div
              className="aspect-[0.939] w-full rounded-3xl bg-muted flex items-center justify-center"
            >
              <span className="text-muted-foreground font-semibold text-lg">Video Placeholder</span>
            </div>
          </div>
        </div>

        {/* Trusted by Section */}
        <div className="flex flex-col items-center gap-6 text-primary lg:flex-row">
          <p className="font-medium text-lg">
            <span className="font-bold">Trusted by {heroContent.trustCount} </span>
            <span>{heroContent.trustMessage}</span>
          </p>

          {/* Company Logos */}
          <div className="relative overflow-x-hidden md:overflow-x-visible">
            {/* Mobile Marquee */}
            <div className="relative flex md:hidden">
              <div className="group flex overflow-hidden p-2 gap-4 animate-marquee">
                <div className="flex shrink-0 justify-around gap-4">
                  <div className="inline-flex h-10 shrink-0 items-center gap-2 rounded-full bg-muted p-1">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 bg-background">
                      <span className="text-xs font-medium">S</span>
                    </div>
                    <div className="pr-2 font-medium text-sm text-foreground">
                      Siemens
                    </div>
                  </div>
                  <div className="inline-flex h-10 shrink-0 items-center gap-2 rounded-full bg-muted p-1">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 bg-background">
                      <span className="text-xs font-medium">P</span>
                    </div>
                    <div className="pr-2 font-medium text-sm text-foreground">
                      Postman
                    </div>
                  </div>
                  <div className="inline-flex h-10 shrink-0 items-center gap-2 rounded-full bg-muted p-1">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 bg-background">
                      <span className="text-xs font-medium">P</span>
                    </div>
                    <div className="pr-2 font-medium text-sm text-foreground">
                      PwC
                    </div>
                  </div>
                  <div className="inline-flex h-10 shrink-0 items-center gap-2 rounded-full bg-muted p-1">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 bg-background">
                      <span className="text-xs font-medium">A</span>
                    </div>
                    <div className="pr-2 font-medium text-sm text-foreground">
                      Alpian
                    </div>
                  </div>
                  <div className="inline-flex h-10 shrink-0 items-center gap-2 rounded-full bg-muted p-1">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 bg-background">
                      <span className="text-xs font-medium">O</span>
                    </div>
                    <div className="pr-2 font-medium text-sm text-foreground">
                      Opal
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Logos */}
            <div className="hidden flex-row items-center gap-4 md:flex">
              <div className="inline-flex h-10 items-center gap-2 rounded-full bg-muted p-1">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 bg-background">
                  <span className="text-xs font-medium">S</span>
                </div>
                <div className="pr-2 font-medium text-sm text-foreground">
                  Siemens
                </div>
              </div>
              <div className="inline-flex h-10 items-center gap-2 rounded-full bg-muted p-1">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 bg-background">
                  <span className="text-xs font-medium">P</span>
                </div>
                <div className="pr-2 font-medium text-sm text-foreground">
                  Postman
                </div>
              </div>
              <div className="inline-flex h-10 items-center gap-2 rounded-full bg-muted p-1">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 bg-background">
                  <span className="text-xs font-medium">P</span>
                </div>
                <div className="pr-2 font-medium text-sm text-foreground">
                  PwC
                </div>
              </div>
              <div className="inline-flex h-10 items-center gap-2 rounded-full bg-muted p-1">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 bg-background">
                  <span className="text-xs font-medium">A</span>
                </div>
                <div className="pr-2 font-medium text-sm text-foreground">
                  Alpian
                </div>
              </div>
              <div className="inline-flex h-10 items-center gap-2 rounded-full bg-muted p-1">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 bg-background">
                  <span className="text-xs font-medium">O</span>
                </div>
                <div className="pr-2 font-medium text-sm text-foreground">
                  Opal
                </div>
              </div>
              <div className="inline-flex h-10 items-center gap-2 rounded-full bg-muted p-1">
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-zinc-200 bg-background">
                  <span className="text-xs font-medium">A</span>
                </div>
                <div className="pr-2 font-medium text-sm text-foreground">
                  Al Baraka
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
