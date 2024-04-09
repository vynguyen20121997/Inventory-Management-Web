import { useForm } from "react-hook-form";
import Button from "../../../components/button/Button";
import TextInputWithSearchIcon from "../../../components/form/TextInputWithIcon";
import Form from "../../../components/form/form/Form";
import { SEARCH_INVENTORY_ITEM_DEFAULT_VALUES } from "../constants/constants";
import useInventoryPageSearchSchema from "../validations/inventory-search-item";
import { zodResolver } from "@hookform/resolvers/zod";

// eslint-disable-next-line react/prop-types
const SearchBarInventory = ({ handleClickOpenAdd, handleSearchBar }) => {
  const methods = useForm({
    resolver: zodResolver(useInventoryPageSearchSchema()),
    defaultValues: SEARCH_INVENTORY_ITEM_DEFAULT_VALUES,
  });

  const { handleSubmit } = methods;

  const handleFormSubmit = handleSubmit((data) => {
    handleSearchBar(data);
  });

  return (
    <div className="flex justify-between">
      <Form methods={methods} onSubmit={handleFormSubmit}>
        <div>
          <TextInputWithSearchIcon
            name="searchData"
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

export default SearchBarInventory;
