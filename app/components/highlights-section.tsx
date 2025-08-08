import React from "react";
import { SectionHeader } from "~/components/ui/section-header";

export function HighlightsSection() {
  return (
    <section id="highlights" className="mx-auto flex w-full max-w-7xl px-4 sm:px-6 py-16">
      <div className="flex flex-col gap-4 w-full">
        <SectionHeader
          badge="Highlights"
          title="The complete platform for AI support agents"
          description="Krixum is designed for building AI support agents that solve your customers' hardest problems while improving business outcomes."
        />
        
        <div className="grid gap-6 pt-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Purpose-built for LLMs */}
          <div className="relative flex flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-background transition-all duration-300 hover:border-zinc-300 hover:shadow-lg">
            <div className="aspect-square w-full bg-muted flex items-center justify-center">
              <div className="w-24 h-24 bg-primary rounded-2xl flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
            </div>
            <div className="space-y-3 p-6">
              <h3 className="font-semibold text-lg text-foreground">Purpose-built for LLMs</h3>
              <p className="text-muted-foreground leading-relaxed">
                Language models with reasoning capabilities for effective responses to complex queries.
              </p>
            </div>
          </div>

          {/* Designed for simplicity */}
          <div className="relative flex flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-background transition-all duration-300 hover:border-zinc-300 hover:shadow-lg">
            <div className="aspect-square w-full bg-muted flex items-center justify-center">
              <div className="w-24 h-24 bg-primary rounded-2xl flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
            </div>
            <div className="space-y-3 p-6">
              <h3 className="font-semibold text-lg text-foreground">Designed for simplicity</h3>
              <p className="text-muted-foreground leading-relaxed">
                Create, manage, and deploy AI Agents easily, even without technical skills.
              </p>
            </div>
          </div>

          {/* Engineered for security */}
          <div className="relative flex flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-background transition-all duration-300 hover:border-zinc-300 hover:shadow-lg md:col-span-2 lg:col-span-1">
            <div className="aspect-square w-full bg-muted flex items-center justify-center">
              <div className="w-24 h-24 bg-primary rounded-2xl flex items-center justify-center">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
            <div className="space-y-3 p-6">
              <h3 className="font-semibold text-lg text-foreground">Engineered for security</h3>
              <p className="text-muted-foreground leading-relaxed">
                Enjoy peace of mind with robust encryption and strict compliance standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}