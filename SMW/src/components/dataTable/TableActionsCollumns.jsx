/* eslint-disable react/prop-types */
import EditIcon from "/src/assets/edit-icon.svg";
const TableActionsCollumns = ({ onEdit }) => {
  return (
    <div onClick={onEdit}>
      <img src={EditIcon} alt="" />
    </div>
  );
};

export default TableActionsCollumns;
