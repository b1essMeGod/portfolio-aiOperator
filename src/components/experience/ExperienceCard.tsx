import { motion } from 'framer-motion'
import type { ExperienceItem, Language } from '../../i18n/content'
import { useReducedMotionConfig } from '../../motion/useReducedMotionConfig'
import { experienceCardItem } from '../../motion/variants'
import Chip from '../ui/Chip'
import ExperienceSection from './ExperienceSection'

type ExperienceCardProps = {
  item: ExperienceItem
  index: number
  language: Language
  renderText: (text: string) => string
}

const labels = {
  ru: { expand: 'ещё', collapse: 'Свернуть' },
  en: { expand: 'more', collapse: 'Collapse' },
} as const

export default function ExperienceCard({ item, index, language, renderText }: ExperienceCardProps) {
  const t = labels[language]
  const motionConfig = useReducedMotionConfig()
  const variants = motionConfig.getVariants(experienceCardItem(index))

  return (
    <motion.article className="experience-card" variants={variants} initial="hidden" whileInView="visible" viewport={motionConfig.viewport}>
      <header className="experience-card__header">
        <p className="experience-card__period">{renderText(item.period)}</p>
        <h3>{renderText(item.role)}</h3>
        <p className="experience-card__company">{renderText(item.company)}</p>
        <p className="experience-card__summary">{renderText(item.summary)}</p>
      </header>

      <div className="experience-card__sections">
        {item.sections.map((section, sectionIndex) => (
          <ExperienceSection
            key={section.title}
            section={section}
            index={sectionIndex}
            expandLabel={t.expand}
            collapseLabel={t.collapse}
            renderText={renderText}
          />
        ))}
      </div>

      <footer className="experience-card__stack">
        {item.stack.map((tech, techIndex) => (
          <Chip key={tech} tint={techIndex}>
            {tech}
          </Chip>
        ))}
      </footer>
    </motion.article>
  )
}
