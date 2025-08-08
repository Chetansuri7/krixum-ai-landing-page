const testimonials = [
  {
    quote:
      'Krixum is a strong signal of how customer support will evolve. It is an early adopter of the agentic approach, which will become increasingly effective, trusted, and prominent.',
    name: 'Marc Manara',
    company: 'OpenAI',
    img: 'https://backend.chatbase.co/storage/v1/object/public/chatbase/landing/testimonials/marc-manara.webp',
  },
  {
    quote: 'This is awesome, thanks for building it!',
    name: 'Logan Kilpatrick',
    company: 'Google',
    img: 'https://backend.chatbase.co/storage/v1/object/public/chatbase/landing/testimonials/logan-kilpatrick.webp',
  },
  {
    quote: 'An overpowered tool built with the OP stack.',
    name: 'Greg Kogan',
    company: 'Pinecone',
    img: 'https://backend.chatbase.co/storage/v1/object/public/chatbase/landing/testimonials/greg-kogan.webp',
  },
  {
    quote:
      'Our chatbot has been great. Answers questions it knows, delegates to our talent when its stuck, knows how to push clients to the funnel. Krixum is what we use, 10/10 recommend.',
    name: 'Martin Terskin',
    company: 'OfferMarket',
    img: 'https://backend.chatbase.co/storage/v1/object/public/chatbase/landing/testimonials/martin-terskin.webp',
  },
];

const stats = [
  {
    value: '9000+',
    label: 'businesses trust Krixum',
    img: 'https://backend.chatbase.co/_next/static/media/abstract-2.ce7e024b.png',
  },
  {
    value: '140+',
    label: 'countries served',
    img: 'https://backend.chatbase.co/_next/static/media/abstract-1.9639a07f.png',
  },
];

import { SectionHeader } from "~/components/ui/section-header";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="mx-auto flex w-full max-w-7xl px-4 sm:px-6 py-16 bg-gradient-to-br from-white via-indigo-50 to-purple-50 rounded-3xl">
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
  img,
}: {
  quote: string;
  name: string;
  company: string;
  img: string;
}) {
  return (
    <div className="flex h-full flex-col rounded-3xl border border-zinc-200 bg-white/40 backdrop-blur-md shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="grow p-6 sm:p-8">
        <p className="text-lg text-foreground leading-relaxed">
          "{quote}"
        </p>
      </div>
      <div className="mt-auto flex items-center gap-3 p-6 sm:p-8 pt-0">
        <img
          alt={name}
          loading="lazy"
          width={48}
          height={48}
          className="h-12 w-12 rounded-full flex-shrink-0"
          src={img}
        />
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
  img,
}: {
  value: string;
  label: string;
  img: string;
}) {
  return (
    <div className="flex h-full flex-col rounded-3xl border border-zinc-200 bg-white/40 backdrop-blur-md shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="w-full overflow-hidden rounded-t-3xl aspect-[286/167]">
        <img
          alt="abstract image"
          loading="lazy"
          width={286}
          height={167}
          className="h-full w-full object-cover"
          src={img}
        />
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