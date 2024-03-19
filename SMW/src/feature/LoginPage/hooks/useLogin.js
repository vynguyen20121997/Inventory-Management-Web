import { useCallback } from "react";
import { ENTITY } from "../../../constant/enums";
import { UseAppMutation } from "../../../servies";
import auth from "../../../packages/auth/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { PATHS } from "../../../constant/urls";

const useLogin = () => {
  const navigate = useNavigate();
  const { mutation } = UseAppMutation(
    {
      action: "login",
      entity: ENTITY.AUTH,
    },
    {
      onSuccess(data) {
        auth.setToken(data.data.accessToken);
        toast("Login Successfully!");
        navigate(PATHS.shelf);
      },
      onError(error) {
        console.log(error);
      },
    }
  );

  const makePayload = useCallback((formData) => {
    const { email, password } = formData;
    return {
      email,
      password,
    };
  }, []);

  const login = useCallback(
    async (formData) => {
      const payload = makePayload(formData);
      await mutation.mutate(payload);
    },
    [makePayload, mutation]
  );

  return { login };
};

export default useLogin;
