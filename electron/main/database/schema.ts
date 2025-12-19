import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'
import { sql } from 'drizzle-orm'

// --- USERS (Professores) ---
export const users = sqliteTable('users', {
  id: text('id')
    .primaryKey()
    .$default(() => crypto.randomUUID()),
  name: text('name').notNull(),
  email: text('email').unique(),
  password: text('password').notNull(),
  role: text('role').default('teacher'), // teacher | admin
  createdAt: integer('created_at', { mode: 'timestamp' }).default(sql`(unixepoch())`),
  updatedAt: integer('updated_at', { mode: 'timestamp' })
    .default(sql`(unixepoch())`)
    .$onUpdate(() => new Date()),
})

// --- ESTUDANTES (Alunos) ---
export const estudantes = sqliteTable('estudantes', {
  id: text('id')
    .primaryKey()
    .$default(() => crypto.randomUUID()),
  name: text('name').notNull(),

  // Dados Wizard
  book: text('book'), // Ex: W2, T8, W4
  classTime: text('class_time'), // Ex: "Seg/Qua 18:00"

  // Dados Pessoais/Responsável
  birthDate: text('birth_date'), // YYYY-MM-DD
  responsibleName: text('responsible_name'),
  phone: text('phone'),

  // Metadados
  active: integer('active', { mode: 'boolean' }).default(true),
  notes: text('notes'),

  createdAt: integer('created_at', { mode: 'timestamp' }).default(sql`(unixepoch())`),
  updatedAt: integer('updated_at', { mode: 'timestamp' })
    .default(sql`(unixepoch())`)
    .$onUpdate(() => new Date()),
})

// Inferência de Tipos
export type User = typeof users.$inferSelect
export type NewUser = typeof users.$inferInsert

export type Student = typeof estudantes.$inferSelect
export type NewStudent = typeof estudantes.$inferInsert
