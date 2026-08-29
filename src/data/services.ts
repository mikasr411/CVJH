export type ServiceFaq = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  name: string;
  category: "core" | "specialty";
  enabled: boolean;
  showOnHome: boolean;
  icon:
    | "truck"
    | "sofa"
    | "refrigerator"
    | "warehouse"
    | "home"
    | "trees"
    | "hardHat"
    | "building2"
    | "briefcase"
    | "archive"
    | "key"
    | "landmark"
    | "bath"
    | "hammer"
    | "alert";
  cardDescription: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  body: string[];
  bullets: string[];
  audience: "residential" | "commercial" | "both";
  relatedSlugs: string[];
  faqs: ServiceFaq[];
};

export const services: Service[] = [
  {
    slug: "junk-removal",
    name: "Junk Removal",
    category: "core",
    enabled: true,
    showOnHome: true,
    icon: "truck",
    cardDescription: "One item or a whole pile. Point to it and we haul it.",
    h1: "Junk Removal in Fresno and the Central Valley",
    metaTitle: "Junk Removal Fresno CA | Central Valley Junk & Hauling",
    metaDescription:
      "Professional junk removal in Fresno and the Central Valley. We lift, load, haul, and clean up. Request a free quote from Central Valley Junk & Hauling.",
    intro:
      "You do not need a dumpster, a borrowed truck, or a Saturday spent at the landfill. Show us the junk. We take it from there.",
    body: [
      "Most people call because the stuff has been sitting there long enough. An extra couch in the garage. A stack of broken furniture after a move. A yard full of debris after a project. That pile is not going to move itself, and it should not take over your weekend either.",
      "Central Valley Junk & Hauling handles residential and commercial junk removal throughout Fresno and the surrounding Central Valley. You tell us what needs to go. The crew does the lifting, loading, hauling, and cleanup.",
      "Jobs range from a single appliance on the curb to a full property cleanout. If you can point to it, we can talk through how to get it gone.",
    ],
    bullets: [
      "Furniture, appliances, household junk, and garage piles",
      "Inside, outside, upstairs, or out back",
      "You approve the price before we start",
    ],
    audience: "both",
    relatedSlugs: [
      "furniture-removal",
      "garage-cleanouts",
      "home-cleanouts",
      "commercial-junk-removal",
    ],
    faqs: [
      {
        question: "What counts as junk removal?",
        answer:
          "Household items, furniture, appliances, garage clutter, yard debris, and similar materials we can legally haul. If you are unsure about a specific item, send a photo.",
      },
      {
        question: "Do I have to pile everything at the curb?",
        answer:
          "No. Where we can access it safely, we carry items out ourselves. You point. We load.",
      },
    ],
  },
  {
    slug: "furniture-removal",
    name: "Furniture Removal",
    category: "core",
    enabled: true,
    showOnHome: true,
    icon: "sofa",
    cardDescription: "Couches, mattresses, tables, and the stuff that will not fit in your car.",
    h1: "Furniture Removal in Fresno, CA",
    metaTitle: "Furniture Removal Fresno | Couches, Mattresses & More",
    metaDescription:
      "Need a couch, mattress, or bedroom set gone? Central Valley Junk & Hauling removes furniture from homes and businesses in Fresno and the Central Valley.",
    intro:
      "Furniture is bulky, awkward, and heavier than it looks. That is the whole reason people leave it in the garage for years. We come get it.",
    body: [
      "Couches, sectionals, mattresses, box springs, dressers, dining sets, office desks, and patio furniture all take up more space than they are worth once you are done with them. Sliding a sofa down a hallway is a good way to ding a wall and throw out your back.",
      "Our crew removes furniture from inside the home, upstairs rooms, apartments, and offices. You do not need to drag it to the driveway first.",
      "If you are replacing a living room set, clearing a spare room, or emptying a rental, we can take the old pieces the same visit you want them gone.",
    ],
    bullets: [
      "Sofas, mattresses, beds, tables, chairs, and desks",
      "Carried out from inside the home or office",
      "Useful after remodels, moves, and furniture deliveries",
    ],
    audience: "both",
    relatedSlugs: ["appliance-removal", "home-cleanouts", "junk-removal"],
    faqs: [
      {
        question: "Can you take a couch from a second-story apartment?",
        answer:
          "In most cases, yes. Tell us about stairs, tight hallways, or elevator rules when you request a quote so we can plan the job.",
      },
      {
        question: "Do you take mattresses?",
        answer:
          "Yes. Mattresses and box springs are a common pickup. If local disposal rules apply to a specific item, we will tell you when we quote the job.",
      },
    ],
  },
  {
    slug: "appliance-removal",
    name: "Appliance Removal",
    category: "core",
    enabled: true,
    showOnHome: true,
    icon: "refrigerator",
    cardDescription: "Fridges, washers, dryers, and the appliances you cannot lift.",
    h1: "Appliance Removal in Fresno and the Central Valley",
    metaTitle: "Appliance Removal Fresno CA | Fridge, Washer & Dryer Haul-Away",
    metaDescription:
      "Haul-away for refrigerators, washers, dryers, and other appliances in Fresno. Central Valley Junk & Hauling lifts and loads so you do not have to.",
    intro:
      "Appliances do not ride in a sedan. When the new fridge is on the truck, the old one still has to leave. That is our job.",
    body: [
      "Refrigerators, washers, dryers, stoves, dishwashers, and freezers are some of the most requested pickups we get. They are heavy, they scratch floors, and they are a two-person lift even on a good day.",
      "If the appliance is disconnected and ready to move, we take it from the kitchen, garage, laundry room, or patio. If you are not sure it is ready, mention it when you send photos or request a quote and we will talk through it.",
      "This is a common add-on to garage cleanouts and rental turnovers. One crew can take the appliances and the rest of the junk in the same visit.",
    ],
    bullets: [
      "Refrigerators, washers, dryers, ovens, and similar appliances",
      "Removed from inside the home when access allows",
      "Often combined with furniture or garage cleanouts",
    ],
    audience: "both",
    relatedSlugs: ["furniture-removal", "garage-cleanouts", "rental-property-cleanouts"],
    faqs: [
      {
        question: "Do I need to disconnect the appliance first?",
        answer:
          "Please have water, gas, and power disconnected before we arrive when that applies. If you need help figuring out whether an item is ready, send a photo and ask.",
      },
      {
        question: "Can you take a fridge that is still full?",
        answer:
          "Please empty it first. Food and liquids make the job messier and heavier. Once it is empty, we can haul the unit.",
      },
    ],
  },
  {
    slug: "garage-cleanouts",
    name: "Garage Cleanouts",
    category: "core",
    enabled: true,
    showOnHome: true,
    icon: "warehouse",
    cardDescription: "Get the car back in the garage. We clear the years of stuff.",
    h1: "Garage Cleanouts in Fresno, CA",
    metaTitle: "Garage Cleanout Fresno | Junk Removal for Packed Garages",
    metaDescription:
      "Packed garage in Fresno? Central Valley Junk & Hauling clears the clutter, loads it, and hauls it away so you can use the space again.",
    intro:
      "Garages in the Central Valley fill up fast. Holiday bins, old furniture, sports gear, leftover remodel scraps. Then one day you cannot park inside.",
    body: [
      "A garage cleanout is one of the most satisfying jobs we do because the change is obvious. Before: boxes, broken chairs, and a path you have to sidestep. After: floor, walls, and room to park.",
      "You do not have to sort every item into perfect piles unless you want to keep something. Walk us through what stays. We take the rest, load the trailer, and sweep up the area we worked.",
      "Homeowners often pair a garage cleanout with furniture or appliance removal. If the junk spilled into the driveway or side yard, we can take that too.",
    ],
    bullets: [
      "Years of stored household junk, furniture, and tools you no longer want",
      "You mark what stays. We haul what goes.",
      "The goal is a garage you can actually use",
    ],
    audience: "residential",
    relatedSlugs: ["home-cleanouts", "storage-unit-cleanouts", "yard-waste-removal"],
    faqs: [
      {
        question: "Do I have to box everything before you arrive?",
        answer:
          "No. Loose items are normal. If you want to keep things, set them aside or tell the crew on site. We load what you want removed.",
      },
      {
        question: "Can you take mixed garage junk in one trip?",
        answer:
          "That is a typical garage job: furniture, boxes, old tools, and household clutter in one load. Restricted materials are the exception. Send photos if you are unsure.",
      },
    ],
  },
  {
    slug: "estate-cleanouts",
    name: "Estate Cleanouts",
    category: "core",
    enabled: true,
    showOnHome: true,
    icon: "landmark",
    cardDescription: "Clear a house at your pace. We handle the heavy, unwanted stuff.",
    h1: "Estate Cleanouts in the Central Valley",
    metaTitle: "Estate Cleanout Fresno CA | House & Property Clearing",
    metaDescription:
      "Estate and inherited-home cleanouts in Fresno and the Central Valley. We haul unwanted furniture, junk, and household contents after you decide what stays.",
    intro:
      "Estate cleanouts are not a race, and they are not just junk. Families need time to keep what matters. When you are ready for the rest to leave, we come in and do the labor.",
    body: [
      "Clearing a house after a move, a sale, or a loss is exhausting even before anyone lifts a couch. The emotional part is yours. The hauling does not have to be.",
      "We remove furniture, household junk, garage contents, and other items you have already decided should go. We do not rummage through belongings looking for value, and we do not rush you into throwing away things you have not reviewed.",
      "Some families want one room cleared. Others need the whole property emptied before listing or turnover. Tell us the scope. We quote the work before we start.",
    ],
    bullets: [
      "Whole-home or room-by-room removal",
      "You decide what stays. We haul what goes.",
      "Useful before a sale, transfer, or family walkthrough is finished",
    ],
    audience: "residential",
    relatedSlugs: ["home-cleanouts", "property-cleanouts", "furniture-removal"],
    faqs: [
      {
        question: "Can you work around items we are still sorting?",
        answer:
          "Yes. Mark or set aside anything that stays. We only take what you tell us to take.",
      },
      {
        question: "Do you buy antiques or haul everything to a dump?",
        answer:
          "We are a hauling crew, not an estate buyer. We remove the items you no longer want. Ask us about a specific item if you have a concern.",
      },
    ],
  },
  {
    slug: "home-cleanouts",
    name: "Home Cleanouts",
    category: "core",
    enabled: true,
    showOnHome: true,
    icon: "home",
    cardDescription: "Whole-house clutter, extra rooms, and the stuff that piled up.",
    h1: "Home Cleanouts in Fresno, CA",
    metaTitle: "Home Cleanout Fresno | Whole-House Junk Removal",
    metaDescription:
      "Whole-home junk removal and cleanouts in Fresno. From spare rooms to full-house clutter, Central Valley Junk & Hauling hauls what you no longer need.",
    intro:
      "A house collects stuff in the corners, the spare bedroom, and the hallway you stopped noticing. A home cleanout is how you get the floor plan back.",
    body: [
      "Maybe you are downsizing. Maybe you are getting the house ready to sell. Maybe you just want the junk out so you can live in the rooms again. The reason does not matter as much as the pile.",
      "We go room by room if that is how you want to work, or we take a list of items across the house in one visit. Furniture, household junk, boxes, and bulky pieces are all fair game when they are yours to remove.",
      "Home cleanouts in Fresno often include the garage, patio, and side yard because that is where overflow lands. We can cover those areas in the same job.",
    ],
    bullets: [
      "Spare rooms, living areas, and whole-house junk",
      "Combined indoor and outdoor removal when needed",
      "Good for moves, sales, and getting a house livable again",
    ],
    audience: "residential",
    relatedSlugs: ["garage-cleanouts", "estate-cleanouts", "property-cleanouts"],
    faqs: [
      {
        question: "Can you do a whole house in one day?",
        answer:
          "It depends on volume and access. Send photos or describe the rooms involved and we will tell you how we would approach the job.",
      },
      {
        question: "Will you pack items I want to keep?",
        answer:
          "We haul what you want removed. Please set keepers aside before we start so nothing important leaves by mistake.",
      },
    ],
  },
  {
    slug: "yard-waste-removal",
    name: "Yard Waste Removal",
    category: "core",
    enabled: true,
    showOnHome: true,
    icon: "trees",
    cardDescription: "Branches, brush, and landscape debris that will not fit in the bin.",
    h1: "Yard Waste Removal in the Central Valley",
    metaTitle: "Yard Waste Removal Fresno CA | Brush, Branches & Landscape Debris",
    metaDescription:
      "Yard waste and landscape debris hauling in Fresno and the Central Valley. We load branches, brush, and outdoor piles so you can finish the project.",
    intro:
      "Valley yards make debris. Pruning, storm drop, a fence project, a pile that never made it to green waste. When it is more than the bin can take, call us.",
    body: [
      "Yard waste is bulky and messy. Bagging it yourself takes all afternoon, and a pickup truck still might not finish the job. We load the pile and haul it off the property.",
      "Typical pickups include branches, brush, leaves in bulk, leftover landscaping materials, and mixed outdoor debris after a weekend project. If dirt, concrete, or other heavy material is mixed in, tell us up front so we can quote it correctly.",
      "Homeowners, landscapers, and property managers all use this service after cleanups that got bigger than planned.",
    ],
    bullets: [
      "Branches, brush, and bulky landscape debris",
      "Loaded from the yard, driveway, or curb",
      "Useful after pruning, storms, and outdoor projects",
    ],
    audience: "both",
    relatedSlugs: ["construction-debris-removal", "junk-removal", "property-cleanouts"],
    faqs: [
      {
        question: "Do you take dirt and concrete?",
        answer:
          "Heavy materials are a different kind of load. Describe what you have or send a photo so we can tell you whether it fits this service.",
      },
      {
        question: "Can you take mixed yard junk and old patio furniture?",
        answer:
          "Often yes. Mixed outdoor piles are common. Photos help us quote the job before we arrive.",
      },
    ],
  },
  {
    slug: "construction-debris-removal",
    name: "Construction Debris Removal",
    category: "core",
    enabled: true,
    showOnHome: true,
    icon: "hardHat",
    cardDescription: "Remodel scraps, tear-out debris, and jobsite leftovers.",
    h1: "Construction Debris Removal in Fresno, CA",
    metaTitle: "Construction Debris Removal Fresno | Remodel & Jobsite Hauling",
    metaDescription:
      "Construction and remodel debris hauling in Fresno and the Central Valley. We clear jobsite leftovers so the project can move forward.",
    intro:
      "The job is done, or at least that part of it is, and now the debris is in the way. We haul the leftover material so you are not living around a pile of scrap.",
    body: [
      "Kitchen tear-outs, flooring stacks, drywall scraps, old cabinets, and mixed remodel debris take over driveways and rooms fast. A dumpster is one option. Full-service hauling is the other: we load it and take it.",
      "Homeowners use this after DIY weekends. Contractors and property managers use it when a site needs to be cleared between phases or before inspection.",
      "Tell us what the material is. Mixed debris, wood, and general remodel scrap are common. Specialized or restricted materials need a conversation first.",
    ],
    bullets: [
      "Remodel leftovers and general construction debris",
      "Residential and commercial jobsites",
      "An alternative to loading a dumpster yourself",
    ],
    audience: "both",
    relatedSlugs: [
      "commercial-junk-removal",
      "property-cleanouts",
      "yard-waste-removal",
    ],
    faqs: [
      {
        question: "Is this the same as renting a dumpster?",
        answer:
          "No. With junk removal, our crew loads the debris and hauls it away. You do not fill a bin yourself unless you prefer that route.",
      },
      {
        question: "Can you work around an active remodel?",
        answer:
          "Yes, as long as we can access the pile safely. Tell us about timing, parking, and what should not be touched.",
      },
    ],
  },
  {
    slug: "rental-property-cleanouts",
    name: "Rental Property Cleanouts",
    category: "core",
    enabled: true,
    showOnHome: true,
    icon: "key",
    cardDescription: "Tenant leftovers, turnover junk, and units that need to be empty.",
    h1: "Rental Property Cleanouts in Fresno and the Central Valley",
    metaTitle: "Rental Property Cleanout Fresno | Tenant Move-Out Junk Removal",
    metaDescription:
      "Rental and tenant-turnover cleanouts in Fresno. We remove leftover furniture, junk, and debris so units can be turned faster.",
    intro:
      "The tenant is gone. The stuff is not. Every extra day that sofa sits in the living room is a day the unit is not ready.",
    body: [
      "Landlords and property managers call when a unit still has furniture, bags, garage junk, or a patio full of things nobody is coming back for. We clear it so painting, cleaning, and showings can start.",
      "This is not a housekeeping service. It is hauling. We take the unwanted items, load them, and leave the space empty of that junk. Combine it with a garage or yard pile if the property has both.",
      "Repeat turnovers are common. If you manage more than one property, ask about quoting similar jobs the same way each time so scheduling stays simple.",
    ],
    bullets: [
      "Leftover furniture, household junk, and garage items",
      "Apartments, houses, and small multi-unit properties",
      "Built for turnovers, not weekend chore lists",
    ],
    audience: "commercial",
    relatedSlugs: [
      "property-cleanouts",
      "commercial-junk-removal",
      "eviction-cleanouts",
    ],
    faqs: [
      {
        question: "Can you empty a unit that still has a little of everything?",
        answer:
          "Yes. Mixed leftover belongings are typical. Walk through what must stay, such as appliances that belong with the property.",
      },
      {
        question: "Do you work with property managers on more than one job?",
        answer:
          "We work with residential and commercial clients, including repeat property work. Reach out with the address and photos so we can quote the current unit.",
      },
    ],
  },
  {
    slug: "commercial-junk-removal",
    name: "Commercial Cleanouts",
    category: "core",
    enabled: true,
    showOnHome: true,
    icon: "building2",
    cardDescription: "Offices, retail, and properties that need a crew, not a weekend.",
    h1: "Commercial Junk Removal in Fresno, CA",
    metaTitle: "Commercial Junk Removal Fresno | Offices, Retail & Property Cleanouts",
    metaDescription:
      "Commercial junk removal for offices, retail, rentals, and job sites in Fresno and the Central Valley. Reliable scheduling and full-service hauling.",
    intro:
      "Business junk is a timeline problem. The unit has to be empty, the remodel debris has to leave, and nobody on staff should be carrying desks to a dumpster.",
    body: [
      "We haul junk for property managers, contractors, landlords, offices, retail spaces, and investors who need volume gone without turning employees into a moving crew.",
      "Typical work includes office furniture, tenant leftovers, construction debris, storage rooms, and exterior piles. You get a quote before we start. The crew does the labor.",
      "If you have recurring cleanouts, say so when you contact us. Repeat commercial work is easier when we already know the property and how you like jobs handled.",
    ],
    bullets: [
      "Offices, retail, rentals, and jobsite debris",
      "Quoted before we load",
      "Built around scheduling and turnaround, not Saturday chores",
    ],
    audience: "commercial",
    relatedSlugs: [
      "office-cleanouts",
      "property-cleanouts",
      "construction-debris-removal",
    ],
    faqs: [
      {
        question: "Can you work after hours or around tenants?",
        answer:
          "Tell us the access rules and timing you need. We schedule around what the property allows whenever we can.",
      },
      {
        question: "Do you take mixed commercial debris and furniture together?",
        answer:
          "Often yes. Photos of the pile and a note about any restricted materials help us quote it correctly.",
      },
    ],
  },
  {
    slug: "office-cleanouts",
    name: "Office Cleanouts",
    category: "core",
    enabled: true,
    showOnHome: true,
    icon: "briefcase",
    cardDescription: "Desks, chairs, copiers, and the storage room nobody wants to touch.",
    h1: "Office Cleanouts in Fresno and the Central Valley",
    metaTitle: "Office Cleanout Fresno CA | Office Furniture & Junk Removal",
    metaDescription:
      "Office cleanouts in Fresno. We remove desks, chairs, copiers, and storage-room junk so your space can be reused, remodeled, or vacated.",
    intro:
      "Offices collect dead equipment and furniture in the back room until a move or remodel makes it urgent. We clear the space so the next phase can start.",
    body: [
      "Desks, task chairs, cubicle pieces, filing cabinets, and miscellaneous office junk are a bad DIY project. They scuff floors, jam elevators, and take more loads than anyone estimates.",
      "We remove the items you no longer need from offices, suites, and small commercial interiors. You keep what still belongs in the space. We haul the rest.",
      "This pairs naturally with a commercial move-out, a refresh before a new tenant, or a storage room that became a graveyard for old electronics and boxes.",
    ],
    bullets: [
      "Office furniture and miscellaneous workplace junk",
      "Suites, small offices, and back-room overflow",
      "Scheduled around your access and building rules",
    ],
    audience: "commercial",
    relatedSlugs: [
      "commercial-junk-removal",
      "furniture-removal",
      "storage-unit-cleanouts",
    ],
    faqs: [
      {
        question: "Can you take copiers and electronics?",
        answer:
          "Many office items are standard junk-removal requests. Some electronics have handling rules. Send a photo of what you have and we will tell you what we can take.",
      },
      {
        question: "Do you need building insurance paperwork?",
        answer:
          "If your building requires vendor documents, ask us before the job. We will tell you what we can provide. We do not list credentials here unless they are confirmed in our business information.",
      },
    ],
  },
  {
    slug: "storage-unit-cleanouts",
    name: "Storage Unit Cleanouts",
    category: "core",
    enabled: true,
    showOnHome: true,
    icon: "archive",
    cardDescription: "Stop paying rent on a unit full of things you do not want.",
    h1: "Storage Unit Cleanouts in Fresno, CA",
    metaTitle: "Storage Unit Cleanout Fresno | Haul-Away for Unit Contents",
    metaDescription:
      "Storage unit cleanouts in Fresno and the Central Valley. We load the contents you no longer want so you can empty the unit and stop paying for it.",
    intro:
      "A storage unit is easy to ignore until the bill is the only thing left. If you are done keeping the stuff, we can empty what you want gone.",
    body: [
      "Units fill with furniture, boxes, holiday decorations, and things that never made it back to the house. Clearing one by yourself means a borrowed truck and several trips. We meet you at the unit and load.",
      "You can be there to point out keepers, or you can tell us the unit is a full pull. Either way, we only take what you authorize.",
      "This is also common after a move, an inherited unit, or a business that rented extra space and never went back.",
    ],
    bullets: [
      "Furniture, boxes, and mixed unit contents",
      "Meet at the facility and load on site",
      "A straightforward way to stop the monthly bill",
    ],
    audience: "both",
    relatedSlugs: ["home-cleanouts", "garage-cleanouts", "furniture-removal"],
    faqs: [
      {
        question: "Do I need to be at the storage facility?",
        answer:
          "Someone has to provide access and confirm what goes. That can be you or another authorized person. Ask us when you book.",
      },
      {
        question: "Can you empty the entire unit?",
        answer:
          "Yes, if that is what you want. Tell us whether anything must stay so we do not haul a keeper.",
      },
    ],
  },
  {
    slug: "property-cleanouts",
    name: "Property Cleanouts",
    category: "core",
    enabled: true,
    showOnHome: false,
    icon: "home",
    cardDescription: "Houses, lots, and outdoor piles that need a full clear-out.",
    h1: "Property Cleanouts in Fresno and the Central Valley",
    metaTitle: "Property Cleanout Fresno CA | Full Property Junk Removal",
    metaDescription:
      "Full property cleanouts in Fresno. Indoor junk, outdoor piles, and leftover belongings hauled so the property is clear and usable again.",
    intro:
      "Some jobs are bigger than a couch. A property cleanout means the house, the garage, the yard, or all three. We come to clear it.",
    body: [
      "Vacant homes, inherited properties, rentals, and lots with years of outdoor storage all turn into the same problem: too much stuff, not enough labor. A property cleanout is the full-service version of junk removal.",
      "We can focus on the interior, the exterior, or both. Furniture, household junk, garage contents, and outdoor debris are typical. Restricted materials still need a check first.",
      "Realtors, investors, and families use this when a property has to be shown, sold, or occupied again. Photos are the fastest way for us to understand the scope.",
    ],
    bullets: [
      "Interior and exterior junk on the same property",
      "Vacant homes, rentals, and lots with accumulated debris",
      "Quoted from photos or an on-site look at the pile",
    ],
    audience: "both",
    relatedSlugs: [
      "home-cleanouts",
      "rental-property-cleanouts",
      "estate-cleanouts",
    ],
    faqs: [
      {
        question: "Can you clear inside and outside in one job?",
        answer:
          "Yes. Many property cleanouts include the house plus a garage or yard pile. Send photos of each area so the quote matches the real volume.",
      },
      {
        question: "Is this the same as a demolition?",
        answer:
          "No. This is junk and debris removal, not tearing down structures. Specialty demolition work is only offered if it is enabled in our services.",
      },
    ],
  },
  {
    slug: "hot-tub-removal",
    name: "Hot Tub Removal",
    category: "specialty",
    enabled: false,
    showOnHome: false,
    icon: "bath",
    cardDescription: "Heavy spa and hot tub haul-away when this service is offered.",
    h1: "Hot Tub Removal in the Central Valley",
    metaTitle: "Hot Tub Removal Fresno CA | Spa Haul-Away",
    metaDescription:
      "Hot tub and spa removal in Fresno and the Central Valley, when available. Request a quote from Central Valley Junk & Hauling.",
    intro:
      "Hot tubs are a specialty haul because of weight, access, and teardown. This service is listed only when the company is ready to take these jobs.",
    body: [
      "If you are seeing this page, hot tub removal is enabled for quoting. Access, stairs, and whether the unit can be broken down all affect the job.",
      "Send photos of the tub and the path out to the truck. That is the fastest way to get a useful quote.",
    ],
    bullets: ["Heavy lift and tight-access planning", "Photos help before we roll"],
    audience: "residential",
    relatedSlugs: ["junk-removal", "yard-waste-removal"],
    faqs: [
      {
        question: "Do you always take hot tubs?",
        answer:
          "Only when this specialty service is enabled. If you are unsure, send a photo and ask.",
      },
    ],
  },
  {
    slug: "shed-removal",
    name: "Shed Removal",
    category: "specialty",
    enabled: false,
    showOnHome: false,
    icon: "warehouse",
    cardDescription: "Shed tear-down and haul-away when this service is offered.",
    h1: "Shed Removal in Fresno, CA",
    metaTitle: "Shed Removal Fresno | Tear-Down and Haul-Away",
    metaDescription:
      "Shed removal in Fresno and the Central Valley, when available. Central Valley Junk & Hauling can quote tear-down and haul-away jobs.",
    intro:
      "Sheds are a specialty job because they may need tear-down, not just loading. This page is available when that work is offered.",
    body: [
      "Contents inside the shed, the structure itself, and access through the yard all change the quote. Photos of the shed and the gate help.",
    ],
    bullets: ["Structure and contents can be separate parts of the job"],
    audience: "residential",
    relatedSlugs: ["property-cleanouts", "construction-debris-removal"],
    faqs: [
      {
        question: "Do you demolish sheds?",
        answer:
          "Only if this specialty service is enabled and the job is a fit. Ask before assuming a full tear-down.",
      },
    ],
  },
  {
    slug: "light-demolition",
    name: "Light Demolition",
    category: "specialty",
    enabled: false,
    showOnHome: false,
    icon: "hammer",
    cardDescription: "Small tear-outs and haul-away when this service is offered.",
    h1: "Light Demolition in the Central Valley",
    metaTitle: "Light Demolition Fresno CA | Small Tear-Outs & Hauling",
    metaDescription:
      "Light demolition and debris hauling in Fresno, when available. Request details from Central Valley Junk & Hauling before assuming structural work.",
    intro:
      "Light demolition is not general contracting. When this service is enabled, it covers small tear-outs paired with hauling, not structural rebuilds.",
    body: [
      "Scope has to be clear before anyone swings a tool. Describe the material, the area, and what must remain untouched.",
    ],
    bullets: ["Only offered when enabled", "Hauling is still the core of the job"],
    audience: "both",
    relatedSlugs: ["construction-debris-removal", "property-cleanouts"],
    faqs: [
      {
        question: "Will you knock down a building?",
        answer:
          "No. This is not structural demolition. If the service is enabled, it is for limited tear-outs we agree to in advance.",
      },
    ],
  },
  {
    slug: "hoarding-cleanouts",
    name: "Hoarding Cleanouts",
    category: "specialty",
    enabled: false,
    showOnHome: false,
    icon: "alert",
    cardDescription: "Sensitive, high-volume cleanouts when this service is offered.",
    h1: "Hoarding Cleanouts in Fresno, CA",
    metaTitle: "Hoarding Cleanout Fresno | High-Volume Home Clearing",
    metaDescription:
      "Hoarding and high-volume home cleanouts in Fresno, when this specialty service is enabled. Contact Central Valley Junk & Hauling to ask about fit.",
    intro:
      "These jobs need patience, clear instructions, and a crew that only takes what you authorize. The service is listed only when we are prepared to take this work.",
    body: [
      "If enabled, we work from your direction. Keepers stay. The rest is loaded and hauled. Photos and an honest description of conditions help us prepare.",
    ],
    bullets: ["You control what stays", "Volume and access drive the quote"],
    audience: "residential",
    relatedSlugs: ["home-cleanouts", "property-cleanouts", "estate-cleanouts"],
    faqs: [
      {
        question: "Is this a biohazard or restoration service?",
        answer:
          "We are a junk removal company. If a job needs specialized remediation, we will tell you rather than overpromise.",
      },
    ],
  },
  {
    slug: "eviction-cleanouts",
    name: "Eviction Cleanouts",
    category: "specialty",
    enabled: false,
    showOnHome: false,
    icon: "key",
    cardDescription: "Post-eviction unit clearing when this service is offered.",
    h1: "Eviction Cleanouts in the Central Valley",
    metaTitle: "Eviction Cleanout Fresno CA | Post-Eviction Junk Removal",
    metaDescription:
      "Post-eviction cleanouts in Fresno, when available. We haul leftover belongings so the unit can be turned.",
    intro:
      "Eviction cleanouts are time-sensitive property work. This specialty is only advertised when the company is taking these jobs.",
    body: [
      "When enabled, the goal is simple: leftover belongings out, unit closer to ready. Confirm access and what must remain on the property.",
    ],
    bullets: ["Turnover-focused hauling", "Access and authorization required"],
    audience: "commercial",
    relatedSlugs: ["rental-property-cleanouts", "property-cleanouts"],
    faqs: [
      {
        question: "Do you handle legal notices or lock changes?",
        answer:
          "No. We haul junk we are authorized to remove. Property legal work stays with the owner or manager.",
      },
    ],
  },
  {
    slug: "foreclosure-cleanouts",
    name: "Foreclosure Cleanouts",
    category: "specialty",
    enabled: false,
    showOnHome: false,
    icon: "landmark",
    cardDescription: "Vacant or bank-owned property clearing when offered.",
    h1: "Foreclosure Cleanouts in Fresno, CA",
    metaTitle: "Foreclosure Cleanout Fresno | Vacant Property Junk Removal",
    metaDescription:
      "Foreclosure and vacant-property cleanouts in Fresno, when this specialty is enabled. Central Valley Junk & Hauling quotes authorized hauling work.",
    intro:
      "Vacant and bank-owned properties often need a hard clear-out before listing or rehab. We only list this service when it is enabled.",
    body: [
      "Authorization and access come first. Then we haul the junk, furniture, and debris you want removed. Photos from the property save a lot of back and forth.",
    ],
    bullets: ["Vacant-home and lot debris", "Quoted before we start"],
    audience: "commercial",
    relatedSlugs: ["property-cleanouts", "estate-cleanouts"],
    faqs: [
      {
        question: "Can you work from a lockbox or realtor access?",
        answer:
          "If we can get in legally and safely, we can quote the job. Share access details when you request the quote.",
      },
    ],
  },
];

export function enabledServices() {
  return services.filter((service) => service.enabled);
}

export function homeServices() {
  return enabledServices().filter((service) => service.showOnHome);
}

export function specialtyServices() {
  return enabledServices().filter((service) => service.category === "specialty");
}

export function getService(slug: string) {
  return services.find((service) => service.slug === slug && service.enabled);
}

export function relatedServices(slugs: string[]) {
  return slugs
    .map((slug) => getService(slug))
    .filter((service): service is Service => Boolean(service));
}
