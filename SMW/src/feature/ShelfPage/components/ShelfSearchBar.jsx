import { useForm } from "react-hook-form";
import Button from "../../../components/button/Button.jsx";
import RadioInput from "../../../components/form/RadioInput.jsx";
import TextInputWithSearchIcon from "../../../components/form/TextInputWithIcon.jsx";
import Form from "../../../components/form/form/Form.jsx";
const ShelfSearchBar = ({
  activateDelete,
  handleActivateDelete,
  handleDeactivateDelete,
  handleOpenAddDialog,
}) => {
  const methods = useForm({});

  return (
    <div className=" grid place-items-center grid-cols-1   ">
      <div className=" flex w-full justify-between  ">
        <Form methods={methods} onSubmit={() => {}}>
          <div className=" ml-[10px] flex ">
            <TextInputWithSearchIcon />
            <div className="ml-[10px] w-[67px]">
              <div className=" flex justify-between items-center">
                <RadioInput name={"byShelf"} />
                <p>by Shelf</p>
              </div>
              <div className=" flex justify-between  items-center">
                <RadioInput name={"byItem"} />
                <p>by Item</p>
              </div>
            </div>
          </div>
        </Form>

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
              textSize="text-[24px] font-normal	text-nowrap"
            />
          </span>

          <span className="hover:opacity-80 transition-all">
            <Button
              width={"w-[132px]"}
              height={"h-[50px]"}
              title={"Add Shelf"}
              HandleClick={handleOpenAddDialog}
              textSize="text-[24px] font-normal	"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ShelfSearchBar;
