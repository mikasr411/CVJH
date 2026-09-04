"use client";

import { CallButton, TextPhotosButton } from "@/components/conversion/CtaButtons";
import { hearAboutOptions } from "@/data/navigation";
import { enabledServices } from "@/data/services";
import { listedLocations } from "@/data/locations";
import { hasPhone, hasSms, photoQuoteSmsBody } from "@/lib/business";
import { readAttribution } from "@/lib/attribution";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/cn";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";

const MAX_FILES = 8;
const MAX_FILE_MB = 8;

type Status = "idle" | "submitting" | "success" | "error";

export function QuoteForm({ compact = false }: { compact?: boolean }) {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [started, setStarted] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchParams.get("photos") === "1") {
      fileRef.current?.focus();
    }
  }, [searchParams]);

  function markStarted() {
    if (started) return;
    setStarted(true);
    track("quote_form_started");
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError("");

    const form = event.currentTarget;
    const data = new FormData(form);
    files.forEach((file) => data.append("photos", file));
    const attribution = readAttribution();
    Object.entries(attribution).forEach(([key, value]) => {
      data.set(key, value);
    });

    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const city = String(data.get("city") || "").trim();
    const description = String(data.get("description") || "").trim();

    if (!name || !phone || !city || !description) {
      setStatus("error");
      setError("Name, phone, city, and a short description are required.");
      return;
    }

    try {
      const response = await fetch("/api/quote", { method: "POST", body: data });
      const payload = (await response.json()) as { ok?: boolean; error?: string };
      if (!response.ok || !payload.ok) {
        throw new Error(payload.error || "We could not send your request.");
      }
      track("quote_form_submitted", { city, service: String(data.get("serviceType") || "") });
      setStatus("success");
      form.reset();
      setFiles([]);
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-brand/30 bg-brand-soft p-6">
        <h3 className="font-display text-2xl uppercase">Thanks. We got it.</h3>
        <p className="mt-3 text-ink">
          A member of the Central Valley Junk & Hauling team will reach out shortly.
        </p>
        {hasPhone() || hasSms() ? (
          <>
            <p className="mt-3 text-ink">For faster service, call or text us now.</p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <CallButton />
              <TextPhotosButton variant="outline" body={photoQuoteSmsBody} />
            </div>
          </>
        ) : (
          <p className="mt-3 text-ink-soft">
            We will contact you at the number you provided.
          </p>
        )}
      </div>
    );
  }

  const fieldClass =
    "mt-1 w-full rounded-md border border-line bg-white px-3 py-3 text-base text-ink";
  const services = enabledServices();
  const cities = listedLocations();

  return (
    <form onSubmit={onSubmit} className={cn("grid gap-4", compact ? "" : "rounded-lg bg-white p-5 shadow-sm sm:p-7")} noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium">Name *</span>
          <input name="name" required autoComplete="name" className={fieldClass} onFocus={markStarted} />
        </label>
        <label className="block">
          <span className="text-sm font-medium">Phone *</span>
          <input name="phone" type="tel" required autoComplete="tel" className={fieldClass} onFocus={markStarted} />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium">Email</span>
          <input name="email" type="text" inputMode="email" autoComplete="email" className={fieldClass} onFocus={markStarted} />
        </label>
        <label className="block">
          <span className="text-sm font-medium">Address</span>
          <input name="address" autoComplete="street-address" placeholder="123 Main St" className={fieldClass} onFocus={markStarted} />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium">City *</span>
          <input name="city" required list="quote-cities" className={fieldClass} onFocus={markStarted} />
          <datalist id="quote-cities">
            {cities.map((city) => (
              <option key={city.slug} value={city.city} />
            ))}
          </datalist>
        </label>
        <label className="block">
          <span className="text-sm font-medium">Type of service</span>
          <select name="serviceType" className={fieldClass} defaultValue="" onFocus={markStarted}>
            <option value="">Not sure yet</option>
            {services.map((service) => (
              <option key={service.slug} value={service.name}>
                {service.name}
              </option>
            ))}
          </select>
        </label>
      </div>
      <fieldset>
        <legend className="text-sm font-medium">Residential or commercial</legend>
        <div className="mt-2 flex gap-4">
          <label className="flex items-center gap-2">
            <input type="radio" name="jobType" value="residential" onFocus={markStarted} />
            Residential
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="jobType" value="commercial" onFocus={markStarted} />
            Commercial
          </label>
        </div>
      </fieldset>
      <label className="block">
        <span className="text-sm font-medium">What needs to be removed? *</span>
        <textarea
          name="description"
          required
          rows={4}
          className={fieldClass}
          placeholder="Couch, garage pile, appliances — whatever is going."
          onFocus={markStarted}
        />
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-medium">Preferred service date</span>
          <input name="preferredDate" type="date" className={fieldClass} onFocus={markStarted} />
        </label>
        <label className="block">
          <span className="text-sm font-medium">How did you hear about us?</span>
          <select name="heardAbout" className={fieldClass} defaultValue="" onFocus={markStarted}>
            <option value="">Select one</option>
            {hearAboutOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="block">
        <span className="text-sm font-medium">Photos of the junk</span>
        <input
          ref={fileRef}
          name="photos-ui"
          type="file"
          multiple
          className={fieldClass}
          onChange={(event) => {
            markStarted();
            const picked = Array.from(event.target.files ?? []).filter(
              (file) =>
                file.type.startsWith("image/") ||
                /\.(jpe?g|png|webp|gif|heic|heif)$/i.test(file.name),
            );
            const next = picked.slice(0, MAX_FILES);
            const tooBig = next.filter((file) => file.size > MAX_FILE_MB * 1024 * 1024);
            if (tooBig.length) {
              setError(`Please keep photos under ${MAX_FILE_MB}MB each.`);
              event.target.value = "";
              return;
            }
            setFiles(next);
            setError("");
          }}
        />
        <span className="mt-1 block text-xs text-ink-soft">
          Up to {MAX_FILES} photos, {MAX_FILE_MB}MB each. Optional, but it speeds things up.
        </span>
        {files.length ? (
          <span className="mt-1 block text-sm">{files.length} photo{files.length === 1 ? "" : "s"} selected</span>
        ) : null}
      </label>
      {status === "error" ? (
        <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-800" role="alert">
          {error}
        </p>
      ) : null}
      <button
        type="submit"
        formNoValidate
        disabled={status === "submitting"}
        className="inline-flex min-h-14 items-center justify-center rounded-md bg-brand px-6 font-display text-base uppercase tracking-[0.08em] text-white hover:bg-brand-deep disabled:opacity-70"
      >
        {status === "submitting" ? "Sending..." : "Get a Free Quote"}
      </button>
    </form>
  );
}
