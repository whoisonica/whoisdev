// Date centralizate ale site-ului — schimbă aici și se reflectă peste tot.

export const site = {
  brand: "whoisdev",
  name: "whoisdev",
  role: "Dezvoltator full-stack",
  location: "Oradea, România",
  domain: "whoisdev.dev",
  url: "https://whoisdev.dev",
  tagline: "Construiesc aplicații de la idee la producție.",
  description:
    "Dezvoltator full-stack din Oradea. Construiesc aplicații mobile (Flutter), web (React/TypeScript) și backend (Java Spring Boot) — de la idee la producție.",
  email: "whoisonica@gmail.com",
  socials: {
    github: "https://github.com/whoisonica",
    linkedin: "https://www.linkedin.com/in/whoisdev",
  },
};

export const stack = [
  {
    label: "Mobile",
    tech: "Flutter",
    desc: "Aplicații native cross-platform, performante și fluide, pentru iOS și Android dintr-un singur codebase.",
  },
  {
    label: "Web",
    tech: "React + TypeScript",
    desc: "Interfețe moderne, type-safe și rapide, cu atenție la detaliu și la experiența utilizatorului.",
  },
  {
    label: "Backend",
    tech: "Java Spring Boot",
    desc: "API-uri robuste, scalabile și sigure, construite pentru producție și mentenanță pe termen lung.",
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
    subtitle: "Platformă de recrutare — mobil, web și backend · App Store & Google Play",
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
      period: "Februarie 2026 – prezent",
      summary:
        "Am preluat produsul din stadiul de MVP și l-am dus în producție pe trei aplicații: backend (Java / Spring Boot), dashboard web pentru angajatori (React / TypeScript) și aplicația mobilă pentru candidați (Flutter), publicată în App Store și Google Play.",
    },
    problem:
      "Produsul era la stadiul de MVP: trei aplicații care trebuiau duse în producție, cu o interfață veche greoaie și inconsistentă, fără monetizare, fără notificări reale și fără hardening de securitate. Trebuia transformat dintr-un prototip într-un produs publicabil în store-uri.",
    built:
      "Dezvoltare full-stack pe toate cele trei aplicații: arhitectură de date și migrări de schemă (Liquibase / PostgreSQL), securitate (JWT pe roluri, autorizare la nivel de endpoint, CORS, eliminarea credențialelor din cod), storage pe Cloudflare R2 cu presigned URLs, deploy pe Heroku, plăți Stripe cu idempotency pe webhook și push notifications end-to-end prin Firebase Cloud Messaging. Plus un redesign complet al aplicației mobile, în spiritul Linear / Vercel / Notion.",
    result:
      "Produs dus din MVP în producție și publicat în App Store și Google Play: un sistem de monetizare funcțional, notificări in-app + push fiabile, o aplicație mult mai clară și mai încrezătoare și o singură sursă de adevăr în backend.",
    highlights: [
      {
        title: "Autentificare & conturi",
        desc: "Login separat pe roluri (candidat / angajator), verificare email, restaurare sesiune din JWT, ștergere cont.",
      },
      {
        title: "Sistem de joburi",
        desc: "Tipuri de job/contract, nivel de experiență, salariu brut/net/confidențial, locație remote sau cu autocomplete Google Places, categorii, soft-delete și expirare automată.",
      },
      {
        title: "Evenimente",
        desc: "Funcționalitate nouă, de la entitate până la UI: listă și detalii, joburi legate, carusel pe home-ul mobil, promovare cu push țintit.",
      },
      {
        title: "Credite & monetizare",
        desc: "Model freemium cu pachete de credite (preț ancorat + reduceri), expirare pe loturi, integrare Stripe cu idempotency pe webhook și sold sincronizat în timp real.",
      },
      {
        title: "Notificări",
        desc: "Sistem unificat in-app + push (FCM): mesaje per status, deduplicare, corecție de fus orar, badge pe clopoțel, swipe-to-delete și cooldown de 24h.",
      },
      {
        title: "Disponibilitate & matching",
        desc: "Intervale de disponibilitate, poziții preferate, filtre avansate cu selector județ → oraș în cascadă și sortare după rating.",
      },
      {
        title: "Statistici candidat",
        desc: "Rată de răspuns, rată de prezență și rating cu breakdown detaliat, expuse atât candidatului, cât și angajatorului.",
      },
      {
        title: "Invitații & colaborări",
        desc: "Flux de invitație la job, acceptare inline, auto-finalizare a colaborărilor, expirare și flux de feedback/review.",
      },
      {
        title: "UX & design",
        desc: "Redesign home mobil (strip de „stories” promovate stil OLX), bară de navigație liquid glass, pull-to-refresh, toast-uri, localizare RO, layout bento la credite.",
      },
      {
        title: "Infrastructură & fiabilitate",
        desc: "Storage pe Cloudflare R2 (presigned URLs, fix handshake TLS pe Heroku), auto-refresh realtime (polling + push + version-check), hardening de securitate și publicare în store-uri.",
      },
    ],
    phoneCompare: {
      caption: "Redesign aplicație mobilă — before / after",
      pairs: [
        {
          label: "Lista de aplicări ale candidatului",
          before: {
            src: "/case-studies/jobbin/old-applications.jpeg",
            alt: "Ecranul „Aplicările mele” înainte de redesign — carduri înghesuite, ierarhie slabă",
          },
          after: {
            src: "/case-studies/jobbin/new-applications.jpeg",
            alt: "Ecranul „Aplicările mele” după redesign — titlu mare, carduri aerisite, statusuri clare",
          },
        },
        {
          label: "Căutare joburi",
          before: {
            src: "/case-studies/jobbin/old-jobs.png",
            alt: "Feed-ul de joburi înainte de redesign — listă plată, fără ierarhie",
          },
          after: {
            src: "/case-studies/jobbin/new-jobs.jpeg",
            alt: "Tab-ul „Joburi” după redesign — companii promovate, căutare cu filtre, carduri detaliate",
          },
        },
      ],
    },
    phones: {
      caption: "Mai multe ecrane din aplicația redesenată (Flutter)",
      shots: [
        {
          src: "/case-studies/jobbin/new-dashboard.jpeg",
          alt: "Dashboard-ul candidatului: evenimente, statistici Răspuns/Prezență/Reputație, disponibilitate",
        },
        {
          src: "/case-studies/jobbin/new-positions.jpeg",
          alt: "Ecranul „Pozițiile Mele” cu taburi Anterioare / Invitații și carduri de joburi",
        },
        {
          src: "/case-studies/jobbin/new-profile.jpeg",
          alt: "Ecranul de profil al candidatului cu CV, setări și rating",
        },
      ],
    },
    galleryCaption: "Dashboard web pentru angajatori — React / TypeScript",
    gallery: [
      {
        src: "/case-studies/jobbin/web-post-job.png",
        alt: "Formularul „Postează job” în 5 pași — categorie, poziție, experiență",
      },
      {
        src: "/case-studies/jobbin/web-credits.png",
        alt: "Pagina de credite cu pachete și prețuri (layout bento) și sold în timp real",
      },
      {
        src: "/case-studies/jobbin/web-events.png",
        alt: "Pagina de evenimente din dashboard-ul web pentru angajatori",
      },
    ],
  },
  {
    id: "tripstaxhotels",
    index: "02",
    title: "TRIPSTAXHOTELS",
    subtitle: "Agregare de inventar hotelier la scară mare — backend Java / Spring Boot",
    tags: ["Java", "Spring Boot", "REST API", "Booking.com API", "JSON", "Postman"],
    role: {
      title: "Junior Java Spring Boot Developer · TechQuarter",
      period: "2 ani · Cluj-Napoca",
      summary:
        "Am lucrat doi ani pe proiectul TripstaxHotels: am colaborat direct cu clienții pentru a transpune cerințele în specificații tehnice și am dezvoltat funcționalități de backend alături de echipe interdisciplinare, ținându-mă mereu la curent cu tehnologiile emergente.",
    },
    problem:
      "Aplicația avea nevoie de un inventar hotelier uriaș și mereu actualizat — peste 10 milioane de hoteluri din Booking.com — importate automat și fiabil în backend, fără intervenție manuală.",
    built:
      "Am implementat în backend (Java / Spring Boot) întregul flux de import automat a peste 10 milioane de hoteluri de la Booking.com: apeluri către API, parsare și mapare de JSON, testare cu Postman. Am depanat probleme software complexe și am integrat noile funcționalități împreună cu echipe interdisciplinare.",
    result:
      "Peste 10 milioane de hoteluri importate automat în aplicație și un release mai stabil al produsului — doi ani de experiență profesională solidă în backend Java la scară mare.",
    highlights: [
      {
        title: "Import automat 10M+ hoteluri",
        desc: "Flux complet de import din Booking.com prin API — apeluri, parsare și mapare de JSON, testare cu Postman.",
      },
      {
        title: "Cerințe → specificații",
        desc: "Colaborare directă cu clienții pentru a transpune cerințele de business în specificații tehnice de implementare.",
      },
      {
        title: "Debugging & stabilitate",
        desc: "Depanarea unor probleme software complexe, ceea ce a dus la un release mai stabil al produsului.",
      },
      {
        title: "Echipe interdisciplinare",
        desc: "Integrarea fără probleme a noilor funcționalități, lucrând alături de echipe cross-functional.",
      },
    ],
  },
  {
    id: "atemsuite",
    index: "03",
    title: "ATEMSUITE",
    subtitle: "Analiză video în timp real — desktop WPF / C#",
    tags: ["C#", "WPF", "Desktop", "Computer Vision", "Real-time"],
    problem:
      "Un switcher Blackmagic ATEM Mini are mai multe surse video, dar comutarea manuală e lentă și subiectivă. Era nevoie de un instrument care să analizeze sursele în timp real și să decidă inteligent ce cameră merge pe air.",
    built:
      "O aplicație desktop WPF/C# care analizează în timp real fluxurile video ale switcher-ului: luminozitate, contrast, mișcare și detecție de față. Pe baza acestor metrici calculează un scor pentru fiecare sursă și poate face auto-switching către cea mai bună.",
    result:
      "Comutare automată, obiectivă și instantanee între camere, fără operator manual. Un proiect care arată că lucrez și low-level / desktop, nu doar web și mobil.",
    gallery: [
      {
        src: "/case-studies/atemsuite/multiview.png",
        alt: "ATEMSUITE — multiview live pe semnal video real, cu line waveform, vectorscope și pixel inspector",
      },
      {
        src: "/case-studies/atemsuite/dashboard.png",
        alt: "Interfața ATEMSUITE cu analiză pe color bars SMPTE 100% — line waveform și vectorscope",
      },
      {
        src: "/case-studies/atemsuite/analysis.png",
        alt: "Analiză color bars EBU R84 cu vectorscope și line waveform în ATEMSUITE",
      },
    ],
  },
  {
    id: "ecommerce",
    index: "04",
    title: "E-COMMERCE",
    status: "În progres",
    subtitle: "Magazin online complet, livrat la cheie — setup, lansare și mentenanță continuă",
    tags: ["E-commerce", "Storefront", "Plăți", "Performanță", "SEO", "Mentenanță"],
    problem:
      "Un client avea nevoie de o prezență de vânzare online completă și de încredere — gata de tranzacții din prima zi — fără să se ocupe el de partea tehnică, și de un partener care să o țină în formă pe termen lung.",
    built:
      "Livrez magazinul end-to-end, la cheie: arhitectura catalogului de produse, fluxul de coș și checkout, configurarea plăților și a livrării, optimizări de performanță și SEO, plus o temă ajustată fidel pe identitatea de brand a clientului — cu personalizări acolo unde e nevoie pentru a ieși din șablon.",
    result:
      "Proiect în desfășurare: un magazin online gata de producție, gândit pentru vânzări reale, cu mentenanță și îmbunătățiri continue. Clientul se concentrează pe business, iar partea tehnică e complet acoperită.",
    galleryCaption: "Storefront-ul magazinului livrat",
    gallery: [
      {
        src: "/case-studies/ecommerce/storefront.png",
        alt: "Storefront-ul magazinului online livrat clientului la cheie",
      },
    ],
  },
];

export const services = [
  {
    title: "Web apps",
    desc: "Aplicații web moderne, rapide și type-safe în React/TypeScript — de la landing pages la dashboard-uri complexe.",
    points: ["React + TypeScript", "Next.js", "UI/UX la detaliu"],
  },
  {
    title: "Mobile apps",
    desc: "Aplicații mobile cross-platform în Flutter, native ca senzație, dintr-un singur codebase pentru iOS și Android.",
    points: ["Flutter", "iOS + Android", "Performanță nativă"],
  },
  {
    title: "Backend / API",
    desc: "Backend-uri robuste și scalabile în Java Spring Boot — API-uri sigure, gândite pentru producție.",
    points: ["Java Spring Boot", "REST API", "Scalabil & sigur"],
  },
];
