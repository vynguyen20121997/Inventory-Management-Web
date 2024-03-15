import axios from "axios";
import config from "../../app/config";
import auth from "../../packages/auth/auth";
import { STATUS_CODE } from "../../constant/enums";

const apiClient = axios.create({
  baseURL: config.apiURL,
  timeout: 10000,
});

apiClient.interceptors.request.use((config) => {
  const token = auth.getToken();

  if (token) {
    config.headers["x-access-token"] = token;
  }

  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status) {
      const { status } = error.response;
      if (status === STATUS_CODE.UNAUTHORIZED) {
        auth.clearTokenAndRedirect();
      }
    }
    return Promise.reject(error);
  }
);

export default apiClient;
