import { useSearchParams } from "react-router-dom";
import DataTable from "../../components/dataTable/DataTable";
import {
  SearchBarContainer,
  TableContainer,
} from "../../components/pageContainer";
import { dataTableImportHistory } from "../../tests/dataTable";
import SearchBarImportHistoryPage from "./components/SearchBarImportHistoryPage";
import { IMPORT_HISTORY_PAGE_DATA_LIMIT } from "./constants/constants";
import ImportHistoryPageColumns from "./hooks/ImportHistoryPageColumns";
import { useImportHistories } from "../../queries/importHistory/importHistoryQuery";
import { useEffect, useState } from "react";
import { insertNo } from "../../utils/insertNo";
import { calculateTotal } from "../../utils/calculateTotal";

const ImportHistoryPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [importHistoryDataTable, setImportHistoryDataTable] = useState([]);

  const columns = ImportHistoryPageColumns();

  const { query } = useImportHistories();

  useEffect(() => {
    if (query?.data?.supplies) {
      const tableDataNo = insertNo(query.data.supplies);
      if (tableDataNo) {
        const tableData = calculateTotal(tableDataNo);
        setImportHistoryDataTable(tableData);
      }
    }
  }, [query?.data?.supplies]);

  const handlePageChange = ({ pageIndex }) => {
    setSearchParams({ page: pageIndex });
  };
  console.log(query.data);
  return (
    <>
      <SearchBarContainer>
        <SearchBarImportHistoryPage />
      </SearchBarContainer>

      <TableContainer>
        <DataTable
          columns={columns}
          dataTable={importHistoryDataTable}
          total={dataTableImportHistory.total}
          onPageChange={handlePageChange}
          pageIndex={searchParams.get("page") - 1}
          pageSize={IMPORT_HISTORY_PAGE_DATA_LIMIT}
        />
      </TableContainer>
    </>
  );
};

export default ImportHistoryPage;
