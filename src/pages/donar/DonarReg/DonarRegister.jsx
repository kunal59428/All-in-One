import React, { useState } from "react";
import "../DonarLg.css";
import axios from "axios";
import Validation from "../validation";

const DonarRegister = () => {
  // const [name, setName] = useState()
  // const [email, setEmail] = useState()
  // const [password, setPassword] = useState()
  // const [phone, setPhone] = useState()

  const [value, setValue] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
    // console.log(e.target.name)
  };
  const [errors, setErrors] = useState([]);

  const submitForm = async (e) => {
    e.preventDefault();
    setErrors(Validation(value));
    if (
      value.name === "" ||
      value.email === "" ||
      value.password === "" ||
      value.phone === ""
    ) {
      alert("All fields are required....");
    } else {
      console.log(value);
      const config = {
        header: {
          "Content-Type": "application/json",
        },
      };
      await axios
        .post("http://localhost:8080/api/register", value, config)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="log-container">
      <div className="header">
        <div className="don-login">
          <form>
            <div className="main-head">
              <h1 data-text="Register as a Donar">Register as a Donar. </h1>
            </div>

            <label>Name</label>
            <input
              type="text"
              name="name"
              value={value.name}
              onChange={handleChange}
            />
            <br />
            {errors.name && <p className="error">{errors.name}</p>}

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
            <input
              type="password"
              name="password"
              value={value.password}
              onChange={handleChange}
            />
            <br />
            {errors.password && <p className="error">{errors.password}</p>}

            <label>Phone</label>
            <input
              type="number"
              name="phone"
              value={value.phone}
              onChange={handleChange}
            />
            <br />
            {errors.phone && <p className="error">{errors.phone}</p>}

            <button id="#" onClick={submitForm}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DonarRegister;
