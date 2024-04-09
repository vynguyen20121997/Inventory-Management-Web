import { z } from "zod";

const useInventoryExportPageAddSchema = () => {
  return z.object({
    itemName: z.string(),
    quantity: z.number(),
  });
};

export default useInventoryExportPageAddSchema;
