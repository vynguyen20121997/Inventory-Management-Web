import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import DataTable from "../../components/dataTable/DataTable";
import GlobalLoading from "../../components/globalLoading/GlobalLoading";
import {
  SearchBarContainer,
  TableContainer,
} from "../../components/pageContainer";
import useToogleDialog from "../../hooks/useToogleDialog";
import { useinventory } from "../../queries/inventory/inventoryQuery";
import AddDialogInventoryPage from "./components/AddDialogInventoryPage";
import SearchBarInventory from "./components/SearchBarInventory";
import { INVENTORY_PAGE_LIMIT } from "./constants/constants";
import InventoryPageColumns from "./hooks/InventoryPageColumns";
import { useGroups } from "../../queries/inventory/groupQuery";
import useAddSupply from "./hooks/useAddSupply";
import useSearchSupply from "./hooks/useSearchSupply";
import { insertNo } from "../../utils/insertNo";

const InventoryPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inventoryDataTable, setInventoryDataTable] = useState([]);

  const { query } = useinventory();

  const { query: groups } = useGroups();

  useEffect(() => {
    if (query?.data?.supplies) {
      const tableData = insertNo(query.data.supplies);
      setInventoryDataTable(tableData);
    }
  }, [query?.data?.supplies]);

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

  const { addSupply } = useAddSupply();

  const handleAddSupply = (data) => {
    addSupply(data);
    handleCloseAddDialog();
  };

  const SearchSupply = async (data) => {
    const searchData = await useSearchSupply(data);
    if (searchData.supplies) {
      const tableData = insertNo(searchData.supplies);
      setInventoryDataTable(tableData);
    }
  };

  const columns = InventoryPageColumns({
    onEdit: () => {},
    onDelete: () => {},
  });

  if (query?.data?.supplies === undefined || inventoryDataTable === undefined) {
    return (
      <div>
        <GlobalLoading />
      </div>
    );
  } else {
    return (
      <>
        <SearchBarContainer>
          <SearchBarInventory
            handleClickOpenAdd={handleClickOpenAdd}
            handleSearchBar={SearchSupply}
          />
        </SearchBarContainer>

        <TableContainer>
          <DataTable
            columns={columns}
            dataTable={inventoryDataTable}
            total={query?.data?.pagination}
            pageIndex={searchParams.get("page") - 1}
            pageSize={INVENTORY_PAGE_LIMIT}
            onPageChange={handlePageChange}
          />
        </TableContainer>

        <AddDialogInventoryPage
          open={openAddDialog}
          onClose={handleCloseAddDialog}
          onSubmit={handleAddSupply}
          groupData={groups?.data?.groups}
        />
      </>
    );
  }
  // return null;
};

export default InventoryPage;
