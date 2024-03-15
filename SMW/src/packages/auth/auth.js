import { PATHS } from "../../constant/urls";

const auth = {
  getToken: () => {
    const token = localStorage.getItem("accessToken");
    if (token) return token;

    return null;
  },

  clearTokenAndRedirect: () => {
    localStorage.removeItem("accessToken");
    window.location.assign(PATHS.home);
  },
};

export default auth;
