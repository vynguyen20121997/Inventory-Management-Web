import { z } from "zod";

const useShelfPageShelfEditSchema = () => {
  return z.object({
    edit: z.number(),
  });
};

export default useShelfPageShelfEditSchema;
