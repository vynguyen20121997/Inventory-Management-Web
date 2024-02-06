import { useForm, Controller } from 'react-hook-form';
const TextInput = ({
  name = 'name',
  backGround = 'white',
  placeHolder = 'Nhập dữ liệu',
  ...rest
}) => {
  const {
    control,
    formState: { errors },
  } = useForm();
  const hasError = !!errors[name];
  return (
    <>
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
              error={hasError}
            />
          </>
        )}
      />
    </>
  );
};

export default TextInput;
