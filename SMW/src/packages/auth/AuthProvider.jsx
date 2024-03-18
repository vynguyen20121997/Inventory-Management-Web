import { useEffect } from "react";
import auth from "./auth";

const AuthProvider = (props) => {
  const { children } = props;

  const accessToken = auth.getToken();

  useEffect(() => {
    if (accessToken) {
      auth.fetchCurrentUser();
    }
  }, []);

  return <>{children}</>;
};

export default AuthProvider;
