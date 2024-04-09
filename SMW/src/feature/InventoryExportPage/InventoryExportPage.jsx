import { useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import DataTable from "../../components/dataTable/DataTable";
import GlobalLoading from "../../components/globalLoading/GlobalLoading";
import {
  SearchBarContainer,
  TableContainer,
} from "../../components/pageContainer";
import useToogleDialog from "../../hooks/useToogleDialog";
import { useinventory } from "../../queries/inventory/inventoryQuery";
import { INVENTORY_EXPORT_PAGE_LIMIT } from "./constants/constants";
import AddDialogInventoryExportPage from "./components/AddDialogInventoryExportPage";
import InventoryExportPageColumns from "./hooks/InventoryExportPageColumns";

const InventoryExportPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { query } = useinventory();

  const {
    open: openAddDialog,
    handleOpen: handleOpenAddDialog,
    handleClose: handleCloseAddDialog,
  } = useToogleDialog(false);

  const handleClickOpenAdd = useCallback(() => {
    handleOpenAddDialog();
  }, [handleOpenAddDialog]);

  const handlePageChange = ({ pageIndex }) => {
    setSearchParams({ page: pageIndex });
  };

  const columns = InventoryExportPageColumns({
    onEdit: () => {},
    onDelete: () => {},
  });

  if (query?.data === undefined) {
    return (
      <div>
        <GlobalLoading />
      </div>
    );
  }

  return (
    <>
      <SearchBarContainer>
        <AddDialogInventoryExportPage handleClickOpenAdd={handleClickOpenAdd} />
      </SearchBarContainer>

      <TableContainer>
        <DataTable
          columns={columns}
          dataTable={query?.data?.supplies}
          total={query?.data?.totalItem}
          pageIndex={searchParams.get("page") - 1}
          pageSize={INVENTORY_EXPORT_PAGE_LIMIT}
          onPageChange={handlePageChange}
        />
      </TableContainer>

      <AddDialogInventoryExportPage
        open={openAddDialog}
        onClose={handleCloseAddDialog}
        onSubmit={() => {}}
      />
    </>
  );
};

export default InventoryExportPage;
