export const calculateTotal = (data) => {
  const tableData = data.map((e) => ({
    ...e,
    total: Number(e.balance) * Number(e.price),
  }));
  return tableData;
};
