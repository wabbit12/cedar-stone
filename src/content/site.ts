export const site = {
  name: "Cedar & Stone",
  tagline: "Thoughtful renovations for homes that already feel like yours.",
  description:
    "A local renovation studio for kitchens, baths, and careful carpentry.",
  address: ["412 Mill Creek Road", "Riverbend, OR 97035"],
  phone: "(503) 555-0142",
  phoneHref: "tel:+15035550142",
  email: "hello@cedarandstone.example",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

export type Service = {
  id: string;
  title: string;
  lead: string;
  body: string;
  image: string;
  alt: string;
};

export const services: Service[] = [
  {
    id: "kitchen",
    title: "Kitchen remodel",
    lead: "Layouts, cabinetry, and lighting planned around how you actually cook.",
    body: "We start with workflow — prep, cooking, cleanup — then resolve cabinets, counters, appliances, and lighting into one coherent plan. Demolition, rough-in, finish carpentry, and punch list stay with the same crew.",
    image: "/images/service-kitchen.jpg",
    alt: "Renovated kitchen with wood cabinets",
  },
  {
    id: "bath",
    title: "Bath renovation",
    lead: "Waterproofed, tiled baths with a schedule you can plan around.",
    body: "From layout tweaks to full gut remodels, we handle plumbing coordination, waterproofing, tile, fixtures, and vanity carpentry. You get a clear offline window and weekly progress notes.",
    image: "/images/service-bath.jpg",
    alt: "Finished bathroom renovation",
  },
  {
    id: "whole-home",
    title: "Whole-home refresh",
    lead: "Coordinated updates so every room feels like the same house.",
    body: "Flooring, trim, paint, doors, and fixture packages sequenced room by room. Ideal when you want the house brought forward without a full architectural rebuild.",
    image: "/images/service-wholehome.jpg",
    alt: "Living room after whole-home refresh",
  },
  {
    id: "built-ins",
    title: "Built-ins & carpentry",
    lead: "Custom storage and millwork matched to the architecture you already have.",
    body: "Mudrooms, window seats, libraries, and pantry interiors designed, built, and finished in our shop — then installed cleanly on site.",
    image: "/images/service-builtins.jpg",
    alt: "Custom built-in shelving and window seat",
  },
  {
    id: "consult",
    title: "Design consult",
    lead: "A focused session when you need clarity before committing to build.",
    body: "Walk the rooms, review constraints, and leave with a prioritized plan, rough budget bands, and material direction. Credit the consult toward a remodel if you hire us within 90 days.",
    image: "/images/blog-kitchen-plan.jpg",
    alt: "Material samples and plans on a workshop table",
  },
];

export type Post = {
  slug: string;
  title: string;
  date: string;
  dateLabel: string;
  excerpt: string;
  image: string;
  paragraphs: string[];
};

export const posts: Post[] = [
  {
    slug: "how-we-plan-a-kitchen-that-fits-how-you-cook",
    title: "How we plan a kitchen that fits how you cook",
    date: "2026-08-01",
    dateLabel: "August 1, 2026",
    excerpt:
      "Most kitchen remodels start with cabinets and countertops. We start with how you move through the room on a Tuesday night.",
    image: "/images/blog-kitchen-plan.jpg",
    paragraphs: [
      "Most kitchen remodels start with cabinets and countertops. We start with how you move through the room on a Tuesday night.",
      "Before we draw a plan, we walk the space with you: where groceries land, which drawer always sticks, whether the island is a prep zone or a homework desk. Those details decide the layout more than any trend photo.",
      "From there we lock dimensions, specify durable materials you will still like in ten years, and sequence the work so your household stays livable. The result is a kitchen that looks intentional — and actually works.",
    ],
  },
  {
    slug: "what-to-expect-during-a-bath-renovation",
    title: "What to expect during a bath renovation",
    date: "2026-07-18",
    dateLabel: "July 18, 2026",
    excerpt:
      "A bathroom remodel is short compared to a kitchen, but it is intense: water shutoffs, tile dust, and one less shower in the house.",
    image: "/images/blog-bath.jpg",
    paragraphs: [
      "A bathroom remodel is short compared to a kitchen, but it is intense: water shutoffs, tile dust, and one less shower in the house.",
      "We set expectations on day one — demo window, rough-in inspection, waterproofing, tile, fixtures, and final punch. You get a weekly update and a single point of contact so decisions do not stall on-site.",
      "If you are planning a bath this season, book a walkthrough early. Lead times on tile and vanity pieces are the usual schedule drivers, not labor.",
    ],
  },
  {
    slug: "built-ins-that-make-small-rooms-feel-finished",
    title: "Built-ins that make small rooms feel finished",
    date: "2026-07-02",
    dateLabel: "July 2, 2026",
    excerpt:
      "Not every project needs a full gut. Custom shelves, a window seat, or a mudroom bench can change how a room feels without months of disruption.",
    image: "/images/blog-builtins.jpg",
    paragraphs: [
      "Not every project needs a full gut. Custom shelves, a window seat, or a mudroom bench can change how a room feels without months of disruption.",
      "We design built-ins around your storage gaps and the architecture already in the house — matching trim profiles, paint sheens, and hardware so the new work reads as original.",
      "It is often the highest-impact dollar you can spend when square footage is fixed and you want the house to feel complete.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
