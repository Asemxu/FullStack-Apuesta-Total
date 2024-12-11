import React from 'react';
import { MailIcon, LockIcon } from '../../../core/components/icons';
import { useUser } from '../../../core/hooks';
export const LoginForm= ({
  idUser,
  password,
  onIdUserChange,
  isLoading = false,
  onPasswordChange,
  onSubmit,
}) => {
  const  { accessToken , user } = useUser()
  return (
   
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="idUser" className="text-sm font-medium text-gray-700 block">
          ID
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <MailIcon />
          </div>
          <input
            id="idUser"
            type="text"
            required
            className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Ingrese su ID"
            value={idUser}
            onChange={onIdUserChange}
          />
        </div>
      </div>
      {accessToken}
      {user}
      <div className="space-y-2">
        <label htmlFor="password" className="text-sm font-medium text-gray-700 block">
          Contraseña
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <LockIcon />
          </div>
          <input
            id="password"
            type="password"
            required
            className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="••••••••"
            value={password}
            onChange={onPasswordChange}
          />
        </div>
      </div>

      <button
        type="submit"
        onClick={onSubmit}
        disabled={isLoading}
        className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors ${isLoading ? 'opacity-50 disabled' : 'opacity-100'}`}
      >
        {isLoading ? 'Cargando ...' : 'Ingresar'}
      </button>
    </form>
  );
};