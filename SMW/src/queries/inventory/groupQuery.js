import { ENTITY } from "../../constant/enums";
import { UseAppQuery } from "../../servies";

export const useGroups = (params) => {
  return UseAppQuery({
    action: "getList",
    entity: ENTITY.GROUP,
  })(params);
};
