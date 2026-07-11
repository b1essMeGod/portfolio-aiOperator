import { useCallback, useMemo } from 'react'
import { Link } from 'react-router-dom'
import avatarImage from '../assets/avatar.png'
import ExperienceCard from '../components/experience/ExperienceCard'
import { LanguageSwap } from '../components/motion/LanguageSwap'
import Reveal from '../components/motion/Reveal'
import { StaggerGroup, StaggerItem } from '../components/motion/Stagger'
import Button from '../components/ui/Button'
import Chip from '../components/ui/Chip'
import SegmentedControl from '../components/ui/SegmentedControl'
import TabPanel from '../components/ui/TabPanel'
import ThemeSwitch from '../components/ui/ThemeSwitch'
import { projects } from '../data/projects'
import { useHeaderScroll, useScrollSpy } from '../hooks/useScrollSpy'
import { useMobileNavSync } from '../hooks/useMobileNavSync'
import { content, type Language } from '../i18n/content'
import { applyTypographer } from '../utils/typography'

type Theme = 'dark' | 'light'

const TELEGRAM_URL = 'https://t.me/B1essMeGod'
const EMAIL = 'ytsoy70@gmail.com'
const PHONE = '+7 909 297 97 67'
const RESUME_FILE = `${import.meta.env.BASE_URL}resume.pdf`

const NAV_SECTIONS = ['about', 'experience', 'skills', 'works', 'contacts'] as const

type HomePageProps = {
  language: Language
  onLanguageChange: (language: Language) => void
  theme: Theme
  onThemeToggle: () => void
}

