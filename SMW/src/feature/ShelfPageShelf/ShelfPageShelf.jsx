import { useCallback } from "react";
import DataTable from "../../components/dataTable/DataTable";
import {
  TableContainer,
  SearchBarContainer,
} from "../../components/pageContainer";
import ShelfPageShelfColumns from "./hooks/ShelfPageShelfColumns";
import { dataTableShelf } from "../../tests/dataTable";
import { SHELF_ITEM_LIMIT } from "./constants/constants";
import { useSearchParams } from "react-router-dom";
import {
  AddDialogShelfPageShelf,
  EditDialogShelfPageShelf,
  SearchBarShelfPageShelf,
} from "./components";
// import { useShelfPageShelfItems } from "../../queries/shelfPageShelf/shelfPageShelfQuery";
// import { GET_LIST_DIRECTION } from "../../constant/enums";
import useToogleDialog from "../../hooks/useToogleDialog";

const ShelfPageShelf = () => {
  const [searchParams, setSearchParams] = useSearchParams();

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

  // const page = 1;

  // const { data } = useShelfPageShelfItems({
  //   ...searchParams,
  //   page,
  //   limit: SHELF_ITEM_LIMIT,
  //   order: "updated_at",
  //   direction: GET_LIST_DIRECTION.DESC,
  // });

  const columns = ShelfPageShelfColumns({
    onEdit: handleClickOpenEdit,
    onDelete: () => {},
  });

  const handlePageChange = ({ pageIndex }) => {
    setSearchParams({ page: pageIndex });
  };

  return (
    <>
      <SearchBarContainer>
        <SearchBarShelfPageShelf handleClickOpenAdd={handleClickOpenAdd} />
      </SearchBarContainer>

      <TableContainer>
        <DataTable
          columns={columns}
          dataTable={Array(SHELF_ITEM_LIMIT).fill(dataTableShelf.data[0])}
          total={dataTableShelf.total}
          pageIndex={searchParams.get("page") - 1}
          pageSize={SHELF_ITEM_LIMIT}
          onPageChange={handlePageChange}
        />
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
        data={dataTableShelf.data[0]}
        openDeleteDialog={openDeleteDialog}
        handleOpenDeleteDialog={handleOpenDeleteDialog}
        handleCloseDeleteDialog={handleCloseDeleteDialog}
      />
    </>
  );
};

export default ShelfPageShelf;
