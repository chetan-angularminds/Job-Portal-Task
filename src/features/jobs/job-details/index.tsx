import { useState } from "react"
import { Eye, Share2, MoreHorizontal, Plus, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CandidatePipeline } from "./components/candidate-pipeline"
import { CandidateTable } from "./components/candidate-table"
import { EmptyState } from "./components/empty-state"
import { mockData } from "../data/mock-data"
import { useParams } from "@tanstack/react-router"

export default function JobDetailPage() {
  const { jobId } = useParams({
    from: '/_authenticated/jobs/job-details/$jobId/',
  })
  const [activeTab, setActiveTab] = useState("candidates")
  const [activeStage, setActiveStage] = useState("mcq-assessment")
  

  const job = mockData.jobs.find((job) => job.id === jobId) || mockData.jobs[1]

  return (
    
      <div className="">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-2xl font-semibold flex items-center gap-2 text-violet-700">
              {job.title}
              <div className="flex items-center gap-2 ml-2">
                {job.isOnline && (
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 uppercase text-xs">
                    Online
                  </Badge>
                )}
                {job.isPriority && (
                  <Badge variant="outline" className="bg-rose-50 text-rose-700 border-rose-200 uppercase text-xs">
                    Priority
                  </Badge>
                )}
              </div>
            </h1>
            <p className="text-muted-foreground">
              {job.department} - {job.type} - ({job.location}) - {job.experience}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Eye className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Share2 className="h-4 w-4" />
            </Button>
            <Button className="bg-violet-700 hover:bg-violet-800 text-white px-2">
              <Plus className=" h-4 w-4" />Add Candidate
            </Button>
            <Button variant="ghost" size="icon" className="rounded  border-2">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>
                
        <Tabs defaultValue="candidates" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-8 w-full">
            <TabsTrigger value="checklist">Checklist</TabsTrigger>
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="candidates">Candidates</TabsTrigger>
            <TabsTrigger value="job-info">Job Info</TabsTrigger>
            <TabsTrigger value="hiring-setup">Hiring Setup</TabsTrigger>
            <TabsTrigger value="workflow">Workflow Automation</TabsTrigger>
            <TabsTrigger value="publish">Publish Options</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="candidates" className="mt-6">
            <div className="mb-4">
              <CandidatePipeline activeStage={activeStage} onStageChange={setActiveStage} />
            </div>

            {activeStage === "mcq-assessment" ? (
              <CandidateTable />
            ) : (
              <EmptyState
                title="No candidates here"
                description="There are no candidates available to show"
                actions={
                  <div className="flex gap-2">
                    <Button className="bg-violet-700 hover:bg-violet-800 text-white">
                      Add candidate <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline">Import from talent pool</Button>
                  </div>
                }
              />
            )}
          </TabsContent>

          {/* Other tab contents would go here */}
          <TabsContent value="checklist">Checklist content</TabsContent>
          <TabsContent value="dashboard">Dashboard content</TabsContent>
          <TabsContent value="job-info">Job Info content</TabsContent>
          <TabsContent value="hiring-setup">Hiring Setup content</TabsContent>
          <TabsContent value="workflow">Workflow Automation content</TabsContent>
          <TabsContent value="publish">Publish Options content</TabsContent>
          <TabsContent value="analytics">Analytics content</TabsContent>
        </Tabs>
      </div>
    </div>
    
  )
}


