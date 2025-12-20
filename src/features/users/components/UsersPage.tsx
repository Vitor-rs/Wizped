import { useEffect, useState } from 'react'
import { useUsersStore } from '../stores/users.store'
import { UserForm } from './UserForm'
import { UserList } from './UserList'
import { Button } from '@/shared/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/components/ui/dialog'
import { Plus } from 'lucide-react'
import type { UserFormValues } from '../schemas/user.schema'
import type { User } from '@main/database/schema'
import { PageContainer, PageContent, PageHeader } from '@/shared/components/layout/page-layout'

export function UsersPage() {
  const { users, isLoading, fetchUsers, createUser, updateUser, deleteUser } = useUsersStore()
  const [isOpen, setIsOpen] = useState(false)
  const [editingUser, setEditingUser] = useState<User | null>(null)

  useEffect(() => {
    void fetchUsers()
  }, [fetchUsers])

  const handleSubmit = async (data: UserFormValues) => {
    if (editingUser) {
      await updateUser(editingUser.id, data)
    } else {
      await createUser(data)
    }
    setIsOpen(false)
    setEditingUser(null)
  }

  const handleEdit = (user: User) => {
    setEditingUser(user)
    setIsOpen(true)
  }

  const handleDelete = async (id: string) => {
    if (confirm('Tem certeza que deseja excluir este usuário?')) {
      await deleteUser(id)
    }
  }

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open)
    if (!open) setEditingUser(null)
  }

  return (
    <PageContainer>
      <PageHeader
        title="Usuários"
        description="Gerencie os usuários do sistema"
        actions={
          <Dialog open={isOpen} onOpenChange={handleOpenChange}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Novo Usuário
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{editingUser ? 'Editar Usuário' : 'Novo Usuário'}</DialogTitle>
              </DialogHeader>
              <UserForm
                onSubmit={handleSubmit}
                isLoading={isLoading}
                defaultValues={
                  editingUser
                    ? {
                        name: editingUser.name,
                        email: editingUser.email ?? '',
                        role: editingUser.role as 'teacher' | 'admin',
                      }
                    : undefined
                }
              />
            </DialogContent>
          </Dialog>
        }
      />
      <PageContent>
        <UserList users={users} isLoading={isLoading} onEdit={handleEdit} onDelete={handleDelete} />
      </PageContent>
    </PageContainer>
  )
}
