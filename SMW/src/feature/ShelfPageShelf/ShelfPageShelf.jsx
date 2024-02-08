import DataTable from "../../components/dataTable/DataTable";
import {
  TableContainer,
  SearchBarContainer,
} from "../../components/pageContainer";
import { dataTableShelf } from "../../tests/dataTable";
import SearchBarShelfPageShelf from "./components/SearchBarShelfPageShelf";
import ShelfPageShelfColumns from "./hooks/ShelfPageShelfColumns";

const ShelfPageShelf = () => {
  const columns = ShelfPageShelfColumns({
    onEdit: () => {},
    onDelete: () => {},
  });

  return (
    <>
      <SearchBarContainer>
        <SearchBarShelfPageShelf />
      </SearchBarContainer>

      <TableContainer>
        <DataTable columns={columns} dataTable={dataTableShelf} />
      </TableContainer>
    </>
  );
};

export default ShelfPageShelf;
