import AuthenLayout from "../../layouts/AuthenLayout";
import LoginForm from "./components/LoginForm";
import LoginHeader from "./components/LoginHeader";
import useLogin from "./hooks/useLogin";

const LoginPage = () => {
  const { login } = useLogin();

  const handleLogin = (val) => {
    login(val);
  };

  return (
    <AuthenLayout>
      <LoginHeader />
      <LoginForm onSubmit={handleLogin} />
    </AuthenLayout>
  );
};

export default LoginPage;
