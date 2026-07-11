import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { useReducedMotionConfig } from '../../motion/useReducedMotionConfig'

type ChipVariant = 'default' | 'label' | 'badge'

type ChipProps = {
  children: ReactNode
  variant?: ChipVariant
  tint?: number
  className?: string
}

export default function Chip({ children, variant = 'default', tint, className }: ChipProps) {
  const motionConfig = useReducedMotionConfig()
  const classes = [
    'ui-chip',
    variant !== 'default' ? `ui-chip--${variant}` : '',
    tint !== undefined ? `ui-chip--tint-${tint % 6}` : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <motion.span
      className={classes}
      whileHover={motionConfig.prefersReducedMotion ? undefined : { y: -1 }}
      whileTap={motionConfig.prefersReducedMotion ? undefined : { scale: 0.98 }}
    >
      {children}
    </motion.span>
  )
}
