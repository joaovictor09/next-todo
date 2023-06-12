'use client'

import { ReactNode, createContext, useState } from 'react'

interface Task {
  id: string
  name: string
  completed: boolean
}

interface TransactionsContextType {
  tasks: Task[]
  createTask: (name: string) => void
}

export const TasksContext = createContext({} as TransactionsContextType)

interface TasksProviderProps {
  children: ReactNode
}

export function TasksProvider({ children }: TasksProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([
    {
      completed: true,
      id: crypto.randomUUID(),
      name: 'teste',
    },
    {
      completed: false,
      id: crypto.randomUUID(),
      name: 'teste',
    },
  ])

  function createTask(name: string) {
    setTasks([...tasks, { name, completed: true, id: crypto.randomUUID() }])
  }

  return (
    <TasksContext.Provider
      value={{
        tasks,
        createTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}
