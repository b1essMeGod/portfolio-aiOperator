import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { useReducedMotionConfig } from '../../motion/useReducedMotionConfig'
import { staggerContainer, staggerItem } from '../../motion/variants'
import { stagger as staggerTokens, viewport as viewportTokens } from '../../motion/tokens'

type StaggerGroupProps = {
  children: ReactNode
  className?: string
  staggerChildren?: number
  delayChildren?: number
  as?: 'div' | 'section' | 'article' | 'ul'
  mode?: 'viewport' | 'mount'
}

type StaggerItemProps = {
  children: ReactNode
  className?: string
  as?: 'div' | 'article' | 'li' | 'p' | 'span'
}

const groupMap = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  ul: motion.ul,
} as const

const itemMap = {
  div: motion.div,
  article: motion.article,
  li: motion.li,
  p: motion.p,
  span: motion.span,
} as const

export function StaggerGroup({
  children,
  className,
  staggerChildren = staggerTokens.base,
  delayChildren = 0.12,
  as = 'div',
  mode = 'viewport',
}: StaggerGroupProps) {
  const motionConfig = useReducedMotionConfig()
  const Component = groupMap[as]
  const variants = motionConfig.getVariants(staggerContainer(staggerChildren, delayChildren))

  const motionProps =
    mode === 'mount'
      ? {
          initial: motionConfig.initial,
          animate: motionConfig.animate,
        }
      : {
          initial: motionConfig.initial,
          whileInView: motionConfig.whileInView,
          viewport: motionConfig.viewport ?? viewportTokens,
        }

  return (
    <Component className={className} variants={variants} {...motionProps}>
      {children}
    </Component>
  )
}

export function StaggerItem({ children, className, as = 'div' }: StaggerItemProps) {
  const motionConfig = useReducedMotionConfig()
  const Component = itemMap[as]
  const variants = motionConfig.getVariants(staggerItem)

  return (
    <Component className={className} variants={variants}>
      {children}
    </Component>
  )
}
