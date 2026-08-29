import { QuoteButton, TextPhotosButton } from "@/components/conversion/CtaButtons";
import { photoQuoteSmsBody } from "@/lib/business";
import { Camera } from "lucide-react";

export function PhotoQuoteCTA() {
  return (
    <section className="bg-brand py-14 text-white sm:py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 font-display text-xs uppercase tracking-[0.22em] text-white/80">
            <Camera className="h-4 w-4" aria-hidden="true" /> Fastest way on a phone
          </p>
          <h2 className="mt-3 font-display text-4xl uppercase leading-[0.95] sm:text-5xl lg:text-6xl">
            Want a fast quote?
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Take a few photos of your junk and send them to us. We&apos;ll review what you have and help you figure out the next step.
          </p>
        </div>
        <div className="flex w-full max-w-md flex-col gap-3">
          <TextPhotosButton variant="white" size="xl" className="w-full" body={photoQuoteSmsBody}>
            Send Photos
          </TextPhotosButton>
          <QuoteButton
            href="/quote?photos=1"
            event="photo_quote_click"
            variant="dark"
            size="xl"
            className="w-full"
          >
            Request a Quote
          </QuoteButton>
        </div>
      </div>
    </section>
  );
}
