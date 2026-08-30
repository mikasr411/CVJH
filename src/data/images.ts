export type ImageSlot = {
  src: string | null;
  alt: string;
  todo: string;
};

export type BeforeAfterPair = {
  id: string;
  label: string;
  before: ImageSlot;
  after: ImageSlot;
};

/**
 * Drop real job photos in /public/images, then set `src` to that path.
 * Example: src: "/images/before-after/garage-before.jpg"
 */
export const images = {
  hero: {
    id: "hero-crew-loading",
    src: "/images/hero/crew-loading-junk.jpg",
    alt: "Central Valley Junk & Hauling truck and trailer loaded with junk",
    todo: "Replace with an action photo of the crew loading furniture or junk into the truck/trailer.",
  },
  beforeAfter: [
    {
      id: "ba-garage",
      label: "Garage Cleanout",
      before: {
        src: null,
        alt: "Cluttered garage before junk removal",
        todo: "Add a real before photo of a packed garage.",
      },
      after: {
        src: null,
        alt: "Cleared garage after junk removal",
        todo: "Add a matching after photo of the same garage emptied.",
      },
    },
    {
      id: "ba-property",
      label: "Property Cleanout",
      before: {
        src: null,
        alt: "Property piled with junk before hauling",
        todo: "Add a before photo of a property cleanout.",
      },
      after: {
        src: null,
        alt: "Property cleared after junk hauling",
        todo: "Add the matching after photo.",
      },
    },
    {
      id: "ba-yard",
      label: "Yard Cleanup",
      before: {
        src: null,
        alt: "Yard debris pile before removal",
        todo: "Add a before photo of yard waste or outdoor debris.",
      },
      after: {
        src: null,
        alt: "Yard cleared after debris removal",
        todo: "Add the matching after photo.",
      },
    },
    {
      id: "ba-furniture",
      label: "Furniture Removal",
      before: {
        src: null,
        alt: "Unwanted furniture stacked before pickup",
        todo: "Add a before photo of furniture waiting to be hauled.",
      },
      after: {
        src: null,
        alt: "Room after furniture removal",
        todo: "Add the matching after photo.",
      },
    },
  ] satisfies BeforeAfterPair[],
  crew: {
    id: "crew-portrait",
    src: null as string | null,
    alt: "Central Valley Junk & Hauling crew",
    todo: "Add a real photo of the owner or crew. Action shots beat posed arms-crossed portraits.",
  },
  jobs: {
    trailerFull: {
      id: "job-full-trailer",
      src: null as string | null,
      alt: "Loaded junk removal trailer",
      todo: "Add a photo of a full trailer or truck after a job.",
    },
  },
};
