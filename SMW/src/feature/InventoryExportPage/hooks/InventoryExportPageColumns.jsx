import { useMemo } from "react";

const InventoryExportPageColumns = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: "no",
        header: "no",
        cell: (info) => <div>{info.getValue()}</div>,
      },
      {
        accessorKey: "title",
        header: "Name",
        cell: (info) => <div>{info.getValue()}</div>,
      },
      {
        accessorKey: "unit",
        header: "Unit",
        cell: (info) => <div>{info.getValue()}</div>,
      },
      {
        accessorKey: "price",
        header: "Price",
        cell: (info) => <div>{info.getValue()}</div>,
      },
    ],
    []
  );
  return columns;
};

export default InventoryExportPageColumns;
