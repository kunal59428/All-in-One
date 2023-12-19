import React, { useState } from "react";
import "../DonarLg.css";
import Validation from "../validation";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DonarLogin = () => {
  const [value, setValue] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
    // console.log(e.target.name)
  };
  const [errors, setErrors] = useState([]);

  const submitHandle = async (e) => {
    e.preventDefault();
    console.log(e);
    setErrors(Validation(value));
    console.log(errors)
    if (errors.bool) {
      const config = {
        header: {
          "Content-Type": "application/json",
        },
      };
      await axios
        .post("http://localhost:8080/api/login", value, config)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
        navigate("/user")
    }
    else{
      console.log("Validation")
    }
  };

  return (
    <div className="log-container">
      <div className="header">
        <div className="don-login">
          <form onSubmit={submitHandle}>
            <div className="main-head">
              <h1 data-text="Login as a Donar">Login as a Donar. </h1>
            </div>

            <label>Email</label>
            <input
              type="email"
              name="email"
              value={value.email}
              onChange={handleChange}
            />
            <br />
            {errors.email && <p className="error">{errors.email}</p>}

            <label>Password</label>
            <br />
            <input
              type="password"
              name="password"
              value={value.password}
              onChange={handleChange}
            />
            <br />
            {errors.password && <p className="error">{errors.password}</p>}

            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DonarLogin;
