const ShelfPageColumns = () => {
  const columns = [
    {
      accessorKey: "title",
      cell: (info) => <div> {info.getValue()} </div>,
    },
    {
      accessorKey: "totalSupplies",
      cell: (info) => <div> {info.getValue()} </div>,
    },
  ];
  return columns;
};

export default ShelfPageColumns;
