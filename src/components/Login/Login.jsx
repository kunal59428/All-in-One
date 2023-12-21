import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  // const [switchBtn, setSwitchBtn] = useState(true);

  const navigate = useNavigate();

  return (
    <div className="login">
      <div className="login-container">
        <h1 data-text="Login as a">Login as a</h1>
      </div>
      <div>
        <button className="con-d" onClick={(e) => navigate("/Consumer")}>Consumer</button>
        <button className="con-d" onClick={(e) => navigate("/Donar")}>Donar</button>
      </div>
    </div>
  );
}

export default Login;
