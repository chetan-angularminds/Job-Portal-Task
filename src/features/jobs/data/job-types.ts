import { jobs } from './jobs.json'

export type Job = (typeof jobs)[number]
export type Applicants = Job['applicants'][number]
