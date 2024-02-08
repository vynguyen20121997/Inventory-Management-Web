/* eslint-disable react/prop-types */
import { useForm, Controller } from "react-hook-form";
const TextInput = ({
  name = "name",
  placeHolder = "Nhập dữ liệu",
  ...rest
}) => {
  const { control } = useForm();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <>
          <input
            {...field}
            id={name}
            className={` ${rest} hover:border-colorMain focus:border-colorMain outline-none transition-all border-[1px] p-1 border-[#E1E1E1] rounded-lg `}
            type="text"
            onChange={(e) => {
              field.onChange(e);
            }}
            placeholder={placeHolder}
          />
        </>
      )}
    />
  );
};

export default TextInput;
