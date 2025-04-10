import { CandidateList } from '@/features/jobs/candidates'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_authenticated/jobs/candidates/')({
  component: CandidateList,
})

