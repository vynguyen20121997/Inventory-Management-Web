import {
  composeServices,
  createUseMutation,
  createUseQuery,
} from "./core/service-creator";
import shelfPageShelfServices from "./shelfPage/shelfPageShelfServices";

const rootService = composeServices({
  //ShelfPage:
  shelfInfo: shelfPageShelfServices,
});

export const useAppQuery = createUseQuery(rootService);

export const useAppMutation = createUseMutation(rootService);
