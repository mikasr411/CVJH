"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export function AppChrome({
  header,
  footer,
  mobileCta,
  children,
}: {
  header: ReactNode;
  footer: ReactNode;
  mobileCta: ReactNode;
  children: ReactNode;
}) {
  const funnel = usePathname() === "/go";

  return (
    <>
      {funnel ? null : header}
      <main id="main" className={funnel ? "" : "pb-24 md:pb-0"}>
        {children}
      </main>
      {funnel ? null : footer}
      {funnel ? null : mobileCta}
    </>
  );
}
