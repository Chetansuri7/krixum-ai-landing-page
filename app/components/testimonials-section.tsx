const testimonials = [
  {
    quote:
      'Krixum is a strong signal of how customer support will evolve. It is an early adopter of the agentic approach, which will become increasingly effective, trusted, and prominent.',
    name: 'Marc Manara',
    company: 'OpenAI',
    initials: 'MM',
    color: 'from-blue-500 to-purple-600',
  },
  {
    quote: 'This is awesome, thanks for building it!',
    name: 'Logan Kilpatrick',
    company: 'Google',
    initials: 'LK',
    color: 'from-green-500 to-teal-600',
  },
  {
    quote: 'An overpowered tool built with the OP stack.',
    name: 'Greg Kogan',
    company: 'Pinecone',
    initials: 'GK',
    color: 'from-orange-500 to-red-600',
  },
  {
    quote:
      'Our chatbot has been great. Answers questions it knows, delegates to our talent when its stuck, knows how to push clients to the funnel. Krixum is what we use, 10/10 recommend.',
    name: 'Martin Terskin',
    company: 'OfferMarket',
    initials: 'MT',
    color: 'from-purple-500 to-pink-600',
  },
];

const stats = [
  {
    value: '9000+',
    label: 'businesses trust Krixum',
    icon: 'building',
    color: 'from-blue-400 to-cyan-500',
  },
  {
    value: '140+',
    label: 'countries served',
    icon: 'globe',
    color: 'from-green-400 to-emerald-500',
  },
];

import { SectionHeader } from "~/components/ui/section-header";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="mx-auto flex w-full max-w-7xl px-4 sm:px-6 py-8 bg-gradient-to-br from-white via-indigo-50 to-purple-50 rounded-3xl">
      <div className="flex flex-col gap-4 w-full">
        <SectionHeader
          badge="Testimonials"
          title="What people say"
          description="With over 9000 clients served, here's what they have to say"
          centered
        />
        {/* Desktop grid */}
        <div className="hidden grid-cols-12 gap-6 pt-8 lg:grid">
          <div className="h-full col-span-6 flex flex-col">
            <TestimonialCard {...testimonials[0]} />
          </div>
          <div className="h-full col-span-3 flex flex-col">
            <TestimonialCard {...testimonials[1]} />
          </div>
          <div className="h-full col-span-3 flex flex-col">
            <StatCard {...stats[0]} />
          </div>
          <div className="h-full col-span-3 flex flex-col">
            <StatCard {...stats[1]} />
          </div>
          <div className="h-full col-span-3 flex flex-col">
            <TestimonialCard {...testimonials[2]} />
          </div>
          <div className="h-full col-span-6 flex flex-col">
            <TestimonialCard {...testimonials[3]} />
          </div>
        </div>
        {/* Tablet grid */}
        <div className="hidden grid-cols-3 gap-6 pt-8 md:grid lg:hidden">
          <div className="h-full col-span-2 flex flex-col">
            <TestimonialCard {...testimonials[0]} />
          </div>
          <div className="h-full col-span-1 flex flex-col">
            <TestimonialCard {...testimonials[1]} />
          </div>
          <div className="h-full col-span-1 flex flex-col">
            <StatCard {...stats[0]} />
          </div>
          <div className="h-full col-span-1 flex flex-col">
            <StatCard {...stats[1]} />
          </div>
          <div className="h-full col-span-1 flex flex-col">
            <TestimonialCard {...testimonials[2]} />
          </div>
          <div className="h-full col-span-2 flex flex-col">
            <TestimonialCard {...testimonials[3]} />
          </div>
        </div>
        {/* Mobile stack */}
        <div className="flex flex-col gap-4 pt-8 md:hidden">
          <TestimonialCard {...testimonials[0]} />
          <TestimonialCard {...testimonials[1]} />
          <StatCard {...stats[0]} />
          <StatCard {...stats[1]} />
          <TestimonialCard {...testimonials[2]} />
          <TestimonialCard {...testimonials[3]} />
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  quote,
  name,
  company,
  initials,
  color,
}: {
  quote: string;
  name: string;
  company: string;
  initials: string;
  color: string;
}) {
  return (
    <div className="flex h-full flex-col rounded-3xl border border-border bg-card/40 backdrop-blur-md shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="grow p-6 sm:p-8">
        <div className="mb-4">
          <svg className="w-8 h-8 text-primary/60" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
          </svg>
        </div>
        <p className="text-lg text-foreground leading-relaxed">
          {quote}
        </p>
      </div>
      <div className="mt-auto flex items-center gap-3 p-6 sm:p-8 pt-0">
        <div className={`h-12 w-12 rounded-full flex-shrink-0 bg-gradient-to-br ${color} flex items-center justify-center text-white font-semibold`}>
          {initials}
        </div>
        <div className="flex flex-col gap-1 min-w-0">
          <div className="font-semibold text-foreground truncate">{name}</div>
          <div className="text-sm text-muted-foreground truncate">{company}</div>
        </div>
      </div>
    </div>
  );
}

function StatCard({
  value,
  label,
  icon,
  color,
}: {
  value: string;
  label: string;
  icon: string;
  color: string;
}) {
  return (
    <div className="flex h-full flex-col rounded-3xl border border-border bg-card/40 backdrop-blur-md shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="w-full overflow-hidden rounded-t-3xl aspect-[286/167] bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <defs>
              <pattern id={`pattern-${icon}`} width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="1.5" fill="currentColor" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill={`url(#pattern-${icon})`} />
          </svg>
        </div>
        {/* Icon */}
        <div className={`relative w-16 h-16 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center shadow-lg`}>
          {icon === 'building' && (
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          )}
          {icon === 'globe' && (
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
        </div>
      </div>
      <div className="flex flex-col justify-center p-6 sm:p-8">
        <div className="font-bold text-3xl sm:text-4xl text-foreground leading-tight">
          {value}
        </div>
        <div className="text-lg text-muted-foreground">{label}</div>
      </div>
    </div>
  );
}