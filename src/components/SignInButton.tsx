'use client'

import { signIn } from 'next-auth/react'
import { ReactNode } from 'react'

export function SignInButton({
  children,
  signInProvider,
}: {
  children: ReactNode
  signInProvider: 'github' | 'google'
}) {
  return (
    <button
      className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-400 bg-gray-500 p-4 transition-all hover:bg-gray-400"
      onClick={() => signIn(signInProvider)}
    >
      {children}
    </button>
  )
}
