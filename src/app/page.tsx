import { CreateTaskForm } from '@/components/CreateTaskForm'
import { TaskList } from '@/components/TasksList'
import Image from 'next/image'

import Logo from '../assets/Logo.svg'

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center">
      <div className="flex w-full justify-center bg-gray-700 py-20">
        <Image src={Logo} alt="Todo logo" height={48} />
      </div>
      <div className="-m-7 flex w-full max-w-3xl flex-col gap-5">
        <CreateTaskForm />
        <TaskList />
      </div>
    </main>
  )
}
