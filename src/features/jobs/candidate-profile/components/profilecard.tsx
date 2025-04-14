import { Calendar, Plus } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function ProfileCard() {
  return (
    <Card className='rounded-none'>
      <CardContent className='p-6'>
        <div className='flex items-center justify-between py-2'>
          {/* Availability */}
          <div className='flex items-start gap-3'>
            <div className='flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 text-purple-500'>
              <Calendar className='h-4 w-4' />
            </div>
            <div>
              <div className='text-sm font-medium underline decoration-cyan-400 decoration-dashed underline-offset-4'>
                Available To Join (in days) - 30 days
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className='flex items-start gap-3'>
            <div className='flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 text-purple-500'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='lucide lucide-briefcase'
              >
                <rect width='20' height='14' x='2' y='7' rx='2' />
                <path d='M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16' />
              </svg>
            </div>
            <div>
              <div className='text-sm font-medium underline decoration-cyan-400 decoration-dashed underline-offset-4'>
                Experience - 5y 2m
              </div>
            </div>
          </div>

          {/* Location */}
          <div className='flex items-start gap-3'>
            <div className='flex h-8 w-8 items-center justify-center rounded-full text-amber-500'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='lucide lucide-map-pin'
              >
                <path d='M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z' />
                <circle cx='12' cy='10' r='3' />
              </svg>
            </div>
            <div>
              <div className='text-sm font-medium underline decoration-cyan-400 decoration-dashed underline-offset-4'>
                Location
              </div>
            </div>
          </div>

          {/* Current Salary */}
          <div className='flex items-start gap-3'>
            <div className='flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-500'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='lucide lucide-dollar-sign'
              >
                <line x1='12' x2='12' y1='2' y2='22' />
                <path d='M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' />
              </svg>
            </div>
            <div>
              <div className='text-sm font-medium underline decoration-cyan-400 decoration-dashed underline-offset-4'>
                Current Salary
              </div>
            </div>
          </div>

          {/* Expected Salary */}
          <div className='flex items-start gap-3'>
            <div className='flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-500'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='lucide lucide-dollar-sign'
              >
                <line x1='12' x2='12' y1='2' y2='22' />
                <path d='M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' />
              </svg>
            </div>
            <div>
              <div className='text-sm font-medium underline decoration-cyan-400 decoration-dashed underline-offset-4'>
                Expected Salary
              </div>
            </div>
          </div>
        </div>
        <div className='flex gap-24 py-2'>
          {/* Add Experience */}
          <div className='flex items-center gap-2 text-sm text-primary'>
            <div className='flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-500'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='lucide lucide-dollar-sign'
              >
                <line x1='12' x2='12' y1='2' y2='22' />
                <path d='M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' />
              </svg>
            </div>
            <span>+Add experience</span>
          </div>

          {/* Add Education */}
          <div className='flex items-center gap-2 text-sm text-primary'>
            <div className='flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-500'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='lucide lucide-dollar-sign'
              >
                <line x1='12' x2='12' y1='2' y2='22' />
                <path d='M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6' />
              </svg>
            </div>
            <span>+Add education details</span>
          </div>
        </div>

        {/* Skills */}
        <div className='flex gap-2 py-4'>
          <div className='mb-2 flex items-center gap-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='text-muted-foreground'
            >
              <path d='M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z' />
            </svg>
            <span className='font-medium'>Skills</span>
          </div>
          <div className='flex items-center gap-2'>
            <Badge variant='secondary' className='rounded-md'>
              React
            </Badge>
            <Button
              variant='ghost'
              size='icon'
              className='h-6 w-6 rounded-full'
            >
              <Plus className='h-4 w-4' />
            </Button>
          </div>
        </div>

        {/* Tags */}
        <div className=' flex gap-2 py-4'>
          <div className='mb-2 flex items-center gap-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='text-amber-500'
            >
              <path d='M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z' />
              <path d='M7 7h.01' />
            </svg>
            <span className='font-medium'>Tags</span>
          </div>
          <div className='flex items-center gap-2 text-sm text-primary'>
            <span>Add Tag</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}





