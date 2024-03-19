import { z } from "zod";

const useShelfPageSearchSchema = () => {
  return z.object({
    searchData: z.string(),
    byShelf: z.boolean(),
    byItem: z.boolean(),
  });
};

export default useShelfPageSearchSchema;
