// eslint-disable-next-line react/prop-types
const TableContainer = ({ children }) => {
  return (
    <div className=" bg-white row-span-11 rounded-[10px] mx-5 mt-5 px-5  ">
      {children}
    </div>
  );
};

export default TableContainer;
