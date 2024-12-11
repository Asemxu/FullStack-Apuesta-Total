import React from "react";
import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import { useUser } from "../hooks";
import { BtnLogout } from "../components/buttons";
import { ROLES } from "../../auth/constants/roles";
import { NavbarAdmin } from "../components/navbar";
import 'react-toastify/dist/ReactToastify.css';
import UserContainer from "../../user/components/userContainer";
import { ToastContainer } from "react-toastify";
const App = () => {
 
  const { user, rol } = useUser();
  return (
    <Fragment>
      {rol === ROLES.ADMIN.data && (
        <main className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
          <div className="w-full max-w-3xl m-auto">
            <NavbarAdmin />
            <Outlet />
          </div>
        </main>
      )}

      {rol === ROLES.USER.data && (
        <UserContainer>
           <main className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
          <div className="w-full max-w-md">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              {user && <BtnLogout />}
              <Outlet />
            </div>
          </div>
        </main>
        </UserContainer>
       
      )}

      {!rol && (
        <main className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <Outlet />
          </div>
        </div>
      </main>
      )}
      <ToastContainer />
    </Fragment>
  );
};

export default App;
