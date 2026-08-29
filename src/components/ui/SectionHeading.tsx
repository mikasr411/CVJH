import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div className={cn(align === "center" && "text-center mx-auto max-w-3xl")}>
      {eyebrow ? (
        <p
          className={cn(
            "font-display text-xs sm:text-sm tracking-[0.22em] uppercase mb-3",
            light ? "text-brand-bright" : "text-brand",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-display text-4xl sm:text-5xl lg:text-6xl uppercase leading-[0.95]",
          light ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            "mt-4 text-lg sm:text-xl max-w-2xl",
            align === "center" && "mx-auto",
            light ? "text-white/80" : "text-ink-soft",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
