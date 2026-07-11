import type { ExperienceItem } from './types'

export const experienceEn: ExperienceItem[] = [
  {
    period: '2025 — Present',
    role: 'Lead Fullstack Developer / AI Engineer',
    company: 'MPKiller',
    summary: 'SaaS for Ozon and Wildberries sellers — multi-tenant cabinet, analytics, and AI-powered operations.',
    sections: [
      {
        title: 'RAG & AI Auto-replies',
        highlights: [
          'Product knowledge RAG system: catalog and listing context for review and buyer question replies.',
          'LLM orchestration: DeepSeek, Perplexity, and ChatGPT (OpenAI) via a unified API gateway with quality control.',
        ],
      },
      {
        title: 'SaaS Architecture',
        highlights: [
          'Multi-tenant architecture: tenant cabinets, role delegation, verification, and 2FA.',
          'Functional dashboard with flexible per-owner account configuration.',
        ],
      },
      {
        title: 'Marketplaces & Analytics',
        highlights: [
          'Ozon API and Wildberries API integrations: product uploads and pricing recommendations.',
          'Top/anti-top analytics, competitor analysis, and promotion automation via self-buyout flows.',
        ],
      },
    ],
    stack: ['React', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL', 'RAG', 'OpenAI API', 'DeepSeek', 'Ozon API', 'Wildberries API'],
  },
  {
    period: '2025 — Present',
    role: 'Lead Fullstack Developer',
    company: 'GEO+',
    summary: 'AI Visibility Framework platform for managing brand presence in generative search.',
    sections: [
      {
        title: 'AI Visibility Framework',
        highlights: [
          'Full cycle: AI Visibility Baseline, Semantic Intelligence, Prompt Research (100+ prompts), AI Research.',
          'Knowledge Gap Analysis — identifying brand presence gaps in ChatGPT, Alice AI, and other LLMs.',
        ],
      },
      {
        title: 'AI Knowledge Factory',
        highlights: [
          'Content production with Human-in-the-Loop: expert review at every stage.',
          'Multi-level knowledge distribution across the brand digital ecosystem.',
        ],
      },
      {
        title: 'Client Dashboard',
        highlights: [
          'Client cabinet: task status, AI Visibility dynamics, KPIs, and recommendations.',
          'Reports and continuous optimization of brand presence in generative answers.',
        ],
      },
    ],
    stack: ['React', 'TypeScript', 'Python', 'LLM Integration', 'Prompt Research', 'Analytics Dashboard', 'Human-in-the-Loop'],
  },
  {
    period: 'Nov 2025 — Present',
    role: 'Technical CEO / Lead Fullstack Developer',
    company: 'Setly',
    summary: 'Travel planning aggregator — MVP on VPS, team of 3.',
    sections: [
      {
        title: 'Architecture & Full-stack',
        highlights: [
          'Designed and built an end-to-end service from scratch: Next.js (App Router, TS, RSC) + Python/FastAPI.',
          'External API integrations (maps, weather, tickets) with response time under 300 ms.',
        ],
      },
      {
        title: 'DevOps & Infrastructure',
        highlights: [
          'Docker on VPS (4 containers: Next.js, FastAPI, PostgreSQL, Redis).',
          'GitHub Actions CI/CD, automated DB backups, Uptime Kuma monitoring — 99.5% uptime.',
        ],
      },
      {
        title: 'UI/UX & Performance',
        highlights: [
          'Mobile-first responsive layout, Tailwind CSS, custom components.',
          'Lighthouse 92+ (Mobile) via image optimization, Redis cache, and code splitting.',
          'Figma prototypes with pixel-perfect implementation.',
        ],
      },
      {
        title: 'AI in Product',
        highlights: [
          'ChatGPT API for personalized routes, API gateway for neural network requests.',
          'Cursor, Copilot, Claude for code and tests — MVP shipped 40% faster (4 → 2.5 months).',
        ],
      },
      {
        title: 'Team & Processes',
        highlights: [
          'Led backend developer and UI/UX designer: GitHub Projects, code review, CI/CD.',
          'Git Flow, automated PR testing, API documentation (OpenAPI/Swagger).',
        ],
      },
    ],
    stack: [
      'Next.js',
      'TypeScript',
      'Python',
      'FastAPI',
      'Docker',
      'PostgreSQL',
      'Redis',
      'GitHub Actions',
      'Tailwind CSS',
      'Figma',
    ],
  },
  {
    period: 'Jul 2022 — Feb 2025',
    role: 'Head of IT Department',
    company: 'GK KKM',
    summary: '5 legal entities, 70+ workstations — chemicals, stone products, exhibitions.',
    sections: [
      {
        title: 'IT Infrastructure',
        highlights: [
          'Support for 70+ workstations: networks, hardware, servers, hosting, DNS.',
          'Stable infrastructure sped up sales, accounting, and warehouse operations by 25–30%.',
        ],
      },
      {
        title: '1C & CRM',
        highlights: [
          '1C customization (ERP, Trade, Accounting): reports, data exchange, integrations.',
          'Sales CRM — 40% reduction in data entry time.',
          'AI (ChatGPT, Copilot, Midjourney) for content, SEO, and support automation.',
        ],
      },
      {
        title: 'Web & SEO',
        highlights: [
          'Maintained 15+ sites on WordPress, Tilda, Joomla; SEO and Yandex.Metrica.',
          'Built responsive sites from Figma mockups; React modules, Sass/SCSS.',
        ],
      },
      {
        title: 'Servers & DevOps',
        highlights: [
          'Linux servers, PHP, MySQL, multi-provider hosting management.',
          'Automated backups and availability monitoring.',
        ],
      },
      {
        title: 'Exhibitions & Marketing',
        highlights: [
          'Exhibition materials: brochures, banners, roll-ups in Illustrator, Photoshop, Figma.',
          'Full exhibition cycle — from mockups to online resource support.',
        ],
      },
      {
        title: 'Business Impact',
        highlights: [
          'Sales: faster CRM and 1C workflows, automated reports and proposals.',
          'Accounting: stable 1C, fewer errors at period close.',
          'Warehouses: 1C + web integration, −35% manual input, MoySklad rollout.',
        ],
      },
    ],
    stack: ['React', 'WordPress', 'PHP', 'MySQL', '1C', 'Python', 'Figma', 'SEO', 'Linux', 'Git'],
  },
  {
    period: 'Dec 2020 — Nov 2021',
    role: 'Web Developer / Technical Specialist',
    company: 'Dream Consulting',
    summary: 'Turnkey corporate websites for local clients — from mockup to production.',
    sections: [
      {
        title: 'Layout & Frontend',
        highlights: [
          'Responsive sites with HTML5, CSS3; JavaScript sliders, modals, form validation.',
          'ReactJS components and state; SASS/SCSS — 30% better style maintainability.',
        ],
      },
      {
        title: 'Pre-production',
        highlights: [
          'Image processing, grid alignment, color schemes from Figma mockups.',
          'Design handoff negotiations — balancing visuals and delivery speed.',
        ],
      },
      {
        title: 'Delivered Projects',
        highlights: [
          '5 turnkey corporate sites and 7 product showcase landing pages.',
          'Verified responsive behavior, interactivity, and load speed before client delivery.',
        ],
      },
      {
        title: 'Hosting & DevOps',
        highlights: [
          'Site deployment: FTP, control panels, domain binding.',
          'Site migrations, backups; team checklists for domain setup.',
        ],
      },
      {
        title: '1C & Automation',
        highlights: [
          'Basic 1C programming: reports, processing, Trade and Accounting configs.',
          'Automated stock export to Excel — saved sales team 2 hours per week.',
        ],
      },
      {
        title: 'Key Results',
        highlights: [
          '10+ responsive sites, average Google PageSpeed 85+.',
          'SASS + React cut UI change time by 25%.',
          'Zero hosting/domain downtime for over 6 months.',
        ],
      },
    ],
    stack: ['HTML5', 'CSS3', 'JavaScript', 'React', 'SASS', 'Figma', '1C', 'Git', 'FTP'],
  },
]
