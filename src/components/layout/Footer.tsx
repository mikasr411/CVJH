import { Logo } from "@/components/brand/Logo";
import { PhoneLink } from "@/components/conversion/CtaButtons";
import { listedLocations } from "@/data/locations";
import { business } from "@/data/business";
import { enabledServices } from "@/data/services";
import { formattedPhone, hasEmail, hasGoogleReviews, hasPhone, hasPublishedHours, mailtoHref } from "@/lib/business";
import Link from "next/link";

const quickLinks = [
  { href: "/quote", label: "Get a Free Quote" },
  { href: "/about", label: "About" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
];

function SocialLinks() {
  const links = [
    { href: business.social.facebook, label: "Facebook" },
    { href: business.social.instagram, label: "Instagram" },
    { href: business.social.yelp, label: "Yelp" },
    { href: business.social.tiktok, label: "TikTok" },
    { href: business.social.youtube, label: "YouTube" },
  ].filter((link) => link.href);

  if (!links.length) return null;

  return (
    <ul className="mt-4 flex flex-wrap gap-3">
      {links.map((link) => (
        <li key={link.label}>
          <a href={link.href!} className="text-sm text-white/70 hover:text-white">
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  const services = enabledServices().filter((service) => service.category === "core").slice(0, 8);
  const areas = listedLocations();

  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo inverted />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
            Local junk removal for Fresno and the Central Valley. You point. We lift, load, haul, and leave the space ready to use.
          </p>
          <SocialLinks />
        </div>
        <div>
          <h2 className="font-display text-sm uppercase tracking-[0.18em] text-brand-bright">Contact</h2>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {hasPhone() ? (
              <li>
                <PhoneLink className="hover:text-white">{formattedPhone()}</PhoneLink>
              </li>
            ) : null}
            {hasEmail() ? (
              <li>
                <a href={mailtoHref()!} className="hover:text-white">
                  {business.email}
                </a>
              </li>
            ) : null}
            {hasPublishedHours()
              ? business.hours!.map((row) => (
                  <li key={row.days}>
                    {row.days}: {row.hours}
                  </li>
                ))
              : null}
            {hasGoogleReviews() ? (
              <li>
                <a href={business.googleReviewUrl!} className="hover:text-white">
                  Google reviews
                </a>
              </li>
            ) : null}
            {!hasPhone() && !hasEmail() ? (
              <li>
                <Link href="/quote" className="hover:text-white">
                  Request a quote
                </Link>
              </li>
            ) : null}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-sm uppercase tracking-[0.18em] text-brand-bright">Services</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/services/${service.slug}`} className="text-white/80 hover:text-white">
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-sm uppercase tracking-[0.18em] text-brand-bright">Service Areas</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {areas.map((location) => (
              <li key={location.slug}>
                <Link href={`/junk-removal/${location.slug}`} className="text-white/80 hover:text-white">
                  {location.city}, {location.state}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="mt-6 space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-white/80 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © {year} {business.name}. All rights reserved.
      </div>
    </footer>
  );
}
