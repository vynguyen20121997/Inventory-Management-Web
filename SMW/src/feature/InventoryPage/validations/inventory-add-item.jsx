import { z } from "zod";

const useInventoryPageAddSchema = () => {
  return z.object({
    group: z.string(),
    name: z.string(),
    unit: z.string(),
    price: z.coerce.number(),
    quantity: z.coerce.number(),
  });
};

export default useInventoryPageAddSchema;
