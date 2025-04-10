import type { ReactNode } from "react"

interface EmptyStateProps {
  title: string
  description: string
  icon?: ReactNode
  actions?: ReactNode
}

export function EmptyState({ title, description, icon, actions }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center border rounded-lg bg-gray-50">
      {icon || (
        <div className="mb-4">
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-300"
          >
            <path d="M40 10L10 25V55L40 70L70 55V25L40 10Z" stroke="currentColor" strokeWidth="2" />
            <path d="M40 40V70M40 40L10 25M40 40L70 25" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
      )}
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground mb-6">{description}</p>
      {actions && <div>{actions}</div>}
    </div>
  )
}
