/* eslint-disable react/prop-types */
import { useFormContext, Controller } from "react-hook-form";

const RadioInput = ({ name = "name", style }) => {
  const { control } = useFormContext({});

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <>
          <input
            {...field}
            id={name}
            type="radio"
            name={name}
            className={` ${style} radio w-[15px] h-[15px]`}
            onChange={(e) => {
              field.onChange(e);
            }}
            checked={!!field.value}
          />
        </>
      )}
    />
  );
};

export default RadioInput;
