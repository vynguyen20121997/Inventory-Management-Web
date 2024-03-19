import apiClient from "../../../servies/core/api-client";
import { parseParamsToQueryString } from "../../../utils/parseParamsToQueryString";

const useSearchShelf = async (params) => {
  const makePayload = (data) => {
    const payload = {
      ...(data && { title: data }),
    };
    return payload;
  };

  const payload = makePayload(params);

  const queryParams = parseParamsToQueryString(payload);

  const searchData = await apiClient
    .get("shelves" + "/search?" + queryParams)
    .then((res) => res.data);

  return searchData;
};

export default useSearchShelf;
