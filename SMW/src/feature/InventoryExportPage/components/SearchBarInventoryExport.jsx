import { useForm } from "react-hook-form";
import Button from "../../../components/button/Button";
import TextInputWithSearchIcon from "../../../components/form/TextInputWithIcon";
import Form from "../../../components/form/form/Form";

// eslint-disable-next-line react/prop-types
const SearchBarInventoryExport = ({ handleClickOpenAdd }) => {
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
      <div className="  pr-11 ">
        <Button
          HandleClick={handleClickOpenAdd}
          title="Add Item"
          height="h-[50px]"
          width="w-[132px]"
          textSize="text-xl"
        />
      </div>
    </div>
  );
};

export default SearchBarInventoryExport;
