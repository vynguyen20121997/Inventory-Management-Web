import apiClient from "./api-client";

class HttpService {
  endpoint;

  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  getAll = (config) => {
    return apiClient.get(this.endpoint, config).then((res) => res.data);
  };

  get = (id) => {
    return apiClient.get(this.endpoint + "/" + id).then((res) => res.data);
  };

  search = (data) => {
    return apiClient
      .get(this.endpoint + "/search" + data)
      .then((res) => res.data);
  };

  create = (data) => {
    return apiClient.post(this.endpoint, data).then((res) => res.data);
  };

  update = ({ id, ...entity }, method) => {
    return apiClient[method](this.endpoint + "/" + id, entity).then(
      (res) => res.data
    );
  };

  delete = (id) => {
    return apiClient.delete(this.endpoint + "/" + id).then((res) => res.data);
  };
}

export default HttpService;
