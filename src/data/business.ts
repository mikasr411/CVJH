/**
 * Central business configuration.
 *
 * Leave a field `null` (or omit a claim) until the owner confirms it.
 * UI, schema, and CTAs hide unconfirmed contact details and social proof.
 * Never invent a phone number, address, review count, license, or guarantee.
 */

export type DayHours = {
  days: string;
  hours: string;
};

export type SocialLinks = {
  facebook: string | null;
  instagram: string | null;
  yelp: string | null;
  tiktok: string | null;
  youtube: string | null;
};

export type BusinessClaims = {
  licensed: boolean | null;
  insured: boolean | null;
  sameDayService: boolean | null;
  yearsInBusiness: number | null;
  jobsCompleted: number | null;
  truckCount: number | null;
  employeeCount: number | null;
  donationPercent: number | null;
  recyclingPercent: number | null;
};

export type Business = {
  legalName: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  phone: string | null;
  phoneDisplay: string | null;
  smsPhone: string | null;
  email: string | null;
  addressLine1: string | null;
  addressLine2: string | null;
  city: string | null;
  state: string | null;
  postalCode: string | null;
  regionName: string;
  primaryMarket: string;
  googleMapsUrl: string | null;
  googleReviewUrl: string | null;
  googleReviewCount: number | null;
  googleRating: number | null;
  hours: DayHours[] | null;
  social: SocialLinks;
  claims: BusinessClaims;
  priceRange: string | null;
};

export const business: Business = {
  legalName: "Central Valley Junk & Hauling",
  name: "Central Valley Junk & Hauling",
  shortName: "CV Junk & Hauling",
  tagline: "Junk Gone. Space Back.",
  description:
    "Local junk removal and hauling for Fresno and California's Central Valley. We lift it, load it, haul it, and leave the space ready to use.",
  phone: "+15592385828",
  phoneDisplay: "559-238-5828",
  smsPhone: "+15592385828",
  email: null,
  addressLine1: null,
  addressLine2: null,
  city: null,
  state: "CA",
  postalCode: null,
  regionName: "Central Valley, CA",
  primaryMarket: "Fresno",
  googleMapsUrl: null,
  googleReviewUrl: null,
  googleReviewCount: null,
  googleRating: null,
  hours: null,
  social: {
    facebook: null,
    instagram: null,
    yelp: null,
    tiktok: null,
    youtube: null,
  },
  claims: {
    licensed: null,
    insured: null,
    sameDayService: null,
    yearsInBusiness: null,
    jobsCompleted: null,
    truckCount: null,
    employeeCount: null,
    donationPercent: null,
    recyclingPercent: null,
  },
  priceRange: null,
};

export const site = {
  url: (
    process.env.NEXT_PUBLIC_SITE_URL?.trim() || "http://localhost:3000"
  ).replace(/\/$/, ""),
  defaultTitle: "Junk Removal Fresno CA | Central Valley Junk & Hauling",
  defaultDescription:
    "Need junk gone? Central Valley Junk & Hauling provides professional junk removal, cleanouts and hauling throughout Fresno and the Central Valley. Request a free quote today.",
} as const;
