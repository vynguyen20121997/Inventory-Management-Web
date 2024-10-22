/* eslint-disable react/prop-types */
import { Controller, useFormContext } from "react-hook-form";

const Select = ({
  name,
  label,
  options,
  placeholder = "Please Select",
  style,
}) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <>
          <label className="form-control w-full max-w-xs">
            {label && (
              <div className="label">
                <span className="label-text">
                  Pick the best fantasy franchise
                </span>
              </div>
            )}

            <select
              key={name}
              {...field}
              className={`select bg-white outline-none border-[1px] border-[#E1E1E1]  focus:outline-none focus:ring-0 rounded-[10px] text-xl ${style}`}
            >
              <option key="default">{placeholder}</option>
              {options?.map((op) => (
                <option key={op._id} value={op._id}>
                  {op.title}
                </option>
              ))}
            </select>
          </label>
        </>
      )}
    />
  );
};

export default Select;
