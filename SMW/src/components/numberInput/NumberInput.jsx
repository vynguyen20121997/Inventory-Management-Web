import { useState } from 'react';
import PropTypes from 'prop-types';

const NumberInput = ({
  onNumberChange,
  placeHolder = '0.00',
  numberLabel,
  width,
  height,
  backGround,
}) => {
  const [number, setNumber] = useState('');
  const customCssInput = `${width} ${height} ${backGround}  `;
  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    const regex = /^\d*\.?\d{0,2}$/;
    if (regex.test(inputValue)) {
      setNumber(inputValue);
      onNumberChange ? onNumberChange(inputValue) : '';
    }
  };

  return (
    <>
      {numberLabel ? <label htmlFor={numberLabel}> {numberLabel} </label> : ''}
      <input
        id={numberLabel}
        className={` ${customCssInput}  outline-none  transition-all border-2 p-1 border-gray-500 hover:border-colorMain rounded `}
        type="number"
        step="0.01"
        value={number}
        onChange={handleInputChange}
        placeholder={placeHolder}
      />
    </>
  );
};

NumberInput.propTypes = {
  placeHolder: PropTypes.string,
  numberLabel: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  backGround: PropTypes.string,
  onNumberChange: PropTypes.func,
};

export default NumberInput;
