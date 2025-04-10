import JobDetailPage from '@/features/jobs/job-details'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute(
  '/_authenticated/jobs/job-details/$jobId/',
)({
  component: JobDetailPage,
})
