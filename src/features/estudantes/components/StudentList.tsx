import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/shared/components/ui/table'
import { Button } from '@/shared/components/ui/button'
import { Pencil, Trash2, Check, X } from 'lucide-react'
import type { Student } from '@main/database/schema'

interface StudentListProps {
  students: Student[]
  onEdit: (student: Student) => void
  onDelete: (id: string) => void
  isLoading?: boolean
}

export function StudentList({ students, onEdit, onDelete, isLoading }: StudentListProps) {
  if (isLoading) {
    return <div className="p-8 text-center text-muted-foreground">Carregando estudantes...</div>
  }

  if (students.length === 0) {
    return <div className="p-8 text-center text-muted-foreground">Nenhum estudante cadastrado.</div>
  }

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nome</TableHead>
            <TableHead>Livro</TableHead>
            <TableHead>Horário</TableHead>
            <TableHead>Ativo</TableHead>
            <TableHead className="w-[100px]">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students.map((student) => (
            <TableRow key={student.id}>
              <TableCell className="font-medium">{student.name}</TableCell>
              <TableCell>{student.book ?? '-'}</TableCell>
              <TableCell>{student.classTime ?? '-'}</TableCell>
              <TableCell>
                {student.active ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <X className="h-4 w-4 text-red-500" />
                )}
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      onEdit(student)
                    }}
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-destructive hover:text-destructive"
                    onClick={() => {
                      onDelete(student.id)
                    }}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
