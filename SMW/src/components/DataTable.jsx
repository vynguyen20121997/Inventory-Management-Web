import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

// eslint-disable-next-line react/prop-types
const DataTable = ({ columns, dataTable }) => {
  const table = useReactTable({
    columns: columns,
    data: dataTable,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="border-none text-[#676767]">
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="font-normal">
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.length > 0 &&
            table.getRowModel().rows.map((row) => (
              <tr className="border-none " key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <th key={cell.id} className="font-normal">
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
  );
};

export default DataTable;
