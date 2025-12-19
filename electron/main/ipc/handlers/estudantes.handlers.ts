import { ipcMain } from 'electron'
import { getDatabase } from '../../database/client'
import { estudantes, type NewStudent } from '../../database/schema'
import { eq } from 'drizzle-orm'

export function registerEstudantesHandlers() {
  const db = getDatabase()

  ipcMain.handle('estudantes:getAll', async () => {
    return db.select().from(estudantes).all()
  })

  ipcMain.handle('estudantes:getById', async (_event, id: string) => {
    const result = await db.select().from(estudantes).where(eq(estudantes.id, id)).get()
    return result ?? null
  })

  ipcMain.handle('estudantes:create', async (_event, data: unknown) => {
    // TODO: Add Zod validation here
    const result = await db
      .insert(estudantes)
      .values(data as NewStudent)
      .returning()
      .get()
    return result
  })

  ipcMain.handle('estudantes:update', async (_event, id: string, data: unknown) => {
    // TODO: Add Zod validation here
    const result = await db
      .update(estudantes)
      .set(data as Partial<NewStudent>)
      .where(eq(estudantes.id, id))
      .returning()
      .get()
    return result
  })

  ipcMain.handle('estudantes:delete', async (_event, id: string) => {
    await db.delete(estudantes).where(eq(estudantes.id, id)).run()
    return true
  })
}
