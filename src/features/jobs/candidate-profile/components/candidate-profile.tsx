/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";


export function CandidateProfile({candidate}:any){
    return (
        <div className='flex w-full'>
            {/* Left column - Candidate details */}
            <div>
            <div className='space-y-6 border'>
              <div className='flex items-center gap-3 rounded-md border p-3'>
                <div className='flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-500'>
                  <svg
                    width='16'
                    height='16'
                    viewBox='0 0 16 16'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M8 4V8L10.6667 10.6667M14.6667 8C14.6667 11.6819 11.6819 14.6667 8 14.6667C4.3181 14.6667 1.33333 11.6819 1.33333 8C1.33333 4.3181 4.3181 1.33333 8 1.33333C11.6819 1.33333 14.6667 4.3181 14.6667 8Z'
                      stroke='currentColor'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
                <div className='flex-1'>
                  Available To Join (in days) - 30 days
                </div>
              </div>

              <div className='flex items-center gap-3 rounded-md border p-3'>
                <div className='flex h-8 w-8 items-center justify-center rounded-full bg-purple-50 text-purple-500'>
                  <svg
                    width='16'
                    height='16'
                    viewBox='0 0 16 16'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M13.3333 5.33333L8 2L2.66667 5.33333M13.3333 5.33333L8 8.66667M13.3333 5.33333V10.6667L8 14M2.66667 5.33333L8 8.66667M2.66667 5.33333V10.6667L8 14M8 8.66667V14'
                      stroke='currentColor'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
                <div className='flex-1'>Experience - 5y 2m</div>
              </div>

              <div className='flex items-center gap-3 rounded-md border p-3'>
                <div className='flex h-8 w-8 items-center justify-center rounded-full bg-amber-50 text-amber-500'>
                  <svg
                    width='16'
                    height='16'
                    viewBox='0 0 16 16'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M8.66667 1.33333L2 9.33333H8L7.33333 14.6667L14 6.66667H8L8.66667 1.33333Z'
                      stroke='currentColor'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
                <div className='flex-1'>Location</div>
              </div>

              <div className='flex items-center gap-3 rounded-md border p-3'>
                <div className='flex h-8 w-8 items-center justify-center rounded-full bg-green-50 text-green-500'>
                  <svg
                    width='16'
                    height='16'
                    viewBox='0 0 16 16'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M8 1.33333V14.6667M8 1.33333L4 5.33333M8 1.33333L12 5.33333M1.33333 10.6667H4.66667C5.40304 10.6667 6.1087 10.9476 6.6088 11.4477C7.10889 11.9478 7.38989 12.6535 7.38989 13.3898C7.38989 14.1262 7.10889 14.8319 6.6088 15.332C6.1087 15.8321 5.40304 16.113 4.66667 16.113H1.33333V10.6667ZM11.3333 10.6667H14.6667V13.3333C14.6667 14.0697 14.3857 14.7754 13.8856 15.2755C13.3855 15.7756 12.6798 16.0566 11.9435 16.0566C11.2071 16.0566 10.5014 15.7756 10.0013 15.2755C9.50123 14.7754 9.22023 14.0697 9.22023 13.3333C9.22023 12.597 9.50123 11.8913 10.0013 11.3912C10.5014 10.8911 11.2071 10.6101 11.9435 10.6101L11.3333 10.6667Z'
                      stroke='currentColor'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
                <div className='flex-1'>Current Salary</div>
              </div>

              <div className='flex items-center gap-3 rounded-md border p-3'>
                <div className='flex h-8 w-8 items-center justify-center rounded-full bg-green-50 text-green-500'>
                  <svg
                    width='16'
                    height='16'
                    viewBox='0 0 16 16'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M8 1.33333V14.6667M8 1.33333L4 5.33333M8 1.33333L12 5.33333M1.33333 10.6667H4.66667C5.40304 10.6667 6.1087 10.9476 6.6088 11.4477C7.10889 11.9478 7.38989 12.6535 7.38989 13.3898C7.38989 14.1262 7.10889 14.8319 6.6088 15.332C6.1087 15.8321 5.40304 16.113 4.66667 16.113H1.33333V10.6667ZM11.3333 10.6667H14.6667V13.3333C14.6667 14.0697 14.3857 14.7754 13.8856 15.2755C13.3855 15.7756 12.6798 16.0566 11.9435 16.0566C11.2071 16.0566 10.5014 15.7756 10.0013 15.2755C9.50123 14.7754 9.22023 14.0697 9.22023 13.3333C9.22023 12.597 9.50123 11.8913 10.0013 11.3912C10.5014 10.8911 11.2071 10.6101 11.9435 10.6101L11.3333 10.6667Z'
                      stroke='currentColor'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
                <div className='flex-1'>Expected Salary</div>
              </div>

              <div className='mt-4 flex items-center gap-2'>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='text-violet-500'
                >
                  <path
                    d='M8 5.33333V8M8 10.6667H8.00667M14.6667 8C14.6667 11.6819 11.6819 14.6667 8 14.6667C4.3181 14.6667 1.33333 11.6819 1.33333 8C1.33333 4.3181 4.3181 1.33333 8 1.33333C11.6819 1.33333 14.6667 4.3181 14.6667 8Z'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
                <Button
                  variant='ghost'
                  size='sm'
                  className='h-auto p-0 text-violet-600'
                >
                  + Add experience
                </Button>
              </div>
            </div>

            {/* Right column - Skills, Tags, Education */}
            <div className='space-y-6'>
              <div className='space-y-2'>
                <div className='flex items-center gap-2'>
                  <svg
                    width='16'
                    height='16'
                    viewBox='0 0 16 16'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='text-violet-500'
                  >
                    <path
                      d='M7.33333 14.6667C3.65143 14.6667 0.666664 11.6819 0.666664 8.00001C0.666664 4.31811 3.65143 1.33334 7.33333 1.33334C11.0152 1.33334 14 4.31811 14 8.00001C14 8.73639 13.8829 9.44506 13.6667 10.1111M13.3333 14.6667L10 11.3333M10 11.3333C10.7364 11.3333 11.4451 11.2162 12.1111 11M10 11.3333C8.15905 11.3333 6.54738 10.5262 5.47653 9.28209'
                      stroke='currentColor'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                  <span className='text-sm font-medium'>Skills</span>
                </div>
                <div className='flex flex-wrap gap-2 rounded-md border p-3'>
                  <Badge className='border-0 bg-gray-100 text-gray-800 hover:bg-gray-200'>
                    React
                  </Badge>
                  <Button
                    variant='outline'
                    size='sm'
                    className='h-6 rounded-full text-xs'
                  >
                    <Plus className='mr-1 h-3 w-3' /> Add Skill
                  </Button>
                </div>
              </div>

              <div className='space-y-2'>
                <div className='flex items-center gap-2'>
                  <svg
                    width='16'
                    height='16'
                    viewBox='0 0 16 16'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='text-violet-500'
                  >
                    <path
                      d='M13.3333 8.00001H10.6667C10.3131 8.00001 9.97391 8.14049 9.72386 8.39053C9.47381 8.64058 9.33333 8.97972 9.33333 9.33334V12C9.33333 12.3536 9.47381 12.6928 9.72386 12.9428C9.97391 13.1929 10.3131 13.3333 10.6667 13.3333H13.3333C13.687 13.3333 14.0261 13.1929 14.2761 12.9428C14.5262 12.6928 14.6667 12.3536 14.6667 12V9.33334C14.6667 8.97972 14.5262 8.64058 14.2761 8.39053C14.0261 8.14049 13.687 8.00001 13.3333 8.00001ZM5.33333 8.00001H2.66666C2.31304 8.00001 1.9739 8.14049 1.72385 8.39053C1.4738 8.64058 1.33333 8.97972 1.33333 9.33334V12C1.33333 12.3536 1.4738 12.6928 1.72385 12.9428C1.9739 13.1929 2.31304 13.3333 2.66666 13.3333H5.33333C5.68695 13.3333 6.02609 13.1929 6.27614 12.9428C6.52619 12.6928 6.66666 12.3536 6.66666 12V9.33334C6.66666 8.97972 6.52619 8.64058 6.27614 8.39053C6.02609 8.14049 5.68695 8.00001 5.33333 8.00001ZM13.3333 2.66667H10.6667C10.3131 2.66667 9.97391 2.80715 9.72386 3.0572C9.47381 3.30725 9.33333 3.64638 9.33333 4.00001V6.66667C9.33333 7.0203 9.47381 7.35943 9.72386 7.60948C9.97391 7.85953 10.3131 8.00001 10.6667 8.00001H13.3333C13.687 8.00001 14.0261 7.85953 14.2761 7.60948C14.5262 7.35943 14.6667 7.0203 14.6667 6.66667V4.00001C14.6667 3.64638 14.5262 3.30725 14.2761 3.0572C14.0261 2.80715 13.687 2.66667 13.3333 2.66667ZM5.33333 2.66667H2.66666C2.31304 2.66667 1.9739 2.80715 1.72385 3.0572C1.4738 3.30725 1.33333 3.64638 1.33333 4.00001V6.66667C1.33333 7.0203 1.4738 7.35943 1.72385 7.60948C1.9739 7.85953 2.31304 8.00001 2.66666 8.00001H5.33333C5.68695 8.00001 6.02609 7.85953 6.27614 7.60948C6.52619 7.35943 6.66666 7.0203 6.66666 6.66667V4.00001C6.66666 3.64638 6.52619 3.30725 6.27614 3.0572C6.02609 2.80715 5.68695 2.66667 5.33333 2.66667Z'
                      stroke='currentColor'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                  <span className='text-sm font-medium'>Tags</span>
                </div>
                <div className='flex flex-wrap gap-2 rounded-md border p-3'>
                  <Button
                    variant='outline'
                    size='sm'
                    className='h-6 rounded-full text-xs'
                  >
                    <Plus className='mr-1 h-3 w-3' /> Add Tag
                  </Button>
                </div>
              </div>

              <div className='mt-4 flex items-center gap-2'>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='text-violet-500'
                >
                  <path
                    d='M5.33333 14.6667H10.6667M8 11.3333V14.6667M2.66667 1.33334H13.3333C14.0697 1.33334 14.6667 1.93029 14.6667 2.66667V9.33334C14.6667 10.0697 14.0697 10.6667 13.3333 10.6667H2.66667C1.93029 10.6667 1.33333 10.0697 1.33333 9.33334V2.66667C1.33333 1.93029 1.93029 1.33334 2.66667 1.33334Z'
                    stroke='currentColor'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
                <Button
                  variant='ghost'
                  size='sm'
                  className='h-auto p-0 text-violet-600'
                >
                  + Add education details
                </Button>
              </div>
            </div>
            <div className='border-t p-6'>
        <div className='mb-4 flex items-center justify-between'>
          <h3 className='text-xs font-semibold uppercase text-gray-500'>
            Resume
          </h3>
          <div className='flex items-center gap-2'>
            <Button
              variant='outline'
              size='sm'
              className='border-gray-300 text-violet-700'
            >
              <svg
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='mr-1'
              >
                <path
                  d='M8 1.33334V14.6667M8 1.33334L4 5.33334M8 1.33334L12 5.33334'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              Attach file
            </Button>
          </div>
        </div>

        <div className='flex items-center justify-between rounded-md border bg-gray-50 p-3'>
          <div className='flex items-center gap-2'>
            <svg
              viewBox='0 0 24 24'
              className='h-6 w-6 text-blue-600'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
            >
              <path d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z' />
              <polyline points='14 2 14 8 20 8' />
              <line x1='16' y1='13' x2='8' y2='13' />
              <line x1='16' y1='17' x2='8' y2='17' />
              <polyline points='10 9 9 9 8 9' />
            </svg>
            <div>
              <div className='font-medium'>{candidate.resume}</div>
              <div className='text-xs text-muted-foreground'>
                Added on {candidate.appliedDate}
              </div>
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <Button variant='ghost' size='icon' className='h-8 w-8'>
              <svg
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10M4.66667 6.66667L8 10M8 10L11.3333 6.66667M8 10V2'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </Button>
            <Button variant='ghost' size='icon' className='h-8 w-8'>
              <svg
                width='16'
                height='4'
                viewBox='0 0 16 4'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M8 0C6.9 0 6 0.9 6 2C6 3.1 6.9 4 8 4C9.1 4 10 3.1 10 2C10 0.9 9.1 0 8 0ZM14 0C12.9 0 12 0.9 12 2C12 3.1 12.9 4 14 4C15.1 4 16 3.1 16 2C16 0.9 15.1 0 14 0ZM2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0Z'
                  fill='currentColor'
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
            </div>
          </div>
    )
}