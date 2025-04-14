import { useParams } from '@tanstack/react-router'
import { IconBrandWhatsapp, IconDots } from '@tabler/icons-react'
import {
  ArrowDownToLine,
  Circle,
  EllipsisVertical,
  Facebook,
  Globe,
  Instagram,
  LockKeyhole,
  Mail,
  Phone,
  Twitter,
  PhoneIcon as WhatsApp,
} from 'lucide-react'
import { ChevronLeft } from 'lucide-react'
import { ChevronRight } from 'lucide-react'
import { Pencil } from 'lucide-react'
import { CalendarSearch } from 'lucide-react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

import { mockData } from '../data/mock-data'
import { LinkedInIcon } from './components/linkedInIcon'
import ProfileCard from './components/profilecard'
import { XIcon } from './components/XIcon'
import { SkypeIcon } from './components/skypeIcon'
import { GooglePlusIcon } from './components/googlePlusIcon'

const socialIcons = [
  { label: 'Email', icon: SkypeIcon },
  { label: 'LinkedIn', icon: LinkedInIcon },
  { label: 'Facebook', icon: Facebook },
  { label: 'Twitter', icon: XIcon },
  { label: 'Instagram', icon: GooglePlusIcon },
  { label: 'WhatsApp', icon: Globe },
]

const tabList = [
  { value: 'profile', label: 'Profile' },
  { value: 'messages', label: 'Messages' },
  { value: 'feedback', label: 'Feedback' },
  { value: 'documents', label: 'Documents' },
  { value: 'engagement', label: 'Engagement' },
  { value: 'activity', label: 'Activity' },
]

const documentTabs = [
  {
    value: 'resume',
    label: 'RESUME',
    content: 'Naukri_ShwetaBhatnagar(5y_1m).docx',
  },
  {
    value: 'application',
    label: 'APPLICATION FORM',
    content: 'Application form content',
  },
  {
    value: 'aws',
    label: 'AWS CREDITS MANAGEMENT REQUIREMENTS_SEEDITS_12-4-2024 (2).DOCX',
    content: 'AWS document content',
  },
]

