const ImportHistoryPageColumns = () => {
  const columns = [
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
      accessorKey: "inShelves",
      header: "Shelf",
      cell: (info) => <div>{info.getValue()}</div>,
    },
    {
      accessorKey: "unit",
      header: "Unit",
      cell: (info) => <div>{info.getValue()}</div>,
    },
    {
      accessorKey: "open",
      header: "Open",
      cell: (info) => <div>{info.getValue()}</div>,
    },
    {
      accessorKey: "import",
      header: "Change",
      cell: (info) => <div>+{info.getValue()}</div>,
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
      accessorKey: "total",
      header: "Total",
      cell: (info) => <div>${info.getValue()}</div>,
    },
  ];
  return columns;
};

export default ImportHistoryPageColumns;
