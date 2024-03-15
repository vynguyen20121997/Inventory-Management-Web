/* eslint-disable react/prop-types */
const Button = (props) => {
  const {
    title,
    HandleClick,
    height = "h-[46px]",
    width = "w-[149px]",
    backGround = "bg-colorMain",
    textSize,
    textColor = "text-textColorMain",
  } = props;

  return (
    <>
      <button
        className={` btn ${height} ${width} ${backGround} ${textSize} rounded-[10px] ${textColor} focus:outline-none focus:ring-0 border-none`}
        type="button"
        onClick={HandleClick}
      >
        {title}
      </button>
    </>
  );
};

export default Button;
