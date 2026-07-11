import { AnimatePresence, motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { useReducedMotionConfig } from '../../motion/useReducedMotionConfig'
import { contentSwap } from '../../motion/variants'

type LanguageSwapProps = {
  language: string
  children: ReactNode
  className?: string
}

export function LanguageSwap({ language, children, className }: LanguageSwapProps) {
  const motionConfig = useReducedMotionConfig()
  const variants = motionConfig.getVariants(contentSwap)

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={language}
        className={className}
        initial={motionConfig.initial}
        animate={motionConfig.animate}
        exit="exit"
        variants={variants}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
