import { useEffect, useState } from 'react'
import { useEstudantesStore } from '../stores/estudantes.store'
import { StudentForm } from './StudentForm'
import { StudentList } from './StudentList'
import { Button } from '@/shared/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/components/ui/dialog'
import { Plus } from 'lucide-react'
import type { StudentFormValues } from '../schemas/student.schema'
import type { Student } from '@main/database/schema'
import { useLayoutStore } from '@/shared/stores/layout.store'
import { PageContainer, PageContent, PageHeader } from '@/shared/components/layout/page-layout'

export function EstudantesPage() {
  const { estudantes, isLoading, fetchEstudantes, createStudent, updateStudent, deleteStudent } =
    useEstudantesStore()
  const [isOpen, setIsOpen] = useState(false)
  const [editingStudent, setEditingStudent] = useState<Student | null>(null)
  const { setBreadcrumbs } = useLayoutStore()

  useEffect(() => {
    setBreadcrumbs([{ label: 'Gestão', href: '#' }, { label: 'Estudantes' }])
    void fetchEstudantes()
  }, [fetchEstudantes, setBreadcrumbs])

  const handleSubmit = async (data: StudentFormValues) => {
    if (editingStudent) {
      await updateStudent(editingStudent.id, data)
    } else {
      await createStudent(data)
    }
    setIsOpen(false)
    setEditingStudent(null)
  }

  const handleEdit = (student: Student) => {
    setEditingStudent(student)
    setIsOpen(true)
  }

  const handleDelete = async (id: string) => {
    if (confirm('Tem certeza que deseja excluir este estudante?')) {
      await deleteStudent(id)
    }
  }

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open)
    if (!open) setEditingStudent(null)
  }

  return (
    <PageContainer>
      <PageHeader
        title="Estudantes"
        description="Gerencie os alunos da escola"
        actions={
          <Dialog open={isOpen} onOpenChange={handleOpenChange}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Novo Estudante
              </Button>
            </DialogTrigger>
            <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>{editingStudent ? 'Editar Estudante' : 'Novo Estudante'}</DialogTitle>
              </DialogHeader>
              <StudentForm
                onSubmit={handleSubmit}
                isLoading={isLoading}
                defaultValues={
                  editingStudent
                    ? {
                        name: editingStudent.name,
                        book: editingStudent.book ?? '',
                        classTime: editingStudent.classTime ?? '',
                        responsibleName: editingStudent.responsibleName ?? '',
                        phone: editingStudent.phone ?? '',
                        notes: editingStudent.notes ?? '',
                        active: editingStudent.active ?? true,
                      }
                    : undefined
                }
              />
            </DialogContent>
          </Dialog>
        }
      />
      <PageContent>
        <StudentList
          students={estudantes}
          isLoading={isLoading}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </PageContent>
    </PageContainer>
  )
}
