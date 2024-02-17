import Button from '../../../../components/button/Button';

const DeleteShelfUI = ({ shelfName, onCancelDelete, onConfirmDelete }) => {
  return (
    <div className=" z-20 fixed top-0 bottom-0 right-0 left-0 w-screen h-screen bg-gray-500/40 modal-open ">
      <div className="w-[517px] h-[187px] bg-[white] fixed  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded shadow-xl font-normal  ">
        <h2 className="text-[32px] text-center mt-[30px] mb-[30px] ">
          {' '}
          Are you sure to delete &#34; Shelf {shelfName} &#34;
        </h2>
        <div className="flex justify-center gap-[52px] ">
          <Button
            backGround={'bg-[#9F9F9F]'}
            title={'Cancel'}
            HandleClick={() => onCancelDelete()}
          />
          <Button title={'Save'} HandleClick={() => onConfirmDelete()} />
        </div>
      </div>
    </div>
  );
};

export default DeleteShelfUI;
