"use client";

import { captureAttribution } from "@/lib/attribution";
import { useEffect } from "react";

export function AttributionCapture() {
  useEffect(() => {
    captureAttribution();
  }, []);
  return null;
}
