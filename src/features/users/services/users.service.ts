import type { z } from 'zod'
import { userSchema } from '../schemas/user.schema'
import type { User, NewUser } from '@main/database/schema'

class UsersService {
  async getAll(): Promise<User[]> {
    return await window.electronAPI.invoke('users:getAll')
  }

  async getById(id: string): Promise<User | null> {
    return await window.electronAPI.invoke('users:getById', id)
  }

  async create(data: z.infer<typeof userSchema>): Promise<User> {
    const parsed = userSchema.parse(data)
    // Cast to NewUser because schemas might differ slightly in ID/dates handling during creation
    return await window.electronAPI.invoke('users:create', parsed as NewUser)
  }

  async update(id: string, data: Partial<z.infer<typeof userSchema>>): Promise<User> {
    const parsed = userSchema.partial().parse(data)
    return await window.electronAPI.invoke('users:update', id, parsed as Partial<NewUser>)
  }

  async delete(id: string): Promise<boolean> {
    return await window.electronAPI.invoke('users:delete', id)
  }
}

export const usersService = new UsersService()
