import { useState } from "react";
import { Link } from "react-router";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Badge } from "~/components/ui/badge";
import { Separator } from "~/components/ui/separator";
import { AnimatedTabs } from "~/components/ui/animated-tabs";
import { SectionHeader } from "~/components/ui/section-header";
import { pricingPlans } from "~/lib/content-data";
import React from "react";

export function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">(
    "monthly"
  );

  const plans = pricingPlans.map((plan) => ({
    ...plan,
    price:
      billingPeriod === "yearly" && (plan as any).yearlyPrice
        ? (plan as any).yearlyPrice
        : plan.price,
    period:
      billingPeriod === "yearly" &&
        plan.period !== "forever" &&
        plan.period !== "contact us"
        ? "month"
        : plan.period,
    savings:
      billingPeriod === "yearly" &&
        (plan as any).yearlyPrice &&
        plan.price !== "Custom" &&
        plan.price !== "$0"
        ? Math.round(
          ((parseInt(plan.price.replace("$", "")) -
            parseInt((plan as any).yearlyPrice.replace("$", ""))) /
            parseInt(plan.price.replace("$", ""))) *
          100
        )
        : 0,
  }));

  return (
    <section
      id="pricing"
      className="mx-auto flex w-full max-w-7xl px-4 sm:px-6 py-6 lg:py-8"
    >
      <div className="flex flex-col gap-4 w-full">
        <SectionHeader
          badge="Pricing"
          title="Predictable pricing, scalable plans"
          description="Designed for every stage of your journey."
        />

        {/* Billing Toggle */}
        <div className="my-3 flex w-full flex-col items-center justify-center gap-3">
          <AnimatedTabs
            tabs={[
              { id: "monthly", label: "Monthly" },
              {
                id: "yearly",
                label: `Yearly (Save 20%)`,
              },
            ]}
            activeTab={billingPeriod}
            onTabChange={(tab) => setBillingPeriod(tab as "monthly" | "yearly")}
          />
        </div>

        {/* Pricing Cards */}
        <div className="pt-6 flex w-full flex-col gap-6 rounded-3xl lg:flex-row lg:items-stretch lg:gap-0 lg:border lg:bg-background">
          {plans.map((plan, index) => (
            <React.Fragment key={plan.name}>
              <Card
                className={`relative flex flex-1 flex-col justify-between rounded-3xl p-0 shadow-none lg:border-none ${plan.popular
                    ? "mt-6 rounded-t-none lg:mt-0 lg:rounded-t-3xl border-2 border-primary/20"
                    : "border"
                  }`}
              >
                <div className="relative h-full">
                  {plan.popular && (
                    <Badge className="absolute -top-7 right-0 ml-1 h-7 w-full rounded-xl rounded-b-none px-2 py-1 text-center font-semibold text-xs bg-primary text-primary-foreground border-transparent">
                      Popular
                    </Badge>
                  )}

                  <div className="flex flex-col gap-4">
                    {/* Card Header */}
                    <CardHeader className="flex flex-col space-y-1 p-5 pb-2">
                      <CardTitle className="text-base leading-none tracking-tight flex flex-row items-center justify-start gap-2 font-medium">
                        <span className="text-lg">{(plan as any).icon}</span>
                        <p className="font-semibold text-base">{plan.name}</p>
                      </CardTitle>
                    </CardHeader>

                    {/* Card Content */}
                    <CardContent className="flex flex-col gap-4 p-0">
                      {/* Pricing */}
                      <div className="flex w-full flex-col items-start justify-between gap-3 px-5">
                        <div className="flex flex-col gap-1">
                          <div className="flex flex-row items-center gap-2 overflow-hidden">
                            <span className="flex font-semibold text-3xl tabular-nums leading-none tracking-tight">
                              {plan.price === "Custom" ? (
                                <span className="text-2xl">Let's Talk</span>
                              ) : (
                                <>
                                  $
                                  <span className="transition-all duration-300">
                                    {plan.price.replace("$", "")}
                                  </span>
                                </>
                              )}
                            </span>
                            {plan.savings > 0 && billingPeriod === "yearly" && (
                              <div className="ml-2 px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full animate-in fade-in-0 duration-200">
                                -{plan.savings}%
                              </div>
                            )}
                          </div>
                          {plan.period !== "contact us" && (
                            <div className="line-clamp-1 font-medium text-muted-foreground text-xs tabular-nums">
                              per {plan.period}
                              {billingPeriod === "yearly" &&
                                plan.period === "month" && (
                                  <span className="text-green-600">
                                    {" "}
                                    (billed yearly)
                                  </span>
                                )}
                            </div>
                          )}
                        </div>

                        {/* CTA Button */}
                        {plan.popular ? (
                          <a
                            href="https://chat.krixum.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-full h-10 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-primary to-purple-600 rounded-lg hover:from-primary/90 hover:to-purple-600/90 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer"
                          >
                            {plan.cta}
                          </a>
                        ) : (
                          <a
                            href="https://chat.krixum.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-full h-10 px-4 py-2 rounded-lg border bg-transparent shadow-inner-sm hover:bg-accent hover:text-accent-foreground text-sm cursor-pointer transition-colors"
                          >
                            {plan.cta}
                          </a>
                        )}
                      </div>

                      {/* Separator */}
                      <Separator className="bg-secondary" />

                      {/* Features */}
                      <ul className="flex flex-col gap-3 px-5 pb-6 font-medium text-sm">
                        {index > 0 && (
                          <span className="flex items-center gap-1 font-medium text-xs text-muted-foreground">
                            Everything in {plans[index - 1].name} +
                          </span>
                        )}
                        {plan.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex flex-row items-start gap-2 font-normal text-sm"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-check size-4 shrink-0 mt-0.5"
                              aria-hidden="true"
                            >
                              <path d="M20 6 9 17l-5-5"></path>
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                        {plan.name === "Free" && (
                          <p className="text-muted-foreground text-xs mt-2">
                            AI agents get deleted after 14 days of inactivity on
                            the free plan.
                          </p>
                        )}
                      </ul>
                    </CardContent>
                  </div>
                </div>
              </Card>

              {/* Separator between cards */}
              {index < plans.length - 1 && (
                <div className="hidden w-px self-stretch bg-border lg:block"></div>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-6">
          <Link
            to="/pricing"
            className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90"
          >
            Compare full pricing details
          </Link>
          <Link
            to="/faq"
            className="inline-flex items-center justify-center rounded-xl border border-border px-5 py-2.5 text-sm font-medium text-foreground hover:bg-muted/70"
          >
            Read billing FAQ
          </Link>
        </div>
      </div>
    </section>
  );
}
