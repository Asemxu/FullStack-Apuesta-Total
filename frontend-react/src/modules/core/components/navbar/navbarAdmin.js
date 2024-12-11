import { Link } from "react-router-dom";
import { BtnLogout } from "../buttons";
import { useEffect } from "react";
import io from 'socket.io-client';
import { ToastContainer } from "react-toastify";
import useToastify from "../../hooks/useToastify";
import { fetchAuth } from "../../utils/fetchLib";
import { useUser } from "../../hooks";
import useAdmin from "../../../admin/hooks/useAdmin";
const socket = io('http://localhost:4000');

export const NavbarAdmin = () => {
  
  const {  showToastify } = useToastify()
  const {  accessToken }= useUser()
  const { setData } = useAdmin()
  const getListAll = async () => {
    const response = await fetchAuth('GET', {} , 'admin/listAll', accessToken)
    const data = await response.json()
    setData(data)
}

  useEffect(() => {
    socket.emit('joinAdmin');

    socket.on('userUpload', ({ user  , accept }) => {
      showToastify('success',"El ususario " + user.username + " ha enviado " + accept.total_pokemons + " usuarios para su aprobación")
      getListAll()
    });

    socket.on('userLoggedIn', (data) => {
      console.log('Usuario logueado:', data);
    });

    return () => {
      socket.off('userUpload');
    };
  }, []);
  return (
    <div className="navbar-admin bg-white p-4 text-center flex gap-4 items-center justify-between">
      <div className="flex gap-2 w-full justify-around">
        <Link className="font-bold text-black" to="/admin/accept">
          Aceptar Registros
        </Link>
        <Link className="font-bold text-black" to="/admin/history-accepts">
          Historial de registros
        </Link>
      </div>
      <BtnLogout />
    </div>
  );
};
