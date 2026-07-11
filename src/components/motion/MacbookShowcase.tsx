import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Reveal from './Reveal'
import { useReducedMotionConfig } from '../../motion/useReducedMotionConfig'
import { fadeScaleSmall } from '../../motion/variants'

type MacbookShowcaseProps = {
  projectId: number
  imageName: string
  title: string
  ariaLabel: string
}

export default function MacbookShowcase({ projectId, imageName, title, ariaLabel }: MacbookShowcaseProps) {
  const ref = useRef<HTMLDivElement>(null)
  const motionConfig = useReducedMotionConfig()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], [0, motionConfig.prefersReducedMotion ? 0 : -40])
  const variants = motionConfig.getVariants(fadeScaleSmall)

  return (
    <Reveal as="section" className="macbook-showcase" blur={false}>
      <motion.div
        ref={ref}
        aria-label={ariaLabel}
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={motionConfig.viewport}
      >
        <div className="macbook-shell">
          <img className="macbook-frame" src={`${import.meta.env.BASE_URL}works/macbook.png`} alt="" draggable={false} />
          <div className="macbook-viewport">
            <motion.img
              style={{ y: imageY }}
              src={`${import.meta.env.BASE_URL}works/project-${projectId}/${imageName}`}
              alt={`${title} first screen`}
              draggable={false}
            />
          </div>
        </div>
      </motion.div>
    </Reveal>
  )
}
