import * as React from 'react'
import { cn } from '@/shared/lib/utils'

interface PageContainerProps extends React.ComponentProps<'div'> {
  children: React.ReactNode
}

export function PageContainer({ className, children, ...props }: PageContainerProps) {
  return (
    <div className={cn('flex flex-1 flex-col overflow-hidden bg-background', className)} {...props}>
      {children}
    </div>
  )
}

interface PageHeaderProps extends React.ComponentProps<'header'> {
  title?: string
  description?: string
  actions?: React.ReactNode
}

export function PageHeader({
  className,
  title,
  description,
  actions,
  children,
  ...props
}: PageHeaderProps) {
  return (
    <header
      className={cn(
        'flex h-14 shrink-0 items-center justify-between gap-2 border-b bg-sidebar px-6 transition-[width] duration-200 ease-linear animate-in fade-in slide-in-from-top-1',
        className
      )}
      {...props}
    >
      <div className="flex flex-col gap-1">
        {title && <h1 className="text-lg font-semibold leading-none tracking-tight">{title}</h1>}
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
        {children}
      </div>
      {actions && <div className="flex items-center gap-2">{actions}</div>}
    </header>
  )
}

interface PageContentProps extends React.ComponentProps<'main'> {
  children: React.ReactNode
}

export function PageContent({ className, children, ...props }: PageContentProps) {
  return (
    <main
      className={cn(
        'flex-1 overflow-auto p-6 duration-300 animate-in fade-in slide-in-from-bottom-2',
        className
      )}
      {...props}
    >
      <div
        className={cn(
          'h-full w-full rounded-xl border bg-card text-card-foreground shadow-sm',
          className
        )}
      >
        {children}
      </div>
    </main>
  )
}
