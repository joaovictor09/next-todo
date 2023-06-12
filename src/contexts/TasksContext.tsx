'use client'

import { ReactNode, createContext, useEffect, useState } from 'react'

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
  const [tasks, setTasks] = useState<Task[]>([])

  function createTask(name: string) {
    setTasks([...tasks, { name, completed: false, id: crypto.randomUUID() }])
  }

  useEffect(() => {
    createTask('Study')
  }, [])

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
