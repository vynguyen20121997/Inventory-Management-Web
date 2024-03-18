import HttpService from "../core/http-service";
import { defineService } from "../core/service-creator";

const api = new HttpService("/shelves");

const shelfPageServices = defineService({
  query: {
    getList: (params) => {
      return api.getAll({ params });
    },
  },
});

export default shelfPageServices;
