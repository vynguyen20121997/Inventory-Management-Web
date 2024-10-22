import authService from "./authService";
import {
  composeServices,
  createUseMutation,
  createUseQuery,
} from "./core/service-creator";
import importHistoryPageServices from "./importHistoryPage/importHistoryPageServices";
import inventoryPageServices from "./inventoryPage/inventoryPageServices";
import supplyGroupServices from "./inventoryPage/supplyGroupServices";
import shelfPageServices from "./shelfPage/shelfPageServices";
import shelfPageShelfServices from "./shelfPage/shelfPageShelfServices";
import userService from "./userService";

export const rootService = composeServices({
  auth: authService,
  user: userService,
  //Shelf Page:
  shelves: shelfPageServices,
  shelf: shelfPageShelfServices,
  //Inventory Page:
  inventory: inventoryPageServices,
  group: supplyGroupServices,
  //import History Page:
  importHistory: importHistoryPageServices,
});

export const UseAppQuery = createUseQuery(rootService);

export const UseAppMutation = createUseMutation(rootService);
