import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog'
import CandidateProfile from '../../candidate-profile'

interface CandidateDialogProps {
  isOpen: boolean
  onClose: () => void
  candidateId: string | null
  jobName: string
  stage: string
}

export function CandidateDialog({
  isOpen,
  onClose,
  candidateId,
  jobName,
  stage,
}: CandidateDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogTitle className='hidden'>
        {/* Title hidden intentionally */}
      </DialogTitle>
      <DialogContent
        aria-labelledby={'candidateProfile'}
        className='m-0 h-screen w-screen max-w-full overflow-y-auto !rounded-none border-none p-0'
      >
        {candidateId && (
          <CandidateProfile candidateId={candidateId} isPopup={true} jobName={jobName} stage={stage} />
        )}
      </DialogContent>
    </Dialog>
  )
}
