import Button from "../Elements/Button";
import InputForm from "../Elements/Input/Index";

const FormLogin = () => {
  return (
    <form action="">
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
      <Button variant="bg-blue-400 w-full">Login</Button>
    </form>
  );
};

export default FormLogin;
