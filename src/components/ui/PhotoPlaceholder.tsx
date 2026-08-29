import { cn } from "@/lib/cn";
import { Camera } from "lucide-react";

export function PhotoPlaceholder({
  label,
  todo,
  className,
  aspect = "photo",
}: {
  label: string;
  todo?: string;
  className?: string;
  aspect?: "photo" | "wide" | "square" | "portrait" | "none";
}) {
  const aspectClass = {
    photo: "aspect-[4/3]",
    wide: "aspect-[16/10]",
    square: "aspect-square",
    portrait: "aspect-[3/4]",
    none: "",
  }[aspect];

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg bg-[#1a1f24] text-white",
        aspectClass,
        className,
      )}
      role="img"
      aria-label={`${label}. Photo coming soon.`}
    >
      <div className="absolute inset-0 grain" />
      <div className="absolute -right-8 -top-8 h-32 w-32 rotate-12 bg-brand/40" />
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent" />
      <div className="relative z-10 flex h-full flex-col items-start justify-end p-5 sm:p-6">
        <Camera className="mb-3 h-7 w-7 text-brand-bright" aria-hidden="true" />
        <p className="font-display text-xl uppercase leading-tight sm:text-2xl">{label}</p>
        {todo ? <p className="mt-2 max-w-sm text-sm text-white/70">{todo}</p> : null}
      </div>
    </div>
  );
}
