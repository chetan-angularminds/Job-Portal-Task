/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react'
import { useParams } from '@tanstack/react-router'
import { IconBrandWhatsapp, IconCalendarEvent } from '@tabler/icons-react'
import { ChevronDown, Globe, Mail, Phone } from 'lucide-react'
import { ChevronLeft } from 'lucide-react'
import { ChevronRight } from 'lucide-react'
import { Pencil } from 'lucide-react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { mockData } from '../data/mock-data'
import { XIcon } from './components/XIcon'
import { Attachments } from './components/attachments'
import { FacebookIcon } from './components/facebookIcon'
import { GooglePlusIcon } from './components/googlePlusIcon'
import { LinkedInIcon } from './components/linkedInIcon'
import ProfileCard from './components/profilecard'
import { SkypeIcon } from './components/skypeIcon'
import { Thoughts } from './components/thoughts'
import ThreeDotsIcon from './components/threeDotsIcon'

const socialIcons = [
  { label: 'Skype', icon: SkypeIcon },
  { label: 'LinkedIn', icon: LinkedInIcon },
  { label: 'Facebook', icon: FacebookIcon },
  { label: 'X', icon: XIcon },
  { label: 'Google Plus', icon: GooglePlusIcon },
  { label: 'Website', icon: Globe },
]

const tabList = [
  { value: 'profile', label: 'Profile', component: <ProfileTab /> },
  { value: 'messages', label: 'Messages', component: <MessagesTab /> },
  { value: 'feedback', label: 'Feedback', component: <FeedbackTab /> },
  { value: 'documents', label: 'Documents', component: <DocumentsTab /> },
  { value: 'engagement', label: 'Engagement', component: <EngagementTab /> },
  { value: 'activity', label: 'Activity', component: <ActivityTab /> },
]

export default function CandidateProfile({
  candidateId: propCandidateId,
  isPopup = false,
  jobName,
  stage,
}: {
  candidateId?: string | null
  isPopup?: boolean
  jobName?: string
  stage?: string
}) {
  const idFromParams = !isPopup
    ? (useParams({
        from: '/_authenticated/jobs/candidate/$candidateId/',
      }).candidateId ?? null)
    : null

  const [candidateId, setCandidateId] = useState(
    propCandidateId || idFromParams
  )
  const [activeTab, setActiveTab] = useState('profile')

  const candidateList = stage
    ? mockData.candidates.filter((candidate) => {
        return candidate.stage === stage
      })
    : mockData.candidates

  const [candidate, setCandidate] = useState(
    candidateList.find((candidate) => candidate.id === candidateId)
  )
  useEffect(() => {
    if (candidateId) {
      const foundCandidate = candidateList.find(
        (candidate) => candidate.id === candidateId
      )
      setCandidate(foundCandidate)
    }
  }, [candidateId])

  const handleCandidateChange = (value: number) => {
    const prevIndex = candidateList.findIndex((c) => c.id === candidateId)
    const newIndex =
      (prevIndex + value + candidateList.length) % candidateList.length
    setCandidateId(candidateList[newIndex].id)
  }

  if (!candidate) {
    return <div>Candidate not found</div>
  }

  return (
    <div className='m-0 py-0'>
      <div className='m-0 p-0 pt-0'>
        {/* React-dev, MCQ Assessment */}
        <div className='py-4 pl-4'>
          <div className='flex items-center gap-2 text-sm text-muted-foreground'>
            <span className='text-violet-700'>{jobName}</span>
            <span>›</span>
            <span>{stage}</span>
            <span>
              <ChevronLeft
                size={15}
                className='rounded border-none hover:cursor-pointer'
                onClick={(e) => {
                  e.preventDefault()
                  handleCandidateChange(-1)
                }}
              />
            </span>
            <span className='text-black'>
              {candidateList.findIndex((c) => c.id === candidateId) + 1} of{' '}
              {candidateList.length}
            </span>
            <span>
              <ChevronRight
                size={15}
                className='rounded border-none hover:cursor-pointer'
                onClick={(e) => {
                  e.preventDefault()
                  handleCandidateChange(1)
                }}
              />
            </span>
          </div>
        </div>

        {/* profile */}
        <div>
          <div className='mb-0 flex items-start gap-4 rounded-sm border-b p-4'>
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
                            className='mr-3 h-8 w-8 rounded-full bg-gray-300 text-white hover:bg-gray-400 hover:text-white'
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
                      <div className='mb-1 text-xs text-gray-500'>
                        HIRING STAGE
                      </div>
                      <div className='flex items-center gap-2'>
                        <Badge
                          variant='outline'
                          className='flex h-9 items-center gap-1 rounded-md border border-kekaPurple-600 font-light text-kekaPurple-600 hover:bg-kekaPurple-100'
                        >
                          MCQ Assessment
                          <ChevronDown className='h-4 w-4 text-green-500' />
                        </Badge>
                        <Button
                          variant='outline'
                          className='h-9 border border-red-500 font-light text-red-500 hover:bg-red-100 hover:text-red-600'
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
                        <div className='mb-1 text-xs text-gray-500'>
                          INTERACTIONS
                        </div>
                        <div className='flex items-center gap-2'>
                          <Button className='bg-kekaPurple-600 text-xs text-white'>
                            <IconCalendarEvent className='h-4 w-4' />
                            Schedule
                          </Button>
                          <div className='flex items-center gap-2'>
                            <span className='text-muted-foreground'>
                              <Mail />
                            </span>
                            <span className='text-green-500'>
                              <IconBrandWhatsapp />
                            </span>
                            <span className='text-muted-foreground'>
                              <ThreeDotsIcon className='h-5 w-5' />
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
        </div>
      </div>
      <div className='bg-[#f2f3f5]'>
        {/* tabs */}
        <div className='py-0'>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className='h-10 w-full justify-start rounded-none border-b bg-transparent p-0'>
              {tabList.map((tab) => (
                <TabsTrigger
                  key={tab.label}
                  value={tab.value}
                  className='h-10 rounded-none px-4 data-[state=active]:border-b-2 data-[state=active]:border-kekaPurple-600 data-[state=active]:bg-[#f2f3f5] data-[state=active]:shadow-none'
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {tabList.map(({ label, value, component }) => (
              <TabsContent
                key={label}
                value={value}
                className='min-h-[300px] rounded-md border-b py-4'
              >
                {component}
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* lower section */}
      </div>
    </div>
  )
}

function ProfileTab() {
  return (
    <div className='p-3'>
      <div className='flex gap-5'>
        <div className='w-3/4'>
          <ProfileCard />
          <Attachments />
        </div>
        <Thoughts />
      </div>
    </div>
  )
}
function MessagesTab() {
  return (
    <div className='p-3'>
      <h2 className='text-lg font-semibold'>Messages</h2>
      <p className='text-sm text-muted-foreground'>
        This is the Messages tab content. You can display candidate messages or
        communication history here.
      </p>
    </div>
  )
}

function FeedbackTab() {
  return (
    <div className='p-3'>
      <h2 className='text-lg font-semibold'>Feedback</h2>
      <p className='text-sm text-muted-foreground'>
        This is the Feedback tab content. You can display feedback or
        evaluations related to the candidate here.
      </p>
    </div>
  )
}

function DocumentsTab() {
  return (
    <div className='p-3'>
      <h2 className='text-lg font-semibold'>Documents</h2>
      <p className='text-sm text-muted-foreground'>
        This is the Documents tab content. You can display candidate-related
        documents or files here.
      </p>
    </div>
  )
}

function EngagementTab() {
  return (
    <div className='p-3'>
      <h2 className='text-lg font-semibold'>Engagement</h2>
      <p className='text-sm text-muted-foreground'>
        This is the Engagement tab content. You can display engagement metrics
        or activities here.
      </p>
    </div>
  )
}

function ActivityTab() {
  return (
    <div className='p-3'>
      <h2 className='text-lg font-semibold'>Activity</h2>
      <p className='text-sm text-muted-foreground'>
        This is the Activity tab content. You can display the candidate's
        activity timeline or logs here.
      </p>
    </div>
  )
}
