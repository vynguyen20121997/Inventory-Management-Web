/* eslint-disable react/prop-types */
import { Suspense, useEffect, useRef } from "react";
import Button from "../../button/Button";
import { FormProvider } from "react-hook-form";
import GlobalLoading from "../../globalLoading/GlobalLoading";

const FormDialog = ({ children, open, onSubmit, methods, onClose, title }) => {
  const { reset } = methods;

  useEffect(() => {
    if (open) {
      reset();
    }
  }, [open, reset]);

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
    <Suspense fallback={<GlobalLoading />}>
      <dialog className="modal " ref={dialogRef}>
        <div className="modal-box rounded-md bg-[#FFFFFF] w-[517px] min-h-[559px] max-h-lvh">
          {" "}
          <FormProvider {...methods} onSubmit={onSubmit}>
            <form method={methods} onSubmit={onSubmit}>
              <div>
                <p className="font-normal text-[32px] leading-[54.08px] text-center">
                  {title}
                </p>
              </div>

              <div className="mt-3 mb-20 text-xl "> {children} </div>

              <div className="flex justify-around  px-10">
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
            </form>{" "}
          </FormProvider>
        </div>
      </dialog>
    </Suspense>
  );
};

export default FormDialog;
