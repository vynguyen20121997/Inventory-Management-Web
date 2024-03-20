import { useCallback, useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import DataTable from "../../components/dataTable/DataTable";
import {
  SearchBarContainer,
  TableContainer,
} from "../../components/pageContainer";
import { dataTableShelf } from "../../tests/dataTable";
import {
  AddDialogShelfPageShelf,
  EditDialogShelfPageShelf,
  SearchBarShelfPageShelf,
} from "./components";
import { SHELF_ITEM_LIMIT } from "./constants/constants";
import ShelfPageShelfColumns from "./hooks/ShelfPageShelfColumns";

import { useDispatch } from "react-redux";
import useToogleDialog from "../../hooks/useToogleDialog";
import { useShelf } from "../../queries/shelfPage/shelfPageShelfQuery.js";
import { shelfInfo } from "../../redux/shelf/shelfSlice";
import GlobalLoading from "../../components/globalLoading/GlobalLoading";

const ShelfPageShelf = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useParams();
  const dispatch = useDispatch();

  const [shelfData, setShelfData] = useState([]);

  const { query } = useShelf(params.id);

  useEffect(() => {
    if (query?.data) {
      dispatch(shelfInfo(query.data.shelves));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query?.data]);

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

  const handlePageChange = ({ pageIndex }) => {
    setSearchParams({ page: pageIndex });
  };

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
