export const insertNo = (data) => {
  const tableData = data.map((e, index) => ({
    ...e,
    no: index + 1,
  }));
  return tableData;
};
