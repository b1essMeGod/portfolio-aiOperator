import { useReducedMotion } from 'framer-motion'
import type { Transition, Variants } from 'framer-motion'
import { instant } from './variants'

const instantTransition: Transition = { duration: 0 }

export function useReducedMotionConfig() {
  const prefersReducedMotion = useReducedMotion()

  return {
    prefersReducedMotion: Boolean(prefersReducedMotion),
    transition: prefersReducedMotion ? instantTransition : undefined,
    variants: prefersReducedMotion ? instant : undefined,
    whileInView: prefersReducedMotion ? undefined : ('visible' as const),
    initial: prefersReducedMotion ? false : ('hidden' as const),
    animate: prefersReducedMotion ? undefined : ('visible' as const),
    viewport: prefersReducedMotion ? undefined : { once: true, amount: 0.08 as const },
    getVariants: (variants: Variants) => (prefersReducedMotion ? instant : variants),
    getTransition: (transition?: Transition) => (prefersReducedMotion ? instantTransition : transition),
    disableBlur: Boolean(prefersReducedMotion),
  }
}
