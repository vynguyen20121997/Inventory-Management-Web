import { useMemo } from "react";
import TableActionsCollumns from "../../../components/dataTable/TableActionsCollumns";

const ShelfPageShelfColumns = ({ onEdit }) => {
  const columns = useMemo(
    () => [
      {
        accessorKey: "no",
        header: "no",
        cell: (info) => <div>{info.getValue()}</div>,
      },
      {
        accessorKey: "name",
        header: "Name",
        cell: (info) => <div>{info.getValue()}</div>,
      },
      {
        accessorKey: "shelf",
        header: "Shelf",
        cell: (info) => <div>{info.getValue()}</div>,
      },
      {
        accessorKey: "unit",
        header: "Unit",
        cell: (info) => <div>{info.getValue()}</div>,
      },
      {
        accessorKey: "quantity",
        header: "Quantity",
        cell: (info) => <div>{info.getValue()}</div>,
      },
      {
        accessorKey: "balance",
        header: "Balance",
        cell: (info) => <div>{info.getValue()}</div>,
      },
      {
        accessorKey: "price",
        header: "Price",
        cell: (info) => <div>{info.getValue()}</div>,
      },
      {
        accessorKey: "action",
        header: "",
        cell: (info) => (
          <div>
            <TableActionsCollumns onEdit={() => onEdit(info.getValue())} />
          </div>
        ),
      },
    ],
    [onEdit]
  );
  return columns;
};

export default ShelfPageShelfColumns;
