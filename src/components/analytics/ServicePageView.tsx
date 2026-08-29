"use client";

import { track } from "@/lib/analytics";
import { useEffect } from "react";

export function ServicePageView({ slug }: { slug: string }) {
  useEffect(() => {
    track("service_page_view", { service: slug });
  }, [slug]);
  return null;
}
