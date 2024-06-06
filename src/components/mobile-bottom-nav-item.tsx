'use client'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import { Icon, IconNamesType } from './Icon'

interface Props {
  to: string
  icon: IconNamesType
  iconSize?: number
  className?: string
}
export const MobileBottomNavItem: React.FC<Props> = ({ to, icon, iconSize = 26, className }) => {
  const pathname = usePathname()
  const isActive = to === pathname
  return (
    <a
      href={to}
      className={clsx(
        'flex justify-center items-center',
        isActive ? 'text-black' : 'text-[rgb(184,184,184)]',
        className
      )}>
      <Icon name={icon} size={iconSize} />
    </a>
  )
}
