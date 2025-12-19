import { z } from 'zod'

export const studentSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, 'Nome é obrigatório'),
  book: z.string().optional(),
  classTime: z.string().optional(),
  birthDate: z.string().optional(),
  responsibleName: z.string().optional(),
  phone: z.string().optional(),
  notes: z.string().optional(),
  active: z.boolean().default(true),
})

export type StudentFormValues = z.infer<typeof studentSchema>
