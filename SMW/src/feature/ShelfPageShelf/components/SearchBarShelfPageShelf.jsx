import { useForm } from "react-hook-form";
import Button from "../../../components/button/Button";
import TextInputWithSearchIcon from "../../../components/form/TextInputWithIcon";
import ExportIcon from "/src/assets/export-icon.svg";
import Form from "../../../components/form/form/Form";

// eslint-disable-next-line react/prop-types
const SearchBarShelfPageShelf = ({ handleClickOpenAdd }) => {
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
      <div className="flex w-64 pr-11 justify-between">
        <Button
          HandleClick={handleClickOpenAdd}
          title="Add Item"
          height="h-[50px]"
          width="w-[132px]"
          textSize="text-xl"
        />
        <img src={ExportIcon} alt="export" />
      </div>
    </div>
  );
};

export default SearchBarShelfPageShelf;
