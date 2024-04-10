/* eslint-disable react/prop-types */
import { useFormContext, Controller } from "react-hook-form";

const DateInput = ({ name = "name", style, type = "date" }) => {
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
          className={` ${style} outline-none  bg-transparent focus:outline-none  focus:ring-0 border-[#E1E1E1] rounded-lg `}
          onChange={(e) => {
            field.onChange(e);
          }}
        />
      )}
    />
  );
};

export default DateInput;
