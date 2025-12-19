import { registerUsersHandlers } from './handlers/users.handlers'
import { registerEstudantesHandlers } from './handlers/estudantes.handlers'

export function registerIpcHandlers(): void {
  // Register all IPC handlers
  registerUsersHandlers()
  registerEstudantesHandlers()
}
