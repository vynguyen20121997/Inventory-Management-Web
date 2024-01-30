import { wrapCreateBrowserRouter } from "@sentry/react";
import { createBrowserRouter } from "react-router-dom";
import { PATHS } from "../constant/urls";
import LoginPage from "../feature/login/LoginPage";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import PublicRoute from "./PublicRoute/PublicRoute";

const sentryCreateBrowserRouter = wrapCreateBrowserRouter(createBrowserRouter);
const router = sentryCreateBrowserRouter([
  {
    path: PATHS.home,
    element: <PublicRoute />,
    children: [{ path: "", element: <LoginPage /> }],
  },
  {
    element: <PrivateRoute />,
    children: [
      // {
      //   path:
      //   element:
      //   handle: {
      //     roles:
      //   },
      // },
    ],
  },
]);

export default router;
