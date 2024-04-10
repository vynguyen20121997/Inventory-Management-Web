import apiClient from "../../../servies/core/api-client";
import { parseParamsToQueryString } from "../../../utils/parseParamsToQueryString";

const useSearchImportHistory = async (params) => {
  const makePayload = (data) => {
    const payload = {
      ...(data && {
        dateStart: data.dateStart.toISOString().split("T")[0],
        dateEnd: data.dateEnd.toISOString().split("T")[0],
      }),
    };
    return payload;
  };

  const payload = makePayload(params);
  const queryParams = parseParamsToQueryString(payload);
  console.log(queryParams);
  const searchData = await apiClient
    .get("import-history" + "/date?" + queryParams)
    .then((res) => res.data);

  return searchData;
};

export default useSearchImportHistory;
