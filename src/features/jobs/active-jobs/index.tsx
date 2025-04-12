/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react"
import { PlusCircle, LayoutGrid, List, ChevronDown, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { JobCard } from "./components/job-card"
import { Job, mockData } from "../data/mock-data"
import { CreateJobModal } from "./components/create-job-model"
import { BiGrid3x2Gap } from "./components/BiGrid3x2Gap"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import { IconCaretDownFilled } from "@tabler/icons-react"


export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>(mockData.jobs)
  const { jobTypes } = mockData
  const [activeJobType, setActiveJobType] = useState(jobTypes.find((type) => type.id === "active"))
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [showPriorityOnly, setShowPriorityOnly] = useState(false)
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)

  const filteredJobs = showPriorityOnly
    ? jobs.filter((job) => job.isPriority)
    : jobs.filter((job) => {
        if (activeJobType?.id === "all") return true
        if (activeJobType?.id === "active") return job.isOnline
        if (activeJobType?.id === "closed") return !job.isOnline
        // Add more filters as needed
        return true
      })

  const handleCreateJob = (newJob: Job) => {
    setJobs((prevJobs) => [...prevJobs, newJob])

    // Update job type counts
    const updatedJobTypes = jobTypes.map((type) => {
      if (type.id === "all") {
        return { ...type, count: type.count + 1 }
      }
      if (type.id === "active" && newJob.isOnline) {
        return { ...type, count: type.count + 1 }
      }
      return type
    })

    // No need to update the state since we're using mockData directly
  }

  const handleJobTypeChange = (typeId: string) => {
    const selectedType = jobTypes.find((type) => type.id === typeId)
    if (selectedType) {
      setActiveJobType(selectedType)
    }
  }

  return (
    <div className="container mx-auto py-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="p-0 h-auto hover:bg-transparent">
                <h1 className="text-xl font-normal flex items-center justify-center align-middle gap-1 text-kekaPurple-600">
                  <span>{activeJobType?.label}{" "}</span>
                   <span className="font-normal text-lg my-auto pt-1.5"> ({activeJobType?.count})</span>
                  
                  <ChevronDown className="h-5 w-5 text-foreground mt-1" />
                </h1>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              {jobTypes.map((type) => (
                <DropdownMenuItem key={type.id} onClick={() => handleJobTypeChange(type.id)}>
                  {type.label} ({type.count})
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <p className="text-muted-foreground">Here you can find all the jobs of this organisation.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Switch id="priority-filter" checked={showPriorityOnly} onCheckedChange={setShowPriorityOnly} />
            <label htmlFor="priority-filter" className="text-sm">
              Show only priority
            </label>
          </div>
          <div className="flex">
            <Button
              variant={viewMode === "grid" ? "secondary" : "ghost"}
              size="icon"
              className={cn("px-6 rounded-r-none rounded-l-md", viewMode==="grid" ? "bg-kekaPurple-100 border border-kekaPurple-400 text-kekaPurple-700":"border border-slate-300")}
              onClick={() => setViewMode("grid")}
            >
              <BiGrid3x2Gap  className="h-8 w-8" />
            </Button>
            
            <Button
              variant={viewMode === "list" ? "secondary" : "ghost"}
              size="icon"
              className={cn("px-6 rounded-l-none rounded-r-md hover:text-kekaPurple-600", viewMode==="list" ? "bg-kekaPurple-100 border border-kekaPurple-400 text-kekaPurple-700":"border border-slate-300")}
              onClick={() => setViewMode("list")}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex gap-[1.8px]">
          <Button className="bg-kekaPurple-550 hover:bg-kekaPurple-800 text-white rounded-l-md rounded-r-none" onClick={() => setIsCreateModalOpen(true)}>
            <Plus className="h-4 w-4" /> Create Job
          </Button>
          <Button className="bg-kekaPurple-550 hover:bg-kekaPurple-800 text-white rounded-r-md rounded-l-none px-3">
            <IconCaretDownFilled className="h-4 w-4" /> 
          </Button>
          </div>
        </div>
      </div>

      <div
        className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "flex flex-col gap-4"}
      >
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <JobCard
              key={job.id}
              title={job.title}
              department={job.department}
              location={job.location}
              candidatesCount={job.candidatesCount}
              totalPositions={job.totalPositions}
              overdueDays={job.overdueDays}
              newCandidates={job.newCandidates}
              archivedCandidates={job.archivedCandidates}
              isOnline={job.isOnline}
              isPriority={job.isPriority}
              assignee={job.assignee}
              viewMode={viewMode}
            />
          ))
        ) : (
          <div className="col-span-full py-10 text-center">
            <p className="text-muted-foreground">No jobs found matching your criteria.</p>
          </div>
        )}
      </div>

      {isCreateModalOpen && <CreateJobModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onCreateJob={handleCreateJob}
      />}
    </div>
  )
}
