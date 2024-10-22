/* eslint-disable react/prop-types */
import { useFormContext, Controller } from "react-hook-form";

const TextInput = ({
  name = "name",
  placeHolder = "Nhập dữ liệu",
  style,
  type = "text",
}) => {
  const { control } = useFormContext({});

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <input
          type={type}
          {...field}
          id={name}
          className={` ${style} outline-none  bg-white focus:outline-none  focus:ring-0 border-[1px] p-1 border-[#E1E1E1] rounded-lg `}
          onChange={(e) => {
            field.onChange(e);
          }}
          placeholder={placeHolder}
        />
      )}
    />
  );
};

export default TextInput;
