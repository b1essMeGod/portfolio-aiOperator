import { useParams } from 'react-router-dom'
import MacbookShowcase from '../components/motion/MacbookShowcase'
import Reveal from '../components/motion/Reveal'
import { StaggerGroup, StaggerItem } from '../components/motion/Stagger'
import Button from '../components/ui/Button'
import Chip from '../components/ui/Chip'
import { projects } from '../data/projects'
import { type Language } from '../i18n/content'
import { applyTypographer } from '../utils/typography'

type ProjectPageProps = {
  language: Language
}

const texts = {
  ru: {
    notFound: 'Проект не найден',
    backToHome: 'Вернуться на главную',
    toHome: 'На главную',
    projectLabel: 'Проект',
    openSite: 'Открыть сайт проекта',
    context: 'Контекст проекта',
    highlights: 'Ключевые акценты',
    stack: 'Стек и инструменты',
    macbookAria: 'Прокрутка первого экрана проекта в макбуке',
  },
  en: {
    notFound: 'Project not found',
    backToHome: 'Back to home',
    toHome: 'Home',
    projectLabel: 'Project',
    openSite: 'Open project website',
    context: 'Project context',
    highlights: 'Key highlights',
    stack: 'Stack and tools',
    macbookAria: 'Scrollable first project screen in MacBook frame',
  },
} as const

export default function ProjectPage({ language }: ProjectPageProps) {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)
  const t = texts[language]
  const tp = (text: string) => applyTypographer(text, language)

  if (!project) {
    return (
      <div className="page-shell">
        <Reveal as="section" className="content-section project-template" blur={false}>
          <StaggerGroup mode="mount" delayChildren={0.05}>
            <StaggerItem>
              <h1>{t.notFound}</h1>
            </StaggerItem>
            <StaggerItem>
              <Button as="link" variant="secondary" to="/">
                {t.backToHome}
              </Button>
            </StaggerItem>
          </StaggerGroup>
        </Reveal>
      </div>
    )
  }

  return (
    <div className="page-shell">
      <section className="content-section project-template">
        <StaggerGroup mode="mount" delayChildren={0.06}>
          <StaggerItem>
            <Button as="link" variant="secondary" className="back-link" to="/">
              {t.toHome}
            </Button>
          </StaggerItem>
          <StaggerItem>
            <p className="project-label">
              {t.projectLabel} #{project.id}
            </p>
          </StaggerItem>
          <StaggerItem>
            <h1>{tp(project.title[language])}</h1>
          </StaggerItem>
          <StaggerItem>
            <p>{tp(project.description[language])}</p>
          </StaggerItem>
        </StaggerGroup>

        {project.siteUrl ? (
          <Reveal delay={0.1}>
            <Button as="a" variant="primary" className="project-site-link" href={project.siteUrl} target="_blank" rel="noreferrer">
              {t.openSite}
            </Button>
          </Reveal>
        ) : null}

        <Reveal className="project-placeholder">
          <h2>{t.context}</h2>
          <p>{tp(project.context[language])}</p>
          <h2>{t.highlights}</h2>
          <StaggerGroup as="ul" className="project-highlights-list" staggerChildren={0.05} delayChildren={0.08}>
            {project.highlights[language].map((item) => (
              <StaggerItem key={item} as="li">
                {tp(item)}
              </StaggerItem>
            ))}
          </StaggerGroup>
          <h2>{t.stack}</h2>
          <StaggerGroup className="chips" staggerChildren={0.04} delayChildren={0.06}>
            {project.stack.map((tech, index) => (
              <StaggerItem key={tech} as="span">
                <Chip tint={index}>{tp(tech)}</Chip>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </Reveal>

        <MacbookShowcase
          projectId={project.id}
          imageName={project.images[0]}
          title={tp(project.title[language])}
          ariaLabel={t.macbookAria}
        />

        {project.images.length > 1 ? (
          <section className="project-gallery">
            {project.images.slice(1).map((imageName) => (
              <img
                key={imageName}
                src={`${import.meta.env.BASE_URL}works/project-${project.id}/${imageName}`}
                alt={`${tp(project.title[language])} ${imageName}`}
                loading="lazy"
                draggable={false}
              />
            ))}
          </section>
        ) : null}
      </section>
    </div>
  )
}
