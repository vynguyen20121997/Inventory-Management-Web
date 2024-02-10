/* eslint-disable react/prop-types */
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Button from "../../../components/button/Button";
import NumberInput from "../../../components/form/NumberInput";
import FormDialog from "../../../components/form/formDialog/FormDialog";
import { EDIT_SHELF_ITEM_DEFAULT_VALUES } from "../constants/constants";
import useShelfPageShelfEditSchema from "../validations/edit-shelf-item";
import DeleteIcon from "/src/assets/icons-delete.svg";

const EditDialogShelfPageShelf = ({
  open,
  isLoading,
  onSubmit,
  onClose,
  data,
}) => {
  const methods = useForm({
    resolver: zodResolver(useShelfPageShelfEditSchema()),
    values: data ? { edit: data.quantity } : EDIT_SHELF_ITEM_DEFAULT_VALUES,
  });

  const { handleSubmit } = methods;

  const handleFormSubmit = handleSubmit((data) => {
    onSubmit(data);
  });

  return (
    <FormDialog
      title="Edit Item"
      open={open}
      isLoading={isLoading}
      methods={methods}
      onSubmit={handleFormSubmit}
      onClose={onClose}
    >
      <div className="grid  grid-cols-5  grid-rows-5 gap-2 items-center">
        <p className="col-span-1">Name</p>{" "}
        <p className="col-span-4">{data.name}</p>
        <p className="col-span-1">Shelf</p>{" "}
        <p className="col-span-4">{data.shelf}</p>
        <p className="col-span-1">Quantity</p>{" "}
        <p className="col-span-4">{data.quantity}</p>
        <p className="col-span-1">Edit</p>
        <NumberInput name="quantity" style="w-[47px] h-[58px]  col-span-4" />
        <p className="col-span-1">Delete</p>
        <div className="col-span-4">
          <img src={DeleteIcon} alt="" />
        </div>
      </div>
    </FormDialog>
  );
};

export default EditDialogShelfPageShelf;
