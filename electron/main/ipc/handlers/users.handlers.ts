import { ipcMain } from 'electron'
import { getDatabase } from '../../database/client'
import { users, type NewUser } from '../../database/schema'
import { eq } from 'drizzle-orm'

export function registerUsersHandlers() {
  const db = getDatabase()

  ipcMain.handle('users:getAll', async () => {
    return db.select().from(users).all()
  })

  ipcMain.handle('users:getById', async (_event, id: string) => {
    const result = await db.select().from(users).where(eq(users.id, id)).get()
    return result ?? null
  })

  ipcMain.handle('users:create', async (_event, data: unknown) => {
    const result = await db
      .insert(users)
      .values(data as NewUser)
      .returning()
      .get()
    return result
  })

  ipcMain.handle('users:update', async (_event, id: string, data: unknown) => {
    const result = await db
      .update(users)
      .set(data as Partial<NewUser>)
      .where(eq(users.id, id))
      .returning()
      .get()
    return result
  })

  ipcMain.handle('users:delete', async (_event, id: string) => {
    await db.delete(users).where(eq(users.id, id)).run()
    return true
  })
}
