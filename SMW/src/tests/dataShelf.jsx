export const shelfColumns = [
  { accessorKey: "shelfName", cell: (info) => <div> {info.getValue()} </div> },
  {
    accessorKey: "shelfTotalItem",
    cell: (info) => <div> {info.getValue()} </div>,
  },
];
