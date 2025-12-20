import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type ThemeName =
  | 'default'
  | 'midnight-kimchi'
  | 'black-gold'
  | 'mirage-blaze'
  | 'contrast-orange'
  | 'monochromatic-blue'
  | 'sunset-dusk'
  | 'tropical'

interface ThemeStore {
  theme: ThemeName
  setTheme: (theme: ThemeName) => void
}

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: 'default',
      setTheme: (theme) => {
        set({ theme })
        if (theme === 'default') {
          document.documentElement.removeAttribute('data-theme')
        } else {
          document.documentElement.setAttribute('data-theme', theme)
        }
      },
    }),
    {
      name: 'wizped-theme',
      onRehydrateStorage: () => (state) => {
        // Apply theme on load
        if (state?.theme && state.theme !== 'default') {
          document.documentElement.setAttribute('data-theme', state.theme)
        }
      },
    }
  )
)
