import { create } from 'zustand'
import { estudantesService } from '../services/estudantes.service'
import type { Student } from '@main/database/schema'
import type { StudentFormValues } from '../schemas/student.schema'

interface EstudantesState {
  estudantes: Student[]
  isLoading: boolean
  error: string | null

  fetchEstudantes: () => Promise<void>
  createStudent: (data: StudentFormValues) => Promise<void>
  updateStudent: (id: string, data: Partial<StudentFormValues>) => Promise<void>
  deleteStudent: (id: string) => Promise<void>
}

export const useEstudantesStore = create<EstudantesState>((set, get) => ({
  estudantes: [],
  isLoading: false,
  error: null,

  fetchEstudantes: async () => {
    set({ isLoading: true, error: null })
    try {
      const estudantes = await estudantesService.getAll()
      set({ estudantes, isLoading: false })
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false })
    }
  },

  createStudent: async (data: StudentFormValues) => {
    set({ isLoading: true, error: null })
    try {
      await estudantesService.create(data)
      await get().fetchEstudantes()
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false })
    }
  },

  updateStudent: async (id: string, data: Partial<StudentFormValues>) => {
    set({ isLoading: true, error: null })
    try {
      await estudantesService.update(id, data)
      await get().fetchEstudantes()
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false })
    }
  },

  deleteStudent: async (id: string) => {
    set({ isLoading: true, error: null })
    try {
      await estudantesService.delete(id)
      await get().fetchEstudantes()
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false })
    }
  },
}))
