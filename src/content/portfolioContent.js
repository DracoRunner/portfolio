export const heroContent = {
  name: "MAHENDRA",
  surname: "BAGHEL",
  badge: "Based in Singapore · Available for opportunities",
  role: "Engineering Lead · Accedo.tv",
  description: "I architect cross-platform streaming applications for **Paramount+, SBS On Demand** and **Sky NZ** — where one codebase must feel native on a phone, a Samsung TV, a Fire Stick, and a set-top box simultaneously.",
  rightText: [
    "9+ years in front-end and cross-platform engineering — from enterprise e-commerce and fintech to large-scale OTT streaming for global broadcasters.",
    "Specialising in **React Native TV**, focus management for remote-controlled UIs, and engineering teams that ship consistently."
  ],
  stats: [
    { num: "9+", label: "Years experience" },
    { num: "6", label: "CTV platforms shipped" },
    { num: "40%", label: "Performance gains on component libraries" },
    { num: "30%", label: "Reduction in dev effort via tooling" }
  ]
};

export const tickerItems = [
  "React Native", "Samsung Tizen", "LG webOS", "Android TV", "Fire OS", "Apple tvOS",
  "TypeScript", "Micro-Frontends", "Architecture", "Performance", "Cross-Platform", "Scalability"
];

export const aboutContent = {
  eyebrow: "The Stats",
  title: "A data-driven engineering leader.",
  intro: "Front-end architecture and cross-platform delivery — specialising in OTT streaming where performance on resource-constrained devices is non-negotiable.",
  stats: [
    {
      num: "9+",
      label: "Years experience",
      body: "Across enterprise, fintech, healthcare, and OTT streaming platforms.",
      variant: "green"
    },
    {
      num: "6",
      label: "CTV platforms shipped",
      platforms: ["Samsung Tizen", "LG webOS", "Android TV", "Fire OS", "Apple tvOS", "Hisense Hubbl"]
    },
    {
      label: "Current Base",
      value: "Singapore",
      body: "Available for new opportunities.",
      isLocation: true
    },
    {
      num: "40%",
      label: "Performance gains",
      body: "On internal component libraries and CTV rendering pipelines.",
      variant: "dark"
    },
    {
      num: "30%",
      label: "Faster dev velocity",
      body: "Through component libraries, tooling, and AI-assisted engineering workflows."
    },
    {
      label: "Core Focus",
      chips: ["Perf. Optimization", "Micro-Frontends", "Cross-Platform", "Team Mentorship", "AI-Assisted Dev"],
      variant: "dark"
    }
  ]
};

