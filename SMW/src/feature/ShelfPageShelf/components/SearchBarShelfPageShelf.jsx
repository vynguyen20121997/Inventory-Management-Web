import Button from '../../../components/button/Button';
import TextInputWithSearchIcon from '../../../components/form/TextInputWithIcon';
import ExportIcon from '/src/assets/export-icon.svg';

// eslint-disable-next-line react/prop-types
const SearchBarShelfPageShelf = ({ handleClickOpenAdd }) => {
  return (
    <div className="flex justify-between">
      <div>
        <TextInputWithSearchIcon />
      </div>
      <div className="flex w-64 pr-11 justify-between">
        <Button
          HandleClick={handleClickOpenAdd}
          title="Add Item"
          height="h-[50px]"
          width="w-[132px]"
          textSize="text-xl"
        />
        <img src={ExportIcon} alt="" />
      </div>
    </div>
  );
};

export default SearchBarShelfPageShelf;
