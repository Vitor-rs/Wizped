import { z } from 'zod'

export const userSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, 'Nome é obrigatório'),
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'Senha deve ter no mínimo 6 caracteres'),
  role: z.enum(['teacher', 'admin']).default('teacher'),
})

export type UserFormValues = z.infer<typeof userSchema>
