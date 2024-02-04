import { useForm, Controller } from 'react-hook-form';
const TextInput = ({
  width,
  height,
  backGround,
  placeHolder = 'Nhập dữ liệu',
  getValue,
  textLabel,
}) => {
  const { control } = useForm();
  const HandleInputChange = (feild, value) => {
    feild.onChange(value);
    getValue(value);
  };
  return (
    <>
      <Controller
        name="TextInput"
        control={control}
        defaultValue={''}
        render={({ field }) => (
          <>
            <input
              id={textLabel}
              className={` ${width} ${height} ${backGround} hover:border-colorMain focus:border-colorMain outline-none transition-all border-2 p-1 border-gray-500 rounded `}
              type="text"
              onChange={(e) => HandleInputChange(field, e.target.value)}
              value={field.value}
              name={field.name}
              ref={field.ref}
              placeholder={placeHolder}
            />
          </>
        )}
      />
    </>
  );
};

export default TextInput;
