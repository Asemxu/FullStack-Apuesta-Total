import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '../modules/core/hooks';
import { ROLES } from '../modules/auth/constants/roles';

const PublicRoutes = ({ children }) => {
  const { accessToken , rol  } = useUser();
  return accessToken ?  rol === ROLES.ADMIN.data  ? <Navigate to="/admin/accept" /> : <Navigate to="/user/upload-users" /> : children;
};

export default PublicRoutes;
