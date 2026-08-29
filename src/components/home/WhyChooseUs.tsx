import { MapPin, Users, Truck, BadgeDollarSign, Clock, Building2 } from "lucide-react";

const reasons = [
  {
    title: "Local Company",
    copy: "We're based right here in the Central Valley.",
    icon: MapPin,
  },
  {
    title: "Real People",
    copy: "You're dealing with a local crew, not a national call center.",
    icon: Users,
  },
  {
    title: "Full-Service",
    copy: "We lift it, load it, haul it, and clean up afterward.",
    icon: Truck,
  },
  {
    title: "Upfront Pricing",
    copy: "Know what you're paying before the work begins.",
    icon: BadgeDollarSign,
  },
  {
    title: "Fast Scheduling",
    copy: "We make getting junk removed simple.",
    icon: Clock,
  },
  {
    title: "Residential + Commercial",
    copy: "From one couch to large property cleanouts.",
    icon: Building2,
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-ink py-16 text-white sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="max-w-3xl font-display text-4xl uppercase leading-[0.95] sm:text-5xl lg:text-6xl">
          Why Central Valley chooses us
        </h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <article key={reason.title} className="rounded-lg border border-white/10 bg-white/5 p-6">
              <reason.icon className="h-7 w-7 text-brand-bright" aria-hidden="true" />
              <h3 className="mt-4 font-display text-2xl uppercase">{reason.title}</h3>
              <p className="mt-2 text-white/75">{reason.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
