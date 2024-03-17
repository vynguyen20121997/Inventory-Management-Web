import authService from "./authService";
import {
  composeServices,
  createUseMutation,
  createUseQuery,
} from "./core/service-creator";
import shelfPageShelfServices from "./shelfPage/shelfPageShelfServices";
import userService from "./userService";

export const rootService = composeServices({
  auth: authService,
  user: userService,
  //ShelfPage:
  shelfInfo: shelfPageShelfServices,
});

export const useAppQuery = createUseQuery(rootService);

export const UseAppMutation = createUseMutation(rootService);
