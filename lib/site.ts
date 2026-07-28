// Centralised site data — change it here and it propagates everywhere.

export const site = {
  brand: "whoisdev",
  name: "Andrei-Vlad Onica",
  role: "Full-stack engineer",
  location: "Oradea, Romania",
  domain: "whoisdev.vercel.app",
  url: "https://whoisdev.vercel.app",
  tagline: "I build products from idea to production.",
  description:
    "Full-stack engineer based in Oradea, Romania. I build mobile apps (Flutter), web apps (React/TypeScript) and backends (Java Spring Boot) — from idea to production. Open to full-time roles and B2B contracts.",
  email: "whoisonica@gmail.com",
  /** One line, used in the hero badge and the contact section. */
  availability: "open to full-time roles or B2B contracts",
  cvUrl: "/Andrei-Onica-CV.pdf",
  socials: {
    github: "https://github.com/whoisonica",
    linkedin: "https://www.linkedin.com/in/whoisonica",
  },
};

export const stack = [
  {
    label: "Mobile",
    tech: "Flutter",
    desc: "Cross-platform apps for iOS and Android from a single codebase — fast, fluid, and native-feeling.",
  },
  {
    label: "Web",
    tech: "React + TypeScript",
    desc: "Modern, type-safe interfaces with genuine attention to detail and user experience.",
  },
  {
    label: "Backend",
    tech: "Java Spring Boot",
    desc: "Robust, scalable and secure APIs, built for production and long-term maintenance.",
  },
];

