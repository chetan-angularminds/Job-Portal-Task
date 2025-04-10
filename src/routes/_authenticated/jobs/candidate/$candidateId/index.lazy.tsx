import CandidateProfilePage from '@/features/jobs/candidate-profile'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute(
  '/_authenticated/jobs/candidate/$candidateId/',
)({
  component: CandidateProfilePage,
})

