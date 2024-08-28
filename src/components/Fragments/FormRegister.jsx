import Button from "../Elements/Button";
import InputForm from "../Elements/Input/Index";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        label="Fullname"
        type="text"
        name="fullname"
        placeholder="John Doe"
      ></InputForm>
      <InputForm
        label="Email"
        type="email"
        name="email"
        placeholder="example@mail.com"
      ></InputForm>
      <InputForm
        label="Password"
        type="password"
        name="password"
        placeholder="******"
      ></InputForm>
      <InputForm
        label="Confirm Password"
        type="password"
        name="confirm_password"
        placeholder="******"
      ></InputForm>
      <Button classname="bg-blue-400 w-full">Register</Button>
    </form>
  );
};

export default FormRegister;
