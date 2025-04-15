import { ChevronDown, Search, Filter, Download, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '@/components/ui/select'
import { mockData } from '../data/mock-data'
import { DataTable } from '../job-details/components/data-table'

export function CandidateList() {
  const { candidates, filters } = mockData

  const filteredCandidates = candidates

  return (
    <div className='space-y-4'>
      <div className='flex flex-wrap gap-4'>
        <div className='min-w-[200px] flex-1'>
          <Select defaultValue='source'>
            <SelectTrigger className='w-full'>
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

        <div className='min-w-[200px] flex-1'>
          <Select defaultValue='experience'>
            <SelectTrigger className='w-full'>
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

        <div className='min-w-[200px] flex-1'>
          <Select defaultValue='salary'>
            <SelectTrigger className='w-full'>
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

        <div className='min-w-[200px] flex-1'>
          <Select defaultValue='availability'>
            <SelectTrigger className='w-full'>
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
            <SelectTrigger className='w-full'>
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

      <div className='flex items-center gap-2'>
        <div className='relative flex-1'>
          <Search className='absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground' />
          <Input placeholder='Search' className='pl-10' />
        </div>
        <Button variant='outline' size='icon'>
          <Filter className='h-4 w-4' />
        </Button>
        <Button variant='outline' size='icon'>
          <Download className='h-4 w-4' />
        </Button>
      </div>

      <div>
        <div className='flex w-full justify-between'>
          <Button variant='outline' size='sm' className='mb-2'>
            Bulk Actions <ChevronDown className='ml-2 h-4 w-4' />
          </Button>
          <Button className='bg-violet-700 text-white hover:bg-violet-800'>
            <Plus className='h-4 w-4' />
            Add Candidate
          </Button>
        </div>
        <DataTable candidates={candidates} />

        <div className='mt-4 flex items-center justify-between text-sm text-muted-foreground'>
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
  )
}
