import authService from "./authService";
import {
  composeServices,
  createUseMutation,
  createUseQuery,
} from "./core/service-creator";
import shelfPageServices from "./shelfPage/shelfPageServices";
import shelfPageShelfServices from "./shelfPage/shelfPageShelfServices";
import userService from "./userService";

export const rootService = composeServices({
  auth: authService,
  user: userService,
  //ShelfPage:
  shelves: shelfPageServices,
  shelf: shelfPageShelfServices,
});

export const UseAppQuery = createUseQuery(rootService);

export const UseAppMutation = createUseMutation(rootService);
