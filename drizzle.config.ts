import { defineConfig } from 'drizzle-kit'
import * as dotenv from 'dotenv'

// Carrega variáveis do arquivo .env
dotenv.config()

const { TURSO_DATABASE_URL, TURSO_AUTH_TOKEN } = process.env

if (!TURSO_DATABASE_URL || !TURSO_AUTH_TOKEN) {
  throw new Error('❌ Credenciais do Turso não encontradas no .env')
}

export default defineConfig({
  schema: './electron/main/database/schema.ts',
  out: './electron/main/database/migrations',
  dialect: 'sqlite', // Turso é compatível com SQLite
  driver: 'turso', // Especificamos o driver aqui
  dbCredentials: {
    url: TURSO_DATABASE_URL,
    authToken: TURSO_AUTH_TOKEN,
  },
})
