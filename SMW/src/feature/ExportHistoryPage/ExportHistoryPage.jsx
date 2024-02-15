import { useSearchParams } from "react-router-dom";
import DataTable from "../../components/dataTable/DataTable";
import {
  SearchBarContainer,
  TableContainer,
} from "../../components/pageContainer";
import {
  dataTableExportHistory,
  dataTableImportHistory,
} from "../../tests/dataTable";
import SearchBarExportHistoryPage from "./components/SearchBarExportHistoryPage";
import { EXPORT_PAGE_DATA_LIMIT } from "./constants/constants";
import ExportHistoryPageColumns from "./hooks/ExportHistoryPageColumns";

const ExportHistoryPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const columns = ExportHistoryPageColumns();

  const handlePageChange = ({ pageIndex }) => {
    setSearchParams({ page: pageIndex });
  };

  return (
    <>
      <SearchBarContainer>
        <SearchBarExportHistoryPage />
      </SearchBarContainer>

      <TableContainer>
        <DataTable
          columns={columns}
          dataTable={Array(EXPORT_PAGE_DATA_LIMIT).fill(
            dataTableExportHistory.data[0]
          )}
          total={dataTableImportHistory.total}
          onPageChange={handlePageChange}
          pageIndex={searchParams.get("page") - 1}
          pageSize={EXPORT_PAGE_DATA_LIMIT}
        />
      </TableContainer>
    </>
  );
};

export default ExportHistoryPage;
