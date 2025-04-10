import { PlusCircle, LayoutGrid, List, ChevronDown } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Switch } from '@/components/ui/switch'
import { JobCard } from './components/job-card'
import { mockData } from '../data/mock-data'

export default function JobsPage() {
    const { jobTypes, jobs } = mockData
  const activeJobType = jobTypes.find((type) => type.id === "active")
  return (
   
        <div className=''>
          <div className='mb-6 flex items-center justify-between'>
            <div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant='ghost'
                    className='h-auto p-0 hover:bg-transparent'
                  >
                    <h1 className='flex items-center gap-2 text-2xl font-semibold text-violet-700'>
                      {activeJobType?.label}{' '}
                      <Badge variant='outline' className='ml-1'>
                        ({activeJobType?.count})
                      </Badge>
                      <ChevronDown className='ml-1 h-5 w-5' />
                    </h1>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='start'>
                  {jobTypes.map((type) => (
                    <DropdownMenuItem key={type.id}>
                      {type.label} ({type.count})
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <p className='text-muted-foreground'>
                Here you can find all the jobs of this organisation.
              </p>
            </div>
            <div className='flex items-center gap-4'>
              <div className='flex items-center gap-2'>
                <Switch id='priority-filter' />
                <label htmlFor='priority-filter' className='text-sm'>
                  Show only priority
                </label>
              </div>
              <div className='flex rounded-md border'>
                <Button variant='ghost' size='icon' className='rounded-r-none'>
                  <LayoutGrid className='h-4 w-4' />
                </Button>
                <Button variant='ghost' size='icon' className='rounded-l-none'>
                  <List className='h-4 w-4' />
                </Button>
              </div>
              <Button className='bg-violet-700 text-white hover:bg-violet-800'>
                <PlusCircle className='mr-2 h-4 w-4' /> Create Job
              </Button>
            </div>
          </div>

          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
            {jobs.map((job) => (
              <JobCard
                key={job.id}
                title={job.title}
                department={job.department}
                location={job.location}
                candidatesCount={job.candidatesCount}
                totalPositions={job.totalPositions}
                overdueDays={job.overdueDays}
                newCandidates={job.newCandidates}
                archivedCandidates={job.archivedCandidates}
                isOnline={job.isOnline}
                assignee={job.assignee}
              />
            ))}
          </div>
        </div>
     
  )
}
