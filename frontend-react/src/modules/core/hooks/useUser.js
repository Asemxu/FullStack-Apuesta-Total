import useAuthStore from "../../auth/store/authStore";
export const useUser = () => {
  const { user, rol, totalMedals, accessToken, setInfoUser , clearAuth  , setTotal} = useAuthStore();
  return { user, rol, totalMedals, accessToken, setInfoUser , clearAuth , setTotal};
};