export default function CandidateProfile() {
  const candidateId = useParams({
    from: '/_authenticated/jobs/candidate/$candidateId/',
  }).candidateId

  const candidateList = mockData.candidates

  const candidate = candidateList.find(
    (candidate) => candidate.id === candidateId
  )

  if (!candidate) {
    return <div>Candidate not found</div>
  }

  return (
    <div className='mt-0'>
      <div className='pl-4 pt-0 mt-0'>
        {/* React-dev, MCQ Assessment */}
        <div className='py-4'>
          <div className='flex items-center gap-2 text-sm text-muted-foreground '>
            <span className='text-violet-700'>React Developer</span>
            <span>›</span>
            <span>MCQ ASSESSMENT</span>
            <span>
              <ChevronLeft size={15} className='rounded border-none' />
            </span>
            <span className='text-black'>1 of 1</span>
            <span>
              <ChevronRight size={15} className='rounded border-none' />
            </span>
            <button className='ml-auto'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='lucide lucide-x'
              >
                <path d='M18 6 6 18' />
                <path d='m6 6 12 12' />
              </svg>
            </button>
          </div>
        </div>

        {/* profile */}
        <div>
          <div className='mb-3 flex items-start p-4 gap-4 border rounded-sm'>
            <Avatar className='h-16 w-16 text-xl text-white'>
              <AvatarFallback className='bg-green-400'>
                {candidate.firstName[0]}
                {candidate.lastName[0]}
              </AvatarFallback>
            </Avatar>
            <div className='flex-1'>
              <div className='flex items-center gap-2'>
                <h1 className='text-2xl font-semibold'>
                  {candidate.firstName} {candidate.lastName}
                </h1>
                <Button variant='ghost' size='icon' className='h-8 w-8'>
                  <Pencil className='text-gray-500' />
                </Button>
              </div>
              <p className='text-sm text-muted-foreground'>
                Sourced from {candidate.source} Job Posts by Smita Tayade on Mar
                20, 2025 | Owner: Smita Tayade
                <Button variant='ghost' size='icon' className='ml-1 h-6 w-6'>
                  <Pencil className='h-3 w-3' />
                </Button>
              </p>
              <div className='mt-5 flex items-center gap-6'>
                <div className='flex items-center gap-2 text-sm'>
                  <Phone className='h-4 w-4 text-muted-foreground' />
                  <span className='text-muted-foreground'>+91 9172931963</span>
                </div>
                <div className='flex items-center gap-2 text-sm'>
                  <Mail className='h-4 w-4 text-muted-foreground' />
                  <span className='text-muted-foreground'>
                    smitatayade999@gmail.com
                  </span>
                </div>
              </div>

              <div className='mb-6 flex items-center justify-between gap-2'>
                <div className='mt-5'>
                  {socialIcons.map(({ label, icon: Icon }, index) => (
                    <TooltipProvider key={index}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant='outline'
                            size='icon'
                            className='mr-3 h-8 w-8 rounded-full bg-gray-200 text-white'
                          >
                            <Icon className='h-4 w-4' />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>{label}</TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ))}
                  <Button variant='ghost' size='icon' className='ml-1 h-6 w-6'>
                  <Pencil className='h-3 w-3 text-[#C7C9D0]' />
                </Button>
                </div>

                <div>
                  <div className='flex h-9 items-center gap-2'>
                    <div>
                      <div className='mb-1 text-sm text-gray-500'>
                        HIRING STAGE
                      </div>
                      <div className='flex items-center gap-2'>
                        <Badge
                          variant='outline'
                          className='flex h-9 items-center gap-1 rounded-md border border-violet-800 font-light text-violet-800'
                        >
                          MCQ Assessment
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
                            className='lucide lucide-chevron-down'
                          >
                            <path d='m6 9 6 6 6-6' />
                          </svg>
                        </Badge>
                        <Button
                          variant='outline'
                          className='h-9 border border-red-500 font-light text-red-500'
                        >
                          Archive
                        </Button>
                      </div>
                    </div>
                    <Separator
                      className='h-16 w-[2px] text-blue-500'
                      orientation='vertical'
                    />

                    <div className='flex gap-3 text-sm'>
                      <div>
                        <div className='mb-1 text-sm text-gray-500'>INTERACTIONS</div>
                        <div>
                          <Button className='bg-violet-600 text-white'>
                            <CalendarSearch />
                            Schedule
                          </Button>
                        </div>
                      </div>
                      <div className='flex items-center gap-2'>
                        <span className='text-muted-foreground'>
                          <Mail />
                        </span>
                        <span className='text-green-500'>
                          <IconBrandWhatsapp />
                        </span>
                        <span className='text-muted-foreground'>
                          <IconDots />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-[#f2f3f5]'>
        {/* tabs */}
        <div className='py-2'>
          <Tabs>
            <TabsList className='h-10 w-full justify-start rounded-none border-b bg-transparent p-0'>
              {tabList.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className='h-10 rounded-none px-4 data-[state=active]:border-b-2 data-[state=active]:border-purple-900 data-[state=active]:bg-[#f2f3f5] data-[state=active]:shadow-none'
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* lower section */}
        <div className='p-3'>
          <div className='flex gap-5'>
            <div className='w-3/4'>
              <ProfileCard />

              <Card className='mt-7 rounded-none'>
                <Tabs defaultValue='resume' className='mb-6'>
                  {/* Documents section */}
                  <div className='mt-6 flex justify-between'>
                    <TabsList className='h-10 w-full justify-start rounded-none border-b bg-transparent p-0'>
                      {documentTabs.map((tab) => (
                        <TabsTrigger
                          key={tab.value}
                          value={tab.value}
                          className='h-10 rounded-none px-4 data-[state=active]:border-b-2 data-[state=active]:border-purple-900 data-[state=active]:bg-[#f2f3f5] data-[state=active]:shadow-none'
                        >
                          {tab.label}
                        </TabsTrigger>
                      ))}
                    </TabsList>
                    <div className='flex items-center justify-end text-nowrap border-b pr-3 text-sm text-primary'>
                      +Attach file
                    </div>
                  </div>

                  {/* resume tab content */}
                  <TabsContent
                    value='resume'
                    className='mt-4 min-h-[300px] rounded-md border p-4'
                  >
                    <div className='flex justify-end gap-3 text-sm text-muted-foreground'>
                      Naukari_ShwetaBhatnagar(5y_1m).docx{' '}
                      <ArrowDownToLine
                        className='text-muted-foreground'
                        size={15}
                      />{' '}
                      <EllipsisVertical
                        className='text-muted-foreground'
                        size={15}
                      />
                    </div>
                    <div className='mt-4 bg-slate-300'>
                      <Card></Card>
                    </div>
                  </TabsContent>

                  {/* application tab content */}
                  <TabsContent value='application'>
                    <div className='p-4 text-center text-muted-foreground'>
                      Application form content
                    </div>
                  </TabsContent>

                  {/* aws tab content */}
                  <TabsContent value='aws'>
                    <div className='p-4 text-center text-muted-foreground'>
                      AWS document content
                    </div>
                  </TabsContent>
                </Tabs>
              </Card>
            </div>

            <Card className='min-h-full w-1/4 rounded-none p-4'>
              <Input
                placeholder='Share your thoughts and notes here...'
                className='mb-6 rounded-none'
              />

              <div className='mb-6'>
                <div className='flex justify-between'>
                  <div className='flex items-center gap-2'>
                    <div>
                      <Avatar className='h-8 w-8 bg-purple-500'>
                        <AvatarFallback>ST</AvatarFallback>
                      </Avatar>
                    </div>
                    <div>
                      <div className='flex items-center gap-2'>
                        <span className='font-medium'>Smita Tayade</span>
                      </div>
                      <div className='flex items-center gap-2 text-xs text-muted-foreground'>
                        <LockKeyhole size={15} className='text-red-600' />{' '}
                        <Circle fill='gray' color='gray' size={7} />
                        Mar 20, 2025 at 6:16 pm
                      </div>
                    </div>
                  </div>
                  <div>
                    <EllipsisVertical
                      size={17}
                      className='text-muted-foreground'
                    />
                  </div>
                </div>

                <div className='pl-8 pt-1'>dfdsfsf</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
