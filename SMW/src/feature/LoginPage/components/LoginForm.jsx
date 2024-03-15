import { useForm } from "react-hook-form";
import TextInput from "../../../components/form/TextInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { SHELF_DEFAULT_VALUES } from "../constants/constants";
import useLoginSchema from "../validations/login";
import Form from "../../../components/form/form/Form";
import Button from "../../../components/button/Button";

const LoginForm = () => {
  const methods = useForm({
    resolver: zodResolver(useLoginSchema()),
    defaultValues: SHELF_DEFAULT_VALUES,
  });

  return (
    <>
      <div className="row-span-1">
        <Form methods={methods} onSubmit={() => {}}>
          <div className="flex flex-col items-center gap-6">
            <div>
              <TextInput
                style={" w-[315px] h-[47px]  text-[24px]"}
                name="userName"
                placeHolder=" Username"
              />
            </div>

            <div>
              <TextInput
                style={" w-[315px] h-[47px] text-[24px]"}
                name="password"
                placeHolder=" Password"
              />
            </div>
          </div>
        </Form>
      </div>
      <div className="row-span-1 flex justify-center items-center">
        <Button
          HandleClick={() => {}}
          title="Login"
          height="h-[46px]"
          width="w-[149px]"
          textSize="text-[24px] font-normal	"
        />
      </div>
    </>
  );
};

export default LoginForm;
