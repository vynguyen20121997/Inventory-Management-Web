import { useForm } from "react-hook-form";
import TextInputWithSearchIcon from "../../../components/form/TextInputWithIcon";
import Form from "../../../components/form/form/Form";

// eslint-disable-next-line react/prop-types
const SearchBarInventoryReport = () => {
  const methods = useForm({});

  const { handleSubmit } = methods;

  const handleFormSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div className="flex justify-between">
      <Form methods={methods} onSubmit={handleFormSubmit}>
        <div>
          <TextInputWithSearchIcon
            name="searchItemData"
            handleSubmit={handleFormSubmit}
          />
        </div>
      </Form>
      <div className="flex float-right ">
        <div className="w-52 text-[#676767] text-lg 	mr-5">
          <div className="w-full flex justify-between">
            <p>From</p>
            <input
              className="bg-transparent  "
              type="date"
              defaultValue="2021-01-01"
            />
          </div>
          <div className="w-full flex justify-between">
            <p>To</p>
            <input
              className="bg-transparent  "
              type="date"
              defaultValue="2021-01-01"
            />
          </div>
        </div>
        <div>
          <button className="btn h-[50px] w-[132px] bg-[#B5DCFD] text-black font-normal text-[24px] focus:outline-none focus:ring-0 border-none hover:bg-sky-300">
            Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBarInventoryReport;
