import { useState } from "react"
import {
  Edit,
  Phone,
  Mail,
  Calendar,
  Clock,
  MapPin,
  DollarSign,
  Briefcase,
  Tag,
  Plus,
  Download,
  MoreHorizontal,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Avatar } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { mockData } from "../data/mock-data"
import { useParams } from "@tanstack/react-router"


export default function CandidateProfilePage() {
  const [activeTab, setActiveTab] = useState("profile");
  const { candidateId } = useParams({
    from: '/_authenticated/jobs/candidate/$candidateId/',
  })
  const candidate = mockData.candidates.find((c) => c.id === candidateId) || mockData.candidates[0]
  
  return (
    <div className="container mx-auto py-6">
    <div className="flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-2/3">
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16 bg-violet-700 text-xl flex items-center justify-center text-white">
                <span>{candidate.initials}</span>
              </Avatar>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-semibold text-violet-700">
                    {candidate.firstName} {candidate.lastName}
                  </h1>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Edit className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  Sourced from {candidate.source} by {candidate.owner} on {candidate.appliedDate}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v8M8 12h8" />
                  </svg>
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <span>{candidate.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <span>{candidate.email}</span>
            </div>
          </div>

          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <h2 className="font-semibold">HIRING STAGE</h2>
              <div className="relative">
                <Button variant="outline" className="text-violet-600">
                  {candidate.stage} <Edit className="ml-2 h-3 w-3" />
                </Button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <h2 className="font-semibold">INTERACTIONS</h2>
              <Button variant="outline" className="gap-2">
                <Calendar className="h-4 w-4" />
                Schedule
              </Button>
              <Button variant="ghost" size="icon">
                <Mail className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </Button>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <Tabs defaultValue="profile" value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-6 w-full">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="messages">Messages</TabsTrigger>
              <TabsTrigger value="feedback">Feedback</TabsTrigger>
              <TabsTrigger value="documents">Documents</TabsTrigger>
              <TabsTrigger value="engagement">Engagement</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Clock className="h-5 w-5 text-violet-500" />
                      <div className="font-medium">Available To Join (in days)</div>
                      <div className="ml-auto font-semibold">{candidate.availableDays} days</div>
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                      <Briefcase className="h-5 w-5 text-violet-500" />
                      <div className="font-medium">Experience</div>
                      <div className="ml-auto font-semibold">{candidate.experience}</div>
                    </div>

                    <div className="flex items-center gap-2 mb-4">
                      <MapPin className="h-5 w-5 text-violet-500" />
                      <div className="font-medium">Location</div>
                      <div className="ml-auto font-semibold">{candidate.location}</div>
                    </div>

                    <div className="flex items-center gap-2">
                      <DollarSign className="h-5 w-5 text-violet-500" />
                      <div className="font-medium">Current Salary</div>
                      <div className="ml-auto font-semibold">{candidate.currentSalary}</div>
                    </div>

                    <div className="flex items-center gap-2 mt-4">
                      <DollarSign className="h-5 w-5 text-violet-500" />
                      <div className="font-medium">Expected Salary</div>
                      <div className="ml-auto font-semibold">{candidate.expectedSalary}</div>
                    </div>
                  </CardContent>
                </Card>

                <div className="space-y-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-sm font-medium">Skills</CardTitle>
                        <Button variant="ghost" size="sm" className="h-8 px-2">
                          <Plus className="h-4 w-4 mr-1" /> Add
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {candidate.skills.map((skill) => (
                          <Badge key={skill} variant="outline" className="bg-gray-100">
                            {skill}
                          </Badge>
                        ))}
                        <Button variant="outline" size="sm" className="h-6 rounded-full">
                          <Plus className="h-3 w-3 mr-1" /> Add Skill
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-sm font-medium">Tags</CardTitle>
                        <Button variant="ghost" size="sm" className="h-8 px-2">
                          <Tag className="h-4 w-4 mr-1" /> Add Tag
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" size="sm" className="h-6 rounded-full">
                        <Plus className="h-3 w-3 mr-1" /> Add Tag
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm font-medium">Experience</CardTitle>
                      <Button variant="ghost" size="sm" className="h-8 px-2">
                        <Plus className="h-4 w-4 mr-1" /> Add experience
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full justify-start">
                      <Plus className="h-4 w-4 mr-2" /> Add experience
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-sm font-medium">Education</CardTitle>
                      <Button variant="ghost" size="sm" className="h-8 px-2">
                        <Plus className="h-4 w-4 mr-1" /> Add education details
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full justify-start">
                      <Plus className="h-4 w-4 mr-2" /> Add education details
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="documents" className="mt-6">
              <div className="border rounded-md p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">RESUME</h3>
                  <Button variant="ghost" size="sm">
                    <Plus className="h-4 w-4 mr-1" /> Attach file
                  </Button>
                </div>

                <div className="flex items-center justify-between p-3 border rounded-md bg-gray-50">
                  <div className="flex items-center gap-2">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-6 w-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                      <polyline points="10 9 9 9 8 9" />
                    </svg>
                    <div>
                      <div className="font-medium">{candidate.resume}</div>
                      <div className="text-xs text-muted-foreground">Added on {candidate.appliedDate}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="feedback" className="mt-6">
              <div className="space-y-4">
                <Textarea placeholder="Share your thoughts and notes here..." className="min-h-[100px]" />
                <div className="flex items-center gap-4">
                  <Avatar className="h-10 w-10 bg-violet-500 flex items-center justify-center text-xs">
                    <span className="text-white">{candidate.ownerInitials}</span>
                  </Avatar>
                  <div>
                    <div className="font-medium">{candidate.owner}</div>
                    <div className="text-xs text-muted-foreground">Mar 20, 2025 at 6:16 pm</div>
                  </div>
                </div>
                <div className="p-4 border rounded-md">
                  <p>dfdsfsf</p>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="messages">Messages content</TabsContent>
            <TabsContent value="engagement">Engagement content</TabsContent>
            <TabsContent value="activity">Activity content</TabsContent>
          </Tabs>
        </div>
      </div>

      <div className="w-full md:w-1/3">
        <Card>
          <CardHeader>
            <CardTitle>Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full justify-start bg-violet-700 hover:bg-violet-800 text-white">
              <Calendar className="mr-2 h-4 w-4" /> Schedule Interview
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Mail className="mr-2 h-4 w-4" /> Send Email
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <svg viewBox="0 0 24 24" className="mr-2 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>{" "}
              Call Candidate
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start text-rose-600 hover:text-rose-700 hover:bg-rose-50"
            >
              <svg viewBox="0 0 24 24" className="mr-2 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="3 6 5 6 21 6" />
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
              </svg>{" "}
              Reject Candidate
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
  )
}
