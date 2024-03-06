import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import TextInput from "../../../components/form/TextInput.jsx";
import FormDialog from "../../../components/form/formDialog/FormDialog.jsx";
import { SHELF_DEFAULT_VALUES } from "../constants/constants.js";
import useShelfPageAddSchema from "../validations/add-shelf.jsx";

const AddDialogShelf = ({ closeForm, openAddForm, onSubmit }) => {
  const methods = useForm({
    resolver: zodResolver(useShelfPageAddSchema()),
    defaultValues: SHELF_DEFAULT_VALUES,
  });

  const { handleSubmit } = methods;

  const handleFormSubmit = handleSubmit((data) => {
    onSubmit(data);
  });

  return (
    <FormDialog
      title={"Add Shelf"}
      methods={methods}
      open={openAddForm}
      onSubmit={handleFormSubmit}
      onClose={closeForm}
    >
      <div className=" font-normal  py-[24px] pl-3 pr-7">
        <div className="flex flex-col gap-6   ">
          <div>
            <label htmlFor="shelfName" className="text-xl mr-4 ">
              Shelf Name:
            </label>

            <TextInput
              style={" w-[315px] h-[47px]"}
              name="shelfName"
              placeHolder=" "
            />
          </div>

          <div className="flex items-center">
            <label htmlFor="description" className="text-xl mr-4 self-start ">
              Description:
            </label>
            <TextInput
              name="description"
              placeHolder=" "
              style={"  w-full h-[159px] pl-1 overflow-hidden  "}
            />
          </div>
        </div>
      </div>
    </FormDialog>
  );
};

export default AddDialogShelf;
