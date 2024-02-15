import { useSearchParams } from "react-router-dom";
import DataTable from "../../components/dataTable/DataTable";
import {
  SearchBarContainer,
  TableContainer,
} from "../../components/pageContainer";
import SearchBarExportPage from "./components/SearchBarExportPage";
import { EXPORT_PAGE_DATA_LIMIT } from "./constants/constants";
import { dataTableExport } from "../../tests/dataTable";
import ExportPageColumns from "./hooks/ExportPageColumns";

const ExportPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const handlePageChange = ({ pageIndex }) => {
    setSearchParams({ page: pageIndex });
  };
  const columns = ExportPageColumns();

  return (
    <>
      <SearchBarContainer>
        <SearchBarExportPage />
      </SearchBarContainer>

      <TableContainer>
        <DataTable
          columns={columns}
          dataTable={Array(EXPORT_PAGE_DATA_LIMIT).fill(
            dataTableExport.data[0]
          )}
          total={dataTableExport.total}
          onPageChange={handlePageChange}
          pageIndex={searchParams.get("page") - 1}
          pageSize={EXPORT_PAGE_DATA_LIMIT}
        />
      </TableContainer>
    </>
  );
};

export default ExportPage;
