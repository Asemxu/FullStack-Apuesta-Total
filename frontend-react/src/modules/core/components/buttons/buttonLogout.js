import { useLogout } from "../../hooks";

export const BtnLogout = () => {
    const { Logout } = useLogout() 
  return (
    <div className="flex w-full justify-end">
      <button
        onClick={() => Logout()}
        className="bg-red-500 px-3 py-2 rounded-lg text-white   text-right"
      >
        Cerrar Sesión
      </button>
    </div>
  );
};
