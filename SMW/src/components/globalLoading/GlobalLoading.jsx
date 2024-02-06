const GlobalLoading = () => {
  return (
    <div className=" fixed top-0 left-0 right-0 bottom-0 0 z-10 bg-gray-400/80 w-screen h-screen">
      <span className=" fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  loading loading-spinner loading-lg  bg-gradient-to-r from-green-500 to-blue-500"></span>
    </div>
  );
};

export default GlobalLoading;
