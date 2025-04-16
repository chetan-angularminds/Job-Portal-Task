/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import { LogOut, MessageSquare, MoreHorizontal } from 'lucide-react'
import { Avatar } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Candidate } from '../../data/job-types'
import { CandidateDialog } from './candidate-details-dialogue'

export function DataTable({ candidates, stage, jobName }: { candidates: Candidate[], stage: string, jobName: string }) {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [selectedCandidates, setSelectedCandidates] = useState<string[]>([])
  const [selectedCandidateId, setSelectedCandidateId] = useState<string | null>(null)
  const handleCandidateClick = (candidateId: string) => {
    setSelectedCandidateId(candidateId)
    setDialogOpen(true)
  }
  const toggleSelectAll = () => {
    if (selectedCandidates.length === candidates.length) {
      setSelectedCandidates([])
    } else {
      setSelectedCandidates(candidates.map((c) => c.id))
    }
  }

  const toggleSelectCandidate = (id: string) => {
    if (selectedCandidates.includes(id)) {
      setSelectedCandidates(selectedCandidates.filter((c) => c !== id))
    } else {
      setSelectedCandidates([...selectedCandidates, id])
    }
  }
  useEffect(() => {
    if (dialogOpen) {
      document.documentElement.style.overflow = 'hidden'
      document.body.style.overflow = 'hidden'
      document.body.style.setProperty('--webkit-scrollbar', 'none')
    } else {
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
      document.body.style.removeProperty('--webkit-scrollbar')
    }
  }, [dialogOpen])
  const handleCloseDialog = () => {
    setDialogOpen(false)
  }

  return (
    <>
      <div className='relative w-full overflow-x-auto border border-gray-200'>
        <Table className='min-w-[1400px] text-nowrap text-xs'>
          <TableHeader className='bg-gray-50'>
            <TableRow className='bg-gray-300 hover:bg-gray-300'>
              <TableHead className='sticky left-0 z-20 w-[40px] border-collapse border-b-[1px] bg-gray-300 px-4 py-3 text-center'>
                <Checkbox
                  checked={
                    selectedCandidates.length === candidates.length &&
                    candidates.length > 0
                  }
                  onCheckedChange={toggleSelectAll}
                />
              </TableHead>

              <TableHead className='sticky left-[30px] z-10 border-collapse border-b-2 bg-gray-300 px-4 py-3 text-xs shadow-[inset_-4px_0_8px_-2px_rgba(169,169,169,0.3)]'>
                CANDIDATE NAME
              </TableHead>

              <TableHead className='px-4 py-3 text-xs'>SOURCE</TableHead>
              <TableHead className='px-4 py-3 text-xs'>
                APPLIED/ADDED ON
              </TableHead>
              <TableHead className='px-4 py-3 text-xs'>TAGS</TableHead>
              <TableHead className='px-4 py-3 text-xs'>OWNER</TableHead>

              {[...Array(7)].map((_, i) => (
                <TableHead key={i} className='px-4 py-3 text-xs'>
                  DAYS IN CURRENT STAGE
                </TableHead>
              ))}

              <TableHead className="sticky right-[100px] z-10 border-b-2 bg-gray-300 px-4 py-3 font-medium shadow-[inset_4px_0_8px_-2px_rgba(169,169,169,0.3)] after:pointer-events-none after:absolute after:right-0 after:top-0 after:h-full after:w-2 after:shadow-[4px_0_6px_-1px_rgba(0,0,0,0.15)] after:content-['']">
                CONTACT
              </TableHead>

              <TableHead className='sticky right-0 z-20 border-b-2 bg-gray-300 px-4 py-3 text-center font-medium'>
                ACTIONS
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {candidates.map((candidate) => (
              <TableRow key={candidate.id} className='hover:bg-gray-50'>
                <TableCell className='sticky left-0 z-20 bg-white px-4 py-3 text-center shadow-md'>
                  <Checkbox
                    checked={selectedCandidates.includes(candidate.id)}
                    onCheckedChange={() => toggleSelectCandidate(candidate.id)}
                  />
                </TableCell>

                <TableCell className='sticky left-[30px] z-10 bg-white px-4 py-3 shadow-[inset_-4px_0_8px_-2px_rgba(169,169,169,0.3)]'>
                  <div
                    className='flex items-center gap-2 hover:cursor-pointer'
                    onClick={(e) => {
                      e.preventDefault()
                      handleCandidateClick(candidate.id)
                    }}
                  >
                    <Avatar className='flex h-8 w-8 items-center justify-center bg-amber-500 text-xs'>
                      <span>
                        {candidate.firstName.charAt(0)}
                        {candidate.lastName.charAt(0)}
                      </span>
                    </Avatar>
                    <span className='font-medium hover:underline'>
                      {candidate.firstName} {candidate.lastName}
                    </span>
                  </div>
                </TableCell>

                <TableCell className='overflow-hidden px-4 py-3'>
                  <div>
                    <div>{candidate.source}</div>
                    <div className='text-xs text-gray-500'>
                      {candidate.sourceTags}
                    </div>
                  </div>
                </TableCell>

                <TableCell className='px-4 py-3'>
                  {new Date(candidate.appliedDate).toLocaleDateString('en-UK', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric',
                  })}
                </TableCell>
                <TableCell className='px-4 py-3 text-gray-500'>
                  {candidate.tags}
                </TableCell>
                <TableCell className='px-4 py-3'>
                  {candidate.candidateOwner}
                </TableCell>

                {[...Array(7)].map((_, i) => (
                  <TableCell key={i} className='px-4 py-3'>
                    {candidate.daysInStage}
                  </TableCell>
                ))}

                <TableCell className='sticky right-[100px] z-10 bg-white px-4 py-3 shadow-[inset_4px_0_8px_-2px_rgba(169,169,169,0.3)]'>
                  <div>
                    <div>{candidate.mobile}</div>
                    <div className='text-xs text-gray-500'>
                      {candidate.email}
                    </div>
                  </div>
                </TableCell>

                <TableCell className='sticky right-0 z-20 bg-white px-4 py-3 shadow-md'>
                  <div className='flex justify-center space-x-2'>
                    <Button variant='ghost' size='icon' className='h-8 w-8'>
                      <LogOut className='h-4 w-4' />
                    </Button>
                    <Button variant='ghost' size='icon' className='h-8 w-8'>
                      <MessageSquare className='h-4 w-4' />
                    </Button>
                    <Button variant='ghost' size='icon' className='h-8 w-8'>
                      <MoreHorizontal className='h-4 w-4' />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <CandidateDialog
        isOpen={dialogOpen}
        onClose={handleCloseDialog}
        candidateId={selectedCandidateId}
        stage={stage}
        jobName={jobName}
      />
    </>
  )
}
