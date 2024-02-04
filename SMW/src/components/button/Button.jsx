const Button = (props) => {
  const { title, onHandleClick, height, width, backGround } = props;
  return (
    <>
      <button
        className={`${height ?? 'h-[46px]'} ${width ?? 'w-[149px]'} ${backGround ?? 'bg-colorMain'} rounded-[10px] text-textColorMain `}
        type="button"
        onClick={onHandleClick}
      >
        {title}
      </button>
    </>
  );
};

export default Button;
