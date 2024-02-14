import { wrapCreateBrowserRouter } from "@sentry/react";
import { createBrowserRouter } from "react-router-dom";
import { PATHS } from "../constant/urls";
import ImportHistoryPage from "../feature/ImportHistoryPage/ImportHistoryPage";
import ShelfPageShelf from "../feature/ShelfPageShelf/ShelfPageShelf";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import PublicRoute from "./PublicRoute/PublicRoute";

const sentryCreateBrowserRouter = wrapCreateBrowserRouter(createBrowserRouter);
const router = sentryCreateBrowserRouter([
  {
    element: <PublicRoute />,
    // children: [{ path: PATHS.home, element: <LoginPage /> }],
  },
  {
    element: <PrivateRoute />,
    children: [
      {
        path: PATHS.shelfInfo,
        element: <ShelfPageShelf />,
        // handle: {
        //   roles:
        // },
      },
      {
        path: PATHS.import_history,
        element: <ImportHistoryPage />,
        // handle: {
        //   roles:
        // },
      },
    ],
  },
]);

export default router;
