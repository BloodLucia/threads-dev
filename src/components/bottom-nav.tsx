import { BottomNavLink } from './bottom-nav-link'

export const BottomNav: React.FC<{ className?: string }> = () => {
  return (
    <nav className="border-t fixed bottom-0 right-0 left-0 bg-white/80 backdrop-blur-2xl w-full h-[68px] pb-[env(safe-area-inset-bottom)] grid items-center grid-cols-[repeat(5,minmax(0,1fr))]">
      <BottomNavLink to="/" icon="Home" />
      <BottomNavLink to="/a" icon="SquarePen" />
      <BottomNavLink to="/b" icon="Search" />
      <BottomNavLink to="/c" icon="Heart" />
      <BottomNavLink to="/d" icon="User" />
    </nav>
  )
}
