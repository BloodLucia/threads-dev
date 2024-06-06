'use client'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import { Icon, IconNameType } from './custom-icon'

interface Props {
  to: string
  icon: IconNameType
  iconSize?: number
  className?: string
}
export const BottomNavLink: React.FC<Props> = ({ to, icon, iconSize = 26, className }) => {
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
