import apiClient from "./core/api-client";
import { defineService } from "./core/service-creator";

const authService = defineService({
  query: {},

  mutation: {
    login: (payload) => {
      return apiClient.post("/auth/login", payload);
    },
  },
});

export default authService;
