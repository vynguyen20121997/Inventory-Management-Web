import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import TablePopup from "../../components/dataTable/TablePopup.jsx";
import {
  SearchBarContainer,
  TableContainer,
} from "../../components/pageContainer";
import useToogleDialog from "../../hooks/useToogleDialog/useToogleDialog.jsx";
import { dataTableShelfShelfList } from "../../tests/dataTable.js";
import AddDialogShelf from "./components/AddDialogShelf.jsx";
import ShelfPageDataTable from "./components/ShelfPageDataTable.jsx";
import ShelfSearchBar from "./components/ShelfSearchBar.jsx";
import {
  DELETE_SHELF_ITEM_MESSAGE,
  SHELF_LIMIT,
} from "./constants/constants.js";
import ShelfPageColumns from "./hooks/ShelfPageColumns.jsx";

const ShelfPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [shelfId, setShelfId] = useState("");

  const [shelfName, setShelfName] = useState(""); // wait for get shelf info by ID

  const {
    open: activateDelete,
    handleOpen: handleActivateDelete,
    handleClose: handleDeactivateDelete,
  } = useToogleDialog(false);

  const {
    open: openDeleteDialog,
    handleOpen: handleOpenDeleteDialog,
    handleClose: handleCloseDeleteDialog,
  } = useToogleDialog(false);

  const {
    open: openAddDialog,
    handleOpen: handleOpenAddDialog,
    handleClose: handleCloseAddDialog,
  } = useToogleDialog(false);

  const handleClickDeleteShelf = (id, name) => {
    handleOpenDeleteDialog();
    setShelfId(id);
    setShelfName(name);
  };

  const handleDelete = () => {
    console.log(shelfId);
  };

  const handlePageChange = ({ pageIndex }) => {
    setSearchParams({ page: pageIndex });
  };

  const columns = ShelfPageColumns();
  return (
    <>
      <SearchBarContainer>
        <ShelfSearchBar
          activateDelete={activateDelete}
          handleActivateDelete={handleActivateDelete}
          handleDeactivateDelete={handleDeactivateDelete}
          handleOpenAddDialog={handleOpenAddDialog}
        />
      </SearchBarContainer>

      <TableContainer>
        <ShelfPageDataTable
          columns={columns}
          dataTable={dataTableShelfShelfList.data}
          total={dataTableShelfShelfList.total}
          pageIndex={searchParams.get("page") - 1}
          pageSize={SHELF_LIMIT}
          activateDelete={activateDelete}
          handleClickDeleteShelf={handleClickDeleteShelf}
          onPageChange={handlePageChange}
        />
      </TableContainer>

      <TablePopup
        style="pt-12"
        open={openDeleteDialog}
        message={DELETE_SHELF_ITEM_MESSAGE.delete.replace(
          "{{ name }}",
          shelfName
        )}
        onSubmit={handleDelete}
        onClose={handleCloseDeleteDialog}
      />

      <AddDialogShelf
        onSubmit={() => {}}
        openAddForm={openAddDialog}
        closeForm={handleCloseAddDialog}
      />
    </>
  );
};

export default ShelfPage;
