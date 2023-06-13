import { useSummary } from '@/hooks/Summary'

export function Summary() {
  const summary = useSummary()

  return (
    <div className="flex w-full justify-between">
      <div className="items center flex gap-2">
        <span className="text-sm font-bold text-blue">Tarefas criadas</span>
        <span className="flex items-center rounded-full bg-gray-400 px-2 text-xs font-bold text-gray-200">
          {summary.total}
        </span>
      </div>
      <div className="items center flex gap-2">
        <span className="text-sm font-bold text-blue">Concluídas</span>
        <span className="flex items-center rounded-full bg-gray-400 px-2 text-xs font-bold text-gray-200">
          {summary.completed === 0
            ? '0'
            : summary.completed + ' de ' + summary.total}
        </span>
      </div>
    </div>
  )
}
