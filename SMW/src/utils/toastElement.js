import { ToastContainer } from "react-toastify";

export const CustomToastContainer = () => {
  return (
    <ToastContainer
      autoClose={3000}
      position="bottom-left"
      theme="dark"
      pauseOnHover
    />
  );
};
