import AuthenLayout from '../layouts/AuthenLayout';
import UserLoginIMG from '../assets/symbols/user-login.png';

const LoginPage = () => {
  return (
    <AuthenLayout>
      <>
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
      </>
    </AuthenLayout>
  );
};

export default LoginPage;
