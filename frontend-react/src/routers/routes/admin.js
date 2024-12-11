import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Accept , History } from '../../modules/admin/views';

const Admin = () => {
  return (
    <Routes>
      <Route path="accept" element={<Accept />} />
      <Route path="history-accepts" element={<History />} />
    </Routes>
  );
};

export default Admin