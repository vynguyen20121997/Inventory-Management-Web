import { ENTITY } from "../../constant/enums";
import { UseAppQuery } from "../../servies";

export const useinventory = (params) => {
  return UseAppQuery({
    action: "getList",
    entity: ENTITY.INVENTORY,
  })(params);
};
