import { useNavigate } from "react-router-dom";
import DeleteIcon from "/src/assets/icons-delete.svg";
import { PATHS } from "../../../constant/urls";
const ShelfItem = (props) => {
  const {
    shelfId,
    shelfName,
    shelfTotalItem,
    deleteIcon,
    handleClickDeleteShelf,
    shelfDescription,
  } = props;
  const navigate = useNavigate();
  return (
    <div
      className=" tooltip   w-[235px] h-[185px] font-normal "
      data-tip={shelfDescription}
    >
      <div className=" relative bg-[#E1E1E1] text-[40px]  ">
        <div
          className="m-auto w-fit leading-[120px] align-middle hover:cursor-pointer	"
          onClick={() =>
            navigate(`/${PATHS.shelfInfo.replace(":id", shelfId)}`)
          }
        >
          {shelfTotalItem}
        </div>
        {deleteIcon ? (
          <button
            className="hover:opacity-80 w-[40px] h-[40px] absolute top-0 right-0 translate-x-1/2 -translate-y-1/3"
            onClick={() => handleClickDeleteShelf(shelfId, shelfName)}
          >
            <img className="object-fill" src={DeleteIcon} />
          </button>
        ) : (
          ""
        )}
      </div>
      <div className="w-[235px] h-[65px] text-[32px] ">
        <div className="m-auto w-fit "> {shelfName} </div>
      </div>
    </div>
  );
};

export default ShelfItem;
