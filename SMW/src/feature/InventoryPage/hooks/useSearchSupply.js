import apiClient from "../../../servies/core/api-client";
import { parseParamsToQueryString } from "../../../utils/parseParamsToQueryString";

const useSearchSupply = async (params) => {
  const makePayload = (data) => {
    const payload = {
      ...(data && { title: data.searchData }),
    };
    return payload;
  };

  const payload = makePayload(params);
  const queryParams = parseParamsToQueryString(payload);

  const searchData = await apiClient
    .get("supplies" + "/search?" + queryParams)
    .then((res) => res.data);

  return searchData;
};

export default useSearchSupply;
