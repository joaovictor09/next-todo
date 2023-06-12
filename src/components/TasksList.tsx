'use client'

import { TasksContext } from '@/contexts/TasksContext'
import { ClipboardList } from 'lucide-react'
import { useContext } from 'react'
import { Task } from './Task'

export function TaskList() {
  const { tasks } = useContext(TasksContext)

  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex justify-between">
        <div className="items center flex gap-2">
          <span className="text-sm font-bold text-blue">Tarefas criadas</span>
          <span className="rounded-full bg-gray-400 px-2 text-gray-200">0</span>
        </div>
        <div className="items center flex gap-2">
          <span className="text-sm font-bold text-blue">Concluídas</span>
          <span className="rounded-full bg-gray-400 px-2 text-gray-200">0</span>
        </div>
      </div>
      <ul className=" flex flex-col gap-3 text-lg text-white">
        {tasks.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-lg border-t border-gray-400 py-16 text-gray-300">
            <ClipboardList strokeWidth={1} className="h-14 w-14 font-light" />
            <strong className="mt-4">
              Você ainda não tem tarefas cadastradas
            </strong>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        ) : (
          tasks.map((task) => (
            <Task completed={task.completed} name={task.name} key={task.id} />
          ))
        )}
      </ul>
    </div>
  )
}
