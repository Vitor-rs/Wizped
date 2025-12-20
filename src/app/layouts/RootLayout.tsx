import { Outlet } from 'react-router-dom'
import { SidebarProvider, SidebarTrigger, SidebarInset } from '@/shared/components/ui/sidebar'
import { AppSidebar } from '@/app/components/AppSidebar'
import { Separator } from '@/shared/components/ui/separator'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/shared/components/ui/breadcrumb'
import { Fragment } from 'react'

import { useLocation } from 'react-router-dom'

export function RootLayout() {
  const location = useLocation()

  const getBreadcrumbs = (pathname: string): { label: string; href?: string }[] => {
    switch (pathname) {
      case '/':
        return [{ label: 'Dashboard' }]
      case '/estudantes':
        return [{ label: 'Gestão', href: '#' }, { label: 'Estudantes' }]
      case '/users':
        return [{ label: 'Gestão', href: '#' }, { label: 'Usuários' }]
      default:
        // Fallback for nested or unknown routes
        return pathname
          .split('/')
          .filter(Boolean)
          .map((segment) => ({ label: segment.charAt(0).toUpperCase() + segment.slice(1) }))
    }
  }

  const breadcrumbs = getBreadcrumbs(location.pathname)

  return (
    <SidebarProvider defaultOpen={true}>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-14 shrink-0 items-center gap-2 border-b px-4 transition-[width] ease-linear">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              {breadcrumbs.length > 0 ? (
                breadcrumbs.map((item, index) => (
                  <Fragment key={index}>
                    <BreadcrumbItem className="hidden md:block">
                      {item.href ? (
                        <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
                      ) : (
                        <BreadcrumbPage>{item.label}</BreadcrumbPage>
                      )}
                    </BreadcrumbItem>
                    {index < breadcrumbs.length - 1 && (
                      <BreadcrumbSeparator className="hidden md:block" />
                    )}
                  </Fragment>
                ))
              ) : (
                <BreadcrumbItem>
                  <BreadcrumbPage>Wizped</BreadcrumbPage>
                </BreadcrumbItem>
              )}
            </BreadcrumbList>
          </Breadcrumb>
        </header>
        <div className="flex flex-1 flex-col overflow-hidden">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
