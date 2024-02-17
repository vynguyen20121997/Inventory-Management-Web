import { useState } from 'react';
import ShelfSearchBar from './components/ShelfSearchBar/ShelfSearchBar.jsx';
import ShelfItem from './components/ShelfItem/ShelfItem';
import {
  SearchBarContainer,
  TableContainer,
} from '../../components/pageContainer';
import { shelfColumns, shelfList } from '../../tests/dataShelf.jsx';
import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
import DeleteShelfUI from './components/DeleteShelfUI/DeleteShelfUI.jsx';
const ShelfPage = () => {
  const [deleteShelf, setDeleteShelf] = useState(false);
  const [getShelfName, setGetShelfName] = useState('');
  const table = useReactTable({
    data: shelfList,
    columns: shelfColumns,
    getCoreRowModel: getCoreRowModel(),
  });
  const onGetDeleteShelf = (shelfName) => {
    setGetShelfName(shelfName);
  };
  const onCancelDelete = () => {
    setGetShelfName('');
  };
  const onConfirmDelete = () => {
    console.log('Delete Shelf');
  };
  return (
    <>
      <SearchBarContainer>
        <ShelfSearchBar
          onCloseShelf={setDeleteShelf}
          closeShelf={deleteShelf}
        />
      </SearchBarContainer>
      <TableContainer>
        <div className=" mx-[8px] py-[25px] px-[20px] grid grid-cols-4 grid-rows-3 grid-flow-row  h-fit place-items-center rounded-[10px] bg-[#FFFFFF] ">
          {table.getCoreRowModel().rows.length > 0 &&
            table.getCoreRowModel().rows.map((rows) => (
              <div
                key={rows.id}
                className="place-items-center rounded-[10px] bg-[#FFFFFF]"
              >
                <ShelfItem
                  shelfName={rows.original?.shelfName}
                  shelfTotalItem={rows.original?.shelfTotalItem}
                  deleteIcon={deleteShelf}
                  onHandleDelete={onGetDeleteShelf}
                />
              </div>
            ))}
        </div>
      </TableContainer>
      <div className="relative">
        {getShelfName && (
          <DeleteShelfUI
            shelfName={getShelfName}
            onCancelDelete={onCancelDelete}
            onConfirmDelete={onConfirmDelete}
          />
        )}
      </div>
    </>
  );
};

export default ShelfPage;