export type CaseStudy = {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  status?: string;
  tags: string[];
  role?: { title: string; period: string; summary: string };
  /** Outbound proof: live product, store listings, source code. */
  links?: { label: string; href: string; icon?: "external" | "apple" | "play" | "github" }[];
  problem: string;
  built: string;
  result: string;
  highlights?: { title: string; desc: string }[];
  beforeAfter?: {
    before: { src: string; alt: string };
    after: { src: string; alt: string };
    caption: string;
  };
  phoneCompare?: {
    caption: string;
    pairs: {
      label: string;
      before: { src: string; alt: string };
      after: { src: string; alt: string };
    }[];
  };
  phones?: { caption: string; shots: { src: string; alt: string }[] };
  galleryCaption?: string;
  gallery?: { src: string; alt: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: "jobbin",
    index: "01",
    title: "JOBBIN",
    subtitle:
      "Recruitment platform — mobile, web and backend · Live on App Store & Google Play",
    tags: [
      "Flutter",
      "React",
      "TypeScript",
      "Spring Boot",
      "PostgreSQL",
      "Stripe",
      "Firebase",
    ],
    role: {
      title: "Full-Stack Developer · Jobbin",
      period: "January 2026 – present",
      summary:
        "I joined a three-app product at MVP stage and drove it to public launch over seven months. I'm the sole developer on the Flutter candidate app (199 of 204 commits), I own the React employer dashboard (190 of 268), and I ship backend features alongside the original author (163 of 389).",
    },
    links: [
      { label: "jobbin.ro", href: "https://jobbin.ro", icon: "external" },
      {
        label: "App Store",
        href: "https://apps.apple.com/ro/app/jobbin/id6498889490",
        icon: "apple",
      },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=ro.jobbin.jobbin_candidate_new",
        icon: "play",
      },
    ],
    problem:
      "The product was an MVP: three applications that needed to reach production, with a dated and inconsistent interface, no monetization, no real notifications, and no security hardening. It had to go from prototype to something publishable in the app stores.",
    built:
      "Full-stack work across all three applications: data modelling and schema evolution on PostgreSQL, security (role-based JWT, endpoint-level authorization, CORS), file storage on Cloudflare R2 with presigned URLs, deployment to Heroku, Stripe payments with idempotent webhook handling, and end-to-end push notifications through Firebase Cloud Messaging — plus a complete redesign of the mobile app.",
    result:
      "Taken from MVP to production and published on the App Store and Google Play: a working monetization system, reliable in-app and push notifications, a far clearer product, and a single source of truth in the backend.",
    highlights: [
      {
        title: "Authentication & accounts",
        desc: "Role-separated login (candidate / employer), email verification, session restore from JWT, account deletion.",
      },
      {
        title: "Job system",
        desc: "Job and contract types, experience levels, gross/net/confidential salary, remote or Google Places-backed locations, categories, soft-delete and automatic expiry.",
      },
      {
        title: "Events",
        desc: "A new feature built from the entity up to the UI: listing and detail views, linked jobs, a carousel on the mobile home screen, and promotion via targeted push.",
      },
      {
        title: "Credits & monetization",
        desc: "Freemium model with credit packs (anchored pricing plus discounts), per-batch expiry, Stripe integration with idempotent webhooks, and a balance synced in real time.",
      },
      {
        title: "Notifications",
        desc: "Unified in-app and push system (FCM): per-status messaging, deduplication, timezone correction, bell badge, swipe-to-delete, and a 24h cooldown.",
      },
      {
        title: "Availability & matching",
        desc: "Availability windows, preferred positions, advanced filters with a cascading county → city selector, and rating-based sorting.",
      },
      {
        title: "Candidate statistics",
        desc: "Response rate, attendance rate and rating with a detailed breakdown, exposed to both the candidate and the employer.",
      },
      {
        title: "Invitations & collaborations",
        desc: "Job invitation flow, inline acceptance, automatic collaboration completion, expiry, and a feedback/review flow.",
      },
      {
        title: "UX & design",
        desc: "Redesigned mobile home (promoted-company “stories” strip), liquid-glass navigation bar, pull-to-refresh, toasts, localisation, and a bento layout for credits.",
      },
      {
        title: "Infrastructure & reliability",
        desc: "Cloudflare R2 storage (presigned URLs, TLS handshake fix on Heroku), realtime auto-refresh (polling + push + version check), security hardening, and store publication.",
      },
    ],
    phoneCompare: {
      caption: "Mobile app redesign — before / after",
      pairs: [
        {
          label: "Candidate's application list",
          before: {
            src: "/case-studies/jobbin/old-applications.jpeg",
            alt: "The “My applications” screen before the redesign — cramped cards, weak hierarchy",
          },
          after: {
            src: "/case-studies/jobbin/new-applications.jpeg",
            alt: "The “My applications” screen after the redesign — large title, roomier cards, clear statuses",
          },
        },
        {
          label: "Job search",
          before: {
            src: "/case-studies/jobbin/old-jobs.png",
            alt: "The jobs feed before the redesign — a flat list with no hierarchy",
          },
          after: {
            src: "/case-studies/jobbin/new-jobs.jpeg",
            alt: "The “Jobs” tab after the redesign — promoted companies, search with filters, detailed cards",
          },
        },
      ],
    },
    phones: {
      caption: "More screens from the redesigned app (Flutter)",
      shots: [
        {
          src: "/case-studies/jobbin/new-dashboard.jpeg",
          alt: "Candidate dashboard: events, Response/Attendance/Reputation statistics, availability",
        },
        {
          src: "/case-studies/jobbin/new-positions.jpeg",
          alt: "The “My Positions” screen with Previous / Invitations tabs and job cards",
        },
        {
          src: "/case-studies/jobbin/new-profile.jpeg",
          alt: "Candidate profile screen with CV, settings and rating",
        },
      ],
    },
    galleryCaption: "Employer web dashboard — React / TypeScript",
    gallery: [
      {
        src: "/case-studies/jobbin/web-post-job.png",
        alt: "The five-step “Post a job” form — category, position, experience",
      },
      {
        src: "/case-studies/jobbin/web-credits.png",
        alt: "The credits page with packs and pricing (bento layout) and a real-time balance",
      },
      {
        src: "/case-studies/jobbin/web-events.png",
        alt: "The events page in the employer web dashboard",
      },
    ],
  },
  {
    id: "tripstaxhotels",
    index: "02",
    title: "TRIPSTAXHOTELS",
    subtitle: "Hotel inventory aggregation at scale — Java / Spring Boot backend",
    tags: ["Java", "Spring Boot", "REST API", "Booking.com API", "JSON", "Postman"],
    role: {
      title: "Junior Java Spring Boot Developer · TechQuarter",
      period: "Sept 2023 – Feb 2026 · Cluj-Napoca",
      summary:
        "Two and a half years on TripstaxHotels: I worked directly with clients to turn requirements into technical specifications and built backend features alongside cross-functional teams (frontend, QA, product).",
    },
    problem:
      "The platform needed a vast, continuously refreshed hotel inventory — over 10 million properties from Booking.com — imported automatically and reliably into the backend, with no manual intervention.",
    built:
      "I implemented the automated import pipeline in the Java / Spring Boot backend end to end: API calls, JSON parsing and mapping, and testing with Postman. I also debugged complex production issues and integrated new features working alongside cross-functional teams.",
    result:
      "Over 10 million hotels imported automatically, and measurably more stable releases — two and a half years of professional backend experience on a Java system operating at real scale.",
    highlights: [
      {
        title: "Automated 10M+ hotel import",
        desc: "The full Booking.com import flow over their API — calls, JSON parsing and mapping, verified with Postman.",
      },
      {
        title: "Requirements → specifications",
        desc: "Worked directly with clients to translate business requirements into technical implementation specs.",
      },
      {
        title: "Debugging & stability",
        desc: "Diagnosed and resolved complex software issues, contributing directly to more stable product releases.",
      },
      {
        title: "Cross-functional teams",
        desc: "Integrated new features smoothly while working with frontend, QA and product.",
      },
    ],
  },
  {
    id: "ecoregistru",
    index: "03",
    title: "ECOREGISTRU",
    status: "In progress",
    subtitle: "Multi-tenant compliance SaaS — Spring Boot / React · Solo build",
    tags: [
      "Java 21",
      "Spring Boot 3.2",
      "PostgreSQL",
      "Flyway",
      "Multi-tenancy",
      "React",
      "Vite",
    ],
    role: {
      title: "Sole developer · EcoRegistru",
      period: "July 2026 – present",
      summary:
        "Designed and built end to end: architecture, backend, frontend and tests. Domain requirements validated with compliance-reporting specialists.",
    },
    links: [
      {
        label: "Source on GitHub",
        href: "https://github.com/whoisonica/ecoregistru",
        icon: "github",
      },
    ],
    problem:
      "Romanian waste operators are legally required to keep monthly waste-management records and file SIM/AFM reports. Most still do it in spreadsheets — error-prone, impossible to audit, and painful when an inspection arrives.",
    built:
      "A multi-tenant SaaS with request-scoped tenant isolation on every table, a Flyway-versioned schema, four access roles, and an evidence engine that aggregates waste movements into monthly records per work point and waste code, with running stock balances. Attachments go to Cloudinary; the whole thing is covered by integration tests, including a dedicated tenant-isolation suite.",
    result:
      "A working platform that turns a compliance obligation into a few clicks a month, with a verifiable audit trail. In active development — the backend foundation and the movements, partners and evidence screens are complete.",
    highlights: [
      {
        title: "Multi-tenancy",
        desc: "A company_id on every table, enforced by a TenantContext and a request filter; platform admins switch tenant via an X-Tenant-Id header.",
      },
      {
        title: "Versioned schema",
        desc: "Flyway migrations with a real version history — no auto-generated DDL in production.",
      },
      {
        title: "Evidence engine",
        desc: "Aggregates movements into monthly lines per (work point, waste code) with cumulative stock, flagging negative balances.",
      },
      {
        title: "Tested where it counts",
        desc: "Integration tests across tenant isolation, evidence calculation, deadline alerts and export correctness.",
      },
    ],
  },
  {
    id: "atemsuite",
    index: "04",
    title: "ATEMSUITE",
    subtitle: "Real-time video analysis and ATEM control — WPF / C# desktop · Engineering thesis",
    tags: ["C#", ".NET 8", "WPF", "MVVM", "OpenCV", "LibAtem", "Real-time"],
    links: [
      {
        label: "Source on GitHub",
        href: "https://github.com/whoisonica/AtemSuite",
        icon: "github",
      },
    ],
    problem:
      "An operator on a Blackmagic ATEM Mini judges the picture by eye on a preview monitor and drives the switcher from the hardware panel — two separate places, and no objective read on the signal itself. What was needed was one window: the live feed, real measurements of it, and control of the switcher.",
    built:
      "A WPF/C# desktop application on .NET 8. It captures the feed and computes broadcast scopes per frame with OpenCV — line waveform (512 samples, per channel), vectorscope, pixel inspector and a motion overlay — plus a generator for SMPTE and EBU R84 reference bars to verify the scopes against a known signal. It finds ATEM switchers on the network itself: a parallel ICMP sweep followed by a real protocol handshake over UDP 9910 through LibAtem, so identification never depends on DNS and a direct link-local cable still works. Then it drives them: program/preview, cut, auto, fade-to-black, transition T-bar. Recording is H.264/MP4, with an event log flushed to CSV.",
    result:
      "One window instead of three, and measurements instead of opinions — the operator sees waveform and vectorscope next to the feed and switches from the same screen. It is also the project where I work closest to the metal: real-time frame processing, a network protocol handshake and desktop UI, none of which is web or mobile.",
    gallery: [
      {
        src: "/case-studies/atemsuite/multiview.png",
        alt: "ATEMSUITE — live multiview on a real video signal, with line waveform, vectorscope and pixel inspector",
      },
      {
        src: "/case-studies/atemsuite/dashboard.png",
        alt: "The ATEMSUITE interface analysing SMPTE 100% color bars — line waveform and vectorscope",
      },
      {
        src: "/case-studies/atemsuite/analysis.png",
        alt: "EBU R84 color bar analysis with vectorscope and line waveform in ATEMSUITE",
      },
    ],
  },
];

// Testimonials — social proof. Add real client quotes here (name + role/company).
// The section hides itself automatically while this list is empty.
export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  // optional: avatar initials (e.g. "A.P."); generated from the name if omitted
  initials?: string;
};

export const testimonials: Testimonial[] = [];

export const services = [
  {
    title: "Web apps",
    desc: "Modern, fast, type-safe web applications in React and TypeScript — from landing pages to complex dashboards.",
    points: ["React + TypeScript", "Next.js", "Detail-driven UI/UX"],
  },
  {
    title: "Mobile apps",
    desc: "Cross-platform mobile apps in Flutter that feel native, from a single codebase for iOS and Android.",
    points: ["Flutter", "iOS + Android", "Native-feeling performance"],
  },
  {
    title: "Backend / API",
    desc: "Robust, scalable backends in Java Spring Boot — secure APIs designed for production.",
    points: ["Java Spring Boot", "REST API", "Scalable & secure"],
  },
];
