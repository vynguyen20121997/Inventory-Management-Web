import { Controller, useFormContext } from "react-hook-form";

// eslint-disable-next-line react/prop-types
const NumberInput = ({ name = "name", style }) => {
  const { control } = useFormContext({});
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <input
          type="number"
          {...field}
          id={name}
          className={` ${style}  outline-none  bg-white focus:outline-none  focus:ring-0 border-[1px] p-1 border-[#E1E1E1] rounded-lg  `}
          onChange={(e) => {
            field.onChange(e);
          }}
        />
      )}
    />
  );
};

export default NumberInput;
