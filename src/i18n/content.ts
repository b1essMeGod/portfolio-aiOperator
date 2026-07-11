export type {
  Language,
  ExperienceSection,
  ExperienceItem,
  AboutTab,
  SkillGroup,
  HeroStat,
  LocalizedContent,
} from './types'

import type { LocalizedContent } from './types'
import { experienceEn } from './experience.en'
import { experienceRu } from './experience.ru'

export const content: Record<'ru' | 'en', LocalizedContent> = {
  ru: {
    brand: 'Резюме кандидата',
    nav: {
      about: 'Обо мне',
      experience: 'Опыт',
      skills: 'Навыки',
      works: 'Мои работы',
      contacts: 'Контакты',
    },
    navShort: {
      about: 'Обо мне',
      experience: 'Опыт',
      skills: 'Навыки',
      works: 'Работы',
      contacts: 'Контакты',
    },
    hero: {
      name: 'Цой Юрий Викторович',
      role: 'Fullstack AI Operator | Middle Frontend Developer',
      summary:
        'Fullstack AI Operator: проектирую и выпускаю веб-продукты с production-ready AI — от RAG-систем и LLM-оркестрации до интерфейсов и DevOps.',
      primaryCta: 'Скачать резюме',
      secondaryCta: 'Связаться',
      stats: [
        { value: '16', label: 'проектов' },
        { value: '4+', label: 'лет опыта' },
        { value: 'AI', label: 'Fullstack' },
      ],
    },
    about: {
      title: 'Обо мне',
      tabs: [
        {
          id: 'stack',
          label: 'Стек',
          blocks: [
            {
              kind: 'group',
              title: 'Frontend',
              text: 'React, Next.js, TypeScript, адаптивная вёрстка, сложные UI-дашборды и аналитические кабинеты.',
            },
            {
              kind: 'group',
              title: 'Backend',
              text: 'Python, FastAPI, PostgreSQL, Redis, REST API, multi-tenant SaaS-архитектура (MPKiller).',
            },
            {
              kind: 'group',
              title: 'AI & RAG',
              text: 'векторные базы знаний, RAG-пайплайны, LLM API gateway, prompt engineering, LangChain (базово), интеграции OpenAI / DeepSeek / Perplexity.',
            },
            {
              kind: 'group',
              title: 'Marketplace & интеграции',
              text: 'Ozon API, Wildberries API, выгрузка товаров, ценообразование, аналитика конкурентов.',
            },
            {
              kind: 'group',
              title: 'DevOps',
              text: 'Docker, GitHub Actions, Nginx, мониторинг, CI/CD. CMS и PHP/MySQL — в корпоративных проектах.',
            },
          ],
        },
        {
          id: 'ai',
          label: 'AI',
          blocks: [
            {
              kind: 'lead',
              text: 'Fullstack AI Operator: не только ускоряю разработку нейросетями, но и проектирую AI-функции в продукте — RAG, оркестрация LLM, Human-in-the-Loop и контроль качества ответов.',
            },
            {
              kind: 'card',
              title: 'MPKiller',
              url: 'https://mpkiller.ru',
              text: 'построил RAG-базу знаний о товарах для автоответов на отзывы и вопросы покупателей на Ozon/Wildberries. Маршрутизация между DeepSeek, Perplexity и ChatGPT (OpenAI) с контекстом из каталога и карточек.',
            },
            {
              kind: 'card',
              title: 'GEO+',
              url: 'https://agnc.plus-geo.com',
              text: 'платформа AI Visibility Framework — управление присутствием бренда в ChatGPT, Алисе AI и других генеративных системах. Prompt Research (100+ промптов), AI Research, Knowledge Gap Analysis.',
            },
            {
              kind: 'card',
              title: 'AI Knowledge Factory в GEO+',
              text: 'производство контента с Human-in-the-Loop и распространение знаний по цифровой экосистеме бренда — вместо классического SEO.',
            },
            {
              kind: 'card',
              title: 'Ускорение разработки',
              text: 'Cursor, Copilot, Gemini и Python-пайплайны для кода, тестов и документации — time-to-demo сокращён на 40–50%.',
            },
          ],
        },
        {
          id: 'team',
          label: 'Команда',
          blocks: [
            {
              kind: 'bullet',
              text: 'Руковожу разработкой и выстраиваю процессы: код-ревью, Git Flow, CI/CD, документация API (OpenAPI/Swagger).',
            },
            {
              kind: 'bullet',
              text: 'Делюсь AI-связками и шаблонами — прокачка команды напрямую ускоряет релизы.',
            },
            {
              kind: 'bullet',
              text: 'Самостоятельно закрываю fullstack-стек задач уровня 2–3 специалистов: от архитектуры и backend до UI и деплоя.',
            },
            {
              kind: 'bullet',
              text: 'Коммуникация с бизнесом: перевожу задачи продавцов маркетплейсов и маркетинговых команд в технические решения.',
            },
          ],
        },
        {
          id: 'results',
          label: 'Результаты',
          blocks: [
            {
              kind: 'card',
              title: 'MPKiller',
              text: 'SaaS-платформа для маркетплейсов — tenant-кабинеты, роли, 2FA, AI-автоответы на базе RAG, аналитика топ/антитоп и автоматизация продвижения.',
            },
            {
              kind: 'card',
              title: 'GEO+',
              text: 'AI Visibility Framework в production — Baseline, Semantic Intelligence, личный кабинет с KPI и мониторингом присутствия бренда в генеративном поиске.',
            },
            {
              kind: 'card',
              title: 'Setly',
              text: 'MVP travel-сервиса выведен на 40% быстрее (4 → 2,5 мес.), Lighthouse 92+ Mobile, доступность 99,5%.',
            },
            {
              kind: 'card',
              title: 'B2B-платформа',
              text: 'на 10 фирм одной ГК — полный frontend solo в срок на двух разработчиков. AI code-review снизил баги на frontend-тестах ~30%.',
            },
          ],
        },
      ],
    },
    experience: {
      title: 'Опыт',
      items: experienceRu,
    },
    skills: {
      title: 'Навыки',
      groups: [
        {
          title: 'Frontend',
          items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'SASS/SCSS', 'Adaptive UI', 'PixelPerfect'],
        },
        {
          title: 'Backend & DevOps',
          items: ['Python', 'FastAPI', 'PHP', 'PostgreSQL', 'Redis', 'Docker', 'GitHub Actions', 'Nginx'],
        },
        {
          title: 'Design & AI',
          items: [
            'Figma',
            'UI/UX',
            'RAG',
            'LLM Orchestration',
            'OpenAI API',
            'DeepSeek',
            'Prompt Engineering',
            'Human-in-the-Loop',
          ],
        },
      ],
    },
    contacts: {
      title: 'Контакты',
      intro: 'Открыт к предложениям по frontend/fullstack разработке и AI-направлению.',
      telegram: 'Telegram',
      email: 'Email',
      phone: 'Мобильный',
    },
    footer: 'Готов к удаленной работе, гибриду и релокации.',
    controls: {
      theme: 'Тема',
      language: 'Язык',
      dark: 'Темная',
      light: 'Светлая',
    },
  },
  en: {
    brand: 'Candidate Resume',
    nav: {
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
      works: 'My work',
      contacts: 'Contacts',
    },
    navShort: {
      about: 'About',
      experience: 'Career',
      skills: 'Skills',
      works: 'Works',
      contacts: 'Contact',
    },
    hero: {
      name: 'Yury Tsoy',
      role: 'Fullstack AI Operator | Middle Frontend Developer',
      summary:
        'Fullstack AI Operator: I design and ship web products with production-ready AI — from RAG systems and LLM orchestration to interfaces and DevOps.',
      primaryCta: 'Download CV',
      secondaryCta: 'Contact',
      stats: [
        { value: '16', label: 'projects' },
        { value: '4+', label: 'years exp.' },
        { value: 'AI', label: 'Fullstack' },
      ],
    },
    about: {
      title: 'About',
      tabs: [
        {
          id: 'stack',
          label: 'Stack',
          blocks: [
            {
              kind: 'group',
              title: 'Frontend',
              text: 'React, Next.js, TypeScript, responsive layout, complex UI dashboards and analytics cabinets.',
            },
            {
              kind: 'group',
              title: 'Backend',
              text: 'Python, FastAPI, PostgreSQL, Redis, REST API, multi-tenant SaaS architecture (MPKiller).',
            },
            {
              kind: 'group',
              title: 'AI & RAG',
              text: 'vector knowledge bases, RAG pipelines, LLM API gateway, prompt engineering, LangChain (basics), OpenAI / DeepSeek / Perplexity integrations.',
            },
            {
              kind: 'group',
              title: 'Marketplace integrations',
              text: 'Ozon API, Wildberries API, product uploads, pricing, competitor analytics.',
            },
            {
              kind: 'group',
              title: 'DevOps',
              text: 'Docker, GitHub Actions, Nginx, monitoring, CI/CD. CMS and PHP/MySQL in enterprise projects.',
            },
          ],
        },
        {
          id: 'ai',
          label: 'AI',
          blocks: [
            {
              kind: 'lead',
              text: 'Fullstack AI Operator: I build production AI features — RAG, LLM orchestration, Human-in-the-Loop, and response quality control — not just AI-assisted coding.',
            },
            {
              kind: 'card',
              title: 'MPKiller',
              url: 'https://mpkiller.ru',
              text: 'built a product knowledge RAG system for automated replies to marketplace reviews and buyer questions on Ozon/Wildberries. Routes across DeepSeek, Perplexity, and ChatGPT (OpenAI) with catalog context.',
            },
            {
              kind: 'card',
              title: 'GEO+',
              url: 'https://agnc.plus-geo.com',
              text: 'AI Visibility Framework platform for brand presence in ChatGPT, Alice AI, and other generative systems. Prompt Research (100+ prompts), AI Research, Knowledge Gap Analysis.',
            },
            {
              kind: 'card',
              title: 'GEO+ AI Knowledge Factory',
              text: 'content production with Human-in-the-Loop and knowledge distribution across the brand digital ecosystem — beyond classic SEO.',
            },
            {
              kind: 'card',
              title: 'Development acceleration',
              text: 'Cursor, Copilot, Gemini, and Python pipelines for code, tests, and docs — time-to-demo reduced by 40–50%.',
            },
          ],
        },
        {
          id: 'team',
          label: 'Team',
          blocks: [
            {
              kind: 'bullet',
              text: 'I lead development and processes: code review, Git Flow, CI/CD, API documentation (OpenAPI/Swagger).',
            },
            {
              kind: 'bullet',
              text: 'I share AI workflows and templates — upskilling the team directly speeds up releases.',
            },
            {
              kind: 'bullet',
              text: 'I solo fullstack stacks typically split across 2–3 specialists: architecture, backend, UI, and deploy.',
            },
            {
              kind: 'bullet',
              text: 'Business communication: translating marketplace sellers and marketing team needs into technical solutions.',
            },
          ],
        },
        {
          id: 'results',
          label: 'Results',
          blocks: [
            {
              kind: 'card',
              title: 'MPKiller',
              text: 'marketplace SaaS — tenant cabinets, roles, 2FA, RAG-powered AI auto-replies, top/anti-top analytics, and promotion automation.',
            },
            {
              kind: 'card',
              title: 'GEO+',
              text: 'AI Visibility Framework in production — Baseline, Semantic Intelligence, client dashboard with KPIs and generative search presence monitoring.',
            },
            {
              kind: 'card',
              title: 'Setly',
              text: 'travel MVP shipped 40% faster (4 → 2.5 months), Lighthouse 92+ Mobile, 99.5% uptime.',
            },
            {
              kind: 'card',
              title: 'B2B platform',
              text: 'for 10 companies in one group — full frontend solo on a two-developer timeline. AI code review cut frontend testing bugs ~30%.',
            },
          ],
        },
      ],
    },
    experience: {
      title: 'Experience',
      items: experienceEn,
    },
    skills: {
      title: 'Skills',
      groups: [
        {
          title: 'Frontend',
          items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'SASS/SCSS', 'Adaptive UI', 'PixelPerfect'],
        },
        {
          title: 'Backend & DevOps',
          items: ['Python', 'FastAPI', 'PHP', 'PostgreSQL', 'Redis', 'Docker', 'GitHub Actions', 'Nginx'],
        },
        {
          title: 'Design & AI',
          items: [
            'Figma',
            'UI/UX',
            'RAG',
            'LLM Orchestration',
            'OpenAI API',
            'DeepSeek',
            'Prompt Engineering',
            'Human-in-the-Loop',
          ],
        },
      ],
    },
    contacts: {
      title: 'Contacts',
      intro: 'Open to frontend/fullstack and AI-focused opportunities.',
      telegram: 'Telegram',
      email: 'Email',
      phone: 'Mobile',
    },
    footer: 'Open to remote, hybrid, and relocation opportunities.',
    controls: {
      theme: 'Theme',
      language: 'Language',
      dark: 'Dark',
      light: 'Light',
    },
  },
}
