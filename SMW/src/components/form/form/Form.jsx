import { FormProvider } from "react-hook-form";

const Form = ({ children, methods, onSubmit }) => {
  return (
    <FormProvider {...methods}>
      <div onSubmit={onSubmit}>{children}</div>
    </FormProvider>
  );
};

export default Form;
