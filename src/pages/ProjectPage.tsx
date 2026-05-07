import { Link, useParams } from 'react-router-dom'
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
        <section className="content-section project-template">
          <h1>{t.notFound}</h1>
          <Link className="button button-secondary" to="/">
            {t.backToHome}
          </Link>
        </section>
      </div>
    )
  }

  return (
    <div className="page-shell">
      <section className="content-section project-template">
        <Link className="button button-secondary back-link" to="/">
          {t.toHome}
        </Link>
        <p className="project-label">
          {t.projectLabel} #{project.id}
        </p>
        <h1>{tp(project.title[language])}</h1>
        <p>{tp(project.description[language])}</p>

        {project.siteUrl ? (
          <a className="button button-primary project-site-link" href={project.siteUrl} target="_blank" rel="noreferrer">
            {t.openSite}
          </a>
        ) : null}

        <div className="project-placeholder">
          <h2>{t.context}</h2>
          <p>{tp(project.context[language])}</p>
          <h2>{t.highlights}</h2>
          <ul>
            {project.highlights[language].map((item) => (
              <li key={item}>{tp(item)}</li>
            ))}
          </ul>
          <h2>{t.stack}</h2>
          <div className="chips">
            {project.stack.map((tech) => (
              <span key={tech} className="chip">
                {tp(tech)}
              </span>
            ))}
          </div>
        </div>

        <section className="macbook-showcase" aria-label={t.macbookAria}>
          <div className="macbook-shell">
            <img className="macbook-frame" src={`${import.meta.env.BASE_URL}works/macbook.png`} alt="" />
            <div className="macbook-viewport">
              <img
                src={`${import.meta.env.BASE_URL}works/project-${project.id}/${project.images[0]}`}
                alt={`${tp(project.title[language])} first screen`}
              />
            </div>
          </div>
        </section>

        <section className="project-gallery">
          {project.images.map((imageName) => (
            <img
              key={imageName}
              src={`${import.meta.env.BASE_URL}works/project-${project.id}/${imageName}`}
              alt={`${tp(project.title[language])} ${imageName}`}
              loading="lazy"
            />
          ))}
        </section>
      </section>
    </div>
  )
}
