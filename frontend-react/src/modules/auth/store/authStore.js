import { create } from 'zustand'
import { persist } from 'zustand/middleware';
import zukeeper from 'zukeeper'

const useAuthStore = create(
  persist(zukeeper(
    (set) => ({
      user: null,
      accessToken : null,
      totalMedals : 0,
      rol: null,
      setInfoUser: (token , user , rol) => {
        set({ accessToken: token , user : user  , rol : rol});
      },
      setTotal : (total) => {
        set({ totalMedals : total })
      },
      clearAuth : () => {
        set({ user : null , accessToken : null , totalMedals : 0 , rol : null})
      }
    }),
    
  ),
  {
    name: 'auth-storage', // nombre único para el almacenamiento
    getStorage: () => localStorage, // especifica el tipo de almacenamiento
  })
)

window.store = useAuthStore

export default useAuthStore