export type ProjectCategory = "Mobile App" | "Web";

export interface ProjectLink {
  url: string;
  label: string;
  /** "ios" | "android" | "web" — used to render the right badge icon */
  platform?: "ios" | "android" | "web";
}

export interface PersonalProject {
  name: string;
  stack: string;
  description: string;
  /** Primary external URL (used as card href when there is only one link). */
  url: string;
  /** Text shown for the primary link, kept short enough for narrow screens. */
  urlLabel: string;
  /** Category used to group projects on the /projects page. */
  category: ProjectCategory;
  /**
   * Additional platform links (e.g. separate iOS & Android store URLs).
   * When present these are shown as small badge links inside the card.
   */
  links?: ProjectLink[];
  /** Screenshot in /public, rendered on the projects page. */
  image?: string;
  imageAlt?: string;
}

/** The first five appear on the home page; the rest live on /projects. */
export const homeProjectCount = 5;

export const personalProjects: PersonalProject[] = [
  // ── Mobile Apps ─────────────────────────────────────────────────────────

  {
    name: "InnerQuest",
    category: "Mobile App",
    stack: "React Native + Expo",
    description:
      "A mindfulness and self-discovery app that guides users through reflective journaling prompts and inner-growth exercises, available on the App Store.",
    url: "https://apps.apple.com/ca/app/innerquest/id6743251431",
    urlLabel: "App Store",
    links: [
      {
        url: "https://apps.apple.com/ca/app/innerquest/id6743251431",
        label: "App Store",
        platform: "ios",
      },
    ],
  },
  {
    name: "Laundramoon",
    category: "Mobile App",
    stack: "React Native + Expo",
    description:
      "An on-demand laundry booking and delivery app connecting customers with local laundry services. Available on both iOS and Android.",
    url: "https://www.laundramoon.com",
    urlLabel: "laundramoon.com",
    links: [
      {
        url: "https://apps.apple.com/gb/app/laundramoon-laundry-app/id6482974159",
        label: "App Store",
        platform: "ios",
      },
      {
        url: "https://play.google.com/store/apps/details?id=com.laundramoon&hl=en",
        label: "Google Play",
        platform: "android",
      },
    ],
  },
  {
    name: "Soularia",
    category: "Mobile App",
    stack: "React Native + Expo",
    description:
      "A subliminal affirmation maker that lets users create personalised audio tracks layered beneath music to support habit change and mindset shifts.",
    url: "https://apps.apple.com/id/app/soularia-subliminal-maker/id6752033221",
    urlLabel: "App Store",
    links: [
      {
        url: "https://apps.apple.com/id/app/soularia-subliminal-maker/id6752033221",
        label: "App Store",
        platform: "ios",
      },
    ],
  },
  {
    name: "DealLink",
    category: "Mobile App",
    stack: "React Native + Expo",
    description:
      "A deal-sharing marketplace where users post, discover, and claim time-limited offers from local and online retailers. Cross-platform on iOS and Android.",
    url: "https://apps.apple.com/us/app/deallink/id6751818005",
    urlLabel: "DealLink",
    links: [
      {
        url: "https://apps.apple.com/us/app/deallink/id6751818005",
        label: "App Store",
        platform: "ios",
      },
      {
        url: "https://play.google.com/store/apps/details?id=com.deallink",
        label: "Google Play",
        platform: "android",
      },
    ],
  },
  {
    name: "Youth Sportify",
    category: "Mobile App",
    stack: "React Native + Expo",
    description:
      "A youth sports management platform for scheduling matches, tracking performance, and connecting coaches, players, and parents in one place.",
    url: "https://webapp.youthsportify.com",
    urlLabel: "youthsportify.com",
  },

  // ── Web ─────────────────────────────────────────────────────────────────

  {
    name: "Republic Bespoke",
    category: "Web",
    stack: "Shopify Hydrogen + Storefront API",
    description:
      "Developed a headless luxury-fashion storefront with responsive collection discovery, shopping cart, store information, and appointment journeys.",
    url: "https://republicbespoke.com",
    urlLabel: "republicbespoke.com",
    image: "/projects/republic.jpg",
    imageAlt: "Republic Bespoke storefront homepage screenshot showing an outdoor wedding scene.",
  },
  {
    name: "Word Turbo",
    category: "Web",
    stack: "Next.js + TypeScript + WebSockets",
    description:
      "Built a real-time multiplayer word game with a 25×25 bonus-tile board, live room presence, tile-bag state, swap and play-word turn mechanics, and synchronized game logs across players.",
    url: "https://wordturbo.com/wordturbogame",
    urlLabel: "wordturbo.com",
    image: "/projects/wordturbo.jpg",
    imageAlt:
      "Word Turbo game screen showing the 25 by 25 multiplier board, players panel, tile bag, and game logs.",
  },
  {
    name: "OnScreen Recorder",
    category: "Web",
    stack: "React + TypeScript",
    description:
      "Published an npm screen-recording component with microphone and webcam support, customizable UI, and upload/download callbacks.",
    url: "https://npmjs.com/package/onscreen-recorder",
    urlLabel: "npmjs.com/package/onscreen-recorder",
  },
  {
    name: "MK Assist",
    category: "Web",
    stack: "Next.js + TypeScript",
    description:
      "A South African digital-assistant platform that streamlines client onboarding, document handling, and service requests for professional consultants.",
    url: "https://mkassist.co.za/",
    urlLabel: "mkassist.co.za",
  },
  {
    name: "Laundramoon Web",
    category: "Web",
    stack: "Next.js + TypeScript",
    description:
      "The marketing and booking website for Laundramoon, showcasing the on-demand laundry service with a streamlined order flow and service area coverage.",
    url: "https://www.laundramoon.com",
    urlLabel: "laundramoon.com",
  },
  {
    name: "InboxPlease",
    category: "Web",
    stack: "Next.js + TypeScript",
    description:
      "An email deliverability and inbox placement tool that helps senders test, diagnose, and improve their email reputation and spam scores.",
    url: "https://www.inboxplease.com",
    urlLabel: "inboxplease.com",
  },
  {
    name: "Chelsea Upholstery",
    category: "Web",
    stack: "Next.js + TypeScript",
    description:
      "A premium upholstery studio website in the UK showcasing bespoke furniture restoration services, portfolio galleries, and a contact booking flow.",
    url: "https://chelseaupholstery.co.uk",
    urlLabel: "chelseaupholstery.co.uk",
  },
  {
    name: "Bronxton",
    category: "Web",
    stack: "Next.js + TypeScript",
    description:
      "A SaaS business-management web app providing teams with dashboards, analytics, and workflow automation to streamline daily operations.",
    url: "https://app.bronxton.com",
    urlLabel: "bronxton.com",
  },
  {
    name: "AutoDeals.pk",
    category: "Web",
    stack: "Next.js + TypeScript",
    description:
      "Pakistan's automotive marketplace for buying and selling new and used cars, featuring detailed listings, price comparisons, and dealer directories.",
    url: "https://autodeals.pk",
    urlLabel: "autodeals.pk",
  },
  {
    name: "MyAuctionSheet",
    category: "Web",
    stack: "Next.js + TypeScript",
    description:
      "A vehicle auction-sheet decoding and verification service that helps Pakistani buyers assess the condition and history of imported Japanese cars.",
    url: "https://myauctionsheet.com",
    urlLabel: "myauctionsheet.com",
  },
];
