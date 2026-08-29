import { cn } from "@/lib/cn";
import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "dark" | "outline" | "ghost" | "white";
type Size = "md" | "lg" | "xl";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand text-white hover:bg-brand-deep shadow-[0_8px_24px_rgba(20,138,58,0.28)]",
  secondary:
    "bg-transparent text-white border-2 border-white hover:bg-white hover:text-ink",
  dark: "bg-ink text-white hover:bg-black",
  outline: "bg-white text-ink border-2 border-ink hover:bg-paper",
  ghost: "bg-transparent text-ink hover:bg-paper",
  white: "bg-white text-ink hover:bg-paper-2 shadow-sm",
};

const sizes: Record<Size, string> = {
  md: "min-h-11 px-5 text-sm",
  lg: "min-h-12 px-6 text-sm sm:text-base",
  xl: "min-h-14 px-7 text-base",
};

export type ButtonProps = {
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children?: ReactNode;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-md font-display font-semibold uppercase tracking-[0.08em] transition-transform duration-150 hover:-translate-y-0.5 active:translate-y-0";

export function Button({
  href,
  variant = "primary",
  size = "lg",
  className,
  children,
  onClick,
  type = "button",
  disabled,
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className);

  if (href) {
    if (
      href.startsWith("tel:") ||
      href.startsWith("sms:") ||
      href.startsWith("mailto:") ||
      href.startsWith("http")
    ) {
      return (
        <a href={href} className={classes} onClick={onClick}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
