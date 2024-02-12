import DeleteIcon from '/src/assets/icons-delete.svg';
const ShelfItem = (props) => {
  const { shelfName, shelfTotalItem, closeShelf } = props;
  return (
    <div className="w-[235px] h-[185px] font-normal ">
      <div className=" relative bg-[#E1E1E1] text-[40px]  ">
        <div className="m-auto w-fit leading-[120px] align-middle ">
          {' '}
          {shelfTotalItem}
        </div>
        {closeShelf ? (
          <button className="hover:opacity-80 w-[40px] h-[40px] absolute top-0 right-0 translate-x-1/2 -translate-y-1/3 ">
            <img className="object-fill" src={DeleteIcon} />
          </button>
        ) : (
          ''
        )}
      </div>
      <div className="w-[235px] h-[65px] text-[32px] ">
        <div className="m-auto w-fit "> {shelfName} </div>
      </div>
    </div>
  );
};

export default ShelfItem;
