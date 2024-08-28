import { useEffect, useRef, useState } from "react";
import Button from "../Elements/Button";
import InputForm from "../Elements/Input/Index";
import { login } from "../../services/auth.service";

const FormLogin = () => {
  const [loginFailed ,setLoginFailed] = useState("");
  const handleLogin = (event) => {
    event.preventDefault();
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    };

    login(data,((status,res) => {
      if (status) {
        localStorage.setItem('token',res.data.token)
        window.location.href = "/products";
      }else{
        setLoginFailed(res.response.data);
      }
    }));
  };

  const usernameRef = useRef(null);
  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <form action="" onSubmit={handleLogin}>
      <InputForm
        label="Username"
        type="text"
        name="username"
        placeholder="JohnDoe"
        ref={usernameRef}
      ></InputForm>
      <InputForm
        label="Password"
        type="password"
        name="password"
        placeholder="******"
      ></InputForm>
      {loginFailed && <p className="text-red-500 text-center my-4">{loginFailed}</p>}
      <Button classname="bg-blue-400 w-full" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormLogin;
