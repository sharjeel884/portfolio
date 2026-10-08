export type ProjectCategory = "Mobile App" | "Web";

export interface ProjectLink {
  url: string;
  label: string;
  /** "ios" | "android" | "web" — used to render the right badge icon */
  platform?: "ios" | "android" | "web";
}

export interface ProjectScreenshot {
  src: string;
  alt: string;
}

export type ScreenshotLayout = "portrait" | "landscape";

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
  /** Store or product screenshots shown as a gallery on project cards. */
  screenshots?: ProjectScreenshot[];
  /** Gallery aspect — portrait for mobile store frames, landscape for web dashboards. */
  screenshotLayout?: ScreenshotLayout;
}

/** Featured on the home page, in this order. Everything else lives on /projects. */
export const homeProjectNames = ["SEVYN", "Soularia", "MK Assist", "Bronxton"] as const;

export const homeProjectCount = homeProjectNames.length;

export const personalProjects: PersonalProject[] = [
  // ── Mobile Apps ─────────────────────────────────────────────────────────

  {
    name: "InnerQuest",
    category: "Mobile App",
    stack: "React Native + Expo",
    description:
      "A purpose-discovery app that walks users through guided reflection stages, synthesizes their answers into an AI-driven mission statement, and delivers a personalized business plan they can download or regenerate.",
    url: "https://apps.apple.com/ca/app/innerquest/id6743251431",
    urlLabel: "App Store",
    image: "/projects/innerquest.png",
    imageAlt: "InnerQuest App Store mockup with splash, login, signup, and guided flow on phone frames.",
    screenshotLayout: "landscape",
    screenshots: [
      {
        src: "/projects/innerquest.png",
        alt: "InnerQuest multi-phone App Store mockup showing splash, login, signup, and purpose-discovery flow.",
      },
      {
        src: "/projects/innerquest/splash.jpg",
        alt: "InnerQuest splash screen with the teal speech-bubble logo on a clean white background.",
      },
      {
        src: "/projects/innerquest/login.jpg",
        alt: "InnerQuest login screen with email, password, and a cyan Login button.",
      },
      {
        src: "/projects/innerquest/questions.jpg",
        alt: "InnerQuest synthesis step asking what lasting change the user hopes to create.",
      },
      {
        src: "/projects/innerquest/plan.jpg",
        alt: "InnerQuest personalized business plan screen with Download Now and Regenerate Plan actions.",
      },
      {
        src: "/projects/innerquest/unlock.jpg",
        alt: "InnerQuest unlock screen offering a $1 AI-driven mission statement and emailed summary.",
      },
    ],
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
      "An on-demand laundry and dry-cleaning app for London. Book collection and delivery, pick from services like dry cleaning, ironing, and alterations, manage the cart, and track orders through confirmation — on iOS and Android.",
    url: "https://www.laundramoon.com",
    urlLabel: "laundramoon.com",
    image: "/projects/laundramoon.png",
    imageAlt: "Laundramoon marketing site and mobile app mockups for on-demand laundry booking.",
    screenshotLayout: "landscape",
    screenshots: [
      {
        src: "/projects/laundramoon.png",
        alt: "Laundramoon desktop marketing hero with brand, lifestyle photo, and Book Now CTA.",
      },
      {
        src: "/projects/laundramoon/home.png",
        alt: "Laundramoon home screen with service carousel, booking CTA, and promotional offers.",
      },
      {
        src: "/projects/laundramoon/services.png",
        alt: "Laundramoon select-services grid covering dry cleaning, ironing, laundry, and specialty care.",
      },
      {
        src: "/projects/laundramoon/cart.png",
        alt: "Laundramoon cart with collection and delivery slots, item quantities, address, and Place Order.",
      },
      {
        src: "/projects/laundramoon/splash.png",
        alt: "Laundramoon splash screen with logo on a soft blue gradient.",
      },
      {
        src: "/projects/laundramoon/intro.png",
        alt: "Laundramoon order confirmed screen with Go to My Orders and Continue Laundry actions.",
      },
    ],
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
      "A subliminal and manifestation app for iOS and Android. Record affirmations in your own voice, blend voice with background audio, and listen from a personal growth library with play-once, timed, or loop-forever sessions — no subscription required.",
    url: "https://apps.apple.com/id/app/soularia-subliminal-maker/id6752033221",
    urlLabel: "App Store",
    image: "/projects/soularia.png",
    imageAlt: "Soularia App Store mockup showing create, library, home, and audio mix screens.",
    screenshotLayout: "landscape",
    screenshots: [
      {
        src: "/projects/soularia.png",
        alt: "Soularia multi-panel App Store mockup with create, library, home, and audio mix screens.",
      },
      {
        src: "/projects/soularia/home.webp",
        alt: "Soularia home screen with a one-day streak and a Craft a Subliminal button.",
      },
      {
        src: "/projects/soularia/create.webp",
        alt: "Soularia create flow for writing a title, affirmations, and category in your own voice.",
      },
      {
        src: "/projects/soularia/audio-mix.webp",
        alt: "Soularia audio mixer with independent background and voice volume sliders over a playing track.",
      },
      {
        src: "/projects/soularia/listen-modes.webp",
        alt: "Soularia growth library playback options including Play Once, 20 minutes, 60 minutes, and Loop Forever.",
      },
      {
        src: "/projects/soularia/library.webp",
        alt: "Soularia library of affirmations such as I Am Enough and I Win Daily, with no subscription required.",
      },
    ],
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
    stack: "React Native + Expo + Next.js",
    description:
      "A bilingual deals marketplace for consumers and merchants. Shoppers browse and redeem local coupons on iOS and Android; merchants and admins manage offers, redemptions, payouts, and analytics from Arabic/English web dashboards.",
    url: "https://apps.apple.com/us/app/deallink/id6751818005",
    urlLabel: "DealLink",
    image: "/projects/deallink.png",
    imageAlt: "DealLink App Store mockup and merchant dashboard screens.",
    screenshotLayout: "landscape",
    screenshots: [
      {
        src: "/projects/deallink.png",
        alt: "DealLink three-phone App Store mockup with home categories, trending deals, and offer details.",
      },
      {
        src: "/projects/deallink/merchant-dashboard.png",
        alt: "DealLink merchant dashboard with active coupons, views, redemptions metrics, and My Offers table.",
      },
      {
        src: "/projects/deallink/admin.png",
        alt: "DealLink Arabic admin dashboard with users, active offers, redemptions chart, and coupon management table.",
      },
      {
        src: "/projects/deallink/mobile.png",
        alt: "DealLink App Store screens showing home categories, trending deals, and promotional phone mockups.",
      },
      {
        src: "/projects/deallink/redemptions.png",
        alt: "DealLink merchant redemptions list with codes, status, and clearance tracking.",
      },
      {
        src: "/projects/deallink/coupons.png",
        alt: "DealLink merchant My Coupons page for creating and tracking offer status.",
      },
      {
        src: "/projects/deallink/payments.png",
        alt: "DealLink merchant Payments page listing redemption codes, commissions, and paid clearance status.",
      },
    ],
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
    name: "Bronxton",
    category: "Web",
    stack: "Next.js + TypeScript",
    description:
      "An AI role-play training platform for teams. Admins organize agent personas into topics, publish training scenarios, and run validator sessions — with attempt tracking and status across sales, customer service, and leadership modules.",
    url: "https://app.bronxton.com",
    urlLabel: "bronxton.com",
    image: "/projects/bronxton/scenarios.png",
    imageAlt: "Bronxton scenarios dashboard with AI role-play cards and training metrics.",
    screenshotLayout: "landscape",
    screenshots: [
      {
        src: "/projects/bronxton/scenarios.png",
        alt: "Bronxton Scenarios dashboard with published AI role-play cards and Start Session actions.",
      },
      {
        src: "/projects/bronxton/validators.png",
        alt: "Bronxton Validators screen listing validation roles with trainee and attempt metrics.",
      },
      {
        src: "/projects/bronxton/topics.png",
        alt: "Bronxton Topics screen with nested Customer AI Agents personas and Active status badges.",
      },
    ],
  },
  {
    name: "SEVYN",
    category: "Mobile App",
    stack: "React Native + Expo + Next.js",
    description:
      "SEVYN by Youth Sportify — a video-first youth sports platform. Coaches upload game and practice film, annotate plays, organize albums, and share feedback; athletes and parents follow highlights, schedules, and progress on mobile and the web dashboard.",
    url: "https://youthsportify.com",
    urlLabel: "youthsportify.com",
    image: "/projects/youth-sportify/logo.png",
    imageAlt: "SEVYN coach dashboard and mobile app for youth sports video analysis.",
    screenshotLayout: "landscape",
    screenshots: [
      {
        src: "/projects/youth-sportify/videos.jpg",
        alt: "SEVYN coach dashboard Videos library with game footage, practice clips, and upload filters.",
      },
      {
        src: "/projects/youth-sportify/mobile.png",
        alt: "SEVYN mobile app store screens showing video analysis, activity feed, schedule, feedback, and athlete progress.",
      },
      {
        src: "/projects/youth-sportify/album.jpg",
        alt: "SEVYN video album view for Forest Park 300 with annotated game footage clips.",
      },
      {
        src: "/projects/youth-sportify/marketing.jpg",
        alt: "SEVYN marketing site highlighting upload, share, review, and collaborate for youth sports teams.",
      },
    ],
  },
  {
    name: "FlowLGX",
    category: "Web",
    stack: "Next.js + TypeScript",
    description:
      "Logistics and warehouse platform (FLOWWHSE) currently in active development at the company — not yet complete. Covers distributors, vendors, customers, jobs, compliance, billing invoices, AI Ops monitoring, and a carrier-facing marketing site with mobile shipment tracking.",
    url: "https://flowlgx.com/",
    urlLabel: "flowlgx.com",
    image: "/projects/flowlgx/marketing-hero.jpg",
    imageAlt: "FlowLGX marketing hero and FLOWWHSE admin dashboard screenshots.",
    screenshotLayout: "landscape",
    screenshots: [
      {
        src: "/projects/flowlgx/marketing-hero.jpg",
        alt: "FlowLGX marketing hero promoting mobile shipment control for carriers.",
      },
      {
        src: "/projects/flowlgx/dashboard.png",
        alt: "FLOWWHSE super-admin dashboard with KPIs, alerts, marketplace, and billing panels.",
      },
      {
        src: "/projects/flowlgx/marketing-tracking.jpg",
        alt: "FlowLGX marketing section highlighting real-time shipment tracking on mobile.",
      },
      {
        src: "/projects/flowlgx/marketing-app.jpg",
        alt: "FlowLGX landing section for downloading the logistics mobile app.",
      },
      {
        src: "/projects/flowlgx/jobs.png",
        alt: "FLOWWHSE jobs table showing booked and draft shipments from customers and distributors.",
      },
      {
        src: "/projects/flowlgx/ai-ops.png",
        alt: "FLOWWHSE AI Ops monitoring with performance score, API latency, and event logs.",
      },
      {
        src: "/projects/flowlgx/vendors.png",
        alt: "FLOWWHSE vendor compliance screen with Compliant, Hold, and Expiring soon statuses.",
      },
      {
        src: "/projects/flowlgx/distributors.png",
        alt: "FLOWWHSE distributors management table with subscription and domain status.",
      },
      {
        src: "/projects/flowlgx/invoices.png",
        alt: "FLOWWHSE job billing invoices with paid status and amounts.",
      },
      {
        src: "/projects/flowlgx/customers.png",
        alt: "FLOWWHSE customers list with search, status filters, and account actions.",
      },
      {
        src: "/projects/flowlgx/compliance.png",
        alt: "FLOWWHSE compliance review queue for vendor document approvals.",
      },
    ],
  },

  // ── Web ─────────────────────────────────────────────────────────────────

  {
    name: "Word Turbo",
    category: "Web",
    stack: "Next.js + TypeScript + WebSockets",
    description:
      "Built a real-time multiplayer word game with a 25×25 bonus-tile board, live room presence, tile-bag state, swap and play-word turn mechanics, and synchronized game logs across players.",
    url: "https://wordturbo.com/wordturbogame",
    urlLabel: "wordturbo.com",
    image: "/projects/wordturbo/game.png",
    imageAlt:
      "Word Turbo game screen showing the 25 by 25 multiplier board, players panel, tile bag, and game logs.",
    screenshotLayout: "landscape",
    screenshots: [
      {
        src: "/projects/wordturbo/game.png",
        alt: "Word Turbo game board with 25×25 multiplier tiles, players panel, tile bag, and Play Word controls.",
      },
      {
        src: "/projects/wordturbo.jpg",
        alt: "Word Turbo multiplayer board view with live room presence and score panel.",
      },
    ],
  },
  {
    name: "MK Assist",
    category: "Web",
    stack: "Next.js + TypeScript + WhatsApp API",
    description:
      "An AI customer-assistant platform for WhatsApp. Businesses train a knowledge base, configure assistant behaviour and handovers, and let MK Assist auto-reply to enquiries — with live conversation takeover, analytics, and usage-based billing.",
    url: "https://mkassist.co.za/",
    urlLabel: "mkassist.co.za",
    image: "/projects/mkassist/conversations.png",
    imageAlt: "MK Assist dashboard showing WhatsApp conversations, knowledge base, analytics, and billing.",
    screenshotLayout: "landscape",
    screenshots: [
      {
        src: "/projects/mkassist/conversations.png",
        alt: "MK Assist conversations inbox with MK Assist active badges and live WhatsApp chat handover controls.",
      },
      {
        src: "/projects/mkassist/knowledge.png",
        alt: "MK Assist knowledge base table with FAQ entries, Live status, and Add Q&A actions.",
      },
      {
        src: "/projects/mkassist/billing.png",
        alt: "MK Assist plan and billing page showing Growth trial usage and Basic, Growth, Premium tiers.",
      },
      {
        src: "/projects/mkassist/analytics.png",
        alt: "MK Assist analytics dashboard with conversation volume charts and common topics.",
      },
      {
        src: "/projects/mkassist/business-details.png",
        alt: "MK Assist business details form for onboarding profile, industry, location, and document uploads.",
      },
      {
        src: "/projects/mkassist/landing.jpg",
        alt: "MK Assist marketing landing page with hero, features, integrations, and pricing.",
      },
    ],
  },
  {
    name: "Laundramoon Web",
    category: "Web",
    stack: "Next.js + TypeScript",
    description:
      "The marketing and booking website for Laundramoon, showcasing the on-demand laundry service with a streamlined order flow and service area coverage.",
    url: "https://www.laundramoon.com",
    urlLabel: "laundramoon.com",
    image: "/projects/laundramoon.png",
    imageAlt: "Laundramoon marketing website hero with brand, lifestyle photo, and booking CTA.",
    screenshotLayout: "landscape",
    screenshots: [
      {
        src: "/projects/laundramoon.png",
        alt: "Laundramoon desktop marketing hero with brand, lifestyle photo, and Book Now CTA.",
      },
    ],
  },
  {
    name: "Chelsea Upholstery",
    category: "Web",
    stack: "Next.js + TypeScript + Tailwind CSS",
    description:
      "A luxury UK upholstery and interiors site for Chelsea Upholstery — editorial hero storytelling, product library grids (indoor/outdoor/decor), hospitality project galleries for hotels and restaurants, and bespoke furniture narrative pages.",
    url: "https://chelseaupholstery.co.uk",
    urlLabel: "chelseaupholstery.co.uk",
    image: "/projects/chelsea-upholstery/hero.jpg",
    imageAlt: "Chelsea Upholstery site screens showing hero, product catalog, and hospitality project galleries.",
    screenshotLayout: "landscape",
    screenshots: [
      {
        src: "/projects/chelsea-upholstery/hero.jpg",
        alt: "Chelsea Upholstery homepage hero with split dining and kitchen interiors and Handcrafted with Care tagline.",
      },
      {
        src: "/projects/chelsea-upholstery/catalog.jpg",
        alt: "Chelsea Upholstery product library grid with indoor furniture pieces and product codes.",
      },
      {
        src: "/projects/chelsea-upholstery/projects.jpg",
        alt: "Chelsea Upholstery hospitality projects gallery for hotels including The Zetter Bloomsbury and The Hoxton.",
      },
      {
        src: "/projects/chelsea-upholstery/hospitality.jpg",
        alt: "Chelsea Upholstery editorial section on bespoke hospitality furniture craftsmanship.",
      },
    ],
  },
  {
    name: "AutoDeals.pk",
    category: "Web",
    stack: "Next.js + TypeScript + Tailwind CSS",
    description:
      "Pakistan's No.1 automobile marketplace for new and used cars and bikes — city/make browsing, featured listings, side-by-side comparisons, petrol price updates, video reviews, and free classified ads.",
    url: "https://autodeals.pk",
    urlLabel: "autodeals.pk",
    image: "/projects/autodeals/hero.png",
    imageAlt: "AutoDeals.pk marketplace screens showing search, browse, listings, and comparisons.",
    screenshotLayout: "landscape",
    screenshots: [
      {
        src: "/projects/autodeals/hero.png",
        alt: "AutoDeals hero with Find Best Used Cars search for cars and bikes across Pakistan.",
      },
      {
        src: "/projects/autodeals/featured-new.png",
        alt: "AutoDeals featured new cars section with Honda HR-V showcase and brand grid.",
      },
      {
        src: "/projects/autodeals/listings.jpg",
        alt: "AutoDeals featured used cars for sale cards with price, specs, and location.",
      },
      {
        src: "/projects/autodeals/browse.png",
        alt: "AutoDeals browse used cars by make with brand logos and listing counts.",
      },
      {
        src: "/projects/autodeals/compare.png",
        alt: "AutoDeals car comparison and petrol prices in Pakistan panels.",
      },
      {
        src: "/projects/autodeals/videos.jpg",
        alt: "AutoDeals browse videos grid with owner reviews and automotive FAQ.",
      },
    ],
  },
  {
    name: "MyAuctionSheet",
    category: "Web",
    stack: "Next.js + TypeScript + Tailwind CSS",
    description:
      "Japanese car auction-sheet verification by chassis number — original sheets, English translation, and export-cert options so buyers can check auction grade, mileage, accidents, repairs, and forged reports before purchase.",
    url: "https://myauctionsheet.com",
    urlLabel: "myauctionsheet.com",
    image: "/projects/myauctionsheet/hero.jpg",
    imageAlt: "MyAuctionSheet verification flow from chassis search to sample auction reports.",
    screenshotLayout: "landscape",
    screenshots: [
      {
        src: "/projects/myauctionsheet/hero.jpg",
        alt: "MyAuctionSheet homepage hero with chassis search and before/after damaged car slider.",
      },
      {
        src: "/projects/myauctionsheet/verify.png",
        alt: "MyAuctionSheet verification pitch with sample Japanese auction sheet document.",
      },
      {
        src: "/projects/myauctionsheet/result.png",
        alt: "MyAuctionSheet vehicle found result for a Toyota Aqua with Proceed to Cart.",
      },
      {
        src: "/projects/myauctionsheet/features.jpg",
        alt: "MyAuctionSheet feature cards covering auction grade, mileage, accidental history, and scam checks.",
      },
      {
        src: "/projects/myauctionsheet/products.png",
        alt: "MyAuctionSheet product selection for Auction Sheet, English Translation, and Export Cert.",
      },
      {
        src: "/projects/myauctionsheet/samples.jpg",
        alt: "MyAuctionSheet sample reports for Accidental, Repaired, and Repaired Accidental grades.",
      },
    ],
  },
  {
    name: "Republic Bespoke",
    category: "Web",
    stack: "Shopify Hydrogen + Storefront API",
    description:
      "Developed a headless luxury-fashion storefront with responsive collection discovery, shopping cart, store information, and appointment journeys.",
    url: "https://republicbespoke.com",
    urlLabel: "republicbespoke.com",
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
];
