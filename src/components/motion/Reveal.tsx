import { motion, type HTMLMotionProps } from 'framer-motion'
import type { ReactNode } from 'react'
import { useReducedMotionConfig } from '../../motion/useReducedMotionConfig'
import { viewport } from '../../motion/tokens'
import { fadeUp, fadeUpBlur } from '../../motion/variants'

type RevealElement = 'section' | 'article' | 'div' | 'footer' | 'header' | 'main'

type RevealProps = {
  as?: RevealElement
  children: ReactNode
  className?: string
  delay?: number
  blur?: boolean
  id?: string
  style?: React.CSSProperties
} & Omit<HTMLMotionProps<'div'>, 'children' | 'initial' | 'animate' | 'whileInView' | 'viewport' | 'variants'>

const motionMap = {
  section: motion.section,
  article: motion.article,
  div: motion.div,
  footer: motion.footer,
  header: motion.header,
  main: motion.main,
} as const

export default function Reveal({
  as = 'div',
  children,
  className,
  delay = 0,
  blur = true,
  id,
  style,
  ...rest
}: RevealProps) {
  const motionConfig = useReducedMotionConfig()
  const Component = motionMap[as]
  const variants = motionConfig.getVariants(blur && !motionConfig.disableBlur ? fadeUpBlur : fadeUp)

  return (
    <Component
      id={id}
      className={className}
      style={style}
      initial={motionConfig.initial}
      whileInView={motionConfig.whileInView}
      viewport={motionConfig.viewport ?? viewport}
      variants={variants}
      transition={motionConfig.getTransition({ delay })}
      {...rest}
    >
      {children}
    </Component>
  )
}
