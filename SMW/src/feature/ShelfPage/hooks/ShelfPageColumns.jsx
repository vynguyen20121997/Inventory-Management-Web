const ShelfPageColumns = () => {
  const columns = [
    {
      accessorKey: "shelfName",
      cell: (info) => <div> {info.getValue()} </div>,
    },
    {
      accessorKey: "shelfTotalItem",
      cell: (info) => <div> {info.getValue()} </div>,
    },
  ];
  return columns;
};

export default ShelfPageColumns;
