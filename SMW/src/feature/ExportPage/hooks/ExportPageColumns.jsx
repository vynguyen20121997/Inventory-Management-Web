const ExportPageColumns = () => {
  const columns = [
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
      accessorKey: "price",
      header: "Price",
      cell: (info) => <div>{info.getValue()}</div>,
    },
    {
      accessorKey: "total",
      header: "Total",
      cell: (info) => <div>{info.getValue()}</div>,
    },
  ];
  return columns;
};

export default ExportPageColumns;
