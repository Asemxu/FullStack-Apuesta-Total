import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";

import app from './routers/app'

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={app} />
);