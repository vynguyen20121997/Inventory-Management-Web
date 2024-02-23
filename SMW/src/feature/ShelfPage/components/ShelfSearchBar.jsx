// import TextInput from '../../../../components/form/TextInput.jsx';
import Button from "../../../components/button/Button.jsx";
import TextInputWithSearchIcon from "../../../components/form/TextInputWithIcon.jsx";
const ShelfSearchBar = ({
  activateDelete,
  handleActivateDelete,
  handleDeactivateDelete,
  handleOpenAddDialog,
}) => {
  return (
    <div className=" grid place-items-center grid-cols-1   ">
      <div className=" flex w-full justify-between  ">
        <div className=" ml-[10px] ">
          <TextInputWithSearchIcon />
        </div>

        <div className="mr-[19px]">
          <span className="mr-[19px] hover:opacity-80 transition-all ">
            {activateDelete ? (
              <Button
                title={"Cancel"}
                width={"w-[132px]"}
                height={"h-[50px]"}
                backGround={"bg-[#EFDDDD]"}
                textColor={"text-[#FF0000]"}
                HandleClick={handleDeactivateDelete}
                textSize={"text-2xl"}
              />
            ) : (
              ""
            )}
          </span>

          <span className="mr-[19px] hover:opacity-80 transition-all ">
            <Button
              title={"Delete Shelf"}
              width={"w-[132px]"}
              height={"h-[50px]"}
              backGround={"bg-[#9F9F9F]"}
              HandleClick={handleActivateDelete}
              textSize={"text-2xl"}
            />
          </span>

          <span className="hover:opacity-80 transition-all">
            <Button
              width={"w-[132px]"}
              height={"h-[50px]"}
              title={"Add Shelf"}
              HandleClick={handleOpenAddDialog}
              textSize={"text-2xl"}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ShelfSearchBar;
