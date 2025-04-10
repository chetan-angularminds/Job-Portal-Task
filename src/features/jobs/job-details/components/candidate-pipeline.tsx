import { cn } from '@/lib/utils'

interface CandidatePipelineProps {
  activeStage: string
  onStageChange: (stage: string) => void
}

export function CandidatePipeline({
  activeStage,
  onStageChange,
}: CandidatePipelineProps) {
  const stages = [
    { id: 'sourced', label: 'Sourced', count: 0 },
    { id: 'hr-screening', label: 'HR Screening', count: 0 },
    { id: 'mcq-assessment', label: 'MCQ Assessment', count: 1 },
    {
      id: 'technical-interview-1',
      label: '1st Round - Technical Interview',
      count: 0,
    },
    {
      id: 'technical-interview-2',
      label: '2nd Round - Final Technical Interview',
      count: 0,
    },
    { id: 'hr-interview', label: 'HR Interview', count: 0 },
    { id: 'preboarding', label: 'Preboarding', count: 0 },
  ]
  const data = [
    { id: 'hired', label: 'Hired', count: 0, isSuccess: true },
    { id: 'archived', label: 'Archived', count: 1, isRejected: true },
  ]
  return (
    < div className='flex items-center justify-between'>
      <div className='flex overflow-x-auto rounded-md border bg-white p-1 w-fit'>
        {stages.map((stage, index) => {
          const isActive = activeStage === stage.id
          const isLast = index === stages.length - 1

          return (
            <div
              key={stage.id}
              onClick={() => onStageChange(stage.id)}
              className={cn(
                'relative flex cursor-pointer items-center justify-between rounded-md px-2 py-1 text-sm transition-colors',
                isActive
                  ? 'bg-violet-100 text-violet-700'
                  : 'bg-white text-muted-foreground hover:bg-muted/50',
                !isLast && 'mr-2'
              )}
            >
              <div className='flex flex-col items-center'>
                <span className='text-nowrap font-normal'>{stage.label}</span>
                <span className='text-xs text-muted-foreground'>
                  {stage.count}
                </span>
              </div>
            </div>
          )
        })}
      </div>
      <div className='flex overflow-x-auto rounded-md border bg-white p-1 w-fit'>
        {data.map((stage, index) => {
          const isActive = activeStage === stage.id
          const isLast = index === stages.length - 1

          return (
            <div
              key={stage.id}
              onClick={() => onStageChange(stage.id)}
              className={cn(
                'relative flex cursor-pointer items-center justify-between rounded-md px-2 py-1 text-sm transition-colors',
                isActive
                  ? 'bg-violet-100 text-violet-700'
                  : 'bg-white text-muted-foreground hover:bg-muted/50',
                stage.isSuccess && 'text-green-600',
                stage.isRejected && 'text-red-600',
                !isLast && 'mr-2'
              )}
            >
              <div className='flex flex-col items-center'>
                <span className='text-nowrap font-normal'>{stage.label}</span>
                <span className='text-xs text-muted-foreground'>
                  {stage.count}
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
