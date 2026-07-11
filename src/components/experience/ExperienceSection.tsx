import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import type { ExperienceSection as ExperienceSectionData } from '../../i18n/types'
import { useReducedMotionConfig } from '../../motion/useReducedMotionConfig'
import { experienceSectionItem, listItem } from '../../motion/variants'
import Chip from '../ui/Chip'

type ExperienceSectionProps = {
  section: ExperienceSectionData
  index: number
  expandLabel: string
  collapseLabel: string
  renderText: (text: string) => string
}

const VISIBLE_COUNT = 2

export default function ExperienceSection({
  section,
  index,
  expandLabel,
  collapseLabel,
  renderText,
}: ExperienceSectionProps) {
  const [expanded, setExpanded] = useState(false)
  const motionConfig = useReducedMotionConfig()
  const sectionVariants = motionConfig.getVariants(experienceSectionItem(index))
  const itemVariants = motionConfig.getVariants(listItem)
  const hasMore = section.highlights.length > VISIBLE_COUNT
  const visibleHighlights = section.highlights.slice(0, VISIBLE_COUNT)
  const hiddenHighlights = section.highlights.slice(VISIBLE_COUNT)
  const hiddenCount = section.highlights.length - VISIBLE_COUNT

  return (
    <motion.article
      className="experience-section"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={motionConfig.viewport}
    >
      <Chip variant="label">{renderText(section.title)}</Chip>
      <ul className="experience-section__list">
        {visibleHighlights.map((highlight) => (
          <li key={highlight.slice(0, 40)}>{renderText(highlight)}</li>
        ))}
        <AnimatePresence initial={false}>
          {expanded
            ? hiddenHighlights.map((highlight) => (
                <motion.li
                  key={highlight.slice(0, 40)}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  layout
                >
                  {renderText(highlight)}
                </motion.li>
              ))
            : null}
        </AnimatePresence>
      </ul>
      {hasMore && !expanded ? (
        <motion.button
          type="button"
          className="ui-button ui-button--ghost experience-section__more"
          onClick={() => setExpanded(true)}
          whileTap={{ scale: 0.97 }}
        >
          +{hiddenCount} {expandLabel}
        </motion.button>
      ) : null}
      {hasMore && expanded ? (
        <motion.button
          type="button"
          className="ui-button ui-button--ghost experience-section__more"
          onClick={() => setExpanded(false)}
          whileTap={{ scale: 0.97 }}
        >
          {collapseLabel}
        </motion.button>
      ) : null}
    </motion.article>
  )
}
