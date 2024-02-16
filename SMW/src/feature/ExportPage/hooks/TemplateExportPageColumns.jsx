const TemplateExportPageColumns = () => {
  const columns = [
    {
      accessorKey: "stt",
      header: "STT",
      cell: (info) => <div>{info.getValue()}</div>,
    },
    {
      accessorKey: "name",
      header: "Tên",
      cell: (info) => <div>{info.getValue()}</div>,
    },
    {
      accessorKey: "date",
      header: "Ngày",
      cell: (info) => <div>{info.getValue()}</div>,
    },
    {
      accessorKey: "import",
      header: "Nhập",
      cell: (info) => <div>{info.getValue()}</div>,
    },
    {
      accessorKey: "export",
      header: "Xuat",
      cell: (info) => <div>{info.getValue()}</div>,
    },
    {
      accessorKey: "quantity",
      header: "SL",
      cell: (info) => <div>{info.getValue()}</div>,
    },
    {
      accessorKey: "notes",
      header: "Ghi Chu",
      cell: (info) => <div>{info.getValue()}</div>,
    },
  ];
  return columns;
};

export default TemplateExportPageColumns;
