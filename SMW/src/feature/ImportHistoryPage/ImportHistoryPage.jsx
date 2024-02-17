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

const ImportHistoryPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const columns = ImportHistoryPageColumns();

  const handlePageChange = ({ pageIndex }) => {
    setSearchParams({ page: pageIndex });
  };

  return (
    <>
      <SearchBarContainer>
        <SearchBarImportHistoryPage />
      </SearchBarContainer>

      <TableContainer>
        <DataTable
          columns={columns}
          dataTable={Array(IMPORT_HISTORY_PAGE_DATA_LIMIT).fill(
            dataTableImportHistory.data[0]
          )}
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
