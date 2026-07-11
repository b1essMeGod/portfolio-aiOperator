import type { ExperienceItem } from './types'

export const experienceRu: ExperienceItem[] = [
  {
    period: '2025 — настоящее время',
    role: 'Lead Fullstack Developer / AI Engineer',
    company: 'MPKiller',
    summary: 'SaaS для продавцов Ozon и Wildberries — multi-tenant кабинет, аналитика и AI-автоматизация операций.',
    sections: [
      {
        title: 'RAG & AI-автоответы',
        highlights: [
          'RAG-база знаний о товарах: контекст из каталога и карточек для ответов на отзывы и вопросы покупателей.',
          'Оркестрация LLM: DeepSeek, Perplexity и ChatGPT (OpenAI) с единым API-шлюзом и контролем качества.',
        ],
      },
      {
        title: 'Архитектура SaaS',
        highlights: [
          'Multi-tenant архитектура: tenant-кабинеты, делегирование прав, верификация и 2FA.',
          'Функциональный дашборд с гибкой конфигурацией под каждого владельца аккаунта.',
        ],
      },
      {
        title: 'Маркетплейсы & Аналитика',
        highlights: [
          'Интеграции Ozon API и Wildberries API: выгрузка товаров, рекомендации по ценам.',
          'Топ/антитоп, анализ конкурентов и автоматизация продвижения через самовыкуп.',
        ],
      },
    ],
    stack: ['React', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL', 'RAG', 'OpenAI API', 'DeepSeek', 'Ozon API', 'Wildberries API'],
  },
  {
    period: '2025 — настоящее время',
    role: 'Lead Fullstack Developer',
    company: 'GEO+',
    summary: 'Платформа AI Visibility Framework — управление присутствием бренда в генеративном поиске.',
    sections: [
      {
        title: 'AI Visibility Framework',
        highlights: [
          'Полный цикл: AI Visibility Baseline, Semantic Intelligence, Prompt Research (100+ промптов), AI Research.',
          'Knowledge Gap Analysis — выявление пробелов в присутствии бренда в ChatGPT, Алисе AI и других LLM.',
        ],
      },
      {
        title: 'AI Knowledge Factory',
        highlights: [
          'Производство контента с Human-in-the-Loop: контроль экспертом на каждом этапе.',
          'Многоуровневое распространение знаний по цифровой экосистеме бренда.',
        ],
      },
      {
        title: 'Личный кабинет',
        highlights: [
          'Дашборд заказчика: статус задач, динамика AI Visibility, KPI и рекомендации.',
          'Отчёты и непрерывная оптимизация присутствия бренда в генеративных ответах.',
        ],
      },
    ],
    stack: ['React', 'TypeScript', 'Python', 'LLM Integration', 'Prompt Research', 'Analytics Dashboard', 'Human-in-the-Loop'],
  },
  {
    period: 'Ноябрь 2025 — настоящее время',
    role: 'Технический CEO / Lead Fullstack Developer',
    company: 'Setly',
    summary: 'Агрегатор планирования путешествий — MVP на VPS, команда 3 человека.',
    sections: [
      {
        title: 'Архитектура & Full-stack',
        highlights: [
          'Спроектировал и реализовал end-to-end сервис с нуля: Next.js (App Router, TS, RSC) + Python/FastAPI.',
          'Интеграция внешних API (карты, погода, билеты) с временем ответа <300 мс.',
        ],
      },
      {
        title: 'DevOps & Инфраструктура',
        highlights: [
          'Docker на VPS (4 контейнера: Next.js, FastAPI, PostgreSQL, Redis).',
          'GitHub Actions CI/CD, автобэкапы БД, мониторинг Uptime Kuma — доступность 99,5%.',
        ],
      },
      {
        title: 'UI/UX & Performance',
        highlights: [
          'Адаптивная вёрстка Mobile First, Tailwind CSS, кастомные компоненты.',
          'Lighthouse 92+ (Mobile) за счёт оптимизации изображений, Redis-кэша и code splitting.',
          'Прототипы в Figma, PixelPerfect контроль.',
        ],
      },
      {
        title: 'AI в продукте',
        highlights: [
          'ChatGPT API для персонализированных маршрутов, API-шлюз для нейросетевых запросов.',
          'Cursor, Copilot, Claude для кода и тестов — выход MVP на 40% быстрее (4 → 2,5 мес.).',
        ],
      },
      {
        title: 'Команда & Процессы',
        highlights: [
          'Руководство backend-разработчиком и UI/UX дизайнером: GitHub Projects, код-ревью, CI/CD.',
          'Git Flow, автотестирование PR, документация API (OpenAPI/Swagger).',
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
    period: 'Июль 2022 — Февраль 2025',
    role: 'Руководитель ИТ-отдела',
    company: 'ГК ККМ',
    summary: '5 юридических лиц, 70+ рабочих мест — химическая продукция, камень, выставочная деятельность.',
    sections: [
      {
        title: 'ИТ-инфраструктура',
        highlights: [
          'Техподдержка 70+ рабочих мест: сети, оргтехника, серверы, хостинги, DNS.',
          'Стабильная инфраструктура ускорила операции коммерции, бухгалтерии и складов на 25–30%.',
        ],
      },
      {
        title: '1С & CRM',
        highlights: [
          'Доработка 1С (ERP, УТ, Бухгалтерия): отчёты, обмен данными, интеграции.',
          'CRM для отдела продаж — сокращение времени на занесение данных на 40%.',
          'AI (ChatGPT, Copilot, Midjourney) для контента, SEO и автоматизации техподдержки.',
        ],
      },
      {
        title: 'Веб & SEO',
        highlights: [
          'Поддержка 15+ сайтов на WordPress, Tilda, Joomla; SEO и Яндекс.Метрика.',
          'Вёрстка адаптивных сайтов с нуля по макетам Figma; React-модули, Sass/SCSS.',
        ],
      },
      {
        title: 'Серверы & DevOps',
        highlights: [
          'Linux-серверы, PHP, MySQL, управление хостингами разных провайдеров.',
          'Автоматизация резервного копирования и мониторинга доступности.',
        ],
      },
      {
        title: 'Выставки & Маркетинг',
        highlights: [
          'Рекламные материалы для выставок: буклеты, баннеры, роллапы в Illustrator, Photoshop, Figma.',
          'Полный цикл подготовки к выставкам — от макетов до техподдержки онлайн-ресурсов.',
        ],
      },
      {
        title: 'Влияние на бизнес',
        highlights: [
          'Коммерция: ускорение CRM и 1С, автоматизация отчётности и КП.',
          'Бухгалтерия: стабильная 1С, меньше ошибок при закрытии периодов.',
          'Склады: интеграция 1С и веб-интерфейсов, −35% ручного ввода, внедрение МойСклад.',
        ],
      },
    ],
    stack: [
      'React',
      'WordPress',
      'PHP',
      'MySQL',
      '1С',
      'Python',
      'Figma',
      'SEO',
      'Linux',
      'Git',
    ],
  },
  {
    period: 'Декабрь 2020 — Ноябрь 2021',
    role: 'Web-разработчик / Технический специалист',
    company: 'Dream Consulting',
    summary: 'Корпоративные сайты под ключ для локальных клиентов — от макета до публикации.',
    sections: [
      {
        title: 'Вёрстка & Frontend',
        highlights: [
          'Адаптивные сайты на HTML5, CSS3; JavaScript — слайдеры, модалки, валидация форм.',
          'ReactJS: компоненты, state, списки; SASS/SCSS — +30% поддерживаемости стилей.',
        ],
      },
      {
        title: 'Pre-production',
        highlights: [
          'Обработка изображений, сетка, цветовые схемы по макетам Figma.',
          'Согласование спорных моментов с дизайнерами — баланс визуала и скорости вёрстки.',
        ],
      },
      {
        title: 'Реализованные проекты',
        highlights: [
          '5 корпоративных сайтов под ключ и 7 витрин-одностраничников.',
          'Контроль адаптива, интерактива и скорости загрузки перед сдачей заказчику.',
        ],
      },
      {
        title: 'Хостинг & DevOps',
        highlights: [
          'Размещение на хостингах: FTP, панели управления, привязка доменов.',
          'Перенос сайтов, резервные копии; чек-листы для команды по настройке доменов.',
        ],
      },
      {
        title: '1С & Автоматизация',
        highlights: [
          'Базовое программирование 1С: отчёты, обработки, УТ и Бухгалтерия.',
          'Автовыгрузка остатков в Excel — экономия 2 часов в неделю для коммерции.',
        ],
      },
      {
        title: 'Ключевые результаты',
        highlights: [
          '10+ адаптивных сайтов, Google PageSpeed 85+ баллов в среднем.',
          'SASS + React сократили правки интерфейсов на 25%.',
          'Без простоев хостингов и доменов более 6 месяцев.',
        ],
      },
    ],
    stack: ['HTML5', 'CSS3', 'JavaScript', 'React', 'SASS', 'Figma', '1С', 'Git', 'FTP'],
  },
]
