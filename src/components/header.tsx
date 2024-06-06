export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 w-full h-[74px] bg-white/80 backdrop-blur-2xl flex justify-between items-center border-b">
      <div className="flex flex-grow-[1] justify-center">
        <a
          href="/"
          className="flex  w-[32px] h-[32px] justify-center items-center bg-slate-300 rounded-md"></a>
      </div>
      
      <button className="absolute right-[24px]">登录</button>
    </header>
  )
}
