import apiClient from "./core/api-client";
import { defineService } from "./core/service-creator";

const userService = defineService({
  query: {
    getMe: () => {
      return apiClient.get("/auth/me");
    },
  },

  mutation: {},
});

export default userService;
