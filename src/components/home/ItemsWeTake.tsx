import { itemsWeCannotTake, itemsWeCannotTakeNote, itemsWeTake } from "@/data/items";
import { hasPhone, hasSms } from "@/lib/business";

export function ItemsWeTake() {
  const unsureNote =
    hasPhone() || hasSms()
      ? itemsWeCannotTakeNote
      : "Some materials may be restricted. Not sure? Send us a photo with your quote request.";

  return (
    <section className="bg-paper py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-display text-4xl uppercase leading-[0.95] sm:text-5xl">
          Items we take
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-ink-soft">
          If it is sitting in the house, garage, or yard and you want it gone, there is a good chance we can haul it.
        </p>
        <ul className="mt-8 flex flex-wrap gap-2">
          {itemsWeTake.map((item) => (
            <li
              key={item}
              className="rounded-full border border-line bg-white px-4 py-2 text-sm font-medium"
            >
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-10 rounded-lg border border-line bg-white p-6">
          <h3 className="font-display text-2xl uppercase">Items we can&apos;t take</h3>
          {itemsWeCannotTake.length ? (
            <ul className="mt-4 list-disc space-y-1 pl-5 text-ink-soft">
              {itemsWeCannotTake.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : (
            <p className="mt-3 text-ink-soft">
              Restricted materials depend on the load and local disposal rules. We will tell you if something cannot go.
            </p>
          )}
          <p className="mt-4 font-medium text-ink">{unsureNote}</p>
        </div>
      </div>
    </section>
  );
}
