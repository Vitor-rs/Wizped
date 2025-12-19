import { useForm, type Resolver, type ControllerRenderProps } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { userSchema, type UserFormValues } from '../schemas/user.schema'
import { Button } from '@/shared/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/shared/components/ui/form'
import { Input } from '@/shared/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/components/ui/select'
import { useEffect } from 'react'

interface UserFormProps {
  defaultValues?: Partial<UserFormValues>
  onSubmit: (data: UserFormValues) => Promise<void>
  isLoading?: boolean
}

export function UserForm({ defaultValues, onSubmit, isLoading }: UserFormProps) {
  const form = useForm<UserFormValues>({
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    resolver: zodResolver(userSchema) as Resolver<UserFormValues>,
    defaultValues: {
      name: '',
      email: '',
      password: '',
      role: 'teacher' as const,
      ...defaultValues,
    },
  })

  // Reset form when defaultValues change (editing mode)
  useEffect(() => {
    if (defaultValues) {
      form.reset({ ...defaultValues })
    }
  }, [defaultValues, form])

  return (
    <Form {...form}>
      <form
        onSubmit={(e) => {
          void form.handleSubmit(onSubmit)(e)
        }}
        className="space-y-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome</FormLabel>
              <FormControl>
                <Input placeholder="Nome do usuário" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="email@exemplo.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Senha</FormLabel>
              <FormControl>
                <Input type="password" placeholder="******" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="role"
          render={({ field }: { field: ControllerRenderProps<UserFormValues, 'role'> }) => (
            <FormItem>
              <FormLabel>Função</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione uma função" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="teacher">Professor</SelectItem>
                  <SelectItem value="admin">Administrador</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isLoading} className="w-full">
          {isLoading ? 'Salvando...' : 'Salvar Usuário'}
        </Button>
      </form>
    </Form>
  )
}
