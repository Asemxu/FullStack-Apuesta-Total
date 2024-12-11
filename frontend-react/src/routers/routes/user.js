import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NotFound
 from '../../modules/core/views/notFound/notFound';
 import { UploadUsers , Achievements } from '../../modules/user/views';
const User = () => {
  return (
    <Routes>
      <Route path="upload-users" element={<UploadUsers />} />
      <Route path="achievements" element={<Achievements />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default User