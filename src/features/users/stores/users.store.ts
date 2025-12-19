import { create } from 'zustand'
import { usersService } from '../services/users.service'
import type { User } from '@main/database/schema'
import type { UserFormValues } from '../schemas/user.schema'

interface UsersState {
  users: User[]
  isLoading: boolean
  error: string | null

  fetchUsers: () => Promise<void>
  createUser: (data: UserFormValues) => Promise<void>
  updateUser: (id: string, data: Partial<UserFormValues>) => Promise<void>
  deleteUser: (id: string) => Promise<void>
}

export const useUsersStore = create<UsersState>((set, get) => ({
  users: [],
  isLoading: false,
  error: null,

  fetchUsers: async () => {
    set({ isLoading: true, error: null })
    try {
      const users = await usersService.getAll()
      set({ users, isLoading: false })
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false })
    }
  },

  createUser: async (data: UserFormValues) => {
    set({ isLoading: true, error: null })
    try {
      await usersService.create(data)
      await get().fetchUsers()
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false })
    }
  },

  updateUser: async (id: string, data: Partial<UserFormValues>) => {
    set({ isLoading: true, error: null })
    try {
      await usersService.update(id, data)
      await get().fetchUsers()
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false })
    }
  },

  deleteUser: async (id: string) => {
    set({ isLoading: true, error: null })
    try {
      await usersService.delete(id)
      await get().fetchUsers()
    } catch (error) {
      set({ error: (error as Error).message, isLoading: false })
    }
  },
}))
