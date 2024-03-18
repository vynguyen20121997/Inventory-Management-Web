import { ENTITY } from "../../constant/enums";
import { UseAppQuery } from "../../servies";

export const useShelfPage = (params) => {
  return UseAppQuery({
    action: "getList",
    entity: ENTITY.SHELFPAGE,
  })(params);
};
