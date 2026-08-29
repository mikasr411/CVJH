"use client";

import { CallButton, QuoteButton } from "@/components/conversion/CtaButtons";
import { hasPhone } from "@/lib/business";

export function MobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] shadow-[0_-8px_24px_rgba(0,0,0,0.08)] md:hidden">
      <div className={hasPhone() ? "grid grid-cols-2 gap-2" : "grid grid-cols-1"}>
        <CallButton className="w-full" size="lg" variant="dark" />
        <QuoteButton className="w-full" size="lg">
          Free Quote
        </QuoteButton>
      </div>
    </div>
  );
}
