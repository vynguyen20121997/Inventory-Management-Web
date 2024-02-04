import { useForm, Controller } from 'react-hook-form';
const NumberInput = ({
  width,
  height,
  backGround,
  placeHolder = '0.00',
  numberLabel,
  getValue,
}) => {
  const { control, trigger } = useForm();
  const onHandleChange = async (feild, value) => {
    await trigger(feild.name);
    const regex = /^\d*\.?\d{0,2}$/;
    if (regex.test(value)) {
      feild.onChange(value);
      getValue(value);
    }
  };
  return (
    <>
      <Controller
        name="NumberInput"
        control={control}
        defaultValue={''}
        rules={{
          pattern: {
            value: /^\d+(\.\d{0,2})?$/,
            message: 'Dữ liệu không hợp lệ',
          },
        }}
        render={({ field }) => (
          <>
            <input
              id={numberLabel}
              className={` ${width} ${height} ${backGround}  outline-none  transition-all border-2 p-1 border-gray-500 hover:border-colorMain focus:border-colorMain rounded `}
              step="0.01"
              onChange={(e) => onHandleChange(field, e.target.value)}
              value={field.value}
              name={field.name}
              ref={field.ref}
              type="number"
              inputMode="decimal"
              placeholder={placeHolder}
            />
          </>
        )}
      />
    </>
  );
};

export default NumberInput;
