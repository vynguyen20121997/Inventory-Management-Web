import { z } from "zod";

const useEditTemplateExportPageSchema = () => {
  return z.object({
    unit: z.string(),
    user: z.string(),
    notes: z.string(),
  });
};

export default useEditTemplateExportPageSchema;
