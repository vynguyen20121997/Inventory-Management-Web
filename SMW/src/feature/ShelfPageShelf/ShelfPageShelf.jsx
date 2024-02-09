import { useCallback } from "react";
import DataTable from "../../components/dataTable/DataTable";
import {
  TableContainer,
  SearchBarContainer,
} from "../../components/pageContainer";
import useToogleDialog from "../../hooks/useToogleDialog/useToogleDialog";
import SearchBarShelfPageShelf from "./components/SearchBarShelfPageShelf";
import ShelfPageShelfColumns from "./hooks/ShelfPageShelfColumns";
import AddDialogShelfPageShelf from "./components/AddDialogShelfPageShelf";

const ShelfPageShelf = () => {
  const {
    open: openAddDialog,
    handleOpen: handleOpenAddDialog,
    handleClose: handleCloseAddDialog,
  } = useToogleDialog(false);

  const handleClickOpenAdd = useCallback(() => {
    handleOpenAddDialog();
  }, [handleOpenAddDialog]);

  const columns = ShelfPageShelfColumns({
    onEdit: () => {},
    onDelete: () => {},
  });
  console.log("openAddDialog", openAddDialog);

  return (
    <>
      <SearchBarContainer>
        <SearchBarShelfPageShelf handleClickOpenAdd={handleClickOpenAdd} />
      </SearchBarContainer>

      <TableContainer>
        <DataTable columns={columns} dataTable={[]} />
      </TableContainer>

      <AddDialogShelfPageShelf
        open={openAddDialog}
        onClose={handleCloseAddDialog}
        onSubmit={() => {}}
      />
    </>
  );
};

export default ShelfPageShelf;
