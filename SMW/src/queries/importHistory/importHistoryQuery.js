import { ENTITY } from "../../constant/enums";
import { UseAppQuery } from "../../servies";

export const useImportHistories = (params) => {
  return UseAppQuery({
    action: "getList",
    entity: ENTITY.IMPORT_HISTORY,
  })(params);
};
