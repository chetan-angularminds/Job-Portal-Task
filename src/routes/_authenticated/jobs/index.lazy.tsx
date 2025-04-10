import JobsPage from '@/features/jobs/active-jobs'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_authenticated/jobs/')({
  component: JobsPage,
})
