import { DotsVerticalIcon } from '@radix-ui/react-icons'
import { ChevronDown, Search, Filter, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '@/components/ui/select'
import { mockData } from '../../data/mock-data'
import { DataTable } from './data-table'
import { EmptyState } from './empty-state'

export function CandidateTable({ stage, jobName }: { stage: string, jobName: string }) {
  const { candidates, filters } = mockData

  // Filter to only show candidates in MCQ Assessment stage
  const filteredCandidates = candidates.filter(
    (candidate) => candidate.stage === stage
  )

  const candidatesCount = filteredCandidates.length

  return (
    <div>
      {candidatesCount > 0 ? (
        <div className='rounded-xs border-red border' tabIndex={10}>
          <div className='mb-0 flex flex-wrap gap-4 border-b'>
            <div className='min-w-[200px] flex-1 border-r'>
              <Select defaultValue='source'>
                <SelectTrigger className='w-full border-y-0 border-l-0 text-xs focus:border-none focus:outline-none focus:ring-0'>
                  <div className='flex items-center gap-2'>
                    <span>Source</span>
                  </div>
                </SelectTrigger>
                <SelectContent>
                  {filters.sources.map((source) => (
                    <SelectItem key={source.id} value={source.value}>
                      {source.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className='min-w-[200px] flex-1 border-r'>
              <Select defaultValue='experience'>
                <SelectTrigger className='w-full border-none text-xs focus:ring-0'>
                  <div className='flex items-center gap-2'>
                    <span>Experience</span>
                  </div>
                </SelectTrigger>
                <SelectContent>
                  {filters.experience.map((exp) => (
                    <SelectItem key={exp.id} value={exp.value}>
                      {exp.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className='min-w-[200px] flex-1 border-r'>
              <Select defaultValue='salary'>
                <SelectTrigger className='w-full border-none text-xs focus:ring-0'>
                  <div className='flex items-center gap-2'>
                    <span>Expected Salary</span>
                  </div>
                </SelectTrigger>
                <SelectContent>
                  {filters.salary.map((salary) => (
                    <SelectItem key={salary.id} value={salary.value}>
                      {salary.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className='min-w-[200px] flex-1 border-r'>
              <Select defaultValue='availability'>
                <SelectTrigger className='w-full border-none text-xs focus:ring-0'>
                  <div className='flex items-center gap-2'>
                    <span>Available To Join (In Days)</span>
                  </div>
                </SelectTrigger>
                <SelectContent>
                  {filters.availability.map((avail) => (
                    <SelectItem key={avail.id} value={avail.value}>
                      {avail.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className='min-w-[200px] flex-1'>
              <Select defaultValue='tags'>
                <SelectTrigger className='w-full border-none text-xs focus:ring-0'>
                  <div className='flex items-center gap-2'>
                    <span>Tags</span>
                  </div>
                </SelectTrigger>
                <SelectContent>
                  {filters.tags.map((tag) => (
                    <SelectItem key={tag.id} value={tag.value}>
                      {tag.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className='m-0 flex items-center gap-2 border-b'>
            <div className='focus:ring-red relative mt-0 flex-1 focus:border-none focus:outline-none'>
              <Search className='absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground' />
              <Input
                placeholder='Search'
                className='border-none pl-10 outline-none'
              />
            </div>
            <Button variant='outline' size='icon' className='border-none'>
              <Filter className='h-4 w-4' />
            </Button>
          </div>

          <div className='flex items-center justify-between p-2'>
            <Button
              variant='outline'
              size='sm'
              className='border-none bg-kekaPurple-550 text-white hover:bg-kekaPurple-600 hover:text-white'
            >
              Bulk Actions <ChevronDown className='ml-2 h-4 w-4' />
            </Button>
            <div>
              <Button variant='outline' size='icon' className='border-none'>
                <Download className='h-4 w-4' />
              </Button>
              <Button variant='outline' size='icon' className='border-none'>
                <DotsVerticalIcon />
              </Button>
            </div>
          </div>

          <div className='w-full p-0'>
            <DataTable candidates={filteredCandidates} stage={stage} jobName={jobName} />

            <div className='flex items-center justify-end text-xs text-muted-foreground'>
              <div>
                1 to {filteredCandidates.length} of {filteredCandidates.length}
              </div>
              <div className='flex items-center gap-2'>
                <Button variant='outline' size='sm' disabled>
                  &lt;
                </Button>
                <span>Page 1 of 1</span>
                <Button variant='outline' size='sm' disabled>
                  &gt;
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <EmptyState
          title='No candidates here'
          description='There are no candidates available to show'
          actions={
            <div className='flex gap-2'>
              <Button className='bg-violet-700 text-white hover:bg-violet-800'>
                Add candidate <ChevronDown className='ml-2 h-4 w-4' />
              </Button>
              <Button variant='outline'>Import from talent pool</Button>
            </div>
          }
        />
      )}
    </div>
  )
}
