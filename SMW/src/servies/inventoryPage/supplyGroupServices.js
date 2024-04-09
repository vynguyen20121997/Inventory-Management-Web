import HttpService from "../core/http-service";
import { defineService } from "../core/service-creator";

const api = new HttpService("/groups");

const supplyGroupServices = defineService({
  query: {
    search: (payload) => {
      return api.search({ payload });
    },
    getList: (params) => {
      return api.getAll({ params });
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

export default supplyGroupServices;
