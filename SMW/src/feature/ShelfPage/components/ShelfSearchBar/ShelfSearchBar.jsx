// import TextInput from '../../../../components/form/TextInput.jsx';
import Button from '../../../../components/button/Button.jsx';
import AddShelfUI from '../AddShelfUI/AddShelfUI';
import TextInputWithSearchIcon from '../../../../components/form/TextInputWithIcon.jsx';
import useToogleDialog from '../../../../hooks/useToogleDialog/useToogleDialog.jsx';
const ShelfSearchBar = ({ onCloseShelf, closeShelf }) => {
  const {
    open: openForm,
    handleOpen: handleOpenAddForm,
    handleClose: handleCloseAddForm,
  } = useToogleDialog(false);
  return (
    <div className=" grid place-items-center grid-cols-1   ">
      <div className=" flex w-full justify-between  ">
        <div className=" ml-[10px] ">
          <TextInputWithSearchIcon />
        </div>
        <div className="mr-[19px]">
          {' '}
          <span className="mr-[19px] hover:opacity-80 transition-all ">
            {closeShelf ? (
              <Button
                title={'Cancel'}
                width={'w-[132px]'}
                height={'h-[50px]'}
                backGround={'bg-[#EFDDDD]'}
                textColor={'text-[#FF0000]'}
                HandleClick={() => onCloseShelf(false)}
              />
            ) : (
              ''
            )}
          </span>
          <span className="mr-[19px] hover:opacity-80 transition-all ">
            <Button
              title={'Delete Shelf'}
              width={'w-[132px]'}
              height={'h-[50px]'}
              backGround={'bg-[#9F9F9F]'}
              HandleClick={() => onCloseShelf(true)}
            />
          </span>
          <span className="hover:opacity-80 transition-all">
            <Button
              width={'w-[132px]'}
              height={'h-[50px]'}
              title={'Add Shelf'}
              HandleClick={() => handleOpenAddForm()}
            />
          </span>
        </div>
      </div>
      <AddShelfUI openAddForm={openForm} closeForm={handleCloseAddForm} />
    </div>
  );
};

export default ShelfSearchBar;
