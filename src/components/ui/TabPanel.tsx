import { AnimatePresence, motion } from 'framer-motion'
import { useId, useState } from 'react'
import type { AboutTabBlock } from '../../i18n/types'
import { useReducedMotionConfig } from '../../motion/useReducedMotionConfig'
import { spring } from '../../motion/tokens'
import { tabContentBack, tabContentForward } from '../../motion/variants'

export type TabItem = {
  id: string
  label: string
  blocks: AboutTabBlock[]
}

type TabPanelProps = {
  tabs: TabItem[]
  renderText: (text: string) => string
}

function AboutTabContent({ blocks, renderText }: { blocks: AboutTabBlock[]; renderText: (text: string) => string }) {
  return (
    <div className="about-tab-content">
      {blocks.map((block, index) => {
        const key = `${block.kind}-${index}`

        if (block.kind === 'lead') {
          return (
            <p key={key} className="about-tab-lead">
              {renderText(block.text)}
            </p>
          )
        }

        if (block.kind === 'group') {
          return (
            <article key={key} className="about-tab-group">
              <h3 className="about-tab-group__title">{renderText(block.title)}</h3>
              <p className="about-tab-group__text">{renderText(block.text)}</p>
            </article>
          )
        }

        if (block.kind === 'card') {
          return (
            <article key={key} className="about-tab-card">
              <div className="about-tab-card__header">
                <h3 className="about-tab-card__title">{renderText(block.title)}</h3>
                {block.url ? (
                  <a className="about-tab-card__link" href={block.url} target="_blank" rel="noreferrer">
                    {block.url.replace(/^https?:\/\//, '')}
                  </a>
                ) : null}
              </div>
              <p className="about-tab-card__text">{renderText(block.text)}</p>
            </article>
          )
        }

        return (
          <div key={key} className="about-tab-bullet">
            <span className="about-tab-bullet__marker" aria-hidden="true" />
            <p className="about-tab-bullet__text">{renderText(block.text)}</p>
          </div>
        )
      })}
    </div>
  )
}

export default function TabPanel({ tabs, renderText }: TabPanelProps) {
  const [activeId, setActiveId] = useState(tabs[0]?.id ?? '')
  const [direction, setDirection] = useState<'forward' | 'back'>('forward')
  const baseId = useId()
  const motionConfig = useReducedMotionConfig()
  const activeIndex = tabs.findIndex((tab) => tab.id === activeId)
  const activeTab = tabs.find((tab) => tab.id === activeId)
  const contentVariants = motionConfig.getVariants(direction === 'forward' ? tabContentForward : tabContentBack)

  const handleSelect = (tabId: string) => {
    const nextIndex = tabs.findIndex((tab) => tab.id === tabId)
    const currentIndex = tabs.findIndex((tab) => tab.id === activeId)
    if (nextIndex >= 0 && nextIndex !== currentIndex) {
      setDirection(nextIndex > currentIndex ? 'forward' : 'back')
    }
    setActiveId(tabId)
  }

  return (
    <div className="ui-tab-panel">
      <div className="ui-tab-panel__list" role="tablist" aria-label="About sections">
        <motion.span
          className="ui-tab-panel__indicator"
          layoutId="tab-indicator"
          style={{ width: `${100 / tabs.length}%` }}
          animate={{ x: `${activeIndex * 100}%` }}
          transition={motionConfig.prefersReducedMotion ? { duration: 0 } : spring.soft}
          aria-hidden="true"
        />
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            id={`${baseId}-${tab.id}`}
            aria-selected={activeId === tab.id}
            aria-controls={`${baseId}-${tab.id}-panel`}
            className={`ui-tab-panel__tab${activeId === tab.id ? ' is-active' : ''}`}
            onClick={() => handleSelect(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="ui-tab-panel__panels">
        <AnimatePresence mode="wait">
          {activeTab ? (
            <motion.div
              key={activeTab.id}
              role="tabpanel"
              id={`${baseId}-${activeTab.id}-panel`}
              aria-labelledby={`${baseId}-${activeTab.id}`}
              className="ui-tab-panel__content is-active"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={contentVariants}
            >
              <AboutTabContent blocks={activeTab.blocks} renderText={renderText} />
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  )
}
