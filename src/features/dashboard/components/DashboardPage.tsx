import { useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/ui/card'
import { Users, GraduationCap } from 'lucide-react'
import { useEstudantesStore } from '@/features/estudantes/stores/estudantes.store'
import { useUsersStore } from '@/features/users/stores/users.store'

import { PageContainer, PageContent, PageHeader } from '@/shared/components/layout/page-layout'

export function DashboardPage() {
  const { estudantes, fetchEstudantes } = useEstudantesStore()
  const { users, fetchUsers } = useUsersStore()

  useEffect(() => {
    void fetchEstudantes()
    void fetchUsers()
  }, [fetchEstudantes, fetchUsers])

  return (
    <PageContainer>
      <PageHeader title="Dashboard" description="Visão geral do sistema" />
      <PageContent>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total de Estudantes</CardTitle>
              <GraduationCap className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{estudantes.length}</div>
              <p className="text-xs text-muted-foreground">Alunos matriculados</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total de Usuários</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{users.length}</div>
              <p className="text-xs text-muted-foreground">Professores e Admins</p>
            </CardContent>
          </Card>
        </div>
      </PageContent>
    </PageContainer>
  )
}
