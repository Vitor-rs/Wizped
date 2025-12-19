import { create } from 'zustand'
import { ReactNode } from 'react'

export interface BreadcrumbItemType {
  label: string
  href?: string
}

interface LayoutState {
  title: string
  breadcrumbs: BreadcrumbItemType[]
  subHeader: ReactNode | null

  // Actions
  setTitle: (title: string) => void
  setBreadcrumbs: (items: BreadcrumbItemType[]) => void
  setSubHeader: (content: ReactNode | null) => void
  resetLayout: () => void
}

export const useLayoutStore = create<LayoutState>((set) => ({
  title: 'Wizped',
  breadcrumbs: [],
  subHeader: null,

  setTitle: (title) => set({ title }),
  setBreadcrumbs: (breadcrumbs) => set({ breadcrumbs }),
  setSubHeader: (subHeader) => set({ subHeader }),
  resetLayout: () => set({ title: 'Wizped', breadcrumbs: [], subHeader: null }),
}))
