import { business } from "./business";
import { hasPhone, hasSms } from "@/lib/business";

export type Faq = {
  question: string;
  answer: string;
};

const photoOrCall =
  hasSms() || hasPhone()
    ? " Send a photo or call us if you are not sure."
    : " Send photos with your quote request if you are not sure.";

export const faqs: Faq[] = [
  {
    question: "How much does junk removal cost?",
    answer:
      "There is no single posted price because every pile is different. Cost depends on how much space the items take up, the type of material, labor, access, and disposal. You approve the price before we start.",
  },
  {
    question: "How does your junk removal pricing work?",
    answer:
      "We look at volume first: how much of the trailer the load will fill. Material type, stairs, long carries, and disposal needs can change the quote. Photos help us estimate before we arrive. The important part does not change: you approve the price before we begin loading.",
  },
  {
    question: "Do I need to move everything outside first?",
    answer:
      "No. You do not have to drag furniture to the curb. Where we can access items safely, the crew does the lifting and loading. You point to what goes.",
  },
  {
    question: "What types of junk do you remove?",
    answer: `Household junk, furniture, appliances, garage contents, yard debris, office furniture, and similar items are typical.${photoOrCall}`,
  },
  {
    question: "Can you clean out an entire property?",
    answer:
      "Yes. Home cleanouts, garage cleanouts, and full property jobs are core work. Tell us which areas are included so the quote matches the real scope.",
  },
  {
    question: "Do you offer commercial junk removal?",
    answer:
      "Yes. We haul junk for property managers, contractors, landlords, offices, retail spaces, and other businesses that need volume gone on a schedule.",
  },
  {
    question: "Can I send pictures for a quote?",
    answer: hasSms()
      ? "Yes. Text us photos or upload them on the quote form. A few pictures of the pile and the path to it are enough to start."
      : "Yes. Upload photos on the quote form. A few pictures of the pile and the path to it are enough to start.",
  },
  {
    question: "How quickly can you schedule my pickup?",
    answer: business.claims.sameDayService
      ? "Same-day service may be available depending on the schedule."
      : "It depends on the schedule and the job. Reach out with your address and photos and we will work with you on a time that fits. We do not promise same-day service unless that is confirmed for your job.",
  },
  {
    question: "What happens to the junk after you remove it?",
    answer:
      business.claims.recyclingPercent || business.claims.donationPercent
        ? "We haul items off the property and handle disposal according to the options we have available for that load."
        : "We haul everything away for disposal. We do not publish recycling or donation percentages. If you have a question about a specific item, ask us when you request the quote.",
  },
  {
    question: "Do I need to be home?",
    answer:
      "Someone who can authorize the work and point out what goes should be available, or you should leave clear instructions and access. Confirm that when you book so there is no confusion on site.",
  },
];
