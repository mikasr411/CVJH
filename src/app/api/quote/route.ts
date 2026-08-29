import { NextRequest, NextResponse } from "next/server";
import { ATTRIBUTION_KEYS } from "@/lib/attribution";

export const runtime = "nodejs";

const REQUIRED = ["name", "phone", "city", "description"] as const;

function text(form: FormData, key: string) {
  return String(form.get(key) || "").trim();
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

  const photos = form.getAll("photos").filter((item): item is File => item instanceof File && item.size > 0);

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

  const webhook = process.env.QUOTE_WEBHOOK_URL;
  const notifyEmail = process.env.QUOTE_NOTIFY_EMAIL;
  const resendKey = process.env.RESEND_API_KEY;

  try {
    if (webhook) {
      const response = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        throw new Error("Quote webhook failed");
      }
    } else if (resendKey && notifyEmail) {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "quotes@centralvalleyjunk.com",
          to: [notifyEmail],
          subject: `New junk removal quote — ${payload.city}`,
          text: JSON.stringify(payload, null, 2),
        }),
      });
      if (!response.ok) throw new Error("Email delivery failed");
    } else if (process.env.NODE_ENV === "production") {
      return NextResponse.json(
        {
          ok: false,
          error: "Quote delivery is not connected yet. Please try again later or use another contact method.",
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
