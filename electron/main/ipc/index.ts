import { ipcMain } from 'electron'
import { registerUserHandlers } from './handlers/user.handlers'
import { registerEstudantesHandlers } from './handlers/estudantes.handlers'

export function registerIpcHandlers(): void {
  // Register all IPC handlers
  registerUserHandlers(ipcMain)
  registerEstudantesHandlers()
}