export const projectsContent = [
  {
    slug: 'sky-nz',
    num: '01',
    year: '2025 – Present',
    tag: 'OTT · React Native',
    title: 'Sky NZ — Cross-Platform OTT',
    desc: 'A single React Native codebase serving iOS, Android, and 4+ TV platforms simultaneously — without forking into platform-specific codebases.',
    outcome: 'One codebase → four+ device classes. Consistent UX across all platforms with dramatically reduced maintenance overhead.',
    stack: ['React Native', 'react-native-tvos', 'TypeScript', 'React Navigation'],
    client: 'Sky New Zealand (via Accedo.tv)',
    sub: 'Cross-Platform OTT in React Native',
    context: 'Sky NZ wanted a unified streaming experience across iOS, Android mobile, Android TV, and other CTV targets — without maintaining four separate codebases.',
    role: 'Senior engineer / co-lead on the React Native build, focused on shared mobile-and-TV navigation, focus management, and performance.',
    approach: [
      'Architected a shared React Navigation layer handling touch input on mobile and D-pad / remote input on TV from the same component tree.',
      'Solved hard TV-specific edge cases — modal and background simultaneous key event handling, focus restoration, and platform quirks across Tizen, webOS, Android TV, and Fire OS.',
      'Optimized rendering and memory use for resource-constrained TV devices.'
    ]
  },
  {
    slug: 'sbs',
    num: '02',
    year: '2024',
    tag: 'CTV · Tech Lead',
    title: 'SBS On Demand — CTV Delivery',
    desc: "Complete CTV rebuild for Australia's public broadcaster, shipped end-to-end in 6 months across Samsung, LG, and additional TV platforms.",
    outcome: "Delivered in 6 months, end-to-end. Now serving SBS On Demand's audience across Australia.",
    stack: ['React', 'Tizen', 'webOS', 'JavaScript', 'Set-Top Boxes'],
    client: 'SBS Australia (via Accedo.tv)',
    sub: 'End-to-End CTV Delivery in 6 Months',
    context: "SBS On Demand needed a complete rebuild of their CTV experience across Samsung, LG, and other TV platforms — under an aggressive timeline.",
    role: 'Tech Lead. Owned the project end-to-end: architecture, sprint planning, code reviews, team coordination, and final delivery.',
    approach: [
      'Designed a single codebase running across Samsung Tizen, LG webOS, additional CTV platforms, and set-top boxes.',
      'Established TV-first patterns for focus, navigation, performance budgets, and analytics — patterns that became internal best practice.',
      'Coordinated a distributed team across multiple time zones through to launch.'
    ]
  },
  {
    slug: 'paramount',
    num: '03',
    year: '2023 – 2024',
    tag: 'OTT · Architecture',
    title: 'Paramount+ — Multi-Platform Architecture',
    desc: 'Core platform architecture for Paramount+ spanning multiple CTV and set-top-box targets, designed to scale to additional regional clients.',
    outcome: 'Reusable architecture that became the foundation for further client engagements, multiplying the value of the original investment.',
    stack: ['React', 'JavaScript', 'CTV Runtimes', 'STB'],
    client: 'Paramount+ (via Accedo.tv)',
    sub: 'Multi-Platform OTT Architecture',
    context: 'Paramount+ needed a single application capable of running across many CTV and STB platforms while supporting multiple regional clients on shared core code.',
    role: 'Senior Architect. Owned the core platform functionality and engineering process.',
    approach: [
      'Built a single-codebase application running across multiple CTV and STB platforms.',
      'Defined how shared modules and platform abstractions should evolve so regional clients could reuse the same core safely.',
      'Drove the engineering process — feature development, code health, and how the platform scales.'
    ]
  },
  {
    slug: 'zs-health',
    num: '04',
    year: '2021 – 2022',
    tag: 'Enterprise · SaaS',
    title: 'Healthcare Territory Platform',
    desc: 'Google Maps–powered territory management SaaS for pharma field operations. Angular 8 → 12 migration improved performance by 20%+.',
    outcome: "Front-line decision tool for several pharma clients' field-force optimization.",
    stack: ['Angular 12', 'React', 'Google Maps API', 'TypeScript'],
    client: 'ZS Associates',
    sub: 'Maps-Powered Field Operations SaaS',
    context: 'Pharmaceutical companies needed a way to manage field operations geographically — mapping territories, MR routes, and assigned doctor locations.',
    role: 'Senior Full Stack Developer.',
    approach: [
      'Built a Google Maps–powered SaaS for drawing and managing sales territories.',
      'Surfaced analytics to distinguish high vs low-performing territories.',
      'Led Angular 8 → 12 migration improving performance by 20%+.'
    ]
  },
  {
    slug: 'dbs-connect',
    num: '05',
    year: '2022 – 2023',
    tag: 'Enterprise · FinTech',
    title: 'Credit Agricole — Internal Banking Platform',
    desc: "Custom React component library and multi-stage CI/CD pipeline for Credit Agricole CIB's corporate banking platform.",
    outcome: 'Reduced duplicated front-end effort across product teams and gave the bank a consistent baseline for new applications.',
    stack: ['React', 'TypeScript', 'REST APIs', 'CI/CD'],
    client: 'Credit Agricole CIB',
    sub: 'Component Library & CI/CD for Internal Banking',
    context: 'An internal banking platform used by relationship managers — needing a faster, more consistent way to spin up new product modules.',
    role: 'Senior Full Stack Developer.',
    approach: [
      'Built a custom React component library standardising UI elements bank-wide.',
      'Created starter templates that accelerated new product kickoff.',
      'Set up automated CI/CD with multi-stage quality gates and reporting.'
    ]
  },
  {
    slug: 'etk-finland',
    num: '06',
    year: '2019 – 2021',
    tag: 'Public Sector',
    title: 'ETK Finland — Tax & Finance Portal',
    desc: "End-to-end front-end for Finland's compliance-critical tax and financial workflow portal, built with Angular and Redux.",
    outcome: 'Multiple production modules shipped for a government-grade compliance system.',
    stack: ['Angular', 'Redux', 'JavaScript'],
    client: 'Accenture (Finnish public sector)',
    sub: 'Tax & Finance Portal',
    context: 'A portal for managing Finnish tax and financial workflows — where compliance and reliability are non-negotiable.',
    role: 'Senior Front-End Developer.',
    approach: [
      'Built end-to-end front-end modules for tax processing and financial workflows.',
      'Implemented Redux for predictable state management across large, complex forms.',
      'Migrated legacy systems to modern frameworks for scalability and security.'
    ]
  },
  {
    slug: 'bombardier',
    num: '07',
    year: '2016 – 2018',
    tag: 'Enterprise',
    title: 'Bombardier — Incident Management Portal',
    desc: "Internal incident tracking portal built from the ground up for Bombardier's cross-team operations in AngularJS.",
    outcome: "Production portal integrated into Bombardier's internal incident-management workflow.",
    stack: ['AngularJS'],
    client: 'Bombardier (via TCS)',
    sub: 'Incident Management Portal',
    context: 'Bombardier needed an internal tool for tracking and sharing the progress of operational incidents across teams in real time.',
    role: 'Front-End Developer.',
    approach: [
      'Designed and built the portal from scratch in AngularJS.',
      'Built ticket views, escalation workflows, and progress timeline components.',
      'Designed cross-team collaboration features for transparent ownership.'
    ]
  },
  {
    slug: 'goldprice',
    num: '08',
    year: '2017 – 2018',
    tag: 'E-commerce',
    title: 'GoldPrice.org — E-commerce Platform',
    desc: 'Large-scale gold pricing retail platform with live-updating data aggregated from multiple sources.',
    outcome: 'One of the largest gold-pricing retail platforms of its kind with real-time feeds.',
    stack: ['AngularJS', 'Data pipelines'],
    client: 'GoldPrice.org (via TCS)',
    sub: 'Real-time E-commerce Platform',
    context: 'A large retail platform anchored on real-time gold price data scraped and aggregated from multiple sources.',
    role: 'Front-End Developer.',
    approach: [
      'Worked across the storefront and pricing surfaces with live-updating data.',
      'Gained hands-on knowledge of e-commerce architecture, pricing feeds, and front-end SEO.'
    ]
  }
];

