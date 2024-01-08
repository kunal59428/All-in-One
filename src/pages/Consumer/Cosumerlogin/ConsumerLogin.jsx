import React, { useState } from "react";
import "../../donar/Lg.css"
import Validation from "../cvalidation";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ConsumerLogin = () => {
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
    // console.log(e)
    if(value.email === "" || value.password === ""){
      setErrors(Validation(value));
    }
    else{
      const config = {
        header: {
          "Content-Type": "application/json",
        },
      };
      await axios
        .post("https://all-in-one-rew7.onrender.com/consumer/login", value, config)
        .then((res) => {console.log(res.data)
        if(res.data.msg2){
          localStorage.setItem("ConsumerUser",JSON.stringify(res.data.find))
          localStorage.setItem("Consumer_id",JSON.stringify(res.data.find._id))
          navigate("/product")
          alert(res.data.msg)
        }
        else{
          alert(res.data.msg)
        }
      }).catch((err) => console.log(err));
      
    }
  };

  return (
    <div className="log-container">
      <div className="header">
        <div className="don-login">
          <form onSubmit={submitHandle}>
            <div className="main-head">
            <h1 data-text="Consumer Login.....">Consumer Login.....</h1>
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

export default ConsumerLogin;
