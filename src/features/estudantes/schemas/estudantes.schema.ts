import { z } from 'zod'

export const estudantesSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1, 'Nome é obrigatório'),
  createdAt: z.date(),
  updatedAt: z.date(),
})

export const createEstudantesSchema = estudantesSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
})

export const updateEstudantesSchema = createEstudantesSchema.partial()

export type EstudantesFormData = z.infer<typeof createEstudantesSchema>
export type UpdateEstudantesFormData = z.infer<typeof updateEstudantesSchema>
