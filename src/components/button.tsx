import clsx from 'clsx'

interface Props {
  type?: 'button' | 'submit' | 'reset'
  className?: string
}
export const Button: React.FC<React.PropsWithChildren<Props>> = ({
  type = 'button',
  className,
  children,
}) => {
  return (
    <button type={type} className={clsx('button bg-black rounded-[10px] text-base h-[34px] text-white px-4 font-semibold max-w-full flex justify-center items-center box-border', className)}>
      {children}
    </button>
  )
}
