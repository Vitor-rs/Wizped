import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { RootLayout } from '@/app/layouts/RootLayout'
import { DashboardPage } from '@/features/dashboard/components/DashboardPage'
import { EstudantesPage } from '@/features/estudantes/components/EstudantesPage'
import { UsersPage } from '@/features/users/components/UsersPage'
import { SettingsPage } from '@/features/settings/components/SettingsPage'

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="estudantes" element={<EstudantesPage />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
