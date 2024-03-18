import { useCallback } from "react";
import { UseAppMutation } from "../../../servies";
import { ENTITY } from "../../../constant/enums";
import { toast } from "react-toastify";

const useCreateShelf = () => {
  const makePayload = useCallback((data) => {
    const payload = {
      ...(data.shelfName.length > 1 && { title: data?.shelfName }),
      ...(data.description.length > 1 && { descriptions: data?.description }),
    };
    return payload;
  }, []);

  const { mutation } = UseAppMutation(
    {
      action: "create",
      entity: ENTITY.SHELFPAGE,
    },
    {
      onSuccess() {
        toast("Created Successfully!");
      },
      onError(error) {
        console.error(error);
      },
    }
  );

  const createShelf = useCallback(
    async (data) => {
      const payload = makePayload(data);
      await mutation.mutate(payload);
    },
    [makePayload, mutation]
  );

  return { createShelf };
};

export default useCreateShelf;
