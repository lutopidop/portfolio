export type PortfolioProject = {
  id: number;
  name: string;
  description: string;
  live?: string;
  github?: string;
  tag: string;
  image: string;
  createdOn: string;
  additionalTags?: string[];
};

export const projects: PortfolioProject[] = [
  {
    id: 1,
    name: "FrenzyAI Admin App",
    description:
      "Custom Shopify admin application for merchant automation, analytics, and productivity—built with React, Node.js, and the Shopify API.",
    tag: "Shopify App, React.js, Node.js, TypeScript, GraphQL",
    image: "admin_app/Screenshot 2026-05-16 001655.png",
    createdOn: "2024",
    additionalTags: ["Shopify App"],
  },
  {
    id: 2,
    name: "Miss Me",
    description:
      "Shopify theme development and customization for the Miss Me fashion retail brand.",
    live: "https://www.missme.com",
    tag: "Shopify, Liquid, Theme Development",
    image: "missme/Screenshot 2026-04-20 033251.png",
    createdOn: "2023",
  },
  {
    id: 3,
    name: "GUESS Australia",
    description:
      "Responsive Shopify storefront for GUESS Australia with optimized UX and performance.",
    live: "https://guess.com.au/",
    tag: "Shopify, Theme Customization, Performance",
    image: "guess/Screenshot 2026-04-20 034743.png",
    createdOn: "2023",
  },
  {
    id: 4,
    name: "Denny's Shop",
    description:
      "Full Shopify store build and theme customization for shopdennys.com.",
    live: "https://shopdennys.com/",
    tag: "Shopify, Liquid, E-commerce",
    image: "dennys/Screenshot 2026-05-15 230954.png",
    createdOn: "2023",
  },
  {
    id: 5,
    name: "Leset Scale",
    description:
      "Custom Shopify theme and store setup for Leset Scale.",
    live: "https://lesetscale.myshopify.com",
    tag: "Shopify, Theme Development",
    image: "owm_store/Screenshot 2026-04-20 035200.png",
    createdOn: "2023",
  },
  {
    id: 6,
    name: "Glamor Theme Demo",
    description:
      "Shopify theme demo storefront showcasing modern UI and conversion-focused layouts.",
    live: "https://glamor-theme-demo.myshopify.com",
    tag: "Shopify, Theme Demo, UI/UX",
    image: "glassdemo/Screenshot 2026-05-16 003250.png",
    createdOn: "2024",
  },
  {
    id: 7,
    name: "iTrac Wellness (Digital Watch)",
    description:
      "Digital watch and wellness brand storefront built on Shopify.",
    live: "https://itracwellness.com/",
    tag: "Shopify, Product UX, Theme Development",
    image: "watch/Screenshot 2026-05-16 005814.png",
    createdOn: "2024",
  },
  {
    id: 8,
    name: "Stuffed Puffs (Cocoa)",
    description:
      "Cocoa and confectionery e-commerce experience on Shopify.",
    live: "https://stuffedpuffs.com/",
    tag: "Shopify, CPG, Theme Customization",
    image: "cocoa/Screenshot 2026-05-16 005732.png",
    createdOn: "2024",
  },
  {
    id: 9,
    name: "Moyen & Co (Diamond Ring)",
    description:
      "Luxury diamond ring retailer with a polished Shopify shopping experience.",
    live: "https://moyenco.com/",
    tag: "Shopify, Luxury Retail, Theme Development",
    image: "diamond/Screenshot 2026-05-16 005911.png",
    createdOn: "2024",
  },
  {
    id: 10,
    name: "Bay Smokes (Cigarette)",
    description:
      "Shopify storefront for a regulated consumer brand with custom theme work.",
    live: "https://baysmokes.com/",
    tag: "Shopify, Theme Development, Compliance UX",
    image: "cigaratte/Screenshot 2026-05-16 010057.png",
    createdOn: "2024",
  },
  {
    id: 11,
    name: "The Giving Movement (Sports)",
    description:
      "Sports and lifestyle products store with performance-focused Shopify development.",
    live: "https://thegivingmovement.com",
    tag: "Shopify, Sports Retail, Performance",
    image: "sports/Screenshot 2026-05-16 005843.png",
    createdOn: "2024",
  },
];
