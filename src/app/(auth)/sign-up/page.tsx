'use client'

import { useState } from 'react'

const SignUpPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [signUpData, setSignUpData] = useState({ email: '', password: '' })
  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
  }
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col w-full justify-center items-stretch gap-3 px-6 mt-[150px]">
      <h1 className="text-center text-4xl font-semibold mb-8">Sign Up</h1>
      <input
        className="px-3 py-4 outline-none border rounded-md"
        type="text"
        autoComplete="username"
        placeholder="邮箱/账号"
        value={signUpData.email}
        required
        onChange={(e) => setSignUpData({ ...signUpData, email: e.target.value })}
      />
      <input
        className="px-3 py-4 outline-none border rounded-md"
        type="password"
        autoComplete="password"
        placeholder="密码"
        required
        value={signUpData.password}
        onChange={(e) => setSignUpData({ ...signUpData, password: e.target.value })}
      />
      <button
        type="submit"
        className="w-full bg-black text-white rounded-md px-2 py-3 text-base font-semibold mt-10">
        注册
      </button>
      <span className="text-center mt-3 text-gray-500">
        已有账号?
        <a href="/sign-in">立即登录</a>
      </span>
    </form>
  )
}

export default SignUpPage
