import { NextRequest, NextResponse } from "next/server";
import { ATTRIBUTION_KEYS } from "@/lib/attribution";
import { business } from "@/data/business";

export const runtime = "nodejs";

const REQUIRED = ["name", "phone", "city", "description"] as const;

function text(form: FormData, key: string) {
  return String(form.get(key) || "").trim();
}

const QUOTE_FROM = "leo.a@example.org";

function notifyAddress() {
  return (
    process.env.QUOTE_NOTIFY_EMAIL?.trim() ||
    process.env.CONTACT_EMAIL?.trim() ||
    business.email ||
    ""
  );
}

function quoteWebhookUrl() {
  const url = process.env.QUOTE_WEBHOOK_URL?.trim() || "";
  if (!url || /example\.(org|com)|localhost/i.test(url)) return "";
  return url;
}

export async function POST(request: NextRequest) {
  const form = await request.formData();
  const missing = REQUIRED.filter((key) => !text(form, key));
  if (missing.length) {
    return NextResponse.json(
      { ok: false, error: `Missing required fields: ${missing.join(", ")}` },
      { status: 400 },
    );
  }

  const photos = form
    .getAll("photos")
    .filter((item): item is File => item instanceof File && item.size > 0);

  const payload: Record<string, unknown> = {
    name: text(form, "name"),
    phone: text(form, "phone"),
    email: text(form, "email"),
    address: text(form, "address"),
    city: text(form, "city"),
    serviceType: text(form, "serviceType"),
    jobType: text(form, "jobType"),
    description: text(form, "description"),
    preferredDate: text(form, "preferredDate"),
    heardAbout: text(form, "heardAbout"),
    photoCount: photos.length,
    photoNames: photos.map((file) => file.name),
    submittedAt: new Date().toISOString(),
  };

  for (const key of [...ATTRIBUTION_KEYS, "landing_page", "referrer"] as const) {
    payload[key] = text(form, key);
  }

  const webhook = quoteWebhookUrl();
  const notifyEmail = notifyAddress();
  const resendKey = process.env.RESEND_API_KEY?.trim();
  const fromEmail = QUOTE_FROM;

  try {
    if (resendKey && notifyEmail) {
      const customerEmail = text(form, "email");
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [notifyEmail],
          reply_to: customerEmail || undefined,
          subject: `New junk removal quote — ${payload.city}`,
          text: [
            `Name: ${payload.name}`,
            `Phone: ${payload.phone}`,
            `Email: ${payload.email || "—"}`,
            `Address: ${payload.address || "—"}`,
            `City: ${payload.city}`,
            `Service: ${payload.serviceType || "—"}`,
            `Job type: ${payload.jobType || "—"}`,
            `Preferred date: ${payload.preferredDate || "—"}`,
            `How they heard: ${payload.heardAbout || "—"}`,
            "",
            "What needs to be removed:",
            payload.description,
          ].join("\n"),
        }),
      });
      if (!response.ok) {
        const detail = await response.text();
        console.error("Resend error", detail);
        let resendMessage = "Email delivery failed";
        try {
          const parsed = JSON.parse(detail) as { message?: string };
          if (parsed.message) {
            resendMessage = `${parsed.message} (sending from ${fromEmail} to ${notifyEmail})`;
          }
        } catch {
          /* keep default */
        }
        return NextResponse.json({ ok: false, error: resendMessage }, { status: 502 });
      }
    } else if (webhook) {
      const response = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error("Quote webhook failed");
    } else if (process.env.NODE_ENV === "production") {
      return NextResponse.json(
        {
          ok: false,
          error: "Quote delivery is not connected yet. Call or text 559-238-5828.",
        },
        { status: 503 },
      );
    } else {
      console.info("Quote submission (dev, no delivery configured)", payload);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { ok: false, error: "We could not send your request. Please try again." },
      { status: 500 },
    );
  }
}
