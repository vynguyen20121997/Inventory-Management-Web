import { z } from "zod";
import { LOGIN_MESSAGE } from "../constants/constants";

const useLoginSchema = () => {
  return z.object({
    email: z.string().min(2, {
      message: LOGIN_MESSAGE.error,
    }),
    password: z.string().min(2, {
      message: LOGIN_MESSAGE.error,
    }),
  });
};

export default useLoginSchema;
