import { z } from "zod";
import { ADD_SHELF_ITEM_MESSAGE } from "../constants/constants";

const useShelfPageAddSchema = () => {
  return z.object({
    shelfName: z.string().min(1, {
      message: ADD_SHELF_ITEM_MESSAGE.min,
    }),
    description: z.string().optional(),
  });
};

export default useShelfPageAddSchema;
