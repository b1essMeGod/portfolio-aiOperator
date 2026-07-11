import type { Variants } from 'framer-motion'
import { duration, ease, stagger } from './tokens'

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: duration.slow, ease: ease.outExpo },
  },
}

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.slow, ease: ease.outExpo },
  },
}

export const fadeUpBlur: Variants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: duration.slow, ease: ease.outExpo },
  },
}

export const fadeUpSmall: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.slow, ease: ease.outExpo },
  },
}

export const fadeScale: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: duration.slow, ease: ease.outExpo },
  },
}

export const fadeScaleSmall: Variants = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: duration.slow, ease: ease.outExpo },
  },
}

export const headerEnter: Variants = {
  hidden: { opacity: 0, y: -12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.base, ease: ease.outExpo },
  },
}

export const pageEnter: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: duration.page, ease: ease.outExpo },
  },
  exit: {
    opacity: 0,
    transition: { duration: duration.base, ease: ease.outExpo },
  },
}

export const contentSwap: Variants = {
  hidden: { opacity: 0, y: 6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.base, ease: ease.outExpo },
  },
  exit: {
    opacity: 0,
    y: -4,
    transition: { duration: duration.fast, ease: ease.outExpo },
  },
}

export const staggerContainer = (staggerChildren: number = stagger.base, delayChildren = 0.12): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
})

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.slow, ease: ease.outExpo },
  },
}

export const experienceCardItem = (index: number): Variants => ({
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: duration.slow,
      ease: ease.outExpo,
      delay: index * 0.09,
    },
  },
})

export const experienceSectionItem = (index: number): Variants => ({
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: duration.base,
      ease: ease.outExpo,
      delay: 0.18 + index * 0.06,
    },
  },
})

export const tabContentForward: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.slow, ease: ease.outExpo },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: duration.base, ease: ease.outExpo },
  },
}

export const tabContentBack: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.slow, ease: ease.outExpo },
  },
  exit: {
    opacity: 0,
    y: 10,
    transition: { duration: duration.base, ease: ease.outExpo },
  },
}

export const listItem: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.base, ease: ease.outExpo },
  },
  exit: {
    opacity: 0,
    y: -4,
    transition: { duration: duration.fast, ease: ease.outExpo },
  },
}

export const scrollTopButton: Variants = {
  hidden: { opacity: 0, y: 12, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: duration.base, ease: ease.spring },
  },
  exit: {
    opacity: 0,
    y: 12,
    scale: 0.96,
    transition: { duration: duration.fast, ease: ease.outExpo },
  },
}

export const instant: Variants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
  exit: { opacity: 1 },
}
