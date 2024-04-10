import { z } from "zod";

const useImportHistorySearchSchema = () => {
  return z.object({
    dateStart: z.coerce.date(),
    dateEnd: z.coerce.date(),
  });
};

export default useImportHistorySearchSchema;
