import { CreateTaskForm } from '@/components/CreateTaskForm'
import { TaskList } from '@/components/TasksList'

export default function Home() {
  return (
    <main>
      <h1>Todo</h1>
      <CreateTaskForm />
      <TaskList />
    </main>
  )
}
