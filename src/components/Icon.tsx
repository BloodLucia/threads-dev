import { Suspense } from 'react'
import { LucideProps, icons } from 'lucide-react'

export type IconNamesType = keyof typeof icons
interface Props extends Omit<LucideProps, 'ref'> {
  name: keyof typeof icons
}
export const Icon: React.FC<Props> = (props) => {
  const { name, size = 26, color = 'currentColor' } = props
  const fallback = <div style={{ background: 'rgb(184,184,184)', width: size, height: size }} />
  const LucideIcon = icons[name]
  return (
    <Suspense fallback={fallback}>
      <LucideIcon size={size} color={color} {...props} />
    </Suspense>
  )
}