export const experienceContent = {
  eyebrow: "Career Timeline",
  title: "Nine years. Five companies.",
  intro: "From enterprise portals in Delhi to engineering lead on global OTT platforms in Singapore.",
  items: [
    {
      role: "Engineering Lead",
      company: "Accedo.tv · Singapore",
      period: "May 2023 — Present",
      body: "Leading front-end and cross-platform engineering on Paramount+, SBS On Demand, and Sky NZ. Own end-to-end delivery — architecture, sprint planning, code reviews, team coordination, and final launch. Established TV-first patterns for focus management, navigation, and performance that became internal best practice across engagements.",
      kpis: [
        { val: "<em>6</em> months", desc: "SBS On Demand CTV delivered end-to-end" },
        { val: "<em>4+</em> screens", desc: "Sky NZ — one React Native codebase" },
        { val: "<em>3</em> clients", desc: "Paramount+, SBS On Demand, Sky NZ" },
        { val: "<em>↑</em> 40%", desc: "Component library performance improvement" }
      ]
    },
    {
      role: "Senior Assoc. L2",
      company: "Publicis Sapient / Credit Agricole CIB · Singapore",
      period: "Sep 2022 — Apr 2023",
      body: "Built a custom React component library standardising UI elements bank-wide for Credit Agricole CIB's internal corporate-banking platform. Created starter templates that accelerated new product kickoff. Set up a multi-stage CI/CD pipeline with automated quality gates and reporting dashboards.",
      kpis: [
        { val: "<em>↓</em> 30%", desc: "Reduction in duplicated front-end effort across teams" },
        { val: "<em>1</em> library", desc: "Component system serving all product teams at the bank" }
      ]
    },
    {
      role: "Sr. Full Stack Dev",
      company: "ZS Associates · Pune",
      period: "Apr 2021 — Sep 2022",
      body: "Built a Google Maps–powered healthcare territory management SaaS for pharmaceutical clients — enabling field operations teams to draw, visualise, and optimise sales territories across real-world geography. Led the Angular 8 → 12 migration and built a reusable component architecture that improved team delivery speed.",
      kpis: [
        { val: "<em>↑</em> 20%", desc: "Performance gain from Angular migration" },
        { val: "Ng <em>12</em>", desc: "Led Angular 8 → 12 migration end-to-end" }
      ]
    },
    {
      role: "Sr. Front-End Dev",
      company: "Accenture · Pune",
      period: "Nov 2018 — Mar 2021",
      body: "Delivered the ETK Finland tax and finance portal end-to-end. Built complex form-heavy modules with Redux state management for a compliance-critical government system. Led several Angular and React framework migrations for enterprise clients across finance and public sector.",
      kpis: [
        { val: "<em>2+</em> yrs", desc: "Leading front-end on ETK Finland portal" },
        { val: "Gov<em>Tech</em>", desc: "Tax and compliance systems expertise" }
      ]
    },
    {
      role: "Front-End Developer",
      company: "TCS · Delhi",
      period: "May 2016 — Oct 2018",
      body: "First major enterprise role. Built the Bombardier Incident Management portal from scratch in AngularJS — ticket views, escalation workflows, cross-team collaboration, and progress timelines. Also worked on GoldPrice.org e-commerce platform with live data feeds and pricing pipelines.",
      kpis: [
        { val: "<em>2</em> apps", desc: "Bombardier portal + GoldPrice.org e-commerce" },
        { val: "<em>→</em> Start", desc: "Foundation of an enterprise engineering career" }
      ]
    }
  ]
};

