import auth from "../packages/auth/auth";

const useGetMe = () => {
  const token = auth.getToken();
  //call to get new token from sever
  console.log(token);
};

export default useGetMe;
