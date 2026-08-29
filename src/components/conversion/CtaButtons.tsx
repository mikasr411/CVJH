"use client";

import { Button, type ButtonProps } from "@/components/ui/Button";
import { track, type AnalyticsEvent } from "@/lib/analytics";
import { formattedPhone, smsHref, telHref } from "@/lib/business";
import type { ReactNode } from "react";

type CtaProps = ButtonProps & { event?: AnalyticsEvent };

export function QuoteButton({
  children = "Get a Free Quote",
  event,
  href = "/quote",
  onClick,
  ...props
}: CtaProps) {
  return (
    <Button
      href={href}
      onClick={() => {
        if (event) track(event);
        onClick?.();
      }}
      {...props}
    >
      {children}
    </Button>
  );
}

export function CallButton({ children = "Call Now", ...props }: ButtonProps) {
  const href = telHref();
  if (!href) return null;
  return (
    <Button href={href} onClick={() => track("phone_click")} {...props}>
      {children}
    </Button>
  );
}

export function PhoneLink({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) {
  const href = telHref();
  if (!href) return null;
  return (
    <a href={href} className={className} onClick={() => track("phone_click")}>
      {children ?? formattedPhone()}
    </a>
  );
}

export function TextPhotosButton({
  children = "Text Us Photos",
  body,
  ...props
}: ButtonProps & { body?: string }) {
  const href = smsHref(body);
  if (!href) return null;
  return (
    <Button href={href} onClick={() => track("text_click")} {...props}>
      {children}
    </Button>
  );
}
