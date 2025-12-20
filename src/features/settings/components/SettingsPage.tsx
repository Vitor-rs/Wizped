import { PageContainer, PageHeader, PageContent } from '@/shared/components/layout/page-layout'
import { useThemeStore } from '@/shared/stores/theme.store'
import { useTheme } from '@/app/providers/ThemeProvider'
import { Check, Moon, Sun, Laptop } from 'lucide-react'

// Duplicate from theme-switcher, ideal to extract to shared constant file
const THEMES = [
  { id: 'default', label: 'Default (Blue)', color: '#3b82f6' },
  { id: 'midnight-kimchi', label: 'Midnight Kimchi', color: '#ED4B00' },
  { id: 'black-gold', label: 'Black & Gold', color: '#FCA311' },
  { id: 'mirage-blaze', label: 'Mirage Blaze', color: '#FF5B04' },
  { id: 'contrast-orange', label: 'Modern Contrast', color: '#FF7124' },
  { id: 'monochromatic-blue', label: 'Mono Blue', color: '#0A4174' },
  { id: 'sunset-dusk', label: 'Sunset Dusk', color: '#F43F5E' },
  { id: 'tropical', label: 'Tropical', color: '#10B981' },
] as const

export function SettingsPage() {
  const { theme, setTheme } = useThemeStore()
  const { theme: mode, setTheme: setMode } = useTheme()

  return (
    <PageContainer>
      <PageHeader title="Configurações" description="Gerencie as preferências da sua aplicação." />
      <PageContent>
        <div className="space-y-8">
          {/* Mode Selection */}
          <section className="space-y-4">
            <div>
              <h3 className="text-lg font-medium">Modo</h3>
              <p className="text-sm text-muted-foreground">
                Escolha o modo de exibição (Claro, Escuro ou Sistema).
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4 md:max-w-md">
              <div
                className={`flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 p-4 transition-all hover:bg-muted/50 ${mode === 'light' ? 'border-primary bg-muted' : 'border-transparent bg-card'} `}
                onClick={() => {
                  setMode('light')
                }}
              >
                <Sun className="h-6 w-6" />
                <span className="text-sm font-medium">Claro</span>
              </div>
              <div
                className={`flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 p-4 transition-all hover:bg-muted/50 ${mode === 'dark' ? 'border-primary bg-muted' : 'border-transparent bg-card'} `}
                onClick={() => {
                  setMode('dark')
                }}
              >
                <Moon className="h-6 w-6" />
                <span className="text-sm font-medium">Escuro</span>
              </div>
              <div
                className={`flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 p-4 transition-all hover:bg-muted/50 ${mode === 'system' ? 'border-primary bg-muted' : 'border-transparent bg-card'} `}
                onClick={() => {
                  setMode('system')
                }}
              >
                <Laptop className="h-6 w-6" />
                <span className="text-sm font-medium">Sistema</span>
              </div>
            </div>
          </section>

          {/* Theme Selection */}
          <section className="space-y-4">
            <div>
              <h3 className="text-lg font-medium">Tema de Cores</h3>
              <p className="text-sm text-muted-foreground">
                Selecione a paleta de cores principal. (Experimente no modo Claro e Escuro!)
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {THEMES.map((item) => {
                const isActive = theme === item.id
                return (
                  <div
                    key={item.id}
                    className={`relative cursor-pointer rounded-xl border-2 p-1 transition-all ${isActive ? 'border-primary ring-2 ring-primary/20' : 'border-transparent hover:border-border'} `}
                    onClick={() => {
                      setTheme(item.id)
                    }}
                  >
                    <div className="space-y-2 overflow-hidden rounded-lg border bg-card p-4">
                      {/* ... existing card content ... */}
                      <div className="flex items-center gap-2">
                        <div
                          className="h-8 w-8 rounded-full shadow-sm"
                          style={{ backgroundColor: item.color }}
                        />
                        <div className="text-sm font-semibold">{item.label}</div>
                      </div>
                      <div className="space-y-1 opacity-50">
                        <div className="h-2 w-full rounded-full bg-muted" />
                        <div className="h-2 w-2/3 rounded-full bg-muted" />
                      </div>
                    </div>
                    {isActive && (
                      <div className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm">
                        <Check className="h-3 w-3" />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </section>
        </div>
      </PageContent>
    </PageContainer>
  )
}
