import { motion } from 'framer-motion'
import { useReducedMotionConfig } from '../../motion/useReducedMotionConfig'
import { spring } from '../../motion/tokens'

type SegmentedOption<T extends string> = {
  value: T
  label: string
}

type SegmentedControlProps<T extends string> = {
  options: SegmentedOption<T>[]
  value: T
  onChange: (value: T) => void
  ariaLabel: string
  className?: string
}

export default function SegmentedControl<T extends string>({
  options,
  value,
  onChange,
  ariaLabel,
  className,
}: SegmentedControlProps<T>) {
  const activeIndex = options.findIndex((option) => option.value === value)
  const motionConfig = useReducedMotionConfig()

  return (
    <div className={['ui-segmented', className].filter(Boolean).join(' ')} role="radiogroup" aria-label={ariaLabel}>
      <motion.span
        className="ui-segmented__indicator"
        layoutId="lang-indicator"
        style={{ width: `${100 / options.length}%` }}
        animate={{ x: `${activeIndex * 100}%` }}
        transition={motionConfig.prefersReducedMotion ? { duration: 0 } : spring.soft}
        aria-hidden="true"
      />
      {options.map((option) => (
        <motion.button
          key={option.value}
          type="button"
          role="radio"
          aria-checked={value === option.value}
          className={`ui-segmented__option${value === option.value ? ' is-active' : ''}`}
          onClick={() => onChange(option.value)}
          whileTap={motionConfig.prefersReducedMotion ? undefined : { scale: 0.97 }}
        >
          {option.label}
        </motion.button>
      ))}
    </div>
  )
}
