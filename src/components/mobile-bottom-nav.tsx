import { MobileBottomNavItem } from './mobile-bottom-nav-item'

export const MobileBottomNav: React.FC<{ className?: string }> = () => {
  return (
    <nav className="border-t fixed bottom-0 right-0 left-0 bg-white/80 backdrop-blur-2xl w-full h-[68px] pb-[env(safe-area-inset-bottom)] grid items-center grid-cols-[repeat(5,minmax(0,1fr))]">
      <MobileBottomNavItem to="/" icon="Home" />
      <MobileBottomNavItem to="/a" icon="SquarePen" />
      <MobileBottomNavItem to="/b" icon="Search" />
      <MobileBottomNavItem to="/c" icon="Heart" />
      <MobileBottomNavItem to="/d" icon="User" />
    </nav>
  )
}
