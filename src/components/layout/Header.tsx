"use client";

import { Logo } from "@/components/brand/Logo";
import { CallButton, QuoteButton } from "@/components/conversion/CtaButtons";
import { navLinks } from "@/data/navigation";
import { formattedPhone, hasPhone, telHref } from "@/lib/business";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/cn";
import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  function closeMenu() {
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) closeRef.current?.focus();
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Logo compact />
        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-display text-sm uppercase tracking-[0.12em] text-ink-soft hover:text-ink",
                pathname === link.href && "text-ink",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          {hasPhone() ? (
            <a
              href={telHref()!}
              onClick={() => track("phone_click")}
              className="font-display text-sm uppercase tracking-[0.08em] text-ink hover:text-brand"
            >
              {formattedPhone()}
            </a>
          ) : null}
          <QuoteButton size="md" />
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          {hasPhone() ? (
            <a
              href={telHref()!}
              onClick={() => track("phone_click")}
              className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-brand text-white"
              aria-label={`Call ${formattedPhone()}`}
            >
              <Phone className="h-5 w-5" />
            </a>
          ) : null}
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-line"
            aria-expanded={open}
            aria-controls={panelId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open ? (
        <div
          id={panelId}
          className="border-t border-line bg-white px-4 py-5 lg:hidden"
        >
          <nav aria-label="Mobile">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-md px-2 py-3 font-display text-lg uppercase tracking-wide"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-4 grid gap-3">
            <QuoteButton onClick={closeMenu} />
            <CallButton variant="outline" />
          </div>
          <button ref={closeRef} type="button" className="sr-only" onClick={() => setOpen(false)}>
            Close menu
          </button>
        </div>
      ) : null}
    </header>
  );
}
