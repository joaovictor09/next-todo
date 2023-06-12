import { TasksProvider } from '@/contexts/TasksContext'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next Todo',
  description: 'Your Next Todo',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <TasksProvider>
        <body
          className={`${inter.className} flex min-h-screen w-full flex-col items-center bg-gray-600 leading-[140%]`}
        >
          {children}
        </body>
      </TasksProvider>
    </html>
  )
}
