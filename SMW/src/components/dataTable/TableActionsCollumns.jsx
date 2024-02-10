/* eslint-disable react/prop-types */
import EditIcon from "/src/assets/edit-icon.svg";
const TableActionsCollumns = ({ onEdit }) => {
  return (
    <div className=" btn btn-circle bg-transparent	hover:bg-transparent border-none ">
      <img src={EditIcon} onClick={onEdit} alt="" />
    </div>
  );
};

export default TableActionsCollumns;
