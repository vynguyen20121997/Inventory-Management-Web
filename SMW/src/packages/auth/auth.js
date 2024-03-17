import { PATHS } from "../../constant/urls";

const auth = {
  getToken: () => {
    const token = localStorage.getItem("accessToken");
    if (token) return token;

    return null;
  },

  setToken: (token) => {
    localStorage.setItem("accessToken", token);
  },

  clearTokenAndRedirect: () => {
    localStorage.removeItem("accessToken");
    window.location.assign(PATHS.home);
  },

  fetchCurrentUser: () => {},
};

export default auth;
