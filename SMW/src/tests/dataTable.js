export const dataTable = [
  {
    no: 1,
    name: "Tanner",
    shelf: "Linsley",
    unit: 33,
    open: 100,
    change: 50,
    balance: 9999,
    price: 1222,
    total: 1231,
  },
];

export const columns = [
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
    accessorKey: "open",
    header: "Open",
    cell: (info) => <div>{info.getValue()}</div>,
  },
  {
    accessorKey: "change",
    header: "Change",
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
    accessorKey: "total",
    header: "Total",
    cell: (info) => <div>{info.getValue()}</div>,
  },
];
