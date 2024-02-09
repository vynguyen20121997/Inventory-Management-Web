import { z } from "zod";

const useShelfPageShelfAddSchema = () => {
  return z.object({
    itemName: z.string(),
    quantity: z.number(),
  });
};

export default useShelfPageShelfAddSchema;
