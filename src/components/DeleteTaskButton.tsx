'use client'

import { Trash } from 'lucide-react'

export function DeleteTaskButton({
  deleteTask,
  id,
}: {
  deleteTask: (id: string) => void
  id: string
}) {
  return (
    <button
      onClick={() => deleteTask(id)}
      className="rounded-lg p-2 text-gray-300 transition-all hover:bg-gray-400 hover:text-danger"
    >
      <Trash size={18} className="" />
    </button>
  )
}
