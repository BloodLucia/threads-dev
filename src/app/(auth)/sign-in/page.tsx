import { NavBar } from "@/components/NavBar";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="h-[60px] "></header>
      <main className="w-full min-h-[calc(100vh-(60px+70px))] shrink-0 overflow-y-auto flex justify-center items-center">
        <form className="w-full max-w-[370px] px-[24px] flex flex-col items-stretch gap-2">
          <div className="text-center text-2xl font-semibold mb-5">Threads</div>
          <input autoComplete="username" className="bg-[rgb(245,245,245)] p-[16px] outline-none rounded-xl placeholder:text-[rgb(184,184,184)]" type="text" placeholder="账号或邮箱" />
          <input autoComplete="username" className="bg-[rgb(245,245,245)] p-[16px] outline-none rounded-xl placeholder:text-[rgb(184,184,184)]" type="text" placeholder="账号或邮箱" />
          {/* <input type="password" placeholder="密码" /> */}
          <input type="button" value="登录" className="mt-5 bg-black text-white h-[48px] rounded-xl" />
        </form>
      </main>
      <footer className="h-[70px] k"></footer>
    </div>
  )
}