export default function HomePage({ language, onLanguageChange, theme, onThemeToggle }: HomePageProps) {
  const t = useMemo(() => content[language], [language])
  const tp = (text: string) => applyTypographer(text, language)
  const isHeaderScrolled = useHeaderScroll()
  const activeSection = useScrollSpy([...NAV_SECTIONS])

  const mobileNavSections = useMemo(
    () =>
      NAV_SECTIONS.map((sectionId) => ({
        id: sectionId,
        label: sectionId === 'works' ? t.navShort.works : t.navShort[sectionId as keyof typeof t.navShort],
        ariaLabel: sectionId === 'works' ? t.nav.works : t.nav[sectionId as keyof typeof t.nav],
      })),
    [t],
  )

  const handleSectionNavigate = useCallback((sectionId: string, behavior: ScrollBehavior = 'smooth') => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior, block: 'start' })
  }, [])

  const { viewportRef, navigateFromNav, activeNavId } = useMobileNavSync(
    [...NAV_SECTIONS],
    activeSection,
    handleSectionNavigate,
  )

  return (
    <div className="page-shell">
      <header className={`site-header${isHeaderScrolled ? ' is-scrolled' : ''}`}>
        <a className="brand" href="#top">
          {t.brand}
        </a>
        <nav className="site-nav site-nav--desktop" aria-label={language === 'ru' ? 'Навигация по разделам' : 'Section navigation'}>
          {NAV_SECTIONS.map((sectionId) => {
            const label =
              sectionId === 'works'
                ? t.nav.works
                : t.nav[sectionId as keyof typeof t.nav]
            return (
              <a
                key={sectionId}
                href={`#${sectionId}`}
                className={activeSection === sectionId ? 'is-active' : ''}
              >
                {label}
              </a>
            )
          })}
        </nav>
        <nav
          className="site-nav-mobile"
          aria-label={language === 'ru' ? 'Навигация по разделам' : 'Section navigation'}
        >
          <div className="site-nav-mobile__viewport" ref={viewportRef}>
            <div className="site-nav-mobile__track">
              <span className="site-nav-mobile__edge" aria-hidden="true" />
              {mobileNavSections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  data-nav-id={section.id}
                  data-active={activeNavId === section.id ? 'true' : undefined}
                  aria-current={activeNavId === section.id ? 'true' : undefined}
                  className="site-nav-mobile__item"
                  aria-label={section.ariaLabel}
                  onClick={(event) => {
                    event.preventDefault()
                    navigateFromNav(section.id)
                  }}
                >
                  {section.label}
                </a>
              ))}
              <span className="site-nav-mobile__edge" aria-hidden="true" />
            </div>
          </div>
        </nav>
        <div className="controls">
          <label className="language-control">
            <span>{t.controls.language}</span>
            <SegmentedControl
              ariaLabel={t.controls.language}
              value={language}
              onChange={onLanguageChange}
              options={[
                { value: 'ru', label: 'RU' },
                { value: 'en', label: 'EN' },
              ]}
            />
          </label>
          <ThemeSwitch isDark={theme === 'dark'} onToggle={onThemeToggle} ariaLabel={t.controls.theme} />
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-grid">
            <StaggerGroup className="hero-text" mode="mount" delayChildren={0.08}>
              <StaggerItem>
                <Chip variant="badge">{tp(t.hero.role)}</Chip>
              </StaggerItem>
              <StaggerItem>
                <h1>{tp(t.hero.name)}</h1>
              </StaggerItem>
              <StaggerItem>
                <p>{tp(t.hero.summary)}</p>
              </StaggerItem>
              <StaggerItem>
                <div className="hero-stats">
                  {t.hero.stats.map((stat) => (
                    <div key={stat.label} className="hero-stat">
                      <span className="hero-stat__value">{stat.value}</span>
                      <span className="hero-stat__label">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="hero-actions">
                  <Button as="a" variant="primary" href={RESUME_FILE} download="Цой Юрий Викторович.pdf">
                    {t.hero.primaryCta}
                  </Button>
                  <Button as="a" variant="secondary" href="#contacts">
                    {t.hero.secondaryCta}
                  </Button>
                </div>
              </StaggerItem>
            </StaggerGroup>
            <StaggerGroup mode="mount" delayChildren={0.28}>
              <StaggerItem className="hero-image-wrap">
                <div className="hero-avatar-ring">
                  <div className="hero-avatar-glass">
                    <img src={avatarImage} alt={t.hero.name} draggable={false} />
                  </div>
                </div>
              </StaggerItem>
            </StaggerGroup>
          </div>
        </section>

        <Reveal as="section" id="about" className="content-section" blur={false}>
          <LanguageSwap language={language}>
            <h2>{t.about.title}</h2>
            <TabPanel tabs={t.about.tabs} renderText={tp} />
          </LanguageSwap>
        </Reveal>

        <Reveal as="section" id="experience" className="content-section" blur={false}>
          <LanguageSwap language={language}>
            <h2>{t.experience.title}</h2>
            <div className="experience-timeline">
              {t.experience.items.map((item, index) => (
                <div key={item.company + item.period} className="experience-timeline__entry">
                  <div className="experience-timeline__track" aria-hidden="true">
                    <span className="experience-timeline__dot" />
                  </div>
                  <ExperienceCard
                    item={item}
                    index={index}
                    language={language}
                    renderText={tp}
                  />
                </div>
              ))}
            </div>
          </LanguageSwap>
        </Reveal>

        <Reveal as="section" id="skills" className="content-section" blur={false}>
          <LanguageSwap language={language}>
            <h2>{t.skills.title}</h2>
            <StaggerGroup className="skills-grid">
              {t.skills.groups.map((group) => (
                <StaggerItem key={group.title} as="article" className="skill-card">
                  <h3>{group.title}</h3>
                  <div className="chips">
                    {group.items.map((skill, index) => (
                      <Chip key={skill} tint={index}>
                        {skill}
                      </Chip>
                    ))}
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </LanguageSwap>
        </Reveal>

        <Reveal as="section" id="works" className="content-section" blur={false}>
          <LanguageSwap language={language}>
            <h2>{t.nav.works}</h2>
          </LanguageSwap>
          <StaggerGroup className="works-grid" staggerChildren={0.06}>
            {projects.map((project) => (
              <article key={project.id} className="work-card">
                <Link className="work-link" to={`/projects/${project.slug}`}>
                  <img
                    src={`${import.meta.env.BASE_URL}works/projects-thumbnails/${project.thumbnail}`}
                    alt={project.title[language]}
                    loading="lazy"
                    draggable={false}
                  />
                  <div className="work-overlay">
                    <p>{tp(project.description[language])}</p>
                  </div>
                </Link>
                <h3>{tp(project.title[language])}</h3>
              </article>
            ))}
          </StaggerGroup>
        </Reveal>

        <Reveal as="section" id="contacts" className="content-section contact-section" blur={false}>
          <LanguageSwap language={language}>
            <h2>{t.contacts.title}</h2>
            <p>{tp(t.contacts.intro)}</p>
            <div className="contact-list">
              <p>
                <span>{t.contacts.telegram}:</span>{' '}
                <Button as="a" variant="ghost" href={TELEGRAM_URL} target="_blank" rel="noreferrer">
                  @B1essMeGod
                </Button>
              </p>
              <p>
                <span>{t.contacts.email}:</span>{' '}
                <Button as="a" variant="ghost" href={`mailto:${EMAIL}`}>
                  {EMAIL}
                </Button>
              </p>
              <p>
                <span>{t.contacts.phone}:</span>{' '}
                <Button as="a" variant="ghost" href={`tel:${PHONE.replaceAll(' ', '')}`}>
                  {PHONE}
                </Button>
              </p>
            </div>
          </LanguageSwap>
        </Reveal>
      </main>

      <Reveal as="footer" blur={false}>{tp(t.footer)}</Reveal>
    </div>
  )
}
