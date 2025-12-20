import { create } from 'zustand'

export interface BreadcrumbItem {
  label: string
  href?: string
}

interface LayoutState {
  breadcrumbs: BreadcrumbItem[]
  setBreadcrumbs: (items: BreadcrumbItem[]) => void
}

export const useLayoutStore = create<LayoutState>((set) => ({
  breadcrumbs: [],
  setBreadcrumbs: (items) => {
    set({ breadcrumbs: items })
  },
}))
