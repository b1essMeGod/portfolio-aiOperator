import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { useReducedMotionConfig } from '../../motion/useReducedMotionConfig'
import { pageEnter } from '../../motion/variants'

type PageTransitionProps = {
  children: ReactNode
  className?: string
}

export default function PageTransition({ children, className }: PageTransitionProps) {
  const motionConfig = useReducedMotionConfig()
  const variants = motionConfig.getVariants(pageEnter)

  return (
    <motion.div
      className={className}
      initial={motionConfig.initial}
      animate={motionConfig.animate}
      exit="exit"
      variants={variants}
    >
      {children}
    </motion.div>
  )
}
