import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '../modules/core/hooks';

const PrivateRoutes = ({ children }) => {
  const { accessToken   } = useUser();
  return accessToken ? children : <Navigate to="/login" />;
};

export default PrivateRoutes;
