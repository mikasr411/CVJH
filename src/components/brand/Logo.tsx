import { business } from "@/data/business";
import { cn } from "@/lib/cn";
import Link from "next/link";

export function Logo({
  className,
  compact = false,
  inverted = false,
}: {
  className?: string;
  compact?: boolean;
  inverted?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn("flex items-center gap-3 no-underline", className)}
      aria-label={`${business.name} home`}
    >
      <span
        className={cn(
          "flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-brand text-white shadow-sm",
          compact && "h-10 w-10",
        )}
        aria-hidden="true"
      >
        <svg viewBox="0 0 32 32" className="h-7 w-7" fill="none">
          <path
            d="M4 20h24l-2 6H6l-2-6Z"
            fill="currentColor"
            opacity="0.95"
          />
          <path d="M7 20V12h5l3-4h8v12" stroke="currentColor" strokeWidth="2.2" />
          <circle cx="10" cy="26.5" r="2.2" fill="#111418" />
          <circle cx="22" cy="26.5" r="2.2" fill="#111418" />
        </svg>
      </span>
      <span className="leading-none">
        <span
          className={cn(
            "block font-display text-[0.65rem] uppercase tracking-[0.22em]",
            inverted ? "text-brand-bright" : "text-brand",
          )}
        >
          Central Valley
        </span>
        <span
          className={cn(
            "block font-display text-lg uppercase tracking-wide sm:text-xl",
            inverted ? "text-white" : "text-ink",
            compact && "text-base sm:text-lg",
          )}
        >
          Junk & Hauling
        </span>
      </span>
    </Link>
  );
}
