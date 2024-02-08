/* eslint-disable react/prop-types */
const Button = (props) => {
  const {
    title,
    HandleClick,
    height = "h-[46px]",
    width = "w-[149px]",
    backGround = "bg-colorMain",
    textSize,
  } = props;
  return (
    <>
      <button
        className={`${height} ${width} ${backGround} ${textSize} rounded-[10px] text-textColorMain `}
        type="button"
        onClick={HandleClick}
      >
        {title}
      </button>
    </>
  );
};

export default Button;
