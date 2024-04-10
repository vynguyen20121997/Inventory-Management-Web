import { useSearchParams } from "react-router-dom";
import DataTable from "../../components/dataTable/DataTable";
import GlobalLoading from "../../components/globalLoading/GlobalLoading";
import {
  SearchBarContainer,
  TableContainer,
} from "../../components/pageContainer";
import { useinventory } from "../../queries/inventory/inventoryQuery";
import { INVENTORY_EXPORT_PAGE_LIMIT } from "./constants/constants";
import InventoryReportPageColumns from "./hooks/InventoryReportColumns";
import SearchBarInventoryReport from "./components/SearchBarInventoryReport";

const InventoryReportPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { query } = useinventory();

  const handlePageChange = ({ pageIndex }) => {
    setSearchParams({ page: pageIndex });
  };

  const columns = InventoryReportPageColumns({
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
        <SearchBarInventoryReport />
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
    </>
  );
};

export default InventoryReportPage;
