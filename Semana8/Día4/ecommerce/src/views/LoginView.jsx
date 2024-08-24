import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const LoginView = () => {
  const { loginWithGoogle } = useContext(AuthContext);
  
  return (
    <>
      <div>LoginView</div>
      <button onClick={loginWithGoogle}>Login</button>
    </>
  )
}

export default LoginView