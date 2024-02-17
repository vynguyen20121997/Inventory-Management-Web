import PrintIcon from "/src/assets/icon-printer.svg";

const SearchBarTemplateExportPage = ({ handleClickOpenEditTemplate }) => {
  return (
    <div className=" flex float-right w-2/6 justify-evenly">
      <div>
        <button className="btn btn-outline btn-error h-[50px] w-[132px] border-black font-normal text-[24px] focus:outline-none focus:ring-0 ">
          Delete
        </button>
      </div>
      <div>
        <button
          className="btn btn-outline h-[50px] w-[132px]  text-black font-normal text-[24px] focus:outline-none focus:ring-0 "
          onClick={handleClickOpenEditTemplate}
        >
          Template
        </button>
      </div>
      <div>
        <button className="btn btn-outline h-[50px] w-[132px] border-[#FFA082] text-black font-normal text-[24px] focus:outline-none focus:ring-0 flex-nowrap">
          <img src={PrintIcon} alt="export" /> <p>Print</p>
        </button>
      </div>
    </div>
  );
};

export default SearchBarTemplateExportPage;
