import HttpService from "../core/http-service";
import { defineService } from "../core/service-creator";

const api = new HttpService("/supplies");

const groupApi = new HttpService("/groups");

const inventoryPageServices = defineService({
  query: {
    getList: (params) => {
      return api.getAll({ params });
    },
    search: (payload) => {
      return api.search({ payload });
    },
    getGroupList: (params) => {
      return groupApi.getAll({ params });
    },
  },
  mutation: {
    create: (payload) => {
      return api.create(payload);
    },
    delete: (payload) => {
      return api.delete(payload.id);
    },
  },
});

export default inventoryPageServices;
