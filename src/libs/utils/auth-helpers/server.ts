import { redirect } from 'next/navigation'
import { getErrorRedirect, getURL } from '../helpers'

function isValidEmail(email: string) {
  var regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/
  return regex.test(email)
}

export async function redirectToPath(path: string) {
  return redirect(path)
}

export async function signUp(formData: FormData) {
  const callbackURL = getURL('/auth/callback')

  const email = String(formData.get('email')).trim()
  const password = String(formData.get('password')).trim()
  let redirectPath: string
  if (!isValidEmail(email)) {
    redirectPath = getErrorRedirect('/signin/signup', 'Invalid email address.', 'Please try again.')
  }
}
