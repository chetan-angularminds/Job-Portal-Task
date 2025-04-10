import { User, Check, Clock, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Link } from "@tanstack/react-router"

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
  assignee?: string
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
  assignee,
}: JobCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-lg mb-1">
              <Link href={`/jobs/job-details/${title.toLowerCase().replace(/\s+/g, "-")}`} className="hover:underline">
                {title}
              </Link>
            </h3>
            <div className="text-sm text-muted-foreground flex items-center gap-1">
              {department} <span className="mx-1">|</span> {location}
            </div>
          </div>
          <button className="text-rose-50 hover:bg-rose-600 rounded-full p-1 bg-rose-500">
            <Star className="h-4 w-4" />
            
          </button>
        </div>

        <div className="mt-4 flex items-center gap-4">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{candidatesCount}</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4 text-green-500" />
            <span className="text-sm">
              {candidatesCount}/{totalPositions}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-rose-500" />
            <span className="text-sm text-rose-500">Overdue by {overdueDays} days</span>
          </div>
          {assignee && (
            <div className="ml-auto">
              <Avatar className="h-6 w-6 bg-emerald-500 text-xs flex items-center justify-center">
                <span>{assignee}</span>
              </Avatar>
            </div>
          )}
        </div>
      </CardContent>

      <Separator />

      <CardFooter className="p-4 flex justify-between items-center">
        <div className="text-xs text-muted-foreground">
          {newCandidates} NEW CANDIDATES • {archivedCandidates} ARCHIVED
        </div>
        {isOnline && (
          <Badge
            variant="outline"
            className="text-xs bg-green-50 text-green-700 border-green-200 flex items-center gap-1"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-green-500"></span>
            ONLINE
          </Badge>
        )}
      </CardFooter>
    </Card>
  )
}
