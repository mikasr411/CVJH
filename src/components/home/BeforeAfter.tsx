"use client";

import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { useState } from "react";

export function BeforeAfterSlider({
  label,
  beforeTodo,
  afterTodo,
}: {
  label: string;
  beforeTodo: string;
  afterTodo: string;
}) {
  const [value, setValue] = useState(54);

  return (
    <figure className="overflow-hidden rounded-lg bg-ink shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden">
        <PhotoPlaceholder
          label={`${label} after`}
          todo={afterTodo}
          aspect="none"
          className="absolute inset-0 h-full w-full rounded-none"
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
        >
          <PhotoPlaceholder
            label={`${label} before`}
            todo={beforeTodo}
            aspect="none"
            className="absolute inset-0 h-full w-full rounded-none"
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
