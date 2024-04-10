import HttpService from "../core/http-service";
import { defineService } from "../core/service-creator";

const api = new HttpService("/import-history");

const importHistoryPageServices = defineService({
  query: {
    getList: (params) => {
      return api.getAll({ params });
    },
    search: (payload) => {
      return api.search({ payload });
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

export default importHistoryPageServices;
