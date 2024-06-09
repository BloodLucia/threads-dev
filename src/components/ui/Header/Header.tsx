'use client'
import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

const Header: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 w-full h-[74px] bg-white/80 backdrop-blur-2xl flex justify-center items-center',
        className
      )}
    >
      <a
        className="inline-flex justify-center items-center w-[32px] h-[32px]"
        href="/"
      >
        <Image
          src="/threads.svg"
          alt="Threads"
          loading="eager"
          decoding="async"
          width={32}
          height={32}
        />
      </a>
      <Link
        href="/sign-in"
        className="absolute top-[25%] right-[19px] inline-flex justify-center items-center px-4 py-1.5 bg-black text-white rounded-lg text-base"
      >
        登录
      </Link>
    </header>
  )
}

export default Header
