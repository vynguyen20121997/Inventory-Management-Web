// import TextInput from '../../../../components/form/TextInput.jsx';
import Button from '../../../../components/button/Button.jsx';
import { useState } from 'react';
import AddShelfUI from '../AddShelfUI/AddShelfUI';
import TextInputWithSearchIcon from '../../../../components/form/TextInputWithIcon.jsx';
const ShelfSearchBar = ({ onCloseShelf, closeShelf }) => {
  const [openAddShelf, setOpenAddShelf] = useState(false);
  return (
    <div className=" grid place-items-center grid-cols-1   ">
      <div className=" flex w-full justify-between  ">
        <div className=" ml-[10px] ">
          <TextInputWithSearchIcon />
        </div>
        <div className="mr-[19px]">
          {' '}
          <span className="mr-[19px] hover:opacity-80 transition-all ">
            <Button
              title={'Delete Shelf'}
              width={'w-[132px]'}
              height={'h-[50px]'}
              backGround={'bg-[#9F9F9F]'}
              HandleClick={() => onCloseShelf(!closeShelf)}
            />
          </span>
          <span className="hover:opacity-80 transition-all">
            <Button
              width={'w-[132px]'}
              height={'h-[50px]'}
              title={'Add Shelf'}
              HandleClick={() => setOpenAddShelf(true)}
            />
          </span>
        </div>
      </div>
      {openAddShelf && <AddShelfUI closeForm={() => setOpenAddShelf(false)} />}
    </div>
  );
};

export default ShelfSearchBar;
