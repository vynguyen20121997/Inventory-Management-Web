import { useForm } from "react-hook-form";
import FormDialog from "../../../components/form/formDialog/FormDialog";
import { zodResolver } from "@hookform/resolvers/zod";
import useShelfPageShelfAddSchema from "../validations/add-shelf-item";
import { SHELF_ITEM_DEFAULT_VALUES } from "../constants/constants";
import Select from "../../../components/form/customInput/Select";
import NumberInput from "../../../components/form/NumberInput";

// eslint-disable-next-line react/prop-types
const AddDialogShelfPageShelf = ({ open, isLoading, onSubmit, onClose }) => {
  const methods = useForm({
    resolver: zodResolver(useShelfPageShelfAddSchema()),
    defaultValues: SHELF_ITEM_DEFAULT_VALUES,
  });

  // const { handleSubmit } = methods;

  return (
    <FormDialog
      title="Add Item"
      open={open}
      isLoading={isLoading}
      methods={methods}
      onSubmit={onSubmit}
      onClose={onClose}
    >
      <div className="grid  grid-cols-5  grid-rows-5 gap-3 items-center">
        <p className="col-span-1">Name</p>{" "}
        <div className="col-span-4">
          <Select name="itemName" style="w-[376px] h-[47px] " />
        </div>
        <p className="col-span-1">Shelf</p>
        <p className="col-span-4"></p>
        <p className="col-span-1">Unit</p>
        <p className="col-span-4"></p>
        <p className="col-span-1">Price</p>
        <p className="col-span-4"></p>
        <p className="col-span-1">Quantity</p>
        <NumberInput name="quantity" style="w-[73px] h-[47px]  col-span-4" />
      </div>
    </FormDialog>
  );
};

export default AddDialogShelfPageShelf;
