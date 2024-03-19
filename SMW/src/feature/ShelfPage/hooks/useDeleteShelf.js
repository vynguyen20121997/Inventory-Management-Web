import { useCallback } from "react";
import { UseAppMutation } from "../../../servies";
import { ENTITY } from "../../../constant/enums";
import { toast } from "react-toastify";
import {
  DELETE_SHELF_ITEM_MESSAGE,
  SHELF_DELETE_ERROR,
} from "../constants/constants";

const useDeleteShelf = (options) => {
  const makePayload = useCallback((data) => {
    const payload = {
      ...(data && { id: data }),
    };
    return payload;
  }, []);

  const { mutation } = UseAppMutation(
    {
      action: "delete",
      entity: ENTITY.SHELFPAGE,
    },
    {
      onSuccess() {
        toast("Deleted Successfully!");
      },
      onError(error) {
        console.error(error.response.data);
        if (error.response.data == SHELF_DELETE_ERROR.removeBeforeDelete) {
          toast(DELETE_SHELF_ITEM_MESSAGE.deleteError.removeItem);
          options.onSettled();
        }
        return null;
      },
    }
  );

  const deleteShelf = useCallback(
    async (data) => {
      const payload = makePayload(data);
      await mutation.mutate(payload);
    },
    [makePayload, mutation]
  );

  return { deleteShelf };
};

export default useDeleteShelf;
