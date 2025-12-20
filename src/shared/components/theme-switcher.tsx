import { Palette } from 'lucide-react'
import type { ThemeName } from '@/shared/stores/theme.store'
import { useThemeStore } from '@/shared/stores/theme.store'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/shared/components/ui/dropdown-menu'
import { SidebarMenuButton } from '@/shared/components/ui/sidebar'

const THEMES: { id: ThemeName; label: string; color: string }[] = [
  { id: 'default', label: 'Default (Blue)', color: '#3b82f6' },
  { id: 'midnight-kimchi', label: 'Midnight Kimchi', color: '#ED4B00' },
  { id: 'black-gold', label: 'Black & Gold', color: '#FCA311' },
  { id: 'mirage-blaze', label: 'Mirage Blaze', color: '#FF5B04' },
  { id: 'contrast-orange', label: 'Modern Contrast', color: '#FF7124' },
  { id: 'monochromatic-blue', label: 'Mono Blue', color: '#0A4174' },
  { id: 'sunset-dusk', label: 'Sunset Dusk', color: '#F43F5E' },
  { id: 'tropical', label: 'Tropical', color: '#10B981' },
]

export function ThemeSwitcher() {
  const { theme, setTheme } = useThemeStore()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <SidebarMenuButton tooltip="Change Theme">
          <Palette className="min-h-4 min-w-4" />
          <span>Change Theme</span>
        </SidebarMenuButton>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {THEMES.map((t) => (
          <DropdownMenuItem
            key={t.id}
            onClick={() => {
              setTheme(t.id)
            }}
            className="flex items-center gap-2"
          >
            <div
              className="h-4 w-4 rounded-full border border-border"
              style={{ backgroundColor: t.color }}
            />
            <span className={theme === t.id ? 'font-bold' : ''}>{t.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
