import { create } from 'zustand'
import { persist } from 'zustand/middleware';
import zukeeper from 'zukeeper'

const useAdminStore = create(
  persist(zukeeper(
    (set) => ({
      data : [],
      setData : ( data) => {
        set( { data : data})
      },
      clearAuth : () => {
        set({ data : [] })
      }
    }),
    
  ),
  {
    name: 'admin-storage', // nombre único para el almacenamiento
    getStorage: () => localStorage, // especifica el tipo de almacenamiento
  })
)

window.store = useAdminStore

export default useAdminStore