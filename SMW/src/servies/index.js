import authService from "./authService";
import {
  composeServices,
  createUseMutation,
  createUseQuery,
} from "./core/service-creator";
import shelfPageServices from "./shelfPage/shelfPageServices";
import userService from "./userService";

export const rootService = composeServices({
  auth: authService,
  user: userService,
  //ShelfPage:
  shelves: shelfPageServices,
});

export const UseAppQuery = createUseQuery(rootService);

export const UseAppMutation = createUseMutation(rootService);
