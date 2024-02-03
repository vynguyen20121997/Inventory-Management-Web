import { PATHS } from "./urls";

export const ACCESS_TOKEN = "";

export const TEMP_TOKEN = "";

export const TOAST_LIMIT = 5;

export const LIMIT_NOTIFICATIONS = 10;

export const NAVBAR_ITEMS = [
  { link: "Shelf", path: PATHS.shelfInfo },
  { link: "Inventory", path: PATHS.inventory },
  { link: "Import History", path: PATHS.import_history },
  { link: "Export History", path: PATHS.export_history },
  { link: "Export", path: PATHS.export },
  { link: "Account", path: PATHS.account },
];

export const NAVPROFILE_ITEMS = [
  { title: "Profile", path: PATHS.account },
  { title: "Settings", path: PATHS.setting },
  { title: "Logout ", path: PATHS.logout },
];
