import { useCallback, useState } from "react";

const useToogleDialog = ({ defaultState }) => {
  const [open, setOpen] = useState(defaultState);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  return { open, handleOpen, handleClose };
};

export default useToogleDialog;
