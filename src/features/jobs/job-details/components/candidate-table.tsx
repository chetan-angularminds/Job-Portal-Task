import { useState } from 'react'
import { ChatBubbleIcon, DotsVerticalIcon } from '@radix-ui/react-icons'
import { useRouter } from '@tanstack/react-router'
import {
  ChevronDown,
  Search,
  Filter,
  Download,
  MoreVertical,
  ExternalLink,
  MessageSquare,
  EllipsisIcon,
  LogOut,
} from 'lucide-react'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from '@/components/ui/select'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { mockData } from '../../data/mock-data'

export function CandidateTable() {
  const [selectedCandidates, setSelectedCandidates] = useState<string[]>([])
  const { candidates, filters } = mockData
  const router = useRouter()
  // Filter to only show candidates in MCQ Assessment stage
  const filteredCandidates = candidates.filter(
    (candidate) => candidate.stage === 'MCQ Assessment'
  )

  const toggleSelectAll = () => {
    if (selectedCandidates.length === filteredCandidates.length) {
      setSelectedCandidates([])
    } else {
      setSelectedCandidates(filteredCandidates.map((c) => c.id))
    }
  }

  const toggleSelectCandidate = (id: string) => {
    if (selectedCandidates.includes(id)) {
      setSelectedCandidates(selectedCandidates.filter((c) => c !== id))
    } else {
      setSelectedCandidates([...selectedCandidates, id])
    }
  }

  return (
    <div className='rounded-xs border-red border'>
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
        <div className='w-full rounded-md border'>
          <Table>
            <TableHeader>
              <TableRow className='text-xs'>
                <TableHead className=''>
                  <Checkbox
                    checked={
                      selectedCandidates.length === filteredCandidates.length &&
                      filteredCandidates.length > 0
                    }
                    onCheckedChange={toggleSelectAll}
                  />
                </TableHead>
                <TableHead>CANDIDATE NAME</TableHead>
                <TableHead>SOURCE</TableHead>
                <TableHead>APPLIED/ADDED ON</TableHead>
                <TableHead>TAGS</TableHead>
                <TableHead>OWNER</TableHead>
                <TableHead>DAYS IN CURRENT STAGE</TableHead>
                <TableHead>CONTACT</TableHead>
                <TableHead className='w-[80px]'>ACTIONS</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className='text-xs'>
              {filteredCandidates.map((candidate) => (
                <TableRow key={candidate.id}>
                  <TableCell>
                    <Checkbox
                      checked={selectedCandidates.includes(candidate.id)}
                      onCheckedChange={() =>
                        toggleSelectCandidate(candidate.id)
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <div
                      className='flex items-center gap-2 hover:cursor-pointer '
                      onClick={(e) => {
                        e.preventDefault()
                        router.navigate({
                          to: `/jobs/candidate/${candidate.id}`,
                        })
                      }}
                    >
                      <Avatar className='flex h-8 w-8 items-center justify-center bg-amber-500 text-xs'>
                        <span>{candidate.initials}</span>
                      </Avatar>
                      <span className='font-medium hover:underline'>
                        {candidate.firstName} {candidate.lastName}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div>
                      <div>{candidate.source}</div>
                      <div className='text-xs text-muted-foreground'>
                        {candidate.sourceDetail}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{candidate.appliedDate}</TableCell>
                  <TableCell>{candidate.tags}</TableCell>
                  <TableCell>{candidate.owner}</TableCell>
                  <TableCell>{candidate.daysInStage}</TableCell>
                  <TableCell>
                    <div>
                      <div>{candidate.phone}</div>
                      <div className='text-xs text-muted-foreground'>
                        {candidate.email}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className='flex items-center gap-1'>
                      <Button variant='ghost' size='icon' className='h-8 w-8'>
                        <LogOut className='h-4 w-4' />
                      </Button>
                      <Button variant='ghost' size='icon' className='h-8 w-8'>
                        <ChatBubbleIcon className='h-4 w-4' />
                      </Button>
                      <Button variant='ghost' size='icon' className='h-8 w-8'>
                        <MoreVertical className='h-4 w-4' />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

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
  )
}
