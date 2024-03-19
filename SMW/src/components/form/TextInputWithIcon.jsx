/* eslint-disable react/prop-types */
import { useFormContext, Controller } from "react-hook-form";
import SearchIcon from "/src/assets/search-icon.svg";

const TextInputWithSearchIcon = ({
  name,
  placeHolder = "Search",
  handleSubmit,
  ...rest
}) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <>
          <div className=" bg-white border-[1px] border-[#9F9F9F]  w-[534px] h-[50px] rounded-lg flex pl-3 ">
            <img
              width="30px"
              height="30px"
              src={SearchIcon}
              alt="search"
              onClick={handleSubmit}
            />
            <input
              {...field}
              id={name}
              className={` ${rest} input bg-white outline-none border-none w-full focus:outline-none focus:border-none focus:ring-0  font-normal text-xl `}
              onChange={(e) => {
                field.onChange(e);
              }}
              placeholder={placeHolder}
            />
          </div>
        </>
      )}
    />
  );
};

export default TextInputWithSearchIcon;
