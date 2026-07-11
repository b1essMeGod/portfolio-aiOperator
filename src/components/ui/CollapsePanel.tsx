import type { ReactNode } from 'react'

type CollapsePanelProps = {
  open: boolean
  onToggle: () => void
  toggleLabel: string
  children: ReactNode
  className?: string
}

export default function CollapsePanel({ open, onToggle, toggleLabel, children, className }: CollapsePanelProps) {
  return (
    <div className={['ui-collapse', open ? 'is-open' : '', className].filter(Boolean).join(' ')}>
      <div className="ui-collapse__inner">{children}</div>
      <button type="button" className="ui-collapse__toggle ui-button ui-button--ghost" onClick={onToggle}>
        {toggleLabel}
      </button>
    </div>
  )
}
