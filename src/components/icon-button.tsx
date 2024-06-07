import clsx from 'clsx'
import { Icon, IconNameType } from './custom-icon'

interface Props {
  icon: IconNameType
  size?: number
  className?: string
  onClick: React.MouseEventHandler<HTMLButtonElement>
}
export const IconButton: React.FC<Props> = ({ icon, size = 32, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'button bg-transparent outline-none active:outline-none border-none focus:outline-none',
        className
      )}>
      <Icon name={icon} size={size} />
    </button>
  )
}
