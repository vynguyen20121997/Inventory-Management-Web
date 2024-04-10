import TableActionsCollumns from "../../../components/dataTable/TableCheckBoxCollumns";

const ExportPageColumns = ({ onClick }) => {
  const columns = [
    {
      accessorKey: "no",
      header: "no",
      cell: (info) => <div>{info.getValue()}</div>,
    },
    {
      accessorKey: "action",
      header: "",
      cell: (info) => (
        <div>
          <TableActionsCollumns onClick={() => onClick(info.getValue())} />
        </div>
      ),
    },
    {
      accessorKey: "name",
      header: "Name",
      cell: (info) => <div>{info.getValue()}</div>,
    },
    {
      accessorKey: "openBalance",
      header: "Open Balance",
      cell: (info) => <div>{info.getValue()}</div>,
    },
    {
      accessorKey: "quantity",
      header: "Quantity",
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
  ];
  return columns;
};

export default ExportPageColumns;
