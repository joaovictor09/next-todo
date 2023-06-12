import { Check, Trash } from 'lucide-react'

interface TaskProps {
  name: string
  completed: boolean
}

export function Task({ completed, name }: TaskProps) {
  return (
    <li
      className={`flex w-full items-center gap-3 rounded-lg border border-gray-400 bg-gray-500 p-4 ${
        completed && 'border-gray-500 text-gray-300 line-through'
      }`}
    >
      <button
        className={`flex h-5 w-5 items-center justify-center rounded-full border-2 transition-all ${
          completed
            ? 'border-purple-dark bg-purple-dark hover:border-purple hover:bg-purple'
            : 'border-2 border-blue hover:bg-blue/20'
        }`}
      >
        {completed ? (
          <Check size={14} strokeWidth={3} className="text-gray-100" />
        ) : (
          ''
        )}
      </button>
      <span className="flex-1">{name}</span>
      <button className="rounded-lg p-2 text-gray-300 transition-all hover:bg-gray-400 hover:text-danger">
        <Trash size={18} className="" />
      </button>
    </li>
  )
}
