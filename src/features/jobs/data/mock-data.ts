export interface Job {
    id: string
    title: string
    department: string
    location: string
    type: string
    experience: string
    candidatesCount: number
    totalPositions: number
    overdueDays: number
    newCandidates: number
    archivedCandidates: number
    isOnline: boolean
    isPriority: boolean
    assignee?: string
  }
  
  export interface Candidate {
    id: string
    firstName: string
    lastName: string
    initials: string
    email: string
    phone: string
    source: string
    sourceDetail: string
    appliedDate: string
    tags: string
    owner: string
    ownerInitials: string
    stage: string
    daysInStage: number
    availableDays: number
    experience: string
    location: string
    currentSalary: string
    expectedSalary: string
    skills: string[]
    resume: string
  }
  
  export interface PipelineStage {
    id: string
    label: string
    count: number
    isSuccess?: boolean
    isRejected?: boolean
  }
  
  export interface FilterOption {
    id: string
    label: string
    value: string
  }
  
  export const mockData = {
    jobTypes: [
      { id: "active", label: "Active Jobs", count: 3 },
      { id: "closed", label: "Closed Jobs", count: 5 },
      { id: "draft", label: "Draft Jobs", count: 2 },
      { id: "all", label: "All Jobs", count: 10 },
    ],
  
    jobs: [
      {
        id: "test-job",
        title: "Test Job",
        department: "Management Department",
        location: "Baner",
        type: "Full Time",
        experience: "2 - 5 years",
        candidatesCount: 0,
        totalPositions: 1,
        overdueDays: 7,
        newCandidates: 0,
        archivedCandidates: 1,
        isOnline: true,
        isPriority: false,
      },
      {
        id: "react-developer",
        title: "React Developer",
        department: "Engineering",
        location: "Baner",
        type: "Full Time",
        experience: "3 - 8 years",
        candidatesCount: 1,
        totalPositions: 10,
        overdueDays: 11,
        newCandidates: 0,
        archivedCandidates: 1,
        isOnline: true,
        isPriority: true,
        assignee: "ST",
      },
      {
        id: "hr-recruiter",
        title: "HR Recruiter",
        department: "Human Resource",
        location: "Baner",
        type: "Full Time",
        experience: "1 - 3 years",
        candidatesCount: 0,
        totalPositions: 2,
        overdueDays: 21,
        newCandidates: 0,
        archivedCandidates: 1,
        isOnline: true,
        isPriority: false,
        assignee: "ST",
      },
    ],
  
    candidates: [
      {
        id: "1",
        firstName: "Shweta",
        lastName: "Bhatnagar",
        initials: "SB",
        email: "smitatayade999@gmail.com",
        phone: "+91 9172931963",
        source: "Naukri Job Posts",
        sourceDetail: "Job Boards",
        appliedDate: "20 Mar 2025",
        tags: "Not Available",
        owner: "Smita Tayade",
        ownerInitials: "ST",
        stage: "MCQ Assessment",
        daysInStage: 19,
        availableDays: 30,
        experience: "5y 2m",
        location: "Pune, Maharashtra",
        currentSalary: "12 LPA",
        expectedSalary: "18 LPA",
        skills: ["React", "JavaScript", "TypeScript"],
        resume: "Naukri_ShwetaBhatnagar(5y_1m).docx",
      },
      {
        id: "2",
        firstName: "Rahul",
        lastName: "Sharma",
        initials: "RS",
        email: "rahul.sharma@example.com",
        phone: "+91 9876543210",
        source: "LinkedIn",
        sourceDetail: "Social Media",
        appliedDate: "15 Mar 2025",
        tags: "Shortlisted",
        owner: "Smita Tayade",
        ownerInitials: "ST",
        stage: "Technical Interview 1",
        daysInStage: 5,
        availableDays: 15,
        experience: "4y 6m",
        location: "Pune, Maharashtra",
        currentSalary: "10 LPA",
        expectedSalary: "15 LPA",
        skills: ["React", "Node.js", "MongoDB"],
        resume: "LinkedIn_RahulSharma(4y_6m).pdf",
      },
      {
        id: "3",
        firstName: "Priya",
        lastName: "Patel",
        initials: "PP",
        email: "priya.patel@example.com",
        phone: "+91 9765432109",
        source: "Indeed",
        sourceDetail: "Job Boards",
        appliedDate: "18 Mar 2025",
        tags: "Pending Review",
        owner: "Amit Kumar",
        ownerInitials: "AK",
        stage: "HR Screening",
        daysInStage: 7,
        availableDays: 45,
        experience: "2y 8m",
        location: "Mumbai, Maharashtra",
        currentSalary: "7 LPA",
        expectedSalary: "10 LPA",
        skills: ["JavaScript", "HTML", "CSS"],
        resume: "Indeed_PriyaPatel(2y_8m).pdf",
      },
    ],
  
    pipelineStages: [
      { id: "sourced", label: "Sourced", count: 0 },
      { id: "hr-screening", label: "HR Screening", count: 0 },
      { id: "mcq-assessment", label: "MCQ Assessment", count: 1 },
      { id: "technical-interview-1", label: "1st Round - Technical Interview", count: 0 },
      { id: "technical-interview-2", label: "2nd Round - Final Technical Interview", count: 0 },
      { id: "hr-interview", label: "HR Interview", count: 0 },
      { id: "preboarding", label: "Preboarding", count: 0 },
      { id: "hired", label: "Hired", count: 0, isSuccess: true },
      { id: "archived", label: "Archived", count: 1, isRejected: true },
    ],
  
    filters: {
      sources: [
        { id: "all", label: "All Sources", value: "source" },
        { id: "naukri", label: "Naukri", value: "naukri" },
        { id: "linkedin", label: "LinkedIn", value: "linkedin" },
        { id: "indeed", label: "Indeed", value: "indeed" },
        { id: "referral", label: "Referral", value: "referral" },
      ],
      experience: [
        { id: "all", label: "All Experience", value: "experience" },
        { id: "0-2", label: "0-2 years", value: "0-2" },
        { id: "3-5", label: "3-5 years", value: "3-5" },
        { id: "5+", label: "5+ years", value: "5+" },
      ],
      salary: [
        { id: "all", label: "All Salary Ranges", value: "salary" },
        { id: "0-5", label: "0-5 LPA", value: "0-5" },
        { id: "5-10", label: "5-10 LPA", value: "5-10" },
        { id: "10+", label: "10+ LPA", value: "10+" },
      ],
      availability: [
        { id: "all", label: "All Availability", value: "availability" },
        { id: "immediate", label: "Immediate", value: "immediate" },
        { id: "30", label: "Within 30 days", value: "30" },
        { id: "60", label: "Within 60 days", value: "60" },
      ],
      tags: [
        { id: "all", label: "All Tags", value: "tags" },
        { id: "shortlisted", label: "Shortlisted", value: "shortlisted" },
        { id: "rejected", label: "Rejected", value: "rejected" },
        { id: "pending", label: "Pending Review", value: "pending" },
      ],
    },
  
    departments: [
      "Engineering",
      "Human Resource",
      "Management Department",
      "Marketing",
      "Sales",
      "Finance",
      "Operations",
      "Customer Support",
    ],
  
    locations: ["Baner", "Hinjewadi", "Kharadi", "Viman Nagar", "Mumbai", "Bangalore", "Delhi", "Remote"],
  }
  