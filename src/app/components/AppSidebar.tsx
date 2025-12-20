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
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@/shared/components/ui/sidebar'

// This is sample data.
const data = {
  user: {
    name: 'Admin User',
    email: 'admin@wizped.com',
    avatar: '',
  },
  teams: [
    {
      name: 'Wizped',
      logo: BookOpen,
      plan: 'Gestão Escolar',
    },
  ],
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
      url: '/settings',
      icon: Settings2,
      items: [
        {
          title: 'Geral',
          url: '/settings',
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const activeTeam = data.teams[0]
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="pointer-events-none data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="flex aspect-square size-8 shrink-0 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <activeTeam.logo className="size-4" />
              </div>
              <div className="grid flex-1 overflow-hidden text-left text-sm leading-tight transition-[width,opacity,margin] duration-200 ease-in-out group-data-[collapsible=icon]:w-0 group-data-[collapsible=icon]:opacity-0">
                <span className="truncate font-semibold">{activeTeam.name}</span>
                <span className="truncate text-xs">{activeTeam.plan}</span>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavMain items={data.navSecondary} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
