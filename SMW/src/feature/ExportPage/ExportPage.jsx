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
import EditTemplateExportPage from "./components/EditTemplateExportPage";
import useToogleDialog from "../../hooks/useToogleDialog";

const ExportPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const {
    open: openEditTemplateDialog,
    handleOpen: handleOpenEditTemplateDialog,
    handleClose: handleCloseEditTemplateDialog,
  } = useToogleDialog(false);

  const handlePageChange = ({ pageIndex }) => {
    setSearchParams({ page: pageIndex });
  };
  const columns = ExportPageColumns({
    onClick: () => {},
  });

  return (
    <>
      <SearchBarContainer>
        <SearchBarExportPage
          handleClickOpenEditTemplate={handleOpenEditTemplateDialog}
        />
      </SearchBarContainer>

      <TableContainer>
        <DataTable
          columns={columns}
          dataTable={Array(8).fill(dataTableExport.data[0])}
          total={dataTableExport.total}
          onPageChange={handlePageChange}
          pageIndex={searchParams.get("page") - 1}
          pageSize={EXPORT_PAGE_DATA_LIMIT}
        />
      </TableContainer>

      <EditTemplateExportPage
        open={openEditTemplateDialog}
        onClose={handleCloseEditTemplateDialog}
        onSubmit={() => {}}
      />
    </>
  );
};

export default ExportPage;
