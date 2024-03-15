import { z } from "zod";
import { LOGIN_MESSAGE } from "../constants/constants";

const useLoginSchema = () => {
  return z.object({
    shelfName: z.string().min(1, {
      message: LOGIN_MESSAGE.error,
    }),
    description: z.string().optional(),
  });
};

export default useLoginSchema;
