import { business } from "@/data/business";

export function hasPhone() {
  return Boolean(business.phone);
}

export function hasEmail() {
  return Boolean(business.email);
}

export function hasSms() {
  return Boolean(business.smsPhone || business.phone);
}

export function telHref() {
  return business.phone ? `tel:${business.phone}` : null;
}

export function smsHref(body?: string) {
  const number = business.smsPhone || business.phone;
  if (!number) return null;
  if (!body) return `sms:${number}`;
  return `sms:${number}?body=${encodeURIComponent(body)}`;
}

export function mailtoHref() {
  return business.email ? `mailto:${business.email}` : null;
}

export function formattedPhone() {
  return business.phoneDisplay || business.phone;
}

export function hasGoogleReviews() {
  return Boolean(
    business.googleReviewUrl &&
      business.googleReviewCount &&
      business.googleReviewCount > 0,
  );
}

export function hasPublishedHours() {
  return Boolean(business.hours && business.hours.length > 0);
}

export function hasPhysicalAddress() {
  return Boolean(business.addressLine1 && business.city && business.state);
}

export function fullAddress() {
  if (!hasPhysicalAddress()) return null;
  const line2 = business.addressLine2 ? `, ${business.addressLine2}` : "";
  const zip = business.postalCode ? ` ${business.postalCode}` : "";
  return `${business.addressLine1}${line2}, ${business.city}, ${business.state}${zip}`;
}

export const photoQuoteSmsBody =
  "Hi, I have junk I need hauled. I'll send photos.";
