import { TasksContext } from '@/contexts/TasksContext'
import { useContext, useMemo } from 'react'

export function useSummary() {
  const { tasks } = useContext(TasksContext)

  const summary = useMemo(() => {
    return tasks.reduce(
      (acc, task) => {
        if (task.completed === true) {
          acc.completed += 1
          acc.total += 1
        } else {
          acc.total += 1
        }

        return acc
      },
      {
        total: 0,
        completed: 0,
      },
    )
  }, [tasks])

  return summary
}
