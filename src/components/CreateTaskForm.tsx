'use client'

import { PlusCircle } from 'lucide-react'
import { signIn } from 'next-auth/react'
import { FormEvent, useContext, useState } from 'react'

import { TasksContext } from '@/contexts/TasksContext'

export function CreateTaskForm() {
  const [taskName, setTaskName] = useState('')
  const { createTask } = useContext(TasksContext)

  async function handleCreateTask(event: FormEvent) {
    event.preventDefault()

    createTask(taskName)

    await fetch('/api/tasks', {
      method: 'POST',
      body: JSON.stringify({
        name: taskName,
      }),
    })

    setTaskName('')
  }

  return (
    <form
      onSubmit={handleCreateTask}
      className="flex h-14 w-full max-w-3xl items-center gap-2"
    >
      <button className="text-white" onClick={() => signIn('github')}>
        SignIn
      </button>
      <input
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        type="text"
        required
        min={3}
        className="flex-1 rounded-lg border border-gray-700 bg-gray-500 p-4 text-gray-100 outline-0 placeholder:text-gray-300 focus:border-purple-dark"
        placeholder="Adicione uma nova tarefa"
      />
      <button
        type="submit"
        className="flex items-center gap-2 rounded-lg bg-blue-dark p-4 text-gray-100 transition-all hover:bg-blue"
      >
        <span>Criar</span>
        <PlusCircle />
      </button>
    </form>
  )
}
