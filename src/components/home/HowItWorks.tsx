import { QuoteButton } from "@/components/conversion/CtaButtons";

const steps = [
  {
    num: "01",
    title: "Get your quote",
    copy: "Call, request a quote online, or send photos of what needs to go.",
  },
  {
    num: "02",
    title: "We show up & load it",
    copy: "Point to what you want removed. Our crew handles the lifting and loading.",
  },
  {
    num: "03",
    title: "Your junk is gone",
    copy: "We haul everything away and leave the area cleaner than we found it.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="max-w-3xl font-display text-4xl uppercase leading-[0.95] sm:text-5xl lg:text-6xl">
          Junk removal shouldn&apos;t be complicated
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.num} className="border-t-4 border-brand pt-5">
              <p className="font-display text-5xl text-brand">{step.num}</p>
              <h3 className="mt-3 font-display text-2xl uppercase">{step.title}</h3>
              <p className="mt-3 text-ink-soft">{step.copy}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <QuoteButton>Get Started</QuoteButton>
        </div>
      </div>
    </section>
  );
}
