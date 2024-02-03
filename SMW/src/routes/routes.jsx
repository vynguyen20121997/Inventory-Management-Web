import { wrapCreateBrowserRouter } from "@sentry/react";
import { createBrowserRouter } from "react-router-dom";
import { PATHS } from "../constant/urls";
import LoginPage from "../feature/LoginPage";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import PublicRoute from "./PublicRoute/PublicRoute";
import ShelfPage from "../feature/ShelfPage";

const sentryCreateBrowserRouter = wrapCreateBrowserRouter(createBrowserRouter);
const router = sentryCreateBrowserRouter([
  {
    element: <PublicRoute />,
    children: [{ path: PATHS.home, element: <LoginPage /> }],
  },
  {
    element: <PrivateRoute />,
    children: [
      {
        path: PATHS.shelfInfo,
        element: <ShelfPage />,
        // handle: {
        //   roles:
        // },
      },
    ],
  },
]);

export default router;
