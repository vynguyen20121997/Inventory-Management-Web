import HttpService from "../core/http-service";
import { defineService } from "../core/service-creator";

const api = new HttpService("/shelves");
const itemapi = new HttpService("/shelves/item");

const shelfPageShelfServices = defineService({
  query: {
    getList: (params) => {
      return api.getAll({ params });
    },
    get: (params) => {
      return itemapi.get(params);
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
      return itemapi.delete(payload.id);
    },
  },
});

export default shelfPageShelfServices;
