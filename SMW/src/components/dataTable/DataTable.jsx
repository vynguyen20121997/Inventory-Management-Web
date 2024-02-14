import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import TablePagination from "./TablePagination";

// eslint-disable-next-line react/prop-types
const DataTable = ({
  columns,
  dataTable,
  total,
  pageSize,
  pageIndex,
  onPageChange,
}) => {
  const table = useReactTable({
    columns,
    data: dataTable,
    // Pagination state
    pageCount: Math.ceil(total / pageSize) ?? -1,
    state: {
      pagination: {
        pageIndex,
        pageSize,
      },
    },
    // Pipeline
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <>
      <div className="h-full grid grid-rows-10">
        <div className="row-span-9">
          <table className="table">
            <thead>
              {table?.getHeaderGroups()?.map((headerGroup) => (
                <tr
                  key={headerGroup.id}
                  className="border-none text-[#676767] text-xl"
                >
                  {headerGroup.headers.map((header) => (
                    <th key={header.id} className="font-normal">
                      {flexRender(
                        header?.column?.columnDef?.header,
                        header?.getContext()
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table?.getRowModel()?.rows.length > 0 &&
                table.getRowModel().rows.map((row) => (
                  <tr className="border-none " key={row.id}>
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <th key={cell.id} className="font-normal text-xl">
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </th>
                      );
                    })}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
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
      </div>
    </>
  );
};

export default DataTable;
