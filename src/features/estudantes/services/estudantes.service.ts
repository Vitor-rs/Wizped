import type { z } from 'zod'
import { studentSchema } from '../schemas/student.schema'
import type { Student, NewStudent } from '@main/database/schema'

class EstudantesService {
  async getAll(): Promise<Student[]> {
    return await window.electronAPI.invoke('estudantes:getAll')
  }

  async getById(id: string): Promise<Student | null> {
    return await window.electronAPI.invoke('estudantes:getById', id)
  }

  async create(data: z.infer<typeof studentSchema>): Promise<Student> {
    const parsed = studentSchema.parse(data)
    return await window.electronAPI.invoke('estudantes:create', parsed as NewStudent)
  }

  async update(id: string, data: Partial<z.infer<typeof studentSchema>>): Promise<Student> {
    const parsed = studentSchema.partial().parse(data)
    return await window.electronAPI.invoke('estudantes:update', id, parsed as Partial<NewStudent>)
  }

  async delete(id: string): Promise<boolean> {
    return await window.electronAPI.invoke('estudantes:delete', id)
  }
}

export const estudantesService = new EstudantesService()
