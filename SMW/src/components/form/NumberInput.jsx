import { Controller, useFormContext } from "react-hook-form";
import { NumericFormat } from "react-number-format";

// eslint-disable-next-line react/prop-types
const NumberInput = ({ name = "name", style }) => {
  const { control } = useFormContext({});
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <NumericFormat
          className={` ${style}  outline-none  bg-white focus:outline-none  focus:ring-0 border-[1px] p-1 border-[#E1E1E1] rounded-lg `}
          {...field}
          id={name}
          onChange={(e) => {
            field.onChange(e);
          }}
        />
      )}
    />
  );
};

export default NumberInput;
