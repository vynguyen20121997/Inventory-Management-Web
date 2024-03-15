import UserLoginIcon from "../../../assets/user-login-icon.svg";

const LoginHeader = () => {
  return (
    <div className=" flex row-span-2 flex-col justify-center items-center">
      <div className="avatar">
        <div className="w-[110px] h-[110px] rounded-full">
          <img src={UserLoginIcon} />
        </div>
      </div>
      <div>
        <p className="text-[32px] text-black font-normal">Welcome</p>
      </div>
    </div>
  );
};

export default LoginHeader;
