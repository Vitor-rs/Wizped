import { useEstudantesStore } from '../stores/estudantes.store'

export function EstudantesPage() {
  const { isLoading, error } = useEstudantesStore()

  return (
    <div className="p-6">
      <h1 className="mb-4 text-2xl font-bold">Estudantes</h1>
      {isLoading && <p>Carregando...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <div className="rounded border p-4">
        <p>Conteúdo da página de estudantes.</p>
      </div>
    </div>
  )
}
