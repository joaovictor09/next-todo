import Image from 'next/image'

import { SignInButton } from '@/components/SignInButton'
import { Github } from 'lucide-react'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { AiOutlineGoogle } from 'react-icons/ai'
import Logo from '../assets/Logo.svg'

export default async function Home() {
  const session = await getServerSession()
  if (session) {
    redirect('/tasks')
  }

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center">
      <div className="flex w-full max-w-lg flex-col items-center rounded-lg bg-gray-700 p-10">
        <Image src={Logo} className="w-64" alt="Logo da marca" />

        <div className="mt-10 flex w-full flex-col gap-5 border-t border-zinc-400 p-10 text-zinc-100">
          <SignInButton signInProvider="github">
            <Github className="text-purple-dark" size={24} />
            SignIn with Github
          </SignInButton>
          <SignInButton signInProvider="google">
            <AiOutlineGoogle className="text-purple-dark" size={24} />
            SignIn with Google
          </SignInButton>
        </div>
      </div>
    </main>
  )
}
