'use client'

import { TasksContext } from '@/contexts/TasksContext'
import { useContext } from 'react'

export function TaskList() {
  const { tasks } = useContext(TasksContext)

  return (
    <ul className="bg-black text-lg text-white">
      {tasks.map((task) => (
        <li key={task.id}>{task.name}</li>
      ))}
    </ul>
  )
}
