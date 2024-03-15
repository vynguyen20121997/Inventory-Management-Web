import { ENTITY } from "../../constant/enums";
import { useAppQuery } from "../../servies";

export const useShelfPageShelfItems = (params, options) => {
  return useAppQuery({
    action: "getList",
    entity: ENTITY.SHELFPAGESHELF,
  })(params, options);
};
