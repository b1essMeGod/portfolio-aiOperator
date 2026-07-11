export type Language = 'ru' | 'en'

export type ExperienceSection = {
  title: string
  highlights: string[]
}

export type ExperienceItem = {
  period: string
  role: string
  company: string
  summary: string
  sections: ExperienceSection[]
  stack: string[]
}

export type AboutTabBlock =
  | { kind: 'lead'; text: string }
  | { kind: 'card'; title: string; text: string; url?: string }
  | { kind: 'group'; title: string; text: string }
  | { kind: 'bullet'; text: string }

export type AboutTab = {
  id: string
  label: string
  blocks: AboutTabBlock[]
}

export type SkillGroup = {
  title: string
  items: string[]
}

export type HeroStat = {
  value: string
  label: string
}

export type LocalizedContent = {
  nav: {
    about: string
    experience: string
    skills: string
    works: string
    contacts: string
  }
  navShort: {
    about: string
    experience: string
    skills: string
    works: string
    contacts: string
  }
  hero: {
    name: string
    role: string
    summary: string
    primaryCta: string
    secondaryCta: string
    stats: HeroStat[]
  }
  about: {
    title: string
    tabs: AboutTab[]
  }
  experience: {
    title: string
    items: ExperienceItem[]
  }
  skills: {
    title: string
    groups: SkillGroup[]
  }
  contacts: {
    title: string
    intro: string
    telegram: string
    email: string
    phone: string
  }
  footer: string
  controls: {
    theme: string
    language: string
    dark: string
    light: string
  }
  brand: string
}
