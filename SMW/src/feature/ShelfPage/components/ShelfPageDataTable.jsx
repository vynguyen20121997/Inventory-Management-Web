import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import TablePagination from "../../../components/dataTable/TablePagination";
import ShelfItem from "./ShelfItem";

const ShelfPageDataTable = ({
  activateDelete,
  handleClickDeleteShelf,
  total,
  pageSize,
  pageIndex,
  pagination = true,
  onPageChange,
  columns,
  dataTable,
}) => {
  const table = useReactTable({
    data: dataTable,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
    // Pagination state
    pageCount: Math.ceil(total / pageSize) ?? -1,
    state: {
      pagination: {
        pageIndex,
        pageSize,
      },
    },
  });

  return (
    <div className="h-full grid grid-rows-10 pt-14">
      <div className=" row-span-9 grid grid-cols-4 grid-rows-3 grid-flow-row  h-fit place-items-center ">
        {table.getCoreRowModel().rows.length > 0 &&
          table.getCoreRowModel().rows.map((rows) => {
            return (
              <div
                key={rows.id}
                className="place-items-center rounded-[10px] bg-[#FFFFFF]"
              >
                <ShelfItem
                  shelfId={rows.original?.shelfId}
                  shelfName={rows.original?.shelfName}
                  shelfTotalItem={rows.original?.shelfTotalItem}
                  deleteIcon={activateDelete}
                  handleClickDeleteShelf={handleClickDeleteShelf}
                />
              </div>
            );
          })}
      </div>
      {pagination && (
        <div className="row-span-1 justify-self-center">
          <TablePagination
            pageIndex={pageIndex || 0}
            total={total || 0}
            onPageChange={(page) => {
              table.setPageIndex(page);
              onPageChange({ pageIndex: page });
            }}
          />
        </div>
      )}
    </div>
  );
};

export default ShelfPageDataTable;
