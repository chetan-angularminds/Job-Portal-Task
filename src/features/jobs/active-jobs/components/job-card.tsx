import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import { IconCalendarEvent } from '@tabler/icons-react'
import { Check, Star, Users } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Avatar } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

interface JobCardProps {
  title: string
  department: string
  location: string
  candidatesCount: number
  totalPositions: number
  overdueDays: number
  newCandidates: number
  archivedCandidates: number
  isOnline: boolean
  isPriority?: boolean
  assignee?: string
  viewMode?: 'grid' | 'list'
}

export function JobCard({
  title,
  department,
  location,
  candidatesCount,
  totalPositions,
  overdueDays,
  newCandidates,
  archivedCandidates,
  isOnline,
  isPriority = false,
  assignee,
  viewMode = 'grid',
}: JobCardProps) {
  const [priority, setPriority] = useState(isPriority)

  const togglePriority = () => {
    setPriority(!priority)
  }

  const jobId = title.toLowerCase().replace(/\s+/g, '-')

  return (
    <Card
      className={cn(
        'overflow-hidden rounded-[3px]',
        viewMode === 'list' && 'flex'
      )}
    >
      <CardContent
        className={cn(
          'p-6',
          viewMode === 'list' && 'flex flex-1 items-center gap-6'
        )}
      >
        {viewMode === 'list' ? (
          <>
            <div className='flex-1'>
              <div className='flex items-start justify-between'>
                <div>
                  <h3 className='mb-1 text-md font-normal'>
                    <Link
                      href={`/jobs/job-details/${jobId}`}
                      className='text-kekaPurple-600 hover:underline'
                    >
                      {title}
                    </Link>
                  </h3>
                  <div className='flex items-center gap-1 text-sm text-muted-foreground'>
                    {department} <span className='mx-1'>|</span> {location}
                  </div>
                </div>
              </div>
            </div>

            <div className='flex items-center gap-4'>
              <div className='flex items-center gap-2'>
                <Users className='h-4 w-4 text-muted-foreground' />
                <span className='text-sm'>{candidatesCount}</span>
              </div>
              <div className='flex items-center gap-2'>
                <div className='h-4 w-4 rounded-full border border-[#97b433] text-[#97b433]'>
                  <Check className='h-3.5 w-3.5 text-[#97b433]' />
                </div>
                <span className='text-sm'>
                  {candidatesCount}/{totalPositions}
                </span>
              </div>
            </div>

            <div className='flex items-center gap-2'>
              <IconCalendarEvent
                stroke={1.25}
                className='h-4.5 w-4.5 text-rose-400'
              />
              <span className='text-sm text-rose-400'>
                Overdue by {overdueDays} days
              </span>
            </div>

            <div className='flex items-center gap-3'>
              {isOnline && (
                <Badge
                  variant='outline'
                  className='flex items-center gap-1 border-none border-green-200 bg-green-50 text-xs'
                >
                  <span className='h-2.5 w-2.5 rounded-full bg-[#97b433]'></span>
                  <span className='texr-sm my-auto pt-0.5 font-inter font-normal'>
                    ONLINE
                  </span>
                </Badge>
              )}

              {assignee && (
                <Avatar className='flex h-6 w-6 items-center justify-center bg-emerald-500 align-middle text-xs text-white'>
                  <span>{assignee}</span>
                </Avatar>
              )}
              {!assignee && (
                <div className='ml-auto'>
                  <Avatar className='flex h-6 w-6 items-center justify-center bg-white text-xs'>
                    <span className='rounded-full text-center text-white'></span>
                  </Avatar>
                </div>
              )}
              <button
                onClick={togglePriority}
                className={cn(
                  'rounded-full p-1',
                  priority
                    ? 'bg-rose-400 text-rose-50 hover:bg-rose-500'
                    : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                )}
              >
                <Star className='h-4 w-4' fill='white' />
              </button>
            </div>
          </>
        ) : (
          <>
            <div className='flex items-start justify-between'>
              <div>
                <h3 className='mb-1 text-md font-normal'>
                  <Link
                    href={`/jobs/job-details/${jobId}`}
                    className='text-kekaPurple-600 hover:underline'
                  >
                    {title}
                  </Link>
                </h3>
                <div className='flex items-center gap-1 text-sm text-muted-foreground'>
                  {department} <span className='mx-1'>|</span> {location}
                </div>
              </div>
              <button
                onClick={togglePriority}
                className={cn(
                  'flex h-5 w-5 items-center justify-center rounded-full',
                  priority
                    ? 'bg-rose-400 text-rose-50 hover:bg-rose-500'
                    : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                )}
              >
                <Star className='m-auto h-3.5 w-3.5' fill='white' />
              </button>
            </div>

            <div className='mt-4 flex items-center justify-between'>
              <div className='flex items-center gap-1.5'>
                <Users className='h-3 w-3 text-muted-foreground' />
                <span className='text-xs'>{candidatesCount} </span>
                <span className='bg-stone-400 w-1.5 h-1.5 mr-1 rounded-full'></span>
              </div>
              <div className='flex items-center gap-1.5'>
                <div className='h-3 w-3 rounded-full border border-[#97b433] text-[#97b433]'>
                  <Check className='h-2.5 w-2.5 text-[#97b433]' />
                </div>

                <span className='text-xs'>
                  {candidatesCount}/{totalPositions}
                </span>
                <span className='bg-stone-400 w-1.5 h-1.5 mr-1  rounded-full'></span>
              </div>
              <div className='flex items-center gap-1.5'>
                <IconCalendarEvent
                  stroke={1.25}
                  className='h-4 w-4 text-rose-400'
                />
                <span className='text-xs font-light text-nowrap text-rose-400'>
                  Overdue by {overdueDays} days{' '}
                </span>
                <span className='bg-stone-400 w-1.5 h-1.5 rounded-full mr-1'></span>
              </div>
              {assignee && (
                <div className=''>
                  <Avatar className='flex h-7 w-7 items-center justify-center bg-emerald-500 text-xs'>
                    <span className='rounded-full text-center text-white'>
                      {assignee}
                    </span>
                  </Avatar>
                </div>
              )}
              {!assignee && (
                <div className='ml-auto'>
                  <Avatar className='flex h-7 w-7 items-center justify-center bg-white text-xs'>
                    <span className='rounded-full text-center text-white'></span>
                  </Avatar>
                </div>
              )}
            </div>
          </>
        )}
      </CardContent>

      {viewMode === 'grid' && (
        <>
          <Separator className='mx-auto w-[90%]' />
          <CardFooter className='mx-auto w-[95%] flex items-center h-8 justify-between p-2'>
            <div className='text-sm text-muted-foreground flex items-center gap-2'>
              <span className='text-[8.5px] font-light'>{newCandidates} NEW CANDIDATES</span>
              <span className='bg-stone-400 w-1.5 h-1.5 rounded-full '></span> 
               <span className='text-[8.5px] font-light'>{archivedCandidates} ARCHIVED</span>
            </div>
            {isOnline && (
              <Badge
                variant='outline'
                className='flex items-center justify-center gap-1 border-none border-green-200 bg-green-50'
              >
                <span className='h-1.5 w-1.5 rounded-full bg-[#97b433]'></span>
                <span className='text-[9.5px] my-auto pt-0.5 font-inter font-normal text-muted-foreground '>
                  ONLINE
                </span>
              </Badge>
            )}
          </CardFooter>
        </>
      )}
    </Card>
  )
}
