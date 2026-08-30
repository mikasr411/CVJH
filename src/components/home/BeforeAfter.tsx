"use client";

import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import Image from "next/image";
import { useState } from "react";

function Frame({
  src,
  alt,
  fallbackLabel,
  fallbackTodo,
}: {
  src: string | null;
  alt: string;
  fallbackLabel: string;
  fallbackTodo: string;
}) {
  if (!src) {
    return (
      <PhotoPlaceholder
        label={fallbackLabel}
        todo={fallbackTodo}
        aspect="none"
        className="absolute inset-0 h-full w-full rounded-none"
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(min-width: 768px) 50vw, 100vw"
      className="object-cover object-center"
    />
  );
}

export function BeforeAfterSlider({
  label,
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  beforeTodo,
  afterTodo,
  aspect = "landscape",
}: {
  label: string;
  beforeSrc: string | null;
  afterSrc: string | null;
  beforeAlt: string;
  afterAlt: string;
  beforeTodo: string;
  afterTodo: string;
  aspect?: "landscape" | "portrait";
}) {
  const [value, setValue] = useState(54);
  const frameClass = aspect === "portrait" ? "aspect-[3/4]" : "aspect-[4/3]";

  return (
    <figure className="overflow-hidden rounded-lg bg-ink shadow-lg">
      <div className={`relative overflow-hidden ${frameClass}`}>
        <Frame src={afterSrc} alt={afterAlt} fallbackLabel={`${label} after`} fallbackTodo={afterTodo} />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
        >
          <Frame
            src={beforeSrc}
            alt={beforeAlt}
            fallbackLabel={`${label} before`}
            fallbackTodo={beforeTodo}
          />
        </div>
        <div
          className="absolute inset-y-0 z-10 w-1 bg-white"
          style={{ left: `${value}%` }}
          aria-hidden="true"
        />
        <span className="absolute left-3 top-3 z-10 rounded bg-ink px-2 py-1 font-display text-xs uppercase tracking-wider text-white">
          Before
        </span>
        <span className="absolute right-3 top-3 z-10 rounded bg-brand px-2 py-1 font-display text-xs uppercase tracking-wider text-white">
          After
        </span>
      </div>
      <figcaption className="bg-ink px-4 py-3">
        <label className="block">
          <span className="font-display text-sm uppercase tracking-wider text-white">{label}</span>
          <input
            type="range"
            min={4}
            max={96}
            value={value}
            onChange={(event) => setValue(Number(event.target.value))}
            className="mt-2 w-full accent-brand-bright"
            aria-label={`Reveal after photo for ${label}`}
          />
        </label>
      </figcaption>
    </figure>
  );
}