export const skillsContent = {
  eyebrow: "The Skill Matrix",
  title: "Every platform. Every screen.",
  intro: "Hover any chip to highlight it. Balancing deep technical expertise with engineering leadership across the full stack.",
  categories: [
    {
      label: "CTV / OTT",
      skills: ["Samsung Tizen", "LG webOS", "Android TV", "Fire OS", "Apple tvOS", "Hisense Hubbl", "Set-Top Boxes"]
    },
    {
      label: "Frontend",
      skills: ["React", "React Native", "TypeScript", "Next.js", "Angular 8–15+", "Preact", "Redux", "CSS3 / SCSS"]
    },
    {
      label: "Architecture",
      skills: ["Micro-Frontend", "Component Libraries", "Cross-Platform", "State Management", "Modular Design", "Agile / Scrum"]
    },
    {
      label: "Performance",
      skills: ["Web Vitals", "Lighthouse", "Code Splitting", "Lazy Loading", "Memory Profiling", "TV-first Perf"]
    },
    {
      label: "AI-Assisted Dev",
      skills: ["Claude", "ChatGPT", "Prompt Engineering", "Coding Agents", "Codebase Audits", "Agent Debugging"]
    },
    {
      label: "Testing & Tooling",
      skills: ["Jest", "Cypress", "GitHub Actions", "Webpack / Vite", "REST APIs", "CI/CD Pipelines"]
    }
  ]
};

export const contactContent = {
  overline: "Ready to scale?",
  heading: "SAY HELLO.",
  cards: [
    { label: "Status", val: "Available for new roles", isAvail: true },
    { label: "Email", val: "mahendra.connect@outlook.com", link: "mailto:mahendra.connect@outlook.com" },
    { label: "Phone (SG)", val: "+65 8731 9500", link: "tel:+6587319500" },
    { label: "WhatsApp", val: "+91 9424 786497", link: "https://wa.me/919424786497" },
    { label: "LinkedIn", val: "mahendra-baghel", link: "https://www.linkedin.com/in/mahendra-baghel/" },
    { label: "Location", val: "Singapore · Open to remote" }
  ]
};

export const footerContent = {
  copyright: "© 2025 **Mahendra Baghel**",
  role: "Engineering Lead · Singapore",
  tagline: "Designed with Code."
};
