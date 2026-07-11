import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { Link, type LinkProps } from 'react-router-dom'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

function buildClassName(variant: ButtonVariant, className?: string) {
  return ['ui-button', `ui-button--${variant}`, className].filter(Boolean).join(' ')
}

type ButtonProps = {
  variant?: ButtonVariant
  className?: string
  children: ReactNode
} & (
  | ({ as?: 'button' } & ButtonHTMLAttributes<HTMLButtonElement>)
  | ({ as: 'a' } & AnchorHTMLAttributes<HTMLAnchorElement>)
  | ({ as: 'link' } & LinkProps)
)

export default function Button({ variant = 'secondary', className, children, ...rest }: ButtonProps) {
  const classes = buildClassName(variant, className)

  if ('as' in rest && rest.as === 'a') {
    const anchorProps = { ...rest }
    delete (anchorProps as { as?: string }).as
    return (
      <a className={classes} {...(anchorProps as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    )
  }

  if ('as' in rest && rest.as === 'link') {
    const linkProps = { ...rest }
    delete (linkProps as { as?: string }).as
    return (
      <Link className={classes} {...(linkProps as LinkProps)}>
        {children}
      </Link>
    )
  }

  const buttonProps = { ...rest }
  delete (buttonProps as { as?: string }).as
  return (
    <button type="button" className={classes} {...(buttonProps as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}
