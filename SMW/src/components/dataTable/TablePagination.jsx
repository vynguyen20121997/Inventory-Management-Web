import { useEffect, useState } from "react";
import { usePagination } from "./hook/usePagination";
import ArrowBack from "/src/assets/icon-arrow-back.svg";
import ArrowForward from "/src/assets/icon-arrow-forward.svg";

const TablePagination = ({ total, onPageChange, pageIndex }) => {
  const [pageState, setPageState] = useState(pageIndex + 1);

  const onNext = () => {
    setPageState(pageState + 1);
  };

  const onPrevious = () => {
    setPageState(pageState - 1);
  };

  useEffect(() => {
    onPageChange(pageState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageState]);

  const paginationRange = usePagination({
    totalPageCount: total,
    currentPage: pageState,
  });

  return (
    <div className="flex items-center	">
      <button
        className=" w-[41px] h-[37px] hover:bg-[#E1E1E1] rounded-[5px]  disabled:text-gray-200"
        onClick={() => onPrevious()}
        disabled={pageState === 1}
      >
        <img src={ArrowBack} />
      </button>

      <div className=" flex ">
        {paginationRange.map((page, index) => {
          if (page === pageState) {
            return (
              <button
                className=" w-[41px] h-[37px] btn bg-[#E1E1E1] hover:bg-[#E1E1E1]  border-none text-[24px] font-normal text-black "
                key={index}
              >
                {page}
              </button>
            );
          }
          return (
            <button
              className="  btn bg-transparent w-[41px] h-[37px] hover:bg-[#E1E1E1]  border-none text-[24px] font-normal text-black"
              key={index}
              onClick={() => setPageState(page)}
            >
              {page}
            </button>
          );
        })}
      </div>

      <button
        className=" w-[41px] h-[37px] hover:bg-[#E1E1E1] active:bg-[#E1E1E1] rounded-[5px] disabled:text-gray-200 "
        onClick={() => onNext()}
        disabled={pageState === total}
      >
        <img src={ArrowForward} />
      </button>
    </div>
  );
};

export default TablePagination;
