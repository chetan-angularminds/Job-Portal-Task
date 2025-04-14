import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { Card } from '@/components/ui/card'
import { Separator } from '@radix-ui/react-separator'
import { CircleCheck, CircleX } from 'lucide-react'
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
  // const data = [
  //   { id: 'hired', label: 'Hired', count: 0, isSuccess: true },
  //   { id: 'archived', label: 'Archived', count: 1, isRejected: true },
  // ]
  return (

    <div className='mt-1 flex justify-between'>
        <Card className='flex flex-nowrap items-center mb-0  rounded-sm w-5/7 overflow-x-auto'>
        <Breadcrumb>
            <BreadcrumbList className=' flex-nowrap text-nowrap'>
              {stages.map((stage, idx, arr) => (
                <div className='flex  items-center text-xs' key={stage.id}>
                  <BreadcrumbItem className="m-0 p-0 gap-0">
                    <BreadcrumbLink
                      className={`text-center ${
                        activeStage === stage.id ? 'font-normal bg-indigo-100 text-black' : 'text-muted-foreground'
                      } cursor-pointer hover:bg-indigo-100 p-3`}
                      onClick={() => onStageChange(stage.id)}
                    >
                      <div>{stage.label}</div>
                      <div>{stage.id === 'mcq-assessment' ? 1 : 0}</div>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  {idx !== arr.length - 1 && <BreadcrumbSeparator />}
                </div>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        </Card>
        <Card className='flex rounded-sm w-1/7'>

          <div className=' text-center w-1/2 text-xs'>
            <div className='flex items-center justify-center gap-1 p-2 text-sm'>
              <CircleCheck className="text-lime-600" size={15} />
              Hired
            </div>

            <div>0</div>
          </div>
          <Separator orientation="vertical" />
          <div className='text-center w-1/2 text-xs'>
            <div className='flex items-center justify-center gap-1 p-2 text-sm'>
            <CircleX className='text-red-500 shrink-0' size={15} />
              Archived
            </div>
            <div>1</div>
          </div>
        </Card>
      </div>






    // <div className='flex items-center justify-between'>
    //   <div className='warpper flex w-fit overflow-x-auto rounded-md border bg-white p-1'>
    //     {stages.map((stage, index) => {
    //       const isActive = activeStage === stage.id
    //       const isLast = index === stages.length - 1

    //       return (
           
    //         <div
    //           key={stage.id}
    //           onClick={() => onStageChange(stage.id)}
    //           className={cn(
    //             'relative flex cursor-pointer items-center justify-between rounded-md px-2 py-1 text-sm transition-colors',
    //             isActive
    //               ? 'bg-violet-100 text-violet-700'
    //               : 'bg-white text-muted-foreground hover:bg-muted/50',
    //             !isLast && 'mr-2'
    //           )}
    //         >
    //           <div className='flex flex-col items-center'>
    //             <span className='text-nowrap font-normal'>{stage.label}</span>
    //             <span className='text-xs text-muted-foreground'>
    //               {stage.count}
    //             </span>
    //           </div>
    //         </div>
    //       )
    //     })}
    //   </div>
    //   <div className='flex w-fit overflow-x-auto rounded-md border bg-white p-1'>
    //     {data.map((stage, index) => {
    //       const isActive = activeStage === stage.id
    //       const isLast = index === stages.length - 1

    //       return (
    //         <div
    //           key={stage.id}
    //           onClick={() => onStageChange(stage.id)}
    //           className={cn(
    //             'relative flex cursor-pointer items-center justify-between rounded-md px-2 py-1 text-sm transition-colors',
    //             isActive
    //               ? 'bg-violet-100 text-violet-700'
    //               : 'bg-white text-muted-foreground hover:bg-muted/50',
    //             stage.isSuccess && 'text-green-600',
    //             stage.isRejected && 'text-red-600',
    //             !isLast && 'mr-2'
    //           )}
    //         >
    //           <div className='flex flex-col items-center'>
    //             <span className='text-nowrap font-normal'>{stage.label}</span>
    //             <span className='text-xs text-muted-foreground'>
    //               {stage.count}
    //             </span>
    //           </div>
    //         </div>
    //       )
    //     })}
    //   </div>
    // </div>
  )
}
