import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface EstudantesState {
  isLoading: boolean
  error: string | null
}

interface EstudantesActions {
  setLoading: (isLoading: boolean) => void
  setError: (error: string | null) => void
  reset: () => void
}

const initialState: EstudantesState = {
  isLoading: false,
  error: null,
}

export const useEstudantesStore = create<EstudantesState & EstudantesActions>()(
  devtools(
    (set) => ({
      ...initialState,

      setLoading: (isLoading) => {
        set({ isLoading })
      },
      setError: (error) => {
        set({ error })
      },

      reset: () => {
        set(initialState)
      },
    }),
    { name: 'EstudantesStore' }
  )
)
