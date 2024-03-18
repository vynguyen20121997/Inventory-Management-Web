import { toast } from "react-toastify";
import auth from "../auth/auth";

const errorHandling = (error) => {
  if (error === "token expired") {
    toast("Please Login Again");
    auth.clearTokenAndRedirect();
  }
  return null;
};

export default errorHandling;
