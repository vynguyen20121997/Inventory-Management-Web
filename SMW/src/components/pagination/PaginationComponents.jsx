import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import { usePagination } from './hook/usePagination';
import { DOTS } from '../../../../../../react-pagination/react-pagination/src/usePagination';
import { cn } from '../../utils/cn';
const PaginationComponents = ({
  total,
  pageSize,
  onPageChange,
  currentPage,
  pageIndex,
}) => {
  const totalPageCount = Math.ceil(total.length / pageSize);

  const paginaTionRange = usePagination({
    totalPageCount,
    total,
    currentPage,
  });

  const onNext = () => {
    onPageChange(pageIndex + 1);
  };
  const onPrevious = () => {
    if (currentPage === 1) return;

    onPageChange(pageIndex - 1);
  };
  return (
    <div>
      <div className="flex">
        <button
          className=" w-[41px] h-[37px] hover:bg-[#E1E1E1] rounded-[5px] disabled:text-gray-200  "
          onClick={() => onPrevious()}
          disabled={currentPage === 1}
        >
          <MdArrowBackIosNew className="font-normal text-[24px] " />
        </button>
        {paginaTionRange.map((page) => {
          if (page === DOTS) {
            return (
              <div
                key={page + Math.random()}
                className="text-[24px] w-[41px] h-[37px] text-center pointer-events-none "
              >
                &#8230;
              </div>
            );
          }

          return (
            <button
              type="button"
              key={page}
              className={cn(
                'w-[41px] h-[37px] hover:bg-[#E1E1E1] active:bg-[#E1E1E1]  rounded-[5px] font-normal text-[24px]',
                { 'bg-[#E1E1E1]': page === currentPage }
              )}
              onClick={() => {
                onPageChange(page - 1);
              }}
            >
              {page}
            </button>
          );
        })}
        <button
          className=" w-[41px] h-[37px] hover:bg-[#E1E1E1] active:bg-[#E1E1E1] rounded-[5px] disabled:text-gray-200 "
          onClick={() => onNext()}
          disabled={currentPage === totalPageCount}
        >
          <MdArrowForwardIos className="font-normal text-[24px]  " />
        </button>
      </div>
    </div>
  );
};

export default PaginationComponents;
