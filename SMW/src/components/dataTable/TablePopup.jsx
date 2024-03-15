/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import Button from "../button/Button";

const TablePopup = ({ open, message, onSubmit, onClose, style }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (dialogRef.current?.open && !open) {
      dialogRef.current?.close();
    } else if (!dialogRef.current?.open && open) {
      dialogRef.current?.showModal();
    }
  }, [dialogRef, open]);

  useEffect(() => {
    const handleEscPress = (e) => {
      if (e.key === "Escape" && open) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEscPress);
    return () => window.removeEventListener("keydown", handleEscPress);
  }, [onClose, open]);

  return (
    <dialog className="modal " ref={dialogRef}>
      <div
        className={`modal-box rounded-md bg-[#FFFFFF] w-[517px] h-[213px] ${style}`}
      >
        <div className=" text-[32px] text-center	 ">
          <p> {message}</p>
        </div>
        <div className="flex justify-around mt-5  px-10">
          <Button
            HandleClick={onClose}
            title="Cancel"
            height="h-[46px]"
            width="w-[119px]"
            backGround="bg-[#9F9F9F]"
          />
          <Button
            HandleClick={onSubmit}
            title="Save"
            height="h-[46px]"
            width="w-[119px]"
          />
        </div>
      </div>
    </dialog>
  );
};

export default TablePopup;
