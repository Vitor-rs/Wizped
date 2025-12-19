'use client'

import * as React from 'react'
import { BookOpen, Settings2, SquareTerminal, User, Users } from 'lucide-react'

import { NavMain } from '@/shared/components/nav-main'
import { NavUser } from '@/shared/components/nav-user'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/shared/components/ui/sidebar'

// This is sample data.
const data = {
  user: {
    name: 'Admin User',
    email: 'admin@wizped.com',
    avatar: '',
  },
  navMain: [
    {
      title: 'Gestão',
      url: '#',
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: 'Estudantes',
          url: '/estudantes',
          icon: Users,
        },
        {
          title: 'Usuários',
          url: '/users',
          icon: User,
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: 'Configurações',
      url: '#',
      icon: Settings2,
      items: [
        {
          title: 'Geral',
          url: '#',
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground group-data-[collapsible=icon]:!justify-center group-data-[collapsible=icon]:!p-0"
            >
              <div className="flex aspect-square size-8 shrink-0 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <BookOpen className="size-4" />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight group-data-[collapsible=icon]:hidden">
                <span className="truncate font-semibold">Wizped</span>
                <span className="truncate text-xs">Gestão Escolar</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        {/* We can re-add NavSecondary or other groups here if implemented */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
