import AuthenLayout from "../../layouts/AuthenLayout";
import LoginForm from "./components/LoginForm";
import LoginHeader from "./components/LoginHeader";

const LoginPage = () => {
  return (
    <AuthenLayout>
      <LoginHeader />
      <LoginForm />
    </AuthenLayout>
  );
};

export default LoginPage;
