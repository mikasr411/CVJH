import { QuoteButton } from "@/components/conversion/CtaButtons";
import { BeforeAfterSlider } from "@/components/home/BeforeAfter";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/data/images";

export function BeforeAfterSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <SectionHeading
            eyebrow="See the difference"
            title="From cluttered to cleared out."
            subtitle="Before: a garage full of stuff. After: your garage again."
          />
          <p className="max-w-md text-ink-soft lg:text-right">
            Real job photos will live here. Until they are added, these frames mark where
            garage, property, yard, and furniture jobs should show the change.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {images.beforeAfter.map((item) => (
            <BeforeAfterSlider
              key={item.id}
              label={item.label}
              beforeTodo={item.before.todo}
              afterTodo={item.after.todo}
            />
          ))}
        </div>
        <div className="mt-10">
          <QuoteButton>Clear My Space</QuoteButton>
        </div>
      </div>
    </section>
  );
}
