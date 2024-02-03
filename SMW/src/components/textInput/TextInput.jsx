import { useState } from 'react';
import PropTypes from 'prop-types';

const TextInput = ({
  width,
  height,
  backGround,
  TextLabel,
  placeHolder,
  onTextChange,
}) => {
  const [text, setText] = useState('');
  const customCssInput = `${width} ${height} ${backGround}  `;

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setText(inputValue);
    onTextChange ? onTextChange(inputValue) : '';
  };
  return (
    <>
      {TextLabel ? <label htmlFor={TextLabel}> {TextLabel} </label> : ''}

      <input
        id={TextLabel}
        placeholder={placeHolder}
        type="text"
        className={` ${customCssInput}  outline-none transition-all hover:outline-colorMain focus:outline-colorMain rounded `}
        value={text}
        onChange={handleInputChange}
      />
    </>
  );
};

TextInput.propTypes = {
  placeHolder: PropTypes.string,
  TextLabel: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  backGround: PropTypes.string,
  onTextChange: PropTypes.func,
};

export default TextInput;
