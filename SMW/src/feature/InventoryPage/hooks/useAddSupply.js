import { useCallback } from "react";
import { UseAppMutation } from "../../../servies";
import { ENTITY } from "../../../constant/enums";
import { toast } from "react-toastify";

const useAddSupply = () => {
  const makePayload = useCallback((data) => {
    const payload = {
      ...(data.group.length > 1 && { groupId: data?.group }),
      ...(data.name.length > 0 && { title: data?.name }),
      ...(data.unit.length > 0 && { unit: data?.unit }),
      ...(data.price && { price: data?.price }),
      ...(data.quantity && { quantity: data?.quantity }),
    };
    return payload;
  }, []);

  const { mutation } = UseAppMutation(
    {
      action: "create",
      entity: ENTITY.INVENTORY,
    },
    {
      onSuccess() {
        toast("Added Supply Successfully!");
      },
      onError(error) {
        console.error(error);
      },
    }
  );

  const addSupply = useCallback(async (data) => {
    const payload = makePayload(data);
    console.log(payload);
    await mutation.mutate(payload);
  }, []);

  return { addSupply };
};

export default useAddSupply;
