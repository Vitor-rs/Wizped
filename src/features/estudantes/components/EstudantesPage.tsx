import { useEffect, useState } from 'react'
import { useEstudantesStore } from '../stores/estudantes.store'
import { estudantesService } from '../services/estudantes.service'
import type { Student, NewStudent } from '../../../../electron/main/database/schema'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/shared/components/ui/table'
import { Button } from '@/shared/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/shared/components/ui/dialog'
import { Input } from '@/shared/components/ui/input'
import { Label } from '@/shared/components/ui/label'

export function EstudantesPage() {
  const { isLoading, error, setLoading, setError } = useEstudantesStore()
  const [students, setStudents] = useState<Student[]>([])
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [formData, setFormData] = useState<Partial<NewStudent>>({
    name: '',
    book: '',
    phone: '',
  })

  const fetchStudents = async () => {
    setLoading(true)
    try {
      const data = await estudantesService.getAll()
      setStudents(data)
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao buscar estudantes')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    void fetchStudents()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name) return

    setLoading(true)
    try {
      await estudantesService.create(formData as NewStudent)
      await fetchStudents()
      setIsDialogOpen(false)
      setFormData({ name: '', book: '', phone: '' })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao criar estudante')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Estudantes</h1>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>Novo Aluno</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Cadastrar Aluno</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleCreate} className="space-y-4">
              <div>
                <Label htmlFor="name">Nome</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value })
                  }}
                  required
                />
              </div>
              <div>
                <Label htmlFor="book">Book (W2, T8...)</Label>
                <Input
                  id="book"
                  value={formData.book ?? ''}
                  onChange={(e) => {
                    setFormData({ ...formData, book: e.target.value })
                  }}
                />
              </div>
              <div>
                <Label htmlFor="phone">Telefone</Label>
                <Input
                  id="phone"
                  value={formData.phone ?? ''}
                  onChange={(e) => {
                    setFormData({ ...formData, phone: e.target.value })
                  }}
                />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? 'Salvando...' : 'Salvar'}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      {error && <div className="mb-4 text-red-500">{error}</div>}

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>Book</TableHead>
              <TableHead>Telefone</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading && students.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center">
                  Carregando...
                </TableCell>
              </TableRow>
            ) : students.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="text-center">
                  Nenhum aluno encontrado.
                </TableCell>
              </TableRow>
            ) : (
              students.map((student) => (
                <TableRow key={student.id}>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.book}</TableCell>
                  <TableCell>{student.phone}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      Editar
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
