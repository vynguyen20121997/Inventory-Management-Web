import { useMemo } from "react";

const InventoryReportPageColumns = () => {
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
        accessorKey: "openBalance",
        header: "Open Balance",
        cell: (info) => <div>{info.getValue()}</div>,
      },
      {
        accessorKey: "import",
        header: "Import",
        cell: (info) => <div>{info.getValue()}</div>,
      },
      {
        accessorKey: "export",
        header: "Export",
        cell: (info) => <div>{info.getValue()}</div>,
      },
      {
        accessorKey: "balance",
        header: "Balance",
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

export default InventoryReportPageColumns;
