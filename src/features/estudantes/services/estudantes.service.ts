// Estudantes Service
// IPC calls to interact with main process

// TODO: Import your feature types after defining them
// import type { Estudantes, NewEstudantes } from '../types'

import type { NewStudent } from '../../../../electron/main/database/schema'

export const estudantesService = {
  async getAll() {
    return window.electronAPI.invoke('estudantes:getAll')
  },

  async getById(id: string) {
    return window.electronAPI.invoke('estudantes:getById', id)
  },

  async create(data: NewStudent) {
    return window.electronAPI.invoke('estudantes:create', data)
  },

  async update(id: string, data: Partial<NewStudent>) {
    return window.electronAPI.invoke('estudantes:update', id, data)
  },

  async delete(id: string) {
    return window.electronAPI.invoke('estudantes:delete', id)
  },
}

/*
 * IMPORTANT: After creating this service, you must:
 * 1. Add IPC types in src/shared/types/ipc.ts
 * 2. Update ALLOWED_CHANNELS in electron/preload/index.ts
 * 3. Create handler in electron/main/ipc/handlers/estudantes.handlers.ts
 * 4. Register handler in electron/main/ipc/index.ts
 */
