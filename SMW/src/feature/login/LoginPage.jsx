import TextInput from '../../components/textInput/TextInput';

const LoginPage = () => {
  const getText = (value) => {
    console.log(value);
  };
  return (
    <>
      <div className=" ">LoginPage</div>
      <TextInput
        width={'100px'}
        height={'100px'}
        placeHolder={'Nhap tai khoan'}
        backGround={'bg-blue-500'}
        onTextChange={getText}
      />
    </>
  );
};

export default LoginPage;
