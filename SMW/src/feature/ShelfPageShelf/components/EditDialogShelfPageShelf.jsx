/* eslint-disable react/prop-types */
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import TablePopup from "../../../components/dataTable/TablePopup";
import NumberInput from "../../../components/form/NumberInput";
import FormDialog from "../../../components/form/formDialog/FormDialog";
import {
  DELETE_SHELF_ITEM_MESSAGE,
  EDIT_SHELF_ITEM_DEFAULT_VALUES,
} from "../constants/constants";
import useShelfPageShelfEditSchema from "../validations/edit-shelf-item";
import DeleteIcon from "/src/assets/icons-delete.svg";
import useToogleDialog from "../../../hooks/useToogleDialog/useToogleDialog";

const EditDialogShelfPageShelf = ({
  open,
  isLoading,
  onSubmitEdit,
  onClose,
  data,
  openDeleteDialog,
  handleOpenDeleteDialog,
  handleCloseDeleteDialog,
}) => {
  const methods = useForm({
    resolver: zodResolver(useShelfPageShelfEditSchema()),
    values: data ? { edit: data.quantity } : EDIT_SHELF_ITEM_DEFAULT_VALUES,
  });

  const { handleSubmit } = methods;

  const handleFormEditSubmit = handleSubmit((data) => {
    onSubmitEdit(data);
  });

  const {
    open: openEditQuantityDialog,
    handleOpen: handleOpenEditQuantityDialog,
    handleClose: handleCloseEditQuantityDialog,
  } = useToogleDialog(false);

  return (
    <>
      <FormDialog
        title="Edit Item"
        open={open}
        isLoading={isLoading}
        methods={methods}
        onSubmit={handleOpenEditQuantityDialog}
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
            <img onClick={handleOpenDeleteDialog} src={DeleteIcon} alt="" />
          </div>
        </div>
      </FormDialog>

      <TablePopup
        open={openDeleteDialog}
        message={DELETE_SHELF_ITEM_MESSAGE.delete}
        onSubmit={() => {}}
        onClose={handleCloseDeleteDialog}
      />

      <TablePopup
        open={openEditQuantityDialog}
        message={DELETE_SHELF_ITEM_MESSAGE.edit}
        onSubmit={handleFormEditSubmit}
        onClose={handleCloseEditQuantityDialog}
      />
    </>
  );
};

export default EditDialogShelfPageShelf;
