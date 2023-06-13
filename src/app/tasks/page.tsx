import { CreateTaskForm } from '@/components/CreateTaskForm'
import { Profile } from '@/components/Profile'
import { TaskList } from '@/components/TasksList'
import { getServerSession } from 'next-auth'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import Logo from '../../assets/Logo.svg'

export default async function Tasks() {
  const session = await getServerSession()
  if (!session?.user) {
    redirect('/')
  }

  return (
    <main className="flex min-h-screen w-full flex-col items-center px-5">
      <Profile />
      <div className="-z-10 flex w-full justify-center bg-gray-700 py-20">
        <Image src={Logo} alt="Todo logo" height={48} />
      </div>
      <div className="-m-7 flex w-full max-w-3xl flex-col gap-5">
        <CreateTaskForm />
        <TaskList />
      </div>
    </main>
  )
}
