import { useForm } from "react-hook-form";
import FormDialog from "../../../components/form/form/FormDialog";
import { zodResolver } from "@hookform/resolvers/zod";
import Select from "../../../components/form/customInput/Select";
import NumberInput from "../../../components/form/NumberInput";
import { ADD_INVENTORY_ITEM_DEFAULT_VALUES } from "../constants/constants";
import useInventoryPageAddSchema from "../validations/inventory-add-item";
import TextInput from "../../../components/form/TextInput";

// eslint-disable-next-line react/prop-types
const AddDialogInventoryPage = ({
  open,
  isLoading,
  onSubmit,
  onClose,
  groupData,
}) => {
  const methods = useForm({
    resolver: zodResolver(useInventoryPageAddSchema()),
    defaultValues: ADD_INVENTORY_ITEM_DEFAULT_VALUES,
  });

  const { handleSubmit } = methods;

  const handleFormSubmit = handleSubmit((data) => {
    onSubmit(data);
  });

  return (
    <FormDialog
      title="Add Item"
      open={open}
      isLoading={isLoading}
      methods={methods}
      onSubmit={handleFormSubmit}
      onClose={onClose}
      containerCss=" w-[517px] h-[559px] "
    >
      <div className="grid  grid-cols-5  grid-rows-5 gap-3 items-center mb-10">
        <p className="col-span-1">Group</p>
        <div className="col-span-4">
          <Select
            name="group"
            style="w-[376px] h-[47px]  "
            options={groupData}
          />
        </div>
        <p className="col-span-1">Name</p>
        <div className="col-span-4">
          <TextInput name="name" style="w-[376px] h-[47px] " placeHolder="" />
        </div>
        <p className="col-span-1">Unit</p>
        <div className="col-span-4">
          <TextInput name="unit" style="w-[376px] h-[47px] " placeHolder="" />
        </div>
        <p className="col-span-1">Price</p>
        <TextInput
          name="price"
          style="w-[376px] h-[47px]  col-span-4"
          type="number"
        />
        <p className="col-span-1">Shelf</p>
        <div className="col-span-4">
          <Select name="itemShelf" style="w-[376px] h-[47px] " />
        </div>
        <p className="col-span-1">Quantity</p>
        <NumberInput name="quantity" style="w-[73px] h-[47px]  col-span-4" />
      </div>
    </FormDialog>
  );
};

export default AddDialogInventoryPage;
