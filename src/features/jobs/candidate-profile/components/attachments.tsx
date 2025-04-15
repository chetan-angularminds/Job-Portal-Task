import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs'
import { Worker } from '@react-pdf-viewer/core'
import { Viewer } from '@react-pdf-viewer/core'
import { ArrowDownToLine, EllipsisVertical } from 'lucide-react'
import { Card } from '@/components/ui/card'

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

export function Attachments() {
  const fileUrl = '/files/resume.pdf'
  const fileName = fileUrl.split('/').pop() // "xy.pdf"
  return (
    <Card className='mt-7 rounded-none'>
      <Tabs defaultValue='resume' className='mb-6'>
        {/* Documents section */}
        <div className='mt-3 flex justify-between'>
          <TabsList className='h-10 w-full justify-start rounded-none border-b bg-transparent p-0'>
            {documentTabs.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className='h-10 rounded-none px-4 text-xs text-slate-500 data-[state=active]:border-b-2 data-[state=active]:border-purple-900 data-[state=active]:bg-[#f2f3f5] data-[state=active]:text-black data-[state=active]:shadow-none'
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
          className='min-h-[300px] rounded-md border-b py-4'
        >
          <div className='flex justify-end gap-3 text-sm text-muted-foreground'>
            {fileName}{' '}
            <a href={fileUrl} download={fileName}>
              <ArrowDownToLine
                className='cursor-pointer text-muted-foreground'
                size={15}
              />
            </a>
            <EllipsisVertical className='text-muted-foreground' size={15} />
          </div>
          <div className='mt-4 py-6 px-12 bg-slate-200'>
            <Card>
              <div className='h-[80vh] w-full overflow-y-auto'>
                <Worker workerUrl='https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js'>
                  <Viewer fileUrl={fileUrl} />
                </Worker>
              </div>
            </Card>
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
  )
}
