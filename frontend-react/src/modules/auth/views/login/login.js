import React, { Fragment, useState } from "react";
import { LoginIcon } from "../../../core/components/icons";
import { LoginForm } from "../../components/forms/loginForm";
import { useUser } from "../../../core/hooks";
import { useNavigate } from "react-router-dom";
import { ROLES } from "../../constants/roles";
import useLogin from "../../hooks/useLogin";
import useToastify from "../../../core/hooks/useToastify";
import { ToastContainer } from "react-toastify";

export const Login = () => {
  const [idUser, setIdUser] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const { login , isLoading } =  useLogin()
  const { showToastify } = useToastify()

  const { setInfoUser } = useUser();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    
    e.preventDefault();
    const response = await login({
      username : idUser,
      password : password,
      rol : isChecked  ? ROLES.ADMIN.data : ROLES.USER.data
    })
    
    if(response.ok){
      const { token } = await response.json()
      showToastify(  "success",'Logueado correctamente')
      setInfoUser( token, idUser, isChecked ? ROLES.ADMIN.data : ROLES.USER.data );

      if(isChecked){
        navigate("/admin/accept");
      }else{
        navigate("/user/upload-users");
      }
    }else{
      const { message } = await response.json()
      showToastify(  "error", message)
    }
  
  };

  return (
    <Fragment>
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
          <LoginIcon />
        </div>
        <h2 className="text-3xl font-bold text-gray-800">
          Inicio de Sesión como{" "}
        </h2>
        <label className="mt-3 inline-flex items-center cursor-pointer">
          <input type="checkbox" value={isChecked} className="sr-only peer" onChange={ (e) => setIsChecked(!isChecked)}/>
          <div className="mt-3 relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            {isChecked ? ROLES.ADMIN.label : ROLES.USER.label} 
          </span>
        </label>
      </div>

      <LoginForm
        isLoading={isLoading}
        idUser={idUser}
        password={password}
        onIdUserChange={(e) => setIdUser(e.target.value)}
        onPasswordChange={(e) => setPassword(e.target.value)}
        onSubmit={handleSubmit}
      />

      <ToastContainer />
    </Fragment>
  );
};
