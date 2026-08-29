"use client";

import { faqs as defaultFaqs, type Faq } from "@/data/faqs";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function FAQ({ items = defaultFaqs }: { items?: Faq[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-paper py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="font-display text-4xl uppercase leading-[0.95] sm:text-5xl">
          Questions, straight answers
        </h2>
        <div className="mt-8 divide-y divide-line border-y border-line">
          {items.map((faq, index) => {
            const expanded = open === index;
            return (
              <div key={faq.question}>
                <h3>
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 py-4 text-left"
                    aria-expanded={expanded}
                    onClick={() => setOpen(expanded ? null : index)}
                  >
                    <span className="font-display text-lg uppercase leading-snug sm:text-xl">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 transition ${expanded ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                {expanded ? <p className="pb-5 text-ink-soft">{faq.answer}</p> : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
