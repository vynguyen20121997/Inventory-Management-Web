import UserLoginIMG from "../assets/symbols/user-login.png";

const LoginPage = () => {
  return (
    <div className="relative w-full h-screen bg-[#F7F7F7]">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-[#008AFF]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[398px] min-h-[514px] p-8 rounded-[10px] bg-white">
        <div className="flex flex-col justify-center items-center">
          <div className="w-[110px] h-[110px] rounded-full">
            <img src={UserLoginIMG} alt="Inventory Management" />
          </div>
          <h2>Welcome</h2>
        </div>
        <form>
          <input />
          <input />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
