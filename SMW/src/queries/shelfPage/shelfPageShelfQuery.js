import { ENTITY } from "../../constant/enums";
import { UseAppQuery } from "../../servies";

export const useShelf = (params) => {
  return UseAppQuery(
    {
      action: "get",
      entity: ENTITY.SHELFPAGESHELF,
    },
    params
  )();
};
