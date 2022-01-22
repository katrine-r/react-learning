import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context";
import "./styles.css";

const SignIn = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsAuth(true);
    navigate("/");
    localStorage.setItem("isAuth", true);
  };

  return (
    <div className="signin">
      <h1>Sign In</h1>
      <button onClick={handleClick}>send</button>
    </div>
  );
};

export default SignIn;
