import { useForm, Controller } from 'react-hook-form';
import Button from '../../../../components/button/Button.jsx';
// import TextInput from '../../../../components/form/TextInput.jsx';

const defaultValues = {
  shelfName: '',
  shelfDes: '',
};
const AddShelfUI = ({ closeForm }) => {
  const { control, handleSubmit, reset } = useForm({ defaultValues });
  const onAddNewShelf = (value) => {
    console.log(value);
  };
  const onCancel = () => {
    reset(defaultValues);
    closeForm();
  };
  return (
    <form
      onSubmit={handleSubmit(onAddNewShelf)}
      className="fixed z-10 top-0 bottom-0 right-0 left-0 w-screen h-screen bg-gray-500/40 "
    >
      <div className=" font-normal fixed  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-[24px] pl-3 pr-7 rounded shadow-xl  bg-white">
        <h1 className="text-[32px] text-center mb-[17px] "> Add Shelf </h1>
        <div className="flex flex-col gap-6 mb-[73px] ">
          <div>
            <label htmlFor="shelfName" className="text-xl mr-4 ">
              Shelf Name:
            </label>

            {/* <TextInput
            width="[368px]"
            height="[47px]"
            name="shelfName"
            placeHolder="Type Shelf Name"
            control={control}
            /> */}
          </div>
          <div className="flex items-center">
            <label htmlFor="shelfDes" className="text-xl mr-4 self-start ">
              {' '}
              Description:{' '}
            </label>
            <Controller
              name="shelfDes"
              control={control}
              render={({ field }) => (
                <textarea
                  {...field}
                  className="resize-none p-1 overflow-hidden bg-white border-[1px] border-[#E1E1E1] rounded focus:border-colorMain focus:outline-none   "
                  id="shelfDes"
                  cols={54}
                  rows={5}
                  placeholder="Type Description"
                />
              )}
            />
          </div>
        </div>
        <div className="text-center">
          <span className=" w-auto h-auto mr-[52px] hover:opacity-80 transition-all ">
            <Button
              title={'Cancel'}
              backGround={'bg-[#9F9F9F]'}
              HandleClick={onCancel}
            />
          </span>
          <span className="hover:opacity-80 transition-all">
            <Button title={'Save'} type="submit" />
          </span>
        </div>
      </div>
    </form>
  );
};

export default AddShelfUI;
