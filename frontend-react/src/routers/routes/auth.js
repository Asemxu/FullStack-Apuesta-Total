import React from 'react';
import { Routes, Route } from 'react-router-dom';
import  { Login , Register } from '../../modules/auth/views';

const Auth = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Routes>
  );
};

export default Auth