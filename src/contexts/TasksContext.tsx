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
  changeTaskComplete: (id: string) => void
}

export const TasksContext = createContext({} as TransactionsContextType)

interface TasksProviderProps {
  children: ReactNode
}

export function TasksProvider({ children }: TasksProviderProps) {
  const [tasks, setTasks] = useState<Task[]>([])

  function createTask(name: string) {
    setTasks([...tasks, { name, completed: true, id: crypto.randomUUID() }])
  }

  function changeTaskComplete(id: string) {
    const newTaskArray: Task[] = tasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed
      }
      return task
    })

    setTasks(newTaskArray)
  }

  return (
    <TasksContext.Provider
      value={{
        tasks,
        createTask,
        changeTaskComplete,
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}
