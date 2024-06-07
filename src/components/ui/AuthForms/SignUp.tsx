'use client'

import { handleRequest } from '@/libs/utils/auth-helpers/client'
import { useState } from 'react'

const SignUp: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // await signup(e.target.email.value, e.target.password.value)
    // await handleRequest(e, sign)
    setIsSubmitting(false)
  }
  return (
    <form noValidate onSubmit={handleSubmit}>
      <button></button>
    </form>
  )
}

export default SignUp
