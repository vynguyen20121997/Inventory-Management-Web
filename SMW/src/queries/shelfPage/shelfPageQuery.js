import { ENTITY } from "../../constant/enums";
import { UseAppQuery } from "../../servies";

export const useShelves = (params) => {
  return UseAppQuery({
    action: "getList",
    entity: ENTITY.SHELFPAGE,
  })(params);
};
