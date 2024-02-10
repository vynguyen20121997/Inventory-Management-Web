import { useCallback } from 'react';
import DataTable from '../../components/dataTable/DataTable';
import {
  TableContainer,
  SearchBarContainer,
} from '../../components/pageContainer';
import useToogleDialog from '../../hooks/useToogleDialog/useToogleDialog';
import SearchBarShelfPageShelf from './components/SearchBarShelfPageShelf';
import ShelfPageShelfColumns from './hooks/ShelfPageShelfColumns';
import AddDialogShelfPageShelf from './components/AddDialogShelfPageShelf';
import { dataTableShelf } from '../../tests/dataTable';
import EditDialogShelfPageShelf from './components/EditDialogShelfPageShelf';

const ShelfPageShelf = () => {
  const {
    open: openAddDialog,
    handleOpen: handleOpenAddDialog,
    handleClose: handleCloseAddDialog,
  } = useToogleDialog(false);

  const {
    open: openEditDialog,
    handleOpen: handleOpenEditDialog,
    handleClose: handleCloseEditDialog,
  } = useToogleDialog(false);

  const {
    open: openDeleteDialog,
    handleOpen: handleOpenDeleteDialog,
    handleClose: handleCloseDeleteDialog,
  } = useToogleDialog(false);

  const handleClickOpenAdd = useCallback(() => {
    handleOpenAddDialog();
  }, [handleOpenAddDialog]);

  const handleClickOpenEdit = useCallback(() => {
    handleOpenEditDialog();
  }, [handleOpenEditDialog]);

  const columns = ShelfPageShelfColumns({
    onEdit: handleClickOpenEdit,
    onDelete: () => {},
  });

  return (
    <>
      <SearchBarContainer>
        <SearchBarShelfPageShelf handleClickOpenAdd={handleClickOpenAdd} />
      </SearchBarContainer>

      <TableContainer>
        <DataTable columns={columns} dataTable={dataTableShelf} />
      </TableContainer>

      <AddDialogShelfPageShelf
        open={openAddDialog}
        onClose={handleCloseAddDialog}
        onSubmit={() => {}}
      />

      <EditDialogShelfPageShelf
        open={openEditDialog}
        onClose={handleCloseEditDialog}
        onSubmit={() => {}}
        data={dataTableShelf[0]}
        openDeleteDialog={openDeleteDialog}
        handleOpenDeleteDialog={handleOpenDeleteDialog}
        handleCloseDeleteDialog={handleCloseDeleteDialog}
      />
    </>
  );
};

export default ShelfPageShelf;
