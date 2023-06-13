'use client'

import { LogOut } from 'lucide-react'
import { signOut } from 'next-auth/react'

export function SignOutButton() {
  return (
    <button
      onClick={() => signOut()}
      className="z-50 flex items-center gap-1 text-red-400 transition-colors hover:cursor-pointer hover:text-red-300"
    >
      Quero sair
      <LogOut className="h-4 w-4" />
    </button>
  )
}
