import { jobs } from './jobs.json'
import { mockData } from './mock-data'



export type Job = (typeof jobs)[number]
export type Applicants = Job['applicants'][number]
export type Candidate = (typeof mockData.candidates)[number]