import React from "react";
import { useContext } from "react";
import AppContext from "../store/app-context";

const Login = () => {
  const { isLoggedIn, login } = useContext(AppContext);

  return (
    <div>
      {isLoggedIn ? "Welcome" : <button onClick={login}>Log in</button>}
    </div>
  );
};

export default Login;
