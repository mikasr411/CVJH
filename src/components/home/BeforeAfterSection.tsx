import { QuoteButton } from "@/components/conversion/CtaButtons";
import { BeforeAfterSlider } from "@/components/home/BeforeAfter";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { images } from "@/data/images";

export function BeforeAfterSection() {
  const pairs = images.beforeAfter.filter(
    (item) => item.before.src && item.after.src,
  );
  const visible = pairs.length ? pairs : images.beforeAfter;

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <SectionHeading
            eyebrow="See the difference"
            title="From cluttered to cleared out."
            subtitle="Before: a packed side yard. After: space you can use."
          />
          {pairs.length ? (
            <p className="max-w-md text-ink-soft lg:text-right">
              Drag the slider to see the job. Same property. Same crew. Junk gone.
            </p>
          ) : (
            <p className="max-w-md text-ink-soft lg:text-right">
              Real job photos will live here. Until they are added, these frames mark where
              garage, property, yard, and furniture jobs should show the change.
            </p>
          )}
        </div>
        <div
          className={
            visible.length === 1
              ? "max-w-md"
              : "grid gap-6 md:grid-cols-2"
          }
        >
          {visible.map((item) => (
            <BeforeAfterSlider
              key={item.id}
              label={item.label}
              aspect={item.aspect}
              beforeSrc={item.before.src}
              afterSrc={item.after.src}
              beforeAlt={item.before.alt}
              afterAlt={item.after.alt}
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
