export const itemsWeTake = [
  "Couches",
  "Mattresses",
  "Beds",
  "Tables",
  "Chairs",
  "Refrigerators",
  "Washers",
  "Dryers",
  "Appliances",
  "TVs",
  "Electronics",
  "Boxes",
  "Household junk",
  "Garage junk",
  "Yard waste",
  "Scrap metal",
  "Office furniture",
  "Construction debris",
  "Exercise equipment",
  "Patio furniture",
  "Storage unit contents",
] as const;

/**
 * Do not invent disposal rules.
 * Leave this empty until the owner confirms restricted materials.
 */
export const itemsWeCannotTake: string[] = [];

export const itemsWeCannotTakeNote =
  "Some materials may be restricted. Not sure? Send us a photo or give us a call.";
