export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 w-full h-[74px] bg-white/80 backdrop-blur-2xl flex items-center border-b">
      <a
        href="/"
        className="flex w-[32px] h-[32px] justify-center items-center bg-slate-300 rounded-md"></a>
      <button className="">登录</button>
    </header>
  )
}
