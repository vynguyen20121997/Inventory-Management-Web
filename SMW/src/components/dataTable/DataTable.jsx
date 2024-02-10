import {
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { useState } from 'react';
import PaginationComponents from '../pagination/PaginationComponents';
// eslint-disable-next-line react/prop-types
const DataTable = ({ columns, dataTable }) => {
  const [pageState, setPageState] = useState(0);
  const onHandlePageChange = (value) => {
    setPageState(value);
  };
  const table = useReactTable({
    columns,
    data: dataTable,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    state: {
      pagination: {
        pageIndex: pageState,
        pageSize: 1,
      },
    },
  });
  return (
    <div className="overflow-x-auto">
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
      {/* pagination example  */}
      <div>
        <PaginationComponents
          total={dataTable}
          pageSize={table?.getState()?.pagination?.pageSize}
          onPageChange={onHandlePageChange}
          currentPage={table?.getState()?.pagination?.pageIndex + 1}
          pageIndex={table?.getState()?.pagination?.pageIndex}
        />
      </div>
    </div>
  );
};

export default DataTable;
