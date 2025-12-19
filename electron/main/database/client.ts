import { createClient } from '@libsql/client'
import type { Client } from '@libsql/core/api'
import { drizzle, type LibSQLDatabase } from 'drizzle-orm/libsql'
import { app } from 'electron'
import { existsSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import * as schema from './schema'

const DB_FILENAME = 'wizped-local.db'

function getDatabasePath(): string {
  if (app.isPackaged) {
    return join(dirname(process.execPath), 'data', DB_FILENAME)
  }
  return join(process.cwd(), 'resources', DB_FILENAME)
}

let client: Client | null = null
let db: LibSQLDatabase<typeof schema> | null = null

export function getDatabase(): LibSQLDatabase<typeof schema> {
  if (db) {
    return db
  }

  const dbPath = getDatabasePath()
  const dbDir = dirname(dbPath)

  if (!existsSync(dbDir)) {
    mkdirSync(dbDir, { recursive: true })
  }

  const url = `file:${dbPath}`
  const authToken = process.env.TURSO_AUTH_TOKEN ?? undefined
  const syncUrl = process.env.TURSO_DATABASE_URL ?? undefined
  const isCloudEnabled = Boolean(syncUrl && authToken)

  if (isCloudEnabled) {
    // Cyan (*) for connecting
    console.log(`\x1b[36m(*)\x1b[0m [WizPed] Conectando...`)
  } else {
    // Red (!) for offline
    console.error('\x1b[31m(!)\x1b[0m [WizPed] Offline (Sem credenciais)')
  }

  client = (createClient as unknown as (config: unknown) => Client)({
    url,
    authToken,
    syncUrl,
  })

  if (isCloudEnabled) {
    setInterval(() => {
      void (async () => {
        try {
          await client?.sync()
        } catch {
          // Ignora erros de rede silenciosamente em background
        }
      })()
    }, 60 * 1000)

    void client.sync().catch(() => {
      console.log('[Sync] Offline init')
    })
  }

  db = drizzle(client, { schema })
  return db
}

export function closeDatabase(): void {
  if (client) {
    client.close()
    client = null
    db = null
  }
}
