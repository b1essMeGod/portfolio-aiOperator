import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import avatarImage from '../assets/avatar.png'
import { projects } from '../data/projects'
import { content, type Language } from '../i18n/content'
import { applyTypographer } from '../utils/typography'

type Theme = 'dark' | 'light'

const TELEGRAM_URL = 'https://t.me/B1essMeGod'
const EMAIL = 'ytsoy70@gmail.com'
const PHONE = '+7 909 297 97 67'
const RESUME_FILE = `${import.meta.env.BASE_URL}resume.pdf`

type HomePageProps = {
  language: Language
  onLanguageChange: (language: Language) => void
  theme: Theme
  onThemeToggle: () => void
}

export default function HomePage({ language, onLanguageChange, theme, onThemeToggle }: HomePageProps) {
  const t = useMemo(() => content[language], [language])
  const tp = (text: string) => applyTypographer(text, language)
  const [aboutExpanded, setAboutExpanded] = useState(false)
  const [expandedExperience, setExpandedExperience] = useState<Record<number, boolean>>({})

  const toggleLabel = {
    show: language === 'ru' ? 'Показать полностью' : 'Show full text',
    hide: language === 'ru' ? 'Свернуть' : 'Collapse',
  }

  return (
    <div className="page-shell">
      <header className="site-header">
        <a className="brand" href="#top">
          Резюме кандидата
        </a>
        <nav className="site-nav">
          <a href="#about">{t.nav.about}</a>
          <a href="#experience">{t.nav.experience}</a>
          <a href="#skills">{t.nav.skills}</a>
          <a href="#works">{t.nav.works}</a>
          <a href="#contacts">{t.nav.contacts}</a>
        </nav>
        <div className="controls">
          <label className="language-control">
            <span>{t.controls.language}</span>
            <div className="language-toggle" role="radiogroup" aria-label={t.controls.language}>
              <button
                type="button"
                role="radio"
                aria-checked={language === 'ru'}
                className={language === 'ru' ? 'is-active' : ''}
                onClick={() => onLanguageChange('ru')}
              >
                RU
              </button>
              <button
                type="button"
                role="radio"
                aria-checked={language === 'en'}
                className={language === 'en' ? 'is-active' : ''}
                onClick={() => onLanguageChange('en')}
              >
                EN
              </button>
            </div>
          </label>
          <button type="button" className="theme-button" onClick={onThemeToggle} aria-label={t.controls.theme}>
            {theme === 'dark' ? t.controls.dark : t.controls.light}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-text">
            <p className="hero-role">{tp(t.hero.role)}</p>
            <h1>{tp(t.hero.name)}</h1>
            <p>{tp(t.hero.summary)}</p>
            <div className="hero-actions">
              <a className="button button-primary" href={RESUME_FILE} download="Цой Юрий Викторович.pdf">
                {t.hero.primaryCta}
              </a>
              <a className="button button-secondary" href="#contacts">
                {t.hero.secondaryCta}
              </a>
            </div>
          </div>
          <div className="hero-image-wrap">
            <img src={avatarImage} alt={t.hero.name} />
          </div>
        </section>

        <section id="about" className="content-section">
          <h2>{t.about.title}</h2>
          <div className={`about-grid collapsible ${aboutExpanded ? 'is-expanded' : 'is-collapsed'}`}>
            {t.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{tp(paragraph)}</p>
            ))}
          </div>
          <button type="button" className="button button-secondary collapse-toggle" onClick={() => setAboutExpanded((prev) => !prev)}>
            {aboutExpanded ? toggleLabel.hide : toggleLabel.show}
          </button>
        </section>

        <section id="experience" className="content-section">
          <h2>{t.experience.title}</h2>
          <div className="timeline">
            {t.experience.items.map((item, itemIndex) => (
              <article key={item.company + item.period} className="timeline-item">
                <p className="timeline-period">{item.period}</p>
                <h3>{tp(item.role)}</h3>
                <p className="timeline-company">{tp(item.company)}</p>
                <div className={`timeline-text collapsible ${expandedExperience[itemIndex] ? 'is-expanded' : 'is-collapsed'}`}>
                  {item.fullText.map((line, index) => (
                    <p key={`${item.company}-${index}`}>{tp(line)}</p>
                  ))}
                </div>
                <button
                  type="button"
                  className="button button-secondary collapse-toggle"
                  onClick={() =>
                    setExpandedExperience((prev) => ({
                      ...prev,
                      [itemIndex]: !prev[itemIndex],
                    }))
                  }
                >
                  {expandedExperience[itemIndex] ? toggleLabel.hide : toggleLabel.show}
                </button>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="content-section">
          <h2>{t.skills.title}</h2>
          <div className="skills-grid">
            {t.skills.groups.map((group) => (
              <article key={group.title} className="skill-card">
                <h3>{group.title}</h3>
                <div className="chips">
                  {group.items.map((skill) => (
                    <span key={skill} className="chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="works" className="content-section">
          <h2>{t.nav.works}</h2>
          <div className="works-grid">
            {projects.map((project) => (
              <article key={project.id} className="work-card">
                <Link className="work-link" to={`/projects/${project.slug}`}>
                  <img
                    src={`${import.meta.env.BASE_URL}works/projects-thumbnails/${project.thumbnail}`}
                    alt={project.title[language]}
                    loading="lazy"
                  />
                  <div className="work-overlay">
                    <p>{tp(project.description[language])}</p>
                  </div>
                </Link>
                <h3>{tp(project.title[language])}</h3>
              </article>
            ))}
          </div>
        </section>

        <section id="contacts" className="content-section contact-section">
          <h2>{t.contacts.title}</h2>
          <p>{tp(t.contacts.intro)}</p>
          <div className="contact-list">
            <p>
              <span>{t.contacts.telegram}:</span>{' '}
              <a href={TELEGRAM_URL} target="_blank" rel="noreferrer">
                @B1essMeGod
              </a>
            </p>
            <p>
              <span>{t.contacts.email}:</span> <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </p>
            <p>
              <span>{t.contacts.phone}:</span> <a href={`tel:${PHONE.replaceAll(' ', '')}`}>{PHONE}</a>
            </p>
          </div>
        </section>
      </main>

      <footer>{tp(t.footer)}</footer>
    </div>
  )
}
