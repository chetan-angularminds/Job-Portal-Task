import type { ReactNode } from 'react'
import emptyStateImage from "./../../../../../public/images/20250411_161536.png"
interface EmptyStateProps {
  title: string
  description: string
  icon?: ReactNode
  actions?: ReactNode
}

export function EmptyState({
  title,
  description,
  icon,
  actions,
}: EmptyStateProps) {
  return (
    <div className='flex flex-col items-center justify-center rounded-lg border bg-gray-50 px-4 py-16 text-center'>
      {icon || (
        <div className='mb-4'>
          <img className='h-40 w-40' src={emptyStateImage} alt="empty" />
        </div>
      )}
      <h3 className='mb-2 text-lg font-medium'>{title}</h3>
      <p className='mb-6 text-muted-foreground'>{description}</p>
      {actions && <div>{actions}</div>}
    </div>
  )
}
