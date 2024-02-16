import { useForm } from "react-hook-form";
import FormDialog from "../../../components/form/formDialog/FormDialog";
import { zodResolver } from "@hookform/resolvers/zod";
import useEditTemplateExportPageSchema from "../validations/edit-template-export";
import { EDIT_TEMPLATE_EXPORT_DEFAULT_VALUES } from "../constants/constants";
import TextInput from "../../../components/form/TextInput";

const EditTemplateExportPage = ({ open, isLoading, onSubmit, onClose }) => {
  const methods = useForm({
    resolver: zodResolver(useEditTemplateExportPageSchema()),
    values: EDIT_TEMPLATE_EXPORT_DEFAULT_VALUES,
  });

  const { handleSubmit } = methods;

  const handleFormEditSubmit = handleSubmit((data) => {
    onSubmit(data);
  });

  return (
    <>
      <FormDialog
        title="Edit Template"
        open={open}
        isLoading={isLoading}
        methods={methods}
        onSubmit={handleFormEditSubmit}
        onClose={onClose}
        containerCss=" w-[517px] h-[338px]  "
      >
        <div className="grid  grid-cols-5  grid-rows-3 gap-2 items-center pt-2 pb-5">
          <p className="col-span-1 grid-rows-1">Đơn vị</p>
          <div className="col-span-4 grid-rows-1">
            <TextInput name="unit" style="w-full" placeHolder="" />
          </div>
          <p className="col-span-1 grid-rows-1">Người xuất</p>
          <div className="col-span-4 grid-rows-1">
            <TextInput name="user" style="w-full" placeHolder="" />
          </div>
          <p className="col-span-1 grid-rows-1">Ghi Chú</p>
          <div className="col-span-4 grid-rows-1">
            <TextInput name="notes" style="w-full" placeHolder="" />
          </div>
        </div>
      </FormDialog>
    </>
  );
};

export default EditTemplateExportPage;
