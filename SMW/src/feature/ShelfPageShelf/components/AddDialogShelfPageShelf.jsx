import { useForm } from "react-hook-form";
import FormDialog from "../../../components/form/form/FormDialog";
import { zodResolver } from "@hookform/resolvers/zod";
import useShelfPageShelfAddSchema from "../validations/add-shelf-item";
import { SHELF_ITEM_DEFAULT_VALUES } from "../constants/constants";
import NumberInput from "../../../components/form/NumberInput";
import Select from "../../../components/form/Select";

// eslint-disable-next-line react/prop-types
const AddDialogShelfPageShelf = ({ open, isLoading, onSubmit, onClose }) => {
  const methods = useForm({
    resolver: zodResolver(useShelfPageShelfAddSchema()),
    defaultValues: SHELF_ITEM_DEFAULT_VALUES,
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
      containerCss=" w-[517px] h-[370x] "
    >
      <div className="grid  grid-cols-5  grid-rows-3 gap-3 items-center mb-10">
        <p className="col-span-1">Group</p>
        <div className="col-span-4">
          <Select name="itemName" style="w-[376px] h-[47px] " />
        </div>
        <p className="col-span-1">Supply</p>{" "}
        <div className="col-span-4">
          <Select name="itemName" style="w-[376px] h-[47px] " />
        </div>
        <p className="col-span-1">Quantity</p>
        <NumberInput name="quantity" style="w-[73px] h-[47px]  col-span-4" />
      </div>
    </FormDialog>
  );
};

export default AddDialogShelfPageShelf;
