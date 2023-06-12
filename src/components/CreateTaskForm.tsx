'use client'

import { TasksContext } from '@/contexts/TasksContext'
import { FormEvent, useContext, useState } from 'react'

export function CreateTaskForm() {
  const [taskName, setTaskName] = useState('')
  const { createTask } = useContext(TasksContext)

  function handleCreateTask(event: FormEvent) {
    event.preventDefault()

    createTask(taskName)
  }

  return (
    <form onSubmit={handleCreateTask} className="flex gap-5">
      <input
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        type="text"
        required
        min={3}
        className="border border-black outline-0 ring-0"
      />
      <button type="submit">Add</button>
    </form>
  )
}
