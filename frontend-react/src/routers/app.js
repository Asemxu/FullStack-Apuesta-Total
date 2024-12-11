import { createBrowserRouter } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { Login } from "../modules/auth/views";
import App from "../modules/core/layouts/app";
import PrivateRoutes from "./privateRoutes";
import User from "./routes/user";
import Admin from "./routes/admin";
import PublicRoutes from "./publicRoutes";
import NotFound from "../modules/core/views/notFound/notFound";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "login",
        element: (
          <PublicRoutes>
            <Login />,
          </PublicRoutes>
        ),
      },
      {
        path: "user/*",
        element: (
          <PrivateRoutes>
            <User />
          </PrivateRoutes>
        ),
      },
      {
        path: "admin/*",
        element: (
          <PrivateRoutes>
            <Admin />
          </PrivateRoutes>
        ),
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
