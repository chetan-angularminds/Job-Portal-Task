import { useState } from 'react'
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@radix-ui/react-dropdown-menu'
import { useParams } from '@tanstack/react-router'
import { IconCaretDownFilled } from '@tabler/icons-react'
import { Eye, Share2, MoreHorizontal, Plus, ChevronDown } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { DropdownMenu } from '@/components/ui/dropdown-menu'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { mockData } from '../data/mock-data'
import { CandidatePipeline } from './components/candidate-pipeline'
import { CandidateTable } from './components/candidate-table'


export default function JobDetailPage() {
  const { jobId } = useParams({
    from: '/_authenticated/jobs/job-details/$jobId/',
  })
  const CandidateTypes = ['All Candidates', 'Shortlisted', 'Rejected']
  const [activeTab, setActiveTab] = useState('candidates')
  const [activeStage, setActiveStage] = useState('MCQ Assessment')
  const [activeCandidateType, setActiveCandidateType] =
    useState('All Candidates')
  const handleCandidateTypeChange = (type: string) => {
    setActiveCandidateType(type)
  }
  const job = mockData.jobs.find((job) => job.id === jobId) || mockData.jobs[1]
  const tabList = [
    { label: 'Checklist', value: 'checklist' },
    { label: 'Dashboard', value: 'dashboard' },
    { label: 'Candidates', value: 'candidates' },
    { label: 'Job Info', value: 'job-info' },
    { label: 'Hiring Setup', value: 'hiring-setup' },
    { label: 'Workflow', value: 'workflow' },
    { label: 'Automation', value: 'automation' },
    { label: 'Publish Options', value: 'publish' },
    { label: 'Survey Response', value: 'survey-response' },
    { label: 'Analytics', value: 'analytics' },
  ]

  return (
    <div className='!focus:outline-none'>
      <div className='mb-6 !focus:outline-none'>
        <div className='mb-2 flex items-center justify-between focus:outline-none'>
          <div>
            <h1 className='flex items-center gap-2 text-xl font-normal text-violet-700'>
              {job.title}
              <div className='ml-2 flex items-center gap-2'>
                {job.isOnline && (
                  <Badge
                    variant='outline'
                    className='bg-[#9db83f] px-2 py-0 font-inter text-xs font-light uppercase text-white'
                  >
                    Online <ChevronDown className='h-4 w-4' />
                  </Badge>
                )}
                {job.isPriority && (
                  <Badge
                    variant='outline'
                    className='bg-[#ec8686] px-2 py-0 font-inter text-xs font-light uppercase text-white'
                  >
                    Priority
                  </Badge>
                )}
              </div>
            </h1>
            <p className='text-sm text-muted-foreground'>
              {job.department} - {job.type} - ({job.location}) -{' '}
              {job.experience}
            </p>
          </div>
          <div className='flex items-center gap-2'>
            <Button variant='ghost' size='icon'>
              <Eye className='h-4 w-4' />
            </Button>
            <Button variant='ghost' size='icon'>
              <Share2 className='h-4 w-4' />
            </Button>
            <div className='flex gap-[1.8px]'>
              <Button className='rounded-l-md rounded-r-none bg-kekaPurple-550 text-white hover:bg-kekaPurple-800'>
                <Plus className='h-4 w-4' />
                Add Candidate
              </Button>
              <Button className='rounded-l-none rounded-r-md bg-kekaPurple-550 px-3 text-white hover:bg-kekaPurple-800'>
                <IconCaretDownFilled className='h-4 w-4' />
              </Button>
            </div>
            <Button variant='ghost' size='icon' className='rounded border-2'>
              <MoreHorizontal className='h-4 w-4' />
            </Button>
          </div>
        </div>

        <Tabs
          defaultValue='candidates'
          value={activeTab}
          onValueChange={setActiveTab}
          className='w-full !focus:outline-none'
        >
          <TabsList className='mb-6 h-10 w-full justify-start gap-5 rounded-none border-b bg-transparent p-0'>
            {tabList.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className='h-10 rounded-none px-0 text-xs font-light data-[state=active]:border-b-2 data-[state=active]:border-purple-900 data-[state=active]:bg-[#f2f3f5] data-[state=active]:shadow-none'
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent
            value='candidates'
            className='mt-1 !focus:border-none !focus:outline-none focus:ring-0 focus:ring-offset-0'
          >
            <div className='my-2 !focus:outline-none'>
              <div className='my-1 text-black !focus:outline-none'>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant='ghost'
                      className='h-auto p-0 hover:bg-transparent'
                    >
                      <h1 className='flex items-center justify-center gap-1 align-middle text-xl font-normal text-black'>
                        <span>{activeCandidateType} </span>

                        <ChevronDown className='mt-1 h-5 w-5 rounded border text-foreground' />
                      </h1>
                    </Button>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent
                    align='start'
                    className='w-100 z-100 overflow-hidden rounded-lg border-[2px] bg-white'
                  >
                    {CandidateTypes.map((type) => (
                      <DropdownMenuItem
                        key={type}
                        onClick={() => handleCandidateTypeChange(type)}
                        className='px-3 py-1 text-sm hover:bg-kekaPurple-350 hover:text-white'
                      >
                        {type}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <CandidatePipeline
                activeStage={activeStage}
                onStageChange={setActiveStage}
                
              />
            </div>

            
              <>
                <span className=''>{activeStage}</span>
                <CandidateTable stage={activeStage} jobName={job.title} />
              </>
            
          </TabsContent>

          {/* Other tab contents would go here */}
          <TabsContent value='checklist'>Checklist content</TabsContent>
          <TabsContent value='dashboard'>Dashboard content</TabsContent>
          <TabsContent value='job-info'>Job Info content</TabsContent>
          <TabsContent value='hiring-setup'>Hiring Setup content</TabsContent>
          <TabsContent value='workflow'>
            Workflow Automation content
          </TabsContent>
          <TabsContent value='publish'>Publish Options content</TabsContent>
          <TabsContent value='analytics'>Analytics content</TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
