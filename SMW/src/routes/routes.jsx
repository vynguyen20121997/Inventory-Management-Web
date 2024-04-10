import { wrapCreateBrowserRouter } from "@sentry/react";
import { createBrowserRouter } from "react-router-dom";
import { PATHS } from "../constant/urls";
import ShelfPageShelf from "../feature/ShelfPageShelf/ShelfPageShelf";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import PublicRoute from "./PublicRoute/PublicRoute";
import ImportHistoryPage from "../feature/ImportHistoryPage/ImportHistoryPage";
import ExportHistoryPage from "../feature/ExportHistoryPage/ExportHistoryPage";
import ExportPage from "../feature/ExportPage/ExportPage";
import TemplateExportPage from "../feature/ExportPage/components/TemplateExportPage";
import ShelfPage from "../feature/ShelfPage/ShelfPage";
import LoginPage from "../feature/LoginPage/LoginPage";
import InventoryPage from "../feature/InventoryPage/InventoryPage";
import InventoryReportPage from "../feature/InventoryReportPage/InventoryReportPage";
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
        path: PATHS.shelf,
        element: <ShelfPage />,
      },
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
      {
        path: PATHS.export_history,
        element: <ExportHistoryPage />,
        // handle: {
        //   roles:
        // },
      },
      {
        path: PATHS.export,
        element: <ExportPage />,
        // handle: {
        //   roles:
        // },
      },
      {
        path: PATHS.export_template,
        element: <TemplateExportPage />,
        // handle: {
        //   roles:
        // },
      },
      {
        path: PATHS.inventory,
        element: <InventoryPage />,
        // handle: {
        //   roles:
        // },
      },
      {
        path: PATHS.inventoryReport,
        element: <InventoryReportPage />,
        // handle: {
        //   roles:
        // },
      },
    ],
  },
]);

export default router;
