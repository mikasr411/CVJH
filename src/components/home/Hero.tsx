import { CallButton, QuoteButton } from "@/components/conversion/CtaButtons";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { images } from "@/data/images";
import { Check } from "lucide-react";
import Image from "next/image";

const trustPoints = ["Upfront Pricing", "Full-Service Hauling", "Locally Owned"];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-white">
      <div className="absolute inset-0 hidden lg:block">
        <div className="absolute inset-y-0 right-0 w-[52%] bg-[#1b2128]" />
        <div className="absolute right-[48%] top-0 h-full w-24 -skew-x-6 bg-brand" />
      </div>
      <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
        <div>
          <p className="font-display text-xs tracking-[0.22em] text-brand-bright sm:text-sm">
            LOCAL JUNK REMOVAL • CENTRAL VALLEY, CA
          </p>
          <h1 className="mt-4 font-display text-6xl uppercase leading-[0.88] sm:text-7xl lg:text-8xl">
            Junk Gone.
            <span className="block text-brand-bright">Space Back.</span>
          </h1>
          <p className="mt-6 max-w-xl text-xl font-medium text-white">
            Fast, professional junk removal throughout Fresno and the Central Valley.
          </p>
          <p className="mt-3 max-w-xl text-base leading-relaxed text-white/75">
            Whether it&apos;s an old couch, a packed garage, yard debris, or a full property
            cleanout, our crew handles the lifting, loading, hauling, and cleanup.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <QuoteButton size="xl" />
            <CallButton size="xl" variant="secondary" />
          </div>
          <ul className="mt-8 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-2 text-sm text-white/90">
                <Check className="h-4 w-4 text-brand-bright" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        </div>
        {images.hero.src ? (
          <div className="relative aspect-[4/3] min-h-[280px] overflow-hidden rounded-lg lg:min-h-[460px]">
            <Image
              src={images.hero.src}
              alt={images.hero.alt}
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover object-center"
            />
          </div>
        ) : (
          <PhotoPlaceholder
            label="Crew loading junk into the trailer"
            todo={images.hero.todo}
            aspect="photo"
            className="min-h-[280px] lg:min-h-[460px]"
          />
        )}
      </div>
    </section>
  );
}
