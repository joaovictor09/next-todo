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
  changeTaskComplete: (id: string) => void
  deleteTask: (id: string) => void
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

  async function changeTaskComplete(id: string) {
    const newTaskArray: Task[] = tasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed
      }
      return task
    })

    await fetch('/api/tasks', {
      method: 'PATCH',
      body: JSON.stringify({
        id,
      }),
    })

    setTasks(newTaskArray)
  }

  async function deleteTask(id: string) {
    setTasks(tasks.filter((task) => task.id !== id))

    await fetch(`/api/tasks?id=${id}`, {
      method: 'DELETE',
    })
  }

  useEffect(() => {
    async function fetchTasks() {
      const res = await fetch('/api/tasks', {
        method: 'GET',
      })

      const { tasks } = await res.json()

      console.log(tasks)

      setTasks(tasks)
    }

    fetchTasks()
  }, [])

  return (
    <TasksContext.Provider
      value={{
        tasks,
        createTask,
        changeTaskComplete,
        deleteTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  )
}
