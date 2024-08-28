import Button from "../Elements/Button";
import InputForm from "../Elements/Input/Index";

const FormLogin = () => {
  const handleLogin = (event) => {
    event.preventDefault()
    localStorage.setItem('email',event.target.email.value);
    localStorage.setItem('password',event.target.password.value);
    window.location.href = "/products";
  }
  return (
    <form action="" onSubmit={handleLogin}>
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
      <Button classname="bg-blue-400 w-full" type="submit">Login</Button>
    </form>
  );
};

export default FormLogin;
