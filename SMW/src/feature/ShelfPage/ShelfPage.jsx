import { useState } from 'react';
import ShelfSearchBar from './components/ShelfSearchBar/ShelfSearchBar.jsx';
import ShelfItem from './components/ShelfItem/ShelfItem';
import { SearchBarContainer } from '../../components/pageContainer';
const ShelfPage = () => {
  const [deleteShelf, setDeleteShelf] = useState(false);
  const shelfList = [
    { shelfName: 1, shelfTotalItem: 500 },
    { shelfName: 2, shelfTotalItem: 1000 },
    { shelfName: 3, shelfTotalItem: 900 },
    { shelfName: 4, shelfTotalItem: 1566 },
    { shelfName: 5, shelfTotalItem: 766 },
    { shelfName: 6, shelfTotalItem: 538 },
    { shelfName: 7, shelfTotalItem: 640 },
    { shelfName: 8, shelfTotalItem: 600 },
    { shelfName: 9, shelfTotalItem: 3000 },
    { shelfName: 10, shelfTotalItem: 200 },
    { shelfName: 11, shelfTotalItem: 50 },
    { shelfName: 12, shelfTotalItem: 180 },
  ];
  return (
    <>
      <SearchBarContainer>
        <ShelfSearchBar
          onCloseShelf={setDeleteShelf}
          closeShelf={deleteShelf}
        />
      </SearchBarContainer>
      <div className=" mx-[8px] py-[25px] px-[20px] grid grid-cols-4 grid-rows-3 grid-flow-row  h-fit   place-items-center rounded-[10px] bg-[#FFFFFF] ">
        {shelfList.map((shelf) => (
          <div key={shelf.shelfName} className="">
            {' '}
            <ShelfItem {...shelf} closeShelf={deleteShelf} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ShelfPage;
