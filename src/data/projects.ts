export type ProjectItem = {
  id: number
  slug: string
  title: Record<'ru' | 'en', string>
  description: Record<'ru' | 'en', string>
  thumbnail: string
  images: string[]
  siteUrl?: string
  context: Record<'ru' | 'en', string>
  highlights: Record<'ru' | 'en', string[]>
  stack: string[]
}

export const projects: ProjectItem[] = [
  {
    id: 1,
    slug: 'setly',
    title: { ru: 'Setly', en: 'Setly' },
    description: {
      ru: 'Медиа-сервис для создания чек-планов для путешествий',
      en: 'Media service for creating travel checklist plans',
    },
    thumbnail: '1.jpg',
    images: ['1-1.jpg', '1-2.jpg', '1-3.jpg', '1-4.jpg', '1-5.jpg', '1-6.jpg'],
    siteUrl: 'https://setly.space/',
    context: {
      ru: 'Setly — сервис чек-планов для путешествий: пользователь выбирает формат поездки, редактирует план и получает готовый список для поездки без стресса.',
      en: 'Setly is a travel checklist service where users choose a trip format, customize their plan, and get a ready-to-use checklist.',
    },
    highlights: {
      ru: [
        'Сценарий "3 шага" для быстрого составления плана поездки',
        'Контентные разделы: чек-планы, статьи, тесты, сообщество',
        'Акцент на удобстве планирования и снижении тревожности перед поездкой',
      ],
      en: [
        'Three-step flow for quick trip planning',
        'Content sections: checklists, articles, tests, and community',
        'Focused on stress-free travel preparation',
      ],
    },
    stack: ['Next.js', 'React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Redis', 'Docker', 'Figma'],
  },
  {
    id: 2,
    slug: 'twinkle',
    title: { ru: 'Twinkle', en: 'Twinkle' },
    description: {
      ru: 'Сайт-витрина для премиальных украшений ручной работы',
      en: 'Showcase website for premium handmade jewelry',
    },
    thumbnail: '2.jpg',
    images: ['2-1.jpg', '2-2.jpg', '2-3.jpg'],
    context: {
      ru: 'Twinkle — визуальная витрина для бренда украшений ручной работы с фокусом на премиальную подачу продукта и эмоциональную коммуникацию.',
      en: 'Twinkle is a visual showcase for a handmade jewelry brand focused on premium presentation and emotional storytelling.',
    },
    highlights: {
      ru: [
        'Каталог и презентационные секции бренда',
        'Акцент на визуал и качественные продуктовые карточки',
        'Плавная анимация и адаптивная сетка под мобильные устройства',
      ],
      en: [
        'Catalog and brand presentation sections',
        'Strong visual-first product presentation',
        'Smooth animation and responsive layout',
      ],
    },
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Figma', 'Adaptive Layout', 'Pixel Perfect'],
  },
  {
    id: 3,
    slug: 'kurs-be-in-touch',
    title: { ru: 'Курс be-in-touch', en: 'Be-in-touch Course' },
    description: {
      ru: 'Сайт для рекламирования курса по сбору вечеринок',
      en: 'Promotional website for a party planning course',
    },
    thumbnail: '3.jpg',
    images: ['3-1.jpg', '3-2.jpg'],
    context: {
      ru: 'Промо-сайт курса be-in-touch для презентации программы, преимуществ и воронки регистрации участников.',
      en: 'Promo landing page for the be-in-touch course with a clear value proposition and enrollment flow.',
    },
    highlights: {
      ru: [
        'Структура лендинга под продажу образовательного продукта',
        'Сильные CTA-блоки для записи на курс',
        'Оптимизированный flow от первого экрана до формы заявки',
      ],
      en: [
        'Landing structure optimized for educational product sales',
        'Strong call-to-action blocks for registration',
        'Optimized path from hero section to lead form',
      ],
    },
    stack: ['React', 'TypeScript', 'Landing Page', 'Conversion Design', 'Responsive UI'],
  },
  {
    id: 4,
    slug: 'dreams-come-true',
    title: { ru: 'Dreams come true', en: 'Dreams come true' },
    description: {
      ru: 'Сервис для запоминания и архивирования снов',
      en: 'Service for remembering and archiving dreams',
    },
    thumbnail: '4.png',
    images: ['4-1.jpg'],
    context: {
      ru: 'Dreams come true — продуктовый сервис для фиксации, систематизации и архивирования пользовательских снов.',
      en: 'Dreams come true is a product service for logging, organizing, and archiving personal dreams.',
    },
    highlights: {
      ru: [
        'Фокус на персональном контенте и удобстве ведения записей',
        'Минималистичный интерфейс для регулярного использования',
        'Мобильный UX как основной сценарий взаимодействия',
      ],
      en: [
        'Focused on personal content and easy journaling flow',
        'Minimal interface for daily use',
        'Mobile-first interaction model',
      ],
    },
    stack: ['React', 'TypeScript', 'UI Design', 'Responsive UI', 'Figma'],
  },
  {
    id: 5,
    slug: 'tomkot',
    title: { ru: 'TomKot', en: 'TomKot' },
    description: {
      ru: 'Сайт-витрина для продажи родентицидных препаратов',
      en: 'Showcase website for rodenticide product sales',
    },
    thumbnail: '5.jpg',
    images: ['5-1.jpg'],
    siteUrl: 'https://tomkot.ru/',
    context: {
      ru: 'TomKot — коммерческая витрина продукции для борьбы с грызунами: ассортимент приманок, фасовки, вкусы, доставка и контакты продаж.',
      en: 'TomKot is a commercial showcase for anti-rodent products: assortments, packaging, flavors, shipping, and sales contacts.',
    },
    highlights: {
      ru: [
        'Каталог товарных позиций и рекомендованные продукты',
        'Подача преимуществ бренда и условий логистики по СНГ',
        'Простая форма заявки и быстрый контакт с менеджером',
      ],
      en: [
        'Product catalog with highlighted recommendations',
        'Clear brand value and logistics details',
        'Lead form for quick contact with sales',
      ],
    },
    stack: ['HTML5', 'CSS3', 'JavaScript', 'CMS WordPress', 'SEO Optimization', 'Yandex Metrica'],
  },
  {
    id: 6,
    slug: 'kkm',
    title: { ru: 'KKM', en: 'KKM' },
    description: {
      ru: 'Корпоративный сайт для ГК ККМ',
      en: 'Corporate website for KKM Group',
    },
    thumbnail: '6.jpg',
    images: ['6-1.jpg'],
    siteUrl: 'https://tosolnn.ru/',
    context: {
      ru: 'Корпоративный сайт ГК ККМ: презентация производственного холдинга, ассортимента автохимии и связанных направлений бизнеса.',
      en: 'Corporate website for KKM Group that presents manufacturing capabilities, product lines, and ecosystem brands.',
    },
    highlights: {
      ru: [
        'Разделы каталога и карточки продуктовых направлений',
        'Блоки о производстве, сертификации, логистике и географии поставок',
        'Корпоративная навигация по брендам экосистемы ГК ККМ',
      ],
      en: [
        'Catalog sections and product-direction cards',
        'Manufacturing, certification, logistics, and supply geography blocks',
        'Corporate navigation across KKM ecosystem brands',
      ],
    },
    stack: ['HTML5', 'CSS3', 'JavaScript', 'CMS Joomla', 'SEO Optimization', 'Responsive Web Design'],
  },
  {
    id: 7,
    slug: 'vip-tosol',
    title: { ru: 'VIP Tosol', en: 'VIP Tosol' },
    description: {
      ru: 'Лендинг для продажи автомобильных масел',
      en: 'Landing page for automotive oil sales',
    },
    thumbnail: '7.jpg',
    images: ['7-1.jpg'],
    siteUrl: 'https://viptosol.ru/',
    context: {
      ru: 'VIP Tosol (VIGOR) — лендинг линейки моторных масел с акцентом на преимущества продукта, ассортимент фасовок и дилерскую сеть.',
      en: 'VIP Tosol (VIGOR) is a product landing page focused on oil benefits, package options, and dealer communication.',
    },
    highlights: {
      ru: [
        'Секция преимуществ и продуктовых аргументов',
        'Блоки фасовок и ассортиментных позиций',
        'Формы запроса прайса и контактные точки продаж',
      ],
      en: [
        'Feature section with clear product arguments',
        'Packaging and assortment blocks',
        'Price request forms and sales contact points',
      ],
    },
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Landing Page', 'Lead Generation', 'Responsive Web Design'],
  },
  {
    id: 8,
    slug: 'lad-nn',
    title: { ru: 'LAD-NN', en: 'LAD-NN' },
    description: {
      ru: 'Сайт-витрина для показа ассортимента товаров против вредителей',
      en: 'Showcase website for anti-pest product ranges',
    },
    thumbnail: '8.jpg',
    images: ['8-1.jpg'],
    siteUrl: 'https://lad-nn.ru/',
    context: {
      ru: 'LAD-NN — витрина продукции компании ЛАД, направленная на показ ассортимента решений против вредителей и сопутствующих категорий.',
      en: 'LAD-NN is a product showcase for anti-pest solutions with clear category navigation and contact points.',
    },
    highlights: {
      ru: [
        'Структурированный каталог товарных направлений',
        'Подача коммерческих преимуществ и контактной информации',
        'Интерфейс, ориентированный на B2B/B2C входящие заявки',
      ],
      en: [
        'Structured product category catalog',
        'Commercial benefits and contacts presented clearly',
        'Interface focused on B2B/B2C lead capture',
      ],
    },
    stack: ['HTML5', 'CSS3', 'JavaScript', 'CMS Joomla', 'Catalog UX', 'SEO Optimization'],
  },
  {
    id: 9,
    slug: 'poison-nn',
    title: { ru: 'Poison-nn', en: 'Poison-nn' },
    description: {
      ru: 'Корпоративный сайт для компании, специализированной на производстве и продаже средств против вредителей',
      en: 'Corporate website for a company producing and selling anti-pest products',
    },
    thumbnail: '9.jpg',
    images: ['9-1.jpg', '9-2.jpg'],
    siteUrl: 'https://poison-nn.ru/',
    context: {
      ru: 'Poison-nn — корпоративный сайт ООО "ЛАД" с каталогом продукции, прайс-структурой, новостями и блоками консультаций.',
      en: 'Poison-nn is the corporate website of L.A.D. company with product catalog, pricing structure, news, and consultation blocks.',
    },
    highlights: {
      ru: [
        'Категоризация продукции: родентициды, инсектициды, удобрения, автохимия',
        'Табличные цены и информационные блоки для отделов продаж',
        'Контентные блоки "О компании", новости и формы обратной связи',
      ],
      en: [
        'Product categorization: rodenticides, insecticides, fertilizers, auto fluids',
        'Tabular prices and sales-focused information blocks',
        'Company story, news feed, and contact forms',
      ],
    },
    stack: ['HTML5', 'CSS3', 'JavaScript', 'CMS Joomla', 'Content Management', 'Yandex Metrica'],
  },
  {
    id: 10,
    slug: 'eco-teplonositel-rf',
    title: { ru: 'ECOteplonositelRF', en: 'ECOteplonositelRF' },
    description: {
      ru: 'Справочный сайт для тосольной продукции',
      en: 'Informational website for heat carrier products',
    },
    thumbnail: '10.jpg',
    images: ['10-1.jpg', '10-2.jpg', '10-3.jpg', '10-4.jpg', '10-5.jpg', '10-6.jpg'],
    siteUrl: 'http://экотеплоноситель.рф/',
    context: {
      ru: 'ECOteplonositelRF — сайт направления теплоносителей с каталогом, дилерским блоком, географией поставок и формами заявок.',
      en: 'ECOteplonositelRF is an informational portal for heat carriers with catalog, dealer section, and request forms.',
    },
    highlights: {
      ru: [
        'Справочная структура по линейкам теплоносителей',
        'Контактные формы для запроса и консультации',
        'Информационные блоки о качестве, профессионализме и скорости обслуживания',
      ],
      en: [
        'Reference structure for heat carrier product lines',
        'Contact forms for inquiries and consultation',
        'Information blocks about quality and service speed',
      ],
    },
    stack: ['HTML5', 'CSS3', 'JavaScript', 'CMS Joomla', 'Informational Architecture', 'Responsive Web Design'],
  },
  {
    id: 11,
    slug: 'minagro',
    title: { ru: 'MINAGRO', en: 'MINAGRO' },
    description: {
      ru: 'Корпоративный сайт для компании-производителя и продавца минеральных удобрений',
      en: 'Corporate website for a mineral fertilizer manufacturer and supplier',
    },
    thumbnail: '11.jpg',
    images: ['11-1.jpg'],
    siteUrl: 'https://ooominagro.ru/',
    context: {
      ru: 'MINAGRO — корпоративная площадка производителя минеральных удобрений с презентацией продукции и условиями сотрудничества.',
      en: 'MINAGRO is a corporate website for a mineral fertilizer producer with product and partnership presentation.',
    },
    highlights: {
      ru: [
        'Подача продуктовой линейки и производственных возможностей',
        'Структура корпоративного контента и коммерческих разделов',
        'Интерфейс для входящих заявок и партнёрской коммуникации',
      ],
      en: [
        'Product line and manufacturing capabilities presentation',
        'Corporate content and commercial section structure',
        'Lead-oriented interface for partner communication',
      ],
    },
    stack: ['HTML5', 'CSS3', 'JavaScript', 'CMS Joomla', 'B2B Website', 'SEO Optimization'],
  },
  {
    id: 12,
    slug: 'kemtech',
    title: { ru: 'KEMTECH', en: 'KEMTECH' },
    description: {
      ru: 'Корпоративный сайт для компании-производителя и продавца бытовой и косметической химии',
      en: 'Corporate website for a household and cosmetic chemistry manufacturer',
    },
    thumbnail: '12.jpg',
    images: ['12-1.jpg', '12-2.jpg', '12-3.jpg'],
    siteUrl: 'https://kemtech.ru/',
    context: {
      ru: 'KEMTECH — корпоративный сайт производителя профессиональной химии с каталогом, спецпредложениями и производственным позиционированием.',
      en: 'KEMTECH is a corporate website for a professional chemistry manufacturer with catalog, offers, and production positioning.',
    },
    highlights: {
      ru: [
        'Многоуровневый каталог (автохимия, клининг, бытовая химия и др.)',
        'Подача преимуществ: лаборатория, рецептуры, логистика, сертификаты',
        'Секции контрактного производства и формы заявок для клиентов',
      ],
      en: [
        'Multi-level catalog (auto chemicals, cleaning, household products, etc.)',
        'Advantages: lab, formulations, logistics, certifications',
        'Contract manufacturing sections and lead forms',
      ],
    },
    stack: ['HTML5', 'CSS3', 'JavaScript', 'CMS Joomla', 'Catalog UX', 'Corporate Content'],
  },
  {
    id: 13,
    slug: 'kgranit',
    title: { ru: 'KGRANIT', en: 'KGRANIT' },
    description: {
      ru: 'Корпоративный сайт для компании-производителя и продавца изделий из натурального камня',
      en: 'Corporate website for a manufacturer and supplier of natural stone products',
    },
    thumbnail: '13.jpg',
    images: ['13-1.jpg'],
    siteUrl: 'https://kgranit52.ru/',
    context: {
      ru: 'KGRANIT — корпоративный сайт гранитных мастерских с каталогом изделий, услуг и кейсами выполненных работ.',
      en: 'KGRANIT is a corporate site for granite workshops with product catalog, services, and completed work examples.',
    },
    highlights: {
      ru: [
        'Каталог каменной продукции и заказных позиций',
        'Блоки преимуществ производства и географии поставок',
        'Формы расчета/заявки для клиентов',
      ],
      en: [
        'Stone product catalog and custom order positions',
        'Production advantages and supply geography blocks',
        'Estimation and inquiry forms for clients',
      ],
    },
    stack: ['HTML5', 'CSS3', 'JavaScript', 'CMS Joomla', 'Visual Showcase', 'Responsive Web Design'],
  },
  {
    id: 14,
    slug: 'desinfector',
    title: { ru: 'DESINFECTOR', en: 'DESINFECTOR' },
    description: {
      ru: 'Корпоративный сайт для компании, специализированной на борьбе с вредителями и микроорганизмами',
      en: 'Corporate website for a pest and microorganism control service company',
    },
    thumbnail: '14.jpg',
    images: ['14-1.jpg'],
    siteUrl: 'https://desinfectornn.ru/',
    context: {
      ru: 'DESINFECTOR — сайт сервиса дезинфекции, дезинсекции и дератизации с описанием услуг, преимуществ и отзывов клиентов.',
      en: 'DESINFECTOR is a service website for disinfection, disinsection, and deratization with offers, benefits, and client reviews.',
    },
    highlights: {
      ru: [
        'Подробная презентация сервисов и зон применения',
        'Акцент на гарантиях, скидках и круглосуточном формате работы',
        'Контактные и заявочные блоки для быстрого обращения',
      ],
      en: [
        'Detailed service presentation and use cases',
        'Strong emphasis on guarantees, discounts, and 24/7 operation',
        'Fast contact and callback request blocks',
      ],
    },
    stack: ['HTML5', 'CSS3', 'JavaScript', 'CMS Joomla', 'Service Landing', 'Lead Generation'],
  },
]
