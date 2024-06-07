import { TopNav } from '@/components/top-nav'

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <TopNav />
      <main>{children}</main>
    </div>
  )
}

export default Layout
