import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import TablePopup from "../../components/dataTable/TablePopup.jsx";
import GlobalLoading from "../../components/globalLoading/GlobalLoading.jsx";
import {
  SearchBarContainer,
  TableContainer,
} from "../../components/pageContainer";
import useToogleDialog from "../../hooks/useToogleDialog.js";
import { useShelfPage } from "../../queries/shelfPage/shelfPageQuery.js";
import AddDialogShelf from "./components/AddDialogShelf.jsx";
import ShelfPageDataTable from "./components/ShelfPageDataTable.jsx";
import ShelfSearchBar from "./components/ShelfSearchBar.jsx";
import {
  DELETE_SHELF_ITEM_MESSAGE,
  SHELF_LIMIT,
} from "./constants/constants.js";
import ShelfPageColumns from "./hooks/ShelfPageColumns.jsx";
import useCreateShelf from "./hooks/useCreateShelf.js";
import useDeleteShelf from "./hooks/useDeleteShelf.js";
import useSearchShelf from "./hooks/useSearchShelf.js";

const ShelfPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [shelfData, setShelfData] = useState([]);

  const [shelfId, setShelfId] = useState("");

  const [shelfName, setShelfName] = useState(""); // wait for get shelf info by ID

  const { query } = useShelfPage();

  useEffect(() => {
    if (query?.data) {
      setShelfData(query?.data);
    }
  }, [query?.data]);

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

  const { createShelf } = useCreateShelf();

  const { deleteShelf } = useDeleteShelf({
    onSettled() {
      handleCloseDeleteDialog();
    },
  });

  const handleAddShelf = (data) => {
    createShelf(data);
    handleCloseAddDialog();
  };

  const SearchShelf = async (data) => {
    const searchData = await useSearchShelf(data);
    setShelfData(searchData);
  };

  const handleDelete = () => {
    deleteShelf(shelfId);
  };

  const handlePageChange = ({ pageIndex }) => {
    setSearchParams({ page: pageIndex });
  };

  const columns = ShelfPageColumns();

  if (
    (query?.data === undefined && shelfData?.length === 0) ||
    shelfData?.length === 0
  ) {
    return (
      <div>
        <GlobalLoading />
      </div>
    );
  }

  return (
    <>
      <SearchBarContainer>
        <ShelfSearchBar
          activateDelete={activateDelete}
          handleActivateDelete={handleActivateDelete}
          handleDeactivateDelete={handleDeactivateDelete}
          handleOpenAddDialog={handleOpenAddDialog}
          handleSearchBar={SearchShelf}
        />
      </SearchBarContainer>
      <TableContainer>
        <ShelfPageDataTable
          columns={columns}
          dataTable={shelfData.shelves}
          total={shelfData.pagination}
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
        onSubmit={handleAddShelf}
        openAddForm={openAddDialog}
        closeForm={handleCloseAddDialog}
      />
    </>
  );
};

export default ShelfPage;
