// eslint-disable-next-line react/prop-types
const SearchBarImportHistoryPage = () => {
  return (
    <div className="flex float-right ">
      <div className="w-52 text-[#676767] text-lg 	mr-5">
        <div className="w-full flex justify-between">
          <p>From</p> <input className="bg-transparent  " type="date" />
        </div>
        <div className="w-full flex justify-between">
          <p>To</p> <input className="bg-transparent  " type="date" />
        </div>
      </div>
      <div>
        <button className="btn h-[50px] w-[132px] bg-[#B5DCFD] text-black font-normal text-[24px] focus:outline-none focus:ring-0 border-none hover:bg-sky-300">
          Filter
        </button>
      </div>
    </div>
  );
};

export default SearchBarImportHistoryPage;
