import { z } from "zod";

const useInventoryPageSearchSchema = () => {
  return z.object({
    searchData: z.string(),
  });
};

export default useInventoryPageSearchSchema;
