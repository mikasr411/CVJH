"use client";

import { CallButton } from "@/components/conversion/CtaButtons";
import { Logo } from "@/components/brand/Logo";
import { images } from "@/data/images";
import { listedLocations } from "@/data/locations";
import { readAttribution } from "@/lib/attribution";
import { track } from "@/lib/analytics";
import { hasSms, photoQuoteSmsBody, smsHref } from "@/lib/business";
import { Camera, ChevronRight, MessageSquare, Percent } from "lucide-react";
import Image from "next/image";
import { useMemo, useRef, useState } from "react";

const MAX_FILES = 8;
const MAX_FILE_MB = 8;
const OFFER = "10% off";

type Step = "start" | "form" | "success";
type Status = "idle" | "submitting" | "error";

export function MobileFunnel() {
  const [step, setStep] = useState<Step>("start");
  const [files, setFiles] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [started, setStarted] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const cities = listedLocations();
  const textHref = smsHref(photoQuoteSmsBody);
  const poster = images.funnel.posterSrc;
  const videoSrc = images.funnel.videoSrc;

  const previewItems = useMemo(
    () => files.map((file, index) => ({ file, url: previews[index] })),
    [files, previews],
  );

  function markStarted() {
    if (started) return;
    setStarted(true);
    track("quote_form_started");
  }

  function setSelectedFiles(next: File[]) {
    const imagesOnly = next.filter(
      (file) =>
        file.type.startsWith("image/") ||
        /\.(jpe?g|png|webp|gif|heic|heif)$/i.test(file.name),
    );
    if (!imagesOnly.length) {
      setError("Please choose a photo (JPG, PNG, or HEIC).");
      return;
    }
    const tooBig = imagesOnly.filter((file) => file.size > MAX_FILE_MB * 1024 * 1024);
    if (tooBig.length) {
      setError(`Please keep photos under ${MAX_FILE_MB}MB each.`);
      return;
    }
    const combined = [...files, ...imagesOnly].slice(0, MAX_FILES);
    previews.forEach((url) => URL.revokeObjectURL(url));
    setError("");
    setFiles(combined);
    setPreviews(combined.map((file) => URL.createObjectURL(file)));
    if (combined.length) {
      track("funnel_upload", { count: combined.length });
      markStarted();
    }
  }

  function goToForm(fromOffer = false) {
    if (fromOffer) track("funnel_offer_click");
    else track("funnel_next");
    markStarted();
    setStep("form");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setError("");

    const form = event.currentTarget;
    const data = new FormData(form);
    files.forEach((file) => data.append("photos", file));
    const attribution = readAttribution();
    Object.entries(attribution).forEach(([key, value]) => data.set(key, value));
    data.set("offer", OFFER);
    data.set("heardAbout", "Mobile offer funnel");
    data.set("landing_page", "/go");

    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const address = String(data.get("address") || "").trim();
    const city = String(data.get("city") || "").trim();
    const description = String(data.get("description") || "").trim();

    if (!name || !phone || !address || !city || !description) {
      setStatus("error");
      setError("Name, phone, address, city, and a short description are required.");
      return;
    }

    try {
      const response = await fetch("/api/quote", { method: "POST", body: data });
      const payload = (await response.json()) as { ok?: boolean; error?: string };
      if (!response.ok || !payload.ok) {
        throw new Error(payload.error || "We could not send your request.");
      }
      track("quote_form_submitted", { city, offer: OFFER, photos: files.length });
      previews.forEach((url) => URL.revokeObjectURL(url));
      setFiles([]);
      setPreviews([]);
      setStatus("idle");
      setStep("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <div className="min-h-dvh bg-ink text-white">
      <div className="mx-auto flex min-h-dvh max-w-[430px] flex-col bg-ink">
        <header className="flex items-center justify-between gap-3 px-4 py-3">
          <Logo compact inverted className="min-w-0" />
          <CallButton size="md" className="shrink-0 !min-h-10 !px-3 text-xs" />
        </header>

        <input
          ref={fileRef}
          type="file"
          multiple
          className="sr-only"
          onChange={(event) => {
            setSelectedFiles(Array.from(event.target.files ?? []));
            event.target.value = "";
          }}
        />

        {step === "success" ? (
          <div className="flex flex-1 flex-col justify-center px-5 pb-10">
            <p className="font-display text-xs uppercase tracking-[0.2em] text-brand-bright">
              {OFFER} request sent
            </p>
            <h1 className="mt-3 font-display text-4xl uppercase leading-[0.95]">
              Thanks. We got it.
            </h1>
            <p className="mt-4 text-white/80">
              This request is marked for {OFFER}. A member of the crew will call or text you shortly.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              <CallButton size="xl" className="w-full" />
              {textHref ? (
                <a
                  href={textHref}
                  onClick={() => track("text_click")}
                  className="inline-flex min-h-14 items-center justify-center rounded-md border-2 border-white font-display text-base uppercase tracking-[0.08em] text-white"
                >
                  Text us now
                </a>
              ) : null}
            </div>
          </div>
        ) : null}

        {step === "start" ? (
          <div className="flex flex-1 flex-col">
            <div className="relative aspect-square shrink-0 overflow-hidden bg-black">
              {videoSrc && !videoFailed ? (
                <>
                  <video
                    ref={videoRef}
                    className="h-full w-full object-contain"
                    poster={poster}
                    autoPlay
                    muted={muted}
                    playsInline
                    controls
                    preload="auto"
                    onError={() => setVideoFailed(true)}
                  >
                    <source src={videoSrc} type="video/mp4" />
                  </video>
                  {muted ? (
                    <button
                      type="button"
                      onClick={() => {
                        setMuted(false);
                        const player = videoRef.current;
                        if (player) {
                          player.muted = false;
                          void player.play();
                        }
                      }}
                      className="absolute bottom-3 left-1/2 z-10 -translate-x-1/2 rounded-full bg-black/75 px-4 py-2 font-display text-xs uppercase tracking-[0.12em] text-white"
                    >
                      Tap for sound
                    </button>
                  ) : null}
                </>
              ) : poster ? (
                <Image
                  src={poster}
                  alt={images.funnel.posterAlt}
                  fill
                  priority
                  sizes="430px"
                  className="object-contain"
                />
              ) : null}
            </div>

            <div className="px-4 pt-3 pb-6">
              <p className="font-display text-xs uppercase tracking-[0.2em] text-brand-bright">
                Fresno junk removal
              </p>
              <h1 className="mt-1 font-display text-3xl uppercase leading-[0.9]">
                Send a photo.
                <span className="block text-brand-bright">Get {OFFER}.</span>
              </h1>
              <p className="mt-2 text-sm text-white/75">
                Upload a picture of the junk. We quote from the photo.
              </p>

              <button
                type="button"
                onClick={() => fileRef.current?.click()}
                className="mt-4 flex min-h-14 w-full items-center justify-center gap-3 rounded-md border-2 border-dashed border-white/40 bg-white/5 px-4 font-display text-base uppercase tracking-[0.08em]"
              >
                <Camera className="h-6 w-6 text-brand-bright" aria-hidden="true" />
                {files.length ? "Add more photos" : "Upload a picture"}
              </button>

              {previewItems.length ? (
                <ul className="mt-3 grid grid-cols-4 gap-2">
                  {previewItems.map(({ file, url }) => (
                    <li key={file.name + file.size} className="overflow-hidden rounded-md bg-black">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={url} alt="" className="h-16 w-full object-cover" />
                    </li>
                  ))}
                </ul>
              ) : null}

              {files.length ? (
                <button
                  type="button"
                  onClick={() => goToForm(false)}
                  className="mt-4 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-md bg-brand font-display text-base uppercase tracking-[0.08em] text-white"
                >
                  Next step
                  <ChevronRight className="h-5 w-5" aria-hidden="true" />
                </button>
              ) : null}

              {error ? (
                <p className="mt-3 rounded-md bg-red-50 px-3 py-2 text-sm text-red-800" role="alert">
                  {error}
                </p>
              ) : null}

              <div className="mt-4 grid gap-3">
                {hasSms() && textHref ? (
                  <a
                    href={textHref}
                    onClick={() => track("text_click")}
                    className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-md border-2 border-white font-display text-base uppercase tracking-[0.08em] text-white"
                  >
                    <MessageSquare className="h-5 w-5" aria-hidden="true" />
                    Text now
                  </a>
                ) : null}
                <button
                  type="button"
                  onClick={() => goToForm(true)}
                  className="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-md bg-brand-bright font-display text-base uppercase tracking-[0.08em] text-ink"
                >
                  <Percent className="h-5 w-5" aria-hidden="true" />
                  Get {OFFER}
                </button>
              </div>
            </div>
          </div>
        ) : null}

        {step === "form" ? (
          <form onSubmit={onSubmit} className="flex flex-1 flex-col bg-paper px-4 py-5 text-ink" noValidate>
            <button
              type="button"
              onClick={() => setStep("start")}
              className="self-start text-sm font-medium text-ink-soft"
            >
              ← Back
            </button>
            <h1 className="mt-3 font-display text-3xl uppercase leading-[0.95]">
              Send your photos and info
            </h1>
            <p className="mt-2 text-sm text-ink-soft">
              {OFFER} is noted on this request. Name, phone, address, city, and what to haul are required.
            </p>

            {previewItems.length ? (
              <ul className="mt-4 grid grid-cols-4 gap-2">
                {previewItems.map(({ file, url }) => (
                  <li key={file.name + file.size} className="overflow-hidden rounded-md bg-paper-2">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={url} alt="" className="h-16 w-full object-cover" />
                  </li>
                ))}
              </ul>
            ) : (
              <button
                type="button"
                onClick={() => fileRef.current?.click()}
                className="mt-4 flex min-h-12 items-center justify-center gap-2 rounded-md border border-dashed border-line bg-white text-sm font-medium"
              >
                <Camera className="h-4 w-4" aria-hidden="true" />
                Add photos of the junk
              </button>
            )}

            <label className="mt-4 block">
              <span className="text-sm font-medium">Name *</span>
              <input
                name="name"
                required
                autoComplete="name"
                className="mt-1 w-full rounded-md border border-line bg-white px-3 py-3 text-base"
                onFocus={markStarted}
              />
            </label>
            <label className="mt-3 block">
              <span className="text-sm font-medium">Phone *</span>
              <input
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                className="mt-1 w-full rounded-md border border-line bg-white px-3 py-3 text-base"
                onFocus={markStarted}
              />
            </label>
            <label className="mt-3 block">
              <span className="text-sm font-medium">Service address *</span>
              <input
                name="address"
                required
                autoComplete="street-address"
                className="mt-1 w-full rounded-md border border-line bg-white px-3 py-3 text-base"
                onFocus={markStarted}
              />
            </label>
            <label className="mt-3 block">
              <span className="text-sm font-medium">City *</span>
              <input
                name="city"
                required
                list="funnel-cities"
                className="mt-1 w-full rounded-md border border-line bg-white px-3 py-3 text-base"
                onFocus={markStarted}
              />
              <datalist id="funnel-cities">
                {cities.map((city) => (
                  <option key={city.slug} value={city.city} />
                ))}
              </datalist>
            </label>
            <label className="mt-3 block">
              <span className="text-sm font-medium">What needs to be removed? *</span>
              <textarea
                name="description"
                required
                rows={4}
                placeholder="Couch, garage pile, appliances — whatever is going."
                className="mt-1 w-full rounded-md border border-line bg-white px-3 py-3 text-base"
                onFocus={markStarted}
              />
            </label>
            <label className="mt-3 block">
              <span className="text-sm font-medium">Email</span>
              <input
                name="email"
                type="text"
                inputMode="email"
                autoComplete="email"
                className="mt-1 w-full rounded-md border border-line bg-white px-3 py-3 text-base"
                onFocus={markStarted}
              />
            </label>

            {status === "error" ? (
              <p className="mt-4 rounded-md bg-red-50 px-3 py-2 text-sm text-red-800" role="alert">
                {error}
              </p>
            ) : null}

            <button
              type="submit"
              formNoValidate
              disabled={status === "submitting"}
              className="mt-5 mb-8 inline-flex min-h-14 w-full items-center justify-center rounded-md bg-brand font-display text-base uppercase tracking-[0.08em] text-white disabled:opacity-70"
            >
              {status === "submitting" ? "Sending..." : `Send photos · ${OFFER}`}
            </button>
          </form>
        ) : null}
      </div>
    </div>
  );
}
