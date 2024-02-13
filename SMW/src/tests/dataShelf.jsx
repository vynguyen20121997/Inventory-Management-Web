export const shelfList = [
  { shelfName: 1, shelfTotalItem: 500 },
  { shelfName: 2, shelfTotalItem: 1000 },
  { shelfName: 3, shelfTotalItem: 900 },
  { shelfName: 4, shelfTotalItem: 1566 },
  { shelfName: 5, shelfTotalItem: 766 },
  { shelfName: 6, shelfTotalItem: 538 },
  { shelfName: 7, shelfTotalItem: 640 },
  { shelfName: 8, shelfTotalItem: 600 },
  { shelfName: 9, shelfTotalItem: 3000 },
  { shelfName: 10, shelfTotalItem: 200 },
  { shelfName: 11, shelfTotalItem: 50 },
  { shelfName: 12, shelfTotalItem: 180 },
];

export const shelfColumns = [
  { accessorKey: 'shelfName', cell: (info) => <div> {info.getValue()} </div> },
  {
    accessorKey: 'shelfTotalItem',
    cell: (info) => <div> {info.getValue()} </div>,
  },
];
