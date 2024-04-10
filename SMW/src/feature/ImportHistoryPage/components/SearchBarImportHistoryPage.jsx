import { useForm } from "react-hook-form";
import Form from "../../../components/form/form/Form";
import useImportHistorySearchSchema from "../validations/export-history-search";
import { zodResolver } from "@hookform/resolvers/zod";
import { SEARCH_IMPORT_HISTORY_DEFAULT_VALUES } from "../constants/constants";
import DateInput from "../../../components/form/DateInput";
// eslint-disable-next-line react/prop-types

const SearchBarImportHistoryPage = ({ handleSearchBar }) => {
  const methods = useForm({
    resolver: zodResolver(useImportHistorySearchSchema()),
    defaultValues: SEARCH_IMPORT_HISTORY_DEFAULT_VALUES,
  });

  const { handleSubmit } = methods;

  const handleFormSubmit = handleSubmit((data) => {
    handleSearchBar(data);
  });

  return (
    <Form methods={methods} onSubmit={handleFormSubmit}>
      <div className="flex float-right ">
        <div className="w-52 text-[#676767] text-lg 	mr-5">
          <div className="w-full flex justify-between">
            <p>From</p> <DateInput name="dateStart" />
          </div>
          <div className="w-full flex justify-between">
            <p>To</p> <DateInput name="dateEnd" />
          </div>
        </div>
        <div>
          <button
            onClick={handleFormSubmit}
            className="btn h-[50px] w-[132px] bg-[#B5DCFD] text-black font-normal text-[24px] focus:outline-none focus:ring-0 border-none hover:bg-sky-300"
          >
            Filter
          </button>
        </div>
      </div>
    </Form>
  );
};

export default SearchBarImportHistoryPage;
