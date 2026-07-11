export const duration = {
  fast: 0.18,
  base: 0.32,
  slow: 0.52,
  page: 0.45,
} as const

export const ease = {
  outExpo: [0.16, 1, 0.3, 1] as const,
  spring: [0.34, 1.45, 0.64, 1] as const,
  smooth: [0.22, 0.61, 0.36, 1] as const,
}

export const spring = {
  soft: { type: 'spring' as const, stiffness: 320, damping: 32 },
  snappy: { type: 'spring' as const, stiffness: 420, damping: 34 },
}

export const stagger = {
  fast: 0.06,
  base: 0.07,
  slow: 0.09,
} as const

export const viewport = {
  once: true,
  amount: 0.12,
  margin: '0px 0px -40px 0px',
} as const
