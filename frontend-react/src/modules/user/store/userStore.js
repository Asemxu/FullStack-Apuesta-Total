import { create } from 'zustand'
import { persist } from 'zustand/middleware';
import zukeeper from 'zukeeper'

const userStore = create(
  persist(zukeeper(
    (set) => ({
      lastRegister: {
        total: 0,
        medal: "",
      },
      setInfoRegister: (info) => {
        set({ lastRegister: info });
      },
      clearUser: () => {
        set({ lastRegister: { total: 0, medal: "" } })
      }
    }),

  ),
    {
      name: 'user-storage', // nombre único para el almacenamiento
      getStorage: () => localStorage, // especifica el tipo de almacenamiento
    })
)

window.store = userStore

export default userStore