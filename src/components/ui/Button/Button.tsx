'use client'
import cn from 'classnames'
import s from './Button.module.scss'
import { ButtonHTMLAttributes, forwardRef, useRef } from 'react'
import { mergeRefs } from 'react-merge-refs'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean
  loading?: boolean
  width?: number
  Component?: React.ComponentType
  // level?: 'primary' | 'secondary' | 'danger'
}
const Button = forwardRef<HTMLButtonElement, Props>((props, buttonRef) => {
  const {
    active,
    loading,
    width,
    children,
    Component = 'button',
    style = {},
    disabled = false,
    className,
    ...rest
  } = props
  const ref = useRef(null)
  const rootClassName = cn(
    s.button,
    {
      [s.loading]: loading,
      [s.disabled]: disabled,
    },
    className
  )
  return (
    <Component
      aria-pressed={active}
      disabled={disabled}
      ref={mergeRefs([ref, buttonRef])}
      className={rootClassName}
      style={{ width, ...style }}
    >
      {children}
    </Component>
  )
})

Button.displayName = 'button'

export default Button
