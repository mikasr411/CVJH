export type LocationFaq = {
  question: string;
  answer: string;
};

export type Location = {
  slug: string;
  city: string;
  state: string;
  county: string;
  confirmed: boolean;
  needsOwnerConfirmation: boolean;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  intro: string;
  localStory: string[];
  neighborhoods: string[];
  popularServiceSlugs: string[];
  residential: {
    headline: string;
    copy: string;
    points: string[];
  };
  commercial: {
    headline: string;
    copy: string;
    points: string[];
  };
  faqs: LocationFaq[];
  nearbySlugs: string[];
};

/**
 * Service-area pages.
 * Fresno is the confirmed primary market.
 * Other cities are part of the planned Central Valley coverage and are
 * flagged until the owner confirms they are actively served.
 */
export const locations: Location[] = [
  {
    slug: "fresno-ca",
    city: "Fresno",
    state: "CA",
    county: "Fresno County",
    confirmed: true,
    needsOwnerConfirmation: false,
    h1: "Junk Removal in Fresno, CA",
    metaTitle: "Junk Removal Fresno CA | Local Hauling & Cleanouts",
    metaDescription:
      "Junk removal in Fresno, CA from Central Valley Junk & Hauling. Furniture, garage cleanouts, appliances, and property hauling. Get a free quote.",
    eyebrow: "FRESNO JUNK REMOVAL",
    intro:
      "Fresno homes and businesses collect junk the same way the summer collects heat: gradually, then all at once. When the garage is packed, the patio is blocked, or a rental still has the last tenant's sofa, we come haul it.",
    localStory: [
      "Fresno is the hub we work from. Tower District bungalows, Fig Garden houses with full garages, Sunnyside properties with backyard piles, Woodward Park homes mid-remodel, and infill rentals near downtown all generate the same request: get this stuff out of here.",
      "A lot of Fresno junk is not mystery waste. It is a sectional that does not fit the new living room. A fridge after an appliance delivery. Boxes from a move that never got unpacked. Yard debris after a pruning crew leaves. We treat those as regular work, not a special occasion.",
      "You do not need to get the pile to the curb. If we can reach it, we carry it. You approve the price before we start loading.",
    ],
    neighborhoods: [
      "Tower District",
      "Fig Garden",
      "Woodward Park",
      "Sunnyside",
      "Old Fig",
      "Bullard",
      "Downtown Fresno",
      "Clinton Avenue corridor",
    ],
    popularServiceSlugs: [
      "junk-removal",
      "garage-cleanouts",
      "furniture-removal",
      "appliance-removal",
      "home-cleanouts",
      "commercial-junk-removal",
    ],
    residential: {
      headline: "Fresno homeowners, this is the easy version",
      copy: "If the spare room became storage, the garage lost the car, or a furniture delivery left you with the old set, point to what goes. We do the lifting.",
      points: [
        "Garage and patio overflow from years of Valley living",
        "Couch, mattress, and appliance pickups after a household change",
        "Whole-home clear-outs before a move or a sale",
      ],
    },
    commercial: {
      headline: "Fresno property work on a clock",
      copy: "Managers, contractors, and owners in Fresno do not have a weekend to spend at the dump. Tenant leftovers, office furniture, and remodel debris need a crew that shows up and loads.",
      points: [
        "Apartment and rental turnovers",
        "Office and retail back-room junk",
        "Jobsite debris between remodel phases",
      ],
    },
    faqs: [
      {
        question: "Do you haul junk anywhere in Fresno?",
        answer:
          "Fresno is our primary market. Share the service address when you request a quote so we can confirm the job location.",
      },
      {
        question: "Can I send photos of a Fresno garage or driveway pile?",
        answer:
          "Yes. Photos are the fastest way for us to see volume and access before we quote.",
      },
    ],
    nearbySlugs: ["clovis-ca", "sanger-ca", "fowler-ca", "madera-ca"],
  },
  {
    slug: "clovis-ca",
    city: "Clovis",
    state: "CA",
    county: "Fresno County",
    confirmed: false,
    needsOwnerConfirmation: true,
    h1: "Junk Removal in Clovis, CA",
    metaTitle: "Junk Removal Clovis CA | Garage Cleanouts & Furniture Hauling",
    metaDescription:
      "Junk removal in Clovis, CA. Central Valley Junk & Hauling clears garages, hauls furniture, and handles home cleanouts. Request a free quote.",
    eyebrow: "CLOVIS JUNK REMOVAL",
    intro:
      "Clovis properties look tidy from the street until you open the garage. Old Town lots are tight. Newer tracts fill sheds and side yards just as fast. When you want the space back, we haul the junk.",
    localStory: [
      "Clovis sits against Fresno, but the jobs are their own mix: Old Town homes with narrow driveways, Harlan Ranch and Loma Vista houses with patio furniture that baked through another summer, and garages used as overflow storage after a remodel.",
      "A Clovis furniture removal is often a sectional, a mattress set, and the pieces that did not sell online. A garage cleanout is often holiday bins mixed with lumber scraps and a dead treadmill. We load both kinds of jobs.",
      "If you are on the east side of town or closer to the Fresno line, send the address with your quote request so we can confirm coverage.",
    ],
    neighborhoods: [
      "Old Town Clovis",
      "Harlan Ranch",
      "Loma Vista",
      "Tarpey Village",
      "Shaw Avenue area",
      "Alluvial corridor",
    ],
    popularServiceSlugs: [
      "garage-cleanouts",
      "furniture-removal",
      "yard-waste-removal",
      "home-cleanouts",
      "appliance-removal",
    ],
    residential: {
      headline: "Clovis homes, minus the extra stuff",
      copy: "You keep the house. We take the couch that did not sell, the garage pile, and the appliances sitting on the porch.",
      points: [
        "Garage reclaim before summer or a move",
        "Patio furniture and backyard debris",
        "Mattress and appliance haul-away",
      ],
    },
    commercial: {
      headline: "Clovis rentals and small commercial spaces",
      copy: "Turnover on a Clovis rental should not wait on leftover furniture. We clear units and small business storage rooms so the next step can start.",
      points: [
        "Single-family rental cleanouts",
        "Small office and shop junk",
        "Construction leftovers after a refresh",
      ],
    },
    faqs: [
      {
        question: "Is Clovis in your service area?",
        answer:
          "Clovis is on our Central Valley coverage list. Confirm the address when you request a quote. The owner should verify this city before advertising it as a standing route.",
      },
      {
        question: "Do you take yard waste in Clovis?",
        answer:
          "Bulk branches and landscape piles are a common request. Send a photo if dirt, concrete, or mixed demolition material is part of the pile.",
      },
    ],
    nearbySlugs: ["fresno-ca", "sanger-ca", "reedley-ca"],
  },
  {
    slug: "sanger-ca",
    city: "Sanger",
    state: "CA",
    county: "Fresno County",
    confirmed: false,
    needsOwnerConfirmation: true,
    h1: "Junk Removal in Sanger, CA",
    metaTitle: "Junk Removal Sanger CA | Home, Garage & Property Hauling",
    metaDescription:
      "Junk removal in Sanger, CA from Central Valley Junk & Hauling. Garage cleanouts, furniture, and property piles hauled. Get a free quote.",
    eyebrow: "SANGER JUNK REMOVAL",
    intro:
      "Sanger is a short run from Fresno, and the junk looks like a Central Valley town: packed garages off Academy, extra furniture after a family move, and backyard piles after pruning season.",
    localStory: [
      "People in Sanger usually are not looking for a franchise script. They want a crew to take the washer, the broken fence boards, and the stuff in the side yard. That is the work.",
      "Properties here often mix household junk with outdoor debris because lots are a little more open than a Fresno tract. Tell us if the pile is inside, outside, or both so the quote matches the job.",
      "If you are in town, near Jensen, or closer to the surrounding farmland, include the service address with your request.",
    ],
    neighborhoods: [
      "Downtown Sanger",
      "Academy Avenue",
      "Jensen Avenue area",
      "Bethel",
      "Del Rey area",
    ],
    popularServiceSlugs: [
      "junk-removal",
      "garage-cleanouts",
      "yard-waste-removal",
      "property-cleanouts",
      "appliance-removal",
    ],
    residential: {
      headline: "Sanger houses that need the extra weight gone",
      copy: "Show us the garage corner, the spare room, or the patio stack. We load it so you are not making four trips in a pickup.",
      points: [
        "Household furniture and appliance pickups",
        "Garage and shed overflow",
        "Yard piles after landscaping",
      ],
    },
    commercial: {
      headline: "Sanger property and shop cleanouts",
      copy: "Rental turnovers and small commercial back lots collect junk that does not belong in a city bin. We haul volume so the property can be used again.",
      points: [
        "Rental leftovers",
        "Shop and storage-room junk",
        "Outdoor debris on commercial lots",
      ],
    },
    faqs: [
      {
        question: "Can you come to Sanger for a small job?",
        answer:
          "Job size and location both matter. Describe what you have, or send photos, and we will tell you how we would quote it.",
      },
      {
        question: "Do you haul mixed household junk and yard waste together?",
        answer:
          "Often yes. Mixed piles are common in Sanger. Photos help us see whether it is one load or a larger property cleanout.",
      },
    ],
    nearbySlugs: ["fresno-ca", "reedley-ca", "selma-ca", "fowler-ca"],
  },
  {
    slug: "selma-ca",
    city: "Selma",
    state: "CA",
    county: "Fresno County",
    confirmed: false,
    needsOwnerConfirmation: true,
    h1: "Junk Removal in Selma, CA",
    metaTitle: "Junk Removal Selma CA | Furniture, Appliances & Cleanouts",
    metaDescription:
      "Junk removal in Selma, CA. Central Valley Junk & Hauling hauls furniture, appliances, and garage junk. Request a free quote.",
    eyebrow: "SELMA JUNK REMOVAL",
    intro:
      "Selma sits on Highway 99 south of Fresno, and the jobs are straightforward: a house that needs furniture gone, a garage that stopped being a garage, or a rental that still has the last tenant's stuff.",
    localStory: [
      "Selma households do not need a branded speech about junk. They need the fridge off the porch and the mattress out of the spare room. We come for that.",
      "Highway 99 makes the run simple when the address is confirmed. Older homes near downtown and properties along the main corridors both fill with the same mix of household junk and outdoor storage.",
      "If you are between Selma and Fowler or closer to Kingsburg, still send the address. Coverage for this city should be confirmed by the owner before treating it as a daily route.",
    ],
    neighborhoods: [
      "Downtown Selma",
      "Highway 99 corridor",
      "Floral Avenue area",
      "Second Street area",
    ],
    popularServiceSlugs: [
      "furniture-removal",
      "appliance-removal",
      "garage-cleanouts",
      "rental-property-cleanouts",
      "home-cleanouts",
    ],
    residential: {
      headline: "Selma home pickups, not a DIY dump run",
      copy: "If it is too heavy for the car, it is the kind of job we quote. Couches, washers, and garage piles are the usual list.",
      points: [
        "Furniture that did not sell",
        "Appliance change-outs",
        "Garage cleanouts before a move",
      ],
    },
    commercial: {
      headline: "Selma rentals and small business junk",
      copy: "A unit cannot be shown while it still holds leftover belongings. We clear what you authorize so turnover can continue.",
      points: [
        "Tenant leftovers",
        "Small retail or office furniture",
        "Exterior piles behind a building",
      ],
    },
    faqs: [
      {
        question: "Do you take appliances in Selma?",
        answer:
          "Refrigerators, washers, and dryers are common pickups. Please have them empty and disconnected when that applies.",
      },
      {
        question: "How do I get a quote in Selma?",
        answer:
          "Request a quote online, send photos, or call if a number is posted. Include the Selma address and a short description of the junk.",
      },
    ],
    nearbySlugs: ["fowler-ca", "kingsburg-ca", "fresno-ca", "sanger-ca"],
  },
  {
    slug: "kingsburg-ca",
    city: "Kingsburg",
    state: "CA",
    county: "Fresno County",
    confirmed: false,
    needsOwnerConfirmation: true,
    h1: "Junk Removal in Kingsburg, CA",
    metaTitle: "Junk Removal Kingsburg CA | Home & Property Hauling",
    metaDescription:
      "Junk removal in Kingsburg, CA. Haul-away for furniture, garage junk, and property cleanouts from Central Valley Junk & Hauling.",
    eyebrow: "KINGSBURG JUNK REMOVAL",
    intro:
      "Kingsburg is compact, walkable downtown, and residential streets that hide full garages. When the Swedish-village curb appeal stops at the garage door, we haul the overflow.",
    localStory: [
      "Kingsburg jobs are often household-scale: a dining set, a treadmill, a shed corner, a patio stack. They still need two people and a trailer. That is the point of calling.",
      "Because lots can include side yards and small outbuildings, tell us whether the junk is only inside or scattered outside. Mixed jobs are normal here.",
      "This city is on the planned south-99 coverage list and should be confirmed by the owner before it is treated as guaranteed service.",
    ],
    neighborhoods: [
      "Downtown Kingsburg",
      "Draper Street area",
      "Sierra Street corridor",
      "West Kingsburg",
    ],
    popularServiceSlugs: [
      "junk-removal",
      "garage-cleanouts",
      "furniture-removal",
      "yard-waste-removal",
      "estate-cleanouts",
    ],
    residential: {
      headline: "Kingsburg homes that need a clear-out, not a project",
      copy: "Point to the furniture, the garage pile, or the yard debris. We load it and take it off the property.",
      points: [
        "Single-item furniture pickups",
        "Garage and patio cleanouts",
        "Help after a family cleanout or move",
      ],
    },
    commercial: {
      headline: "Kingsburg storefronts and rentals",
      copy: "Small commercial spaces and rentals still generate desks, fixtures, and leftover belongings. We haul volume so you are not using staff as movers.",
      points: [
        "Rental turnovers",
        "Back-room and storage junk",
        "Remodel debris after a small refresh",
      ],
    },
    faqs: [
      {
        question: "Is a small Kingsburg pickup worth calling about?",
        answer:
          "Describe the items. A couch and a fridge is a real job. Photos make the quote faster either way.",
      },
      {
        question: "Can you take shed contents in Kingsburg?",
        answer:
          "Contents are a standard junk-removal request. Removing the shed structure itself is only offered if that specialty service is enabled.",
      },
    ],
    nearbySlugs: ["selma-ca", "fowler-ca", "reedley-ca"],
  },
  {
    slug: "fowler-ca",
    city: "Fowler",
    state: "CA",
    county: "Fresno County",
    confirmed: false,
    needsOwnerConfirmation: true,
    h1: "Junk Removal in Fowler, CA",
    metaTitle: "Junk Removal Fowler CA | Local Junk Hauling & Cleanouts",
    metaDescription:
      "Junk removal in Fowler, CA. Central Valley Junk & Hauling hauls household junk, furniture, and garage piles. Get a free quote.",
    eyebrow: "FOWLER JUNK REMOVAL",
    intro:
      "Fowler is a small stop on 99 with houses and shops that still collect a surprising amount of junk. When the pile is bigger than a sedan, we are the truck.",
    localStory: [
      "Fowler jobs tend to be honest and mixed: a washer on the side of the house, furniture from a relative, a garage that became a holding pen. We do not need a long story. We need to know what goes.",
      "Because the town is small, access is usually straightforward. Still tell us about gates, dogs, and whether items are inside. That avoids a wasted trip.",
      "Owner confirmation is needed before treating Fowler as a standing advertised stop.",
    ],
    neighborhoods: [
      "Downtown Fowler",
      "Golden State Boulevard area",
      "Merced Street area",
      "South Fowler",
    ],
    popularServiceSlugs: [
      "appliance-removal",
      "furniture-removal",
      "garage-cleanouts",
      "junk-removal",
      "property-cleanouts",
    ],
    residential: {
      headline: "Fowler residential pickups",
      copy: "If it has been sitting on the porch or in the garage long enough that you stopped seeing it, it is time to have it hauled.",
      points: [
        "Appliances and mattresses",
        "Garage corners and household junk",
        "Yard and patio overflow",
      ],
    },
    commercial: {
      headline: "Fowler rentals and lot debris",
      copy: "Property owners here still deal with tenant leftovers and outdoor storage. We clear what you point to so the place can be used or shown.",
      points: [
        "Unit cleanouts",
        "Exterior junk on small lots",
        "Furniture left behind after a move-out",
      ],
    },
    faqs: [
      {
        question: "Do you come to Fowler for one item?",
        answer:
          "One heavy item can still be a real haul. Send a photo and the address and we will tell you how we quote it.",
      },
      {
        question: "What should I do before you arrive in Fowler?",
        answer:
          "Set aside anything you want to keep and make a path to the junk. You do not have to carry it outside.",
      },
    ],
    nearbySlugs: ["selma-ca", "fresno-ca", "kingsburg-ca", "sanger-ca"],
  },
  {
    slug: "reedley-ca",
    city: "Reedley",
    state: "CA",
    county: "Fresno County",
    confirmed: false,
    needsOwnerConfirmation: true,
    h1: "Junk Removal in Reedley, CA",
    metaTitle: "Junk Removal Reedley CA | Cleanouts Along the Kings River",
    metaDescription:
      "Junk removal in Reedley, CA. Garage cleanouts, furniture hauling, and property junk removal from Central Valley Junk & Hauling.",
    eyebrow: "REEDLEY JUNK REMOVAL",
    intro:
      "Reedley sits along the Kings River with older downtown homes and orchard-edge properties. Both collect furniture, garage junk, and outdoor piles that a city bin will not swallow.",
    localStory: [
      "Reedley cleanouts often include a mix of household furniture and outdoor items because people store things in carports, side yards, and small barns. Tell us about those extra spots when you send photos.",
      "College-town rentals and family homes both generate mattresses, couches, and leftover appliances. The labor is the same: we lift it and leave.",
      "This city should be confirmed by the owner before it is treated as guaranteed coverage.",
    ],
    neighborhoods: [
      "Downtown Reedley",
      "Reed Avenue corridor",
      "Manning Avenue area",
      "East Reedley",
      "Kings River area",
    ],
    popularServiceSlugs: [
      "home-cleanouts",
      "garage-cleanouts",
      "furniture-removal",
      "yard-waste-removal",
      "rental-property-cleanouts",
    ],
    residential: {
      headline: "Reedley homes and the stuff in the extra building",
      copy: "If the house is fine but the garage, carport, or backyard is the problem, that is still a junk-removal job. We take what you release.",
      points: [
        "Furniture and mattress hauling",
        "Garage and carport cleanouts",
        "Outdoor debris after yard work",
      ],
    },
    commercial: {
      headline: "Reedley rentals and small commercial spaces",
      copy: "Student and family rentals turn faster when leftover furniture is gone. We haul the unit contents you no longer want.",
      points: [
        "Move-out leftovers",
        "Office and shop furniture",
        "Property piles before listing",
      ],
    },
    faqs: [
      {
        question: "Can you haul junk from a Reedley property with a long driveway?",
        answer:
          "Access matters. Describe parking, gates, and how far items are from the street when you request a quote.",
      },
      {
        question: "Do you take yard waste in Reedley?",
        answer:
          "Bulk landscape debris is a common add-on to property cleanouts. Photos help us see whether it is brush, mixed junk, or heavy material.",
      },
    ],
    nearbySlugs: ["sanger-ca", "kingsburg-ca", "fresno-ca", "selma-ca"],
  },
  {
    slug: "madera-ca",
    city: "Madera",
    state: "CA",
    county: "Madera County",
    confirmed: false,
    needsOwnerConfirmation: true,
    h1: "Junk Removal in Madera, CA",
    metaTitle: "Junk Removal Madera CA | Ranch, Home & Property Hauling",
    metaDescription:
      "Junk removal in Madera, CA. Central Valley Junk & Hauling clears homes, garages, and property piles north of Fresno. Request a free quote.",
    eyebrow: "MADERA JUNK REMOVAL",
    intro:
      "Madera is north on 99, with in-town houses and larger lots that collect a different kind of pile: patio furniture, garage junk, and outdoor storage that sat through a few summers.",
    localStory: [
      "A Madera job might be a downtown bungalow with a packed garage, or a Ranchos-area property with stuff in a shop. Volume and access change. The process does not: you point, we load, you approve the price first.",
      "Because some properties are larger, photos of each pile save time. A living-room couch and a backyard scrap pile are not always the same quote.",
      "Madera County coverage should be confirmed by the owner before it is advertised as a standing service area.",
    ],
    neighborhoods: [
      "Downtown Madera",
      "Madera Ranchos",
      "Parksdale",
      "Sharon Boulevard corridor",
      "Country Club Drive area",
    ],
    popularServiceSlugs: [
      "property-cleanouts",
      "garage-cleanouts",
      "appliance-removal",
      "construction-debris-removal",
      "commercial-junk-removal",
    ],
    residential: {
      headline: "Madera houses and larger residential lots",
      copy: "If the junk is in the house, the garage, or out back, describe each area. We quote the work before we start hauling.",
      points: [
        "Household furniture and appliances",
        "Garage and shop overflow",
        "Outdoor piles on larger lots",
      ],
    },
    commercial: {
      headline: "Madera property managers and job sites",
      copy: "Rentals, small commercial buildings, and remodel debris north of Fresno still need a hauling crew. We schedule around access and get the volume off the property.",
      points: [
        "Rental and vacant-home cleanouts",
        "Jobsite leftovers",
        "Office and shop furniture",
      ],
    },
    faqs: [
      {
        question: "Do you go to Madera Ranchos?",
        answer:
          "Share the exact address. Outlying properties are part of the planned area but should be confirmed when you request the quote.",
      },
      {
        question: "Can you take mixed scrap and household junk in Madera?",
        answer:
          "Mixed piles are common. Photos let us see metal, furniture, and debris before we quote. Restricted materials still need a check.",
      },
    ],
    nearbySlugs: ["fresno-ca", "clovis-ca"],
  },
  {
    slug: "visalia-ca",
    city: "Visalia",
    state: "CA",
    county: "Tulare County",
    confirmed: false,
    needsOwnerConfirmation: true,
    h1: "Junk Removal in Visalia, CA",
    metaTitle: "Junk Removal Visalia CA | Cleanouts in Tulare County",
    metaDescription:
      "Junk removal in Visalia, CA. Furniture, garage cleanouts, and commercial hauling from Central Valley Junk & Hauling. Get a free quote.",
    eyebrow: "VISALIA JUNK REMOVAL",
    intro:
      "Visalia is the largest city we list south of Fresno. Downtown homes, northwest tracts, and commercial strips along Mooney all generate junk that needs a crew, not a borrowed truck.",
    localStory: [
      "Visalia jobs swing from a single mattress in an apartment to a whole-house cleanout before a sale. The commercial side is offices, retail back rooms, and rental turnovers that cannot wait on staff with a trailer.",
      "Distance from Fresno means we want a clear description and photos. That keeps the quote honest and the visit efficient.",
      "Tulare County coverage is planned and flagged for owner confirmation before it is treated as a standing daily market.",
    ],
    neighborhoods: [
      "Downtown Visalia",
      "Mooney Boulevard corridor",
      "Northwest Visalia",
      "Green Acres",
      "Shannon Ranch",
    ],
    popularServiceSlugs: [
      "junk-removal",
      "commercial-junk-removal",
      "office-cleanouts",
      "home-cleanouts",
      "furniture-removal",
      "construction-debris-removal",
    ],
    residential: {
      headline: "Visalia homeowners who want the pile gone",
      copy: "Garage, spare room, patio, or all three. You decide what stays. We haul the rest and clean up the work area.",
      points: [
        "Whole-home and garage cleanouts",
        "Furniture and appliance pickups",
        "Yard and remodel leftovers",
      ],
    },
    commercial: {
      headline: "Visalia commercial and property turnover",
      copy: "Offices, retail, and rentals in Visalia need reliable hauling more than they need clever slogans. We quote the volume and load it.",
      points: [
        "Office furniture and storage-room junk",
        "Rental and vacant-property cleanouts",
        "Construction debris after interior work",
      ],
    },
    faqs: [
      {
        question: "Do you regularly serve Visalia?",
        answer:
          "Visalia is on the Central Valley city list and needs owner confirmation as a standing market. Request a quote with the address and we will tell you if we can take the job.",
      },
      {
        question: "Can a Visalia office cleanout happen around business hours?",
        answer:
          "Share access rules and timing. We work with the window the property can give us when the job is a fit.",
      },
    ],
    nearbySlugs: ["kingsburg-ca", "selma-ca", "fresno-ca"],
  },
];

export function publishedLocations() {
  return locations.filter((location) => location.confirmed);
}

export function listedLocations() {
  return locations;
}

export function getLocation(slug: string) {
  return locations.find((location) => location.slug === slug);
}

export function nearbyLocations(slugs: string[]) {
  return slugs
    .map((slug) => getLocation(slug))
    .filter((location): location is Location => Boolean(location));
}
