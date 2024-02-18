import { useForm, Controller } from 'react-hook-form';
import TextInput from '../../../../components/form/TextInput.jsx';
import FormDialog from '../../../../components/form/formDialog/FormDialog.jsx';
const defaultValues = {
  shelfName: '',
  shelfDes: '',
};
const AddShelfUI = ({ closeForm, openAddForm }) => {
  const methods = useForm({ defaultValues });
  // const onAddNewShelf = (value) => {
  //   console.log(value);
  // };
  // const onCancel = () => {
  //   methods.reset(defaultValues);
  //   closeForm();
  // };
  return (
    <FormDialog
      methods={methods}
      title={'Add Shelf'}
      open={openAddForm}
      onClose={closeForm}
    >
      <div className=" font-normal  py-[24px] pl-3 pr-7">
        <div className="flex flex-col gap-6 mb-[73px] ">
          <div>
            <label htmlFor="shelfName" className="text-xl mr-4 ">
              Shelf Name:
            </label>

            <TextInput
              style={' w-[315px] h-[47px]'}
              name="shelfName"
              placeHolder="Type Shelf Name"
            />
          </div>
          <div className="flex items-center">
            <label htmlFor="shelfDes" className="text-xl mr-4 self-start ">
              {' '}
              Description:{' '}
            </label>
            <Controller
              name="shelfDes"
              control={methods.control}
              render={({ field }) => (
                <textarea
                  {...field}
                  className="resize-none w-full h-[159px] pl-1 overflow-hidden bg-white border-[1px] border-[#E1E1E1] rounded focus:border-colorMain focus:outline-none   "
                  id="shelfDes"
                  placeholder="Type Description"
                />
              )}
            />
          </div>
        </div>
      </div>
    </FormDialog>
  );
};

export default AddShelfUI;
