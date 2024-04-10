/* eslint-disable react/prop-types */
const TableActionsCollumns = ({ onClick }) => {
  return (
    <div className=" btn btn-circle bg-transparent	hover:bg-transparent border-none ">
      <input
        type="checkbox"
        onClick={onClick}
        className="checkbox checkbox-info"
      />
    </div>
  );
};

export default TableActionsCollumns;
