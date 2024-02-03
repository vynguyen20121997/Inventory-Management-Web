import PropTypes from 'prop-types';

const Button = (props) => {
  const {
    title,
    onHandleClick,
    type = 'button',
    height,
    width,
    backGround,
  } = props;
  const customCssButton = `${height ?? 'h-[46px]'} ${width ?? 'w-[149px]'} ${backGround ?? 'bg-colorMain'} rounded-[10px] text-textColorMain `;
  return (
    <>
      <button className={customCssButton} type={type} onClick={onHandleClick}>
        {title}
      </button>
    </>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  backGround: PropTypes.string,
  onHandleClick: PropTypes.func,
};
export default Button;
