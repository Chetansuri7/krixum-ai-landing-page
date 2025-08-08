const badges = [
  {
    alt: "soc-2",
    img: "https://backend.chatbase.co/_next/static/media/soc-2.b0be2fdf.png",
  },
  {
    alt: "gdpr",
    img: "https://backend.chatbase.co/_next/static/media/gdpr.266a3ae9.png",
  },
];

const features = [
  {
    title: "Your data stays yours",
    description:
      "Your data is only accessible to your AI agent and is never used to train models.",
    img: "https://backend.chatbase.co/_next/static/media/database.76920a53.png",
    imgClass: "-bottom-6 absolute right-4 h-auto w-[100px] lg:right-8 lg:w-[132px] sm:w-[112px]",
  },
  {
    title: "Data encryption",
    description:
      "All data is encrypted at rest and in transit. We use industry-standard encryption algorithms.",
    img: "https://backend.chatbase.co/_next/static/media/lock.50d0dced.png",
    imgClass: "-bottom-6 absolute right-4 h-auto w-[100px] lg:right-8 lg:w-[132px] sm:w-[112px]",
  },
  {
    title: "Secure integrations",
    description:
      "We use verified variables to ensure users can access only their own data in your systems.",
    img: "https://backend.chatbase.co/_next/static/media/cube.289385bc.png",
    imgClass: "-bottom-0 absolute right-4 h-auto w-[100px] lg:right-8 lg:w-[132px] sm:w-[112px]",
  },
];

import { SectionHeader } from "~/components/ui/section-header";

export function SecuritySection() {
  return (
    <section id="security" className="mx-auto w-full max-w-7xl px-4 sm:px-6 py-16">
      <div className="flex flex-col gap-4 w-full">
        <div className="flex flex-col items-start gap-6 lg:flex-row">
          <div className="flex w-full flex-1 flex-col items-start gap-4">
            <SectionHeader
              badge="Security"
              title="Enterprise-grade security & privacy"
              description="We take security and compliance seriously. Krixum is SOC 2 Type II and GDPR compliant, trusted by thousands of businesses to build secure and compliant AI Agents."
            />
            <div className="flex flex-row gap-3 sm:gap-4 pt-4">
              {badges.map((badge) => (
                <img
                  key={badge.alt}
                  alt={badge.alt}
                  loading="lazy"
                  width={100}
                  height={100}
                  className="aspect-square w-[60px] sm:w-[75px] md:w-[100px]"
                  src={badge.img}
                />
              ))}
            </div>
          </div>
          <div className="w-full flex-1 rounded-3xl border border-zinc-200 bg-background flex flex-col gap-0 shadow-sm">
            {features.map((feature, idx) => (
              <div
                key={feature.title}
                className={`relative flex w-full flex-col gap-3 overflow-hidden border-zinc-200 ${idx < features.length - 1 ? "border-b" : ""} p-6 sm:p-8`}
              >
                <h3 className="font-semibold text-lg text-foreground">{feature.title}</h3>
                <p className="w-4/5 sm:w-3/5 lg:w-[70%] text-muted-foreground leading-relaxed">{feature.description}</p>
                <img
                  alt={feature.title}
                  loading="lazy"
                  width={132}
                  height={100}
                  className="absolute -bottom-3 sm:-bottom-6 right-2 sm:right-4 lg:right-8 h-auto w-[80px] sm:w-[100px] lg:w-[132px]"
                  src={feature.img}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}