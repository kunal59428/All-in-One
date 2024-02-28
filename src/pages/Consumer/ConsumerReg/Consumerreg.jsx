import React, { useState } from "react";
import "../../donar/Lg.css"
import axios from "axios";
import Validation from "../cvalidation";


const ConsumerRegister = () => {
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
      value.phone === "" ||
      value.cat === "" ||
      value.LNumber === ""
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
        .post("https://all-in-one-rew7.onrender.com/consumer/register", value, config)
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="log-container consumer-con">
      <div className="header">
        <div className="don-login">
          <form>
            <div className="main-head">
              <h1 data-text="Consumer Register">Consumer Register</h1>
            </div>
            <label>Category</label>
            <select className="con-select" name="cat" value={value.cat} onChange={handleChange}>
              <option value="">Select</option>
              <option value="NGO">NGO</option>
              <option value="ORPHANAGE">ORPHANAGE</option>
              <option value="Other-Agency">Other Agency</option>
            </select>
            <br/>
            {errors.cat && <p className="error">{errors.cat}</p>}

            <label>{value.cat} Name</label>
            <input
              type="text"
              name="name"
              value={value.name}
              onChange={handleChange}
            />
            <br />
            {errors.name && <p className="error">{errors.name}</p>}

            <label>License Number</label>
            <input
              type="number"
              name="LNumber"
              value={value.LNumber}
              onChange={handleChange}
            />
            <br />
            {errors.LNumber && <p className="error">{errors.LNumber}</p>}

            <label>Upload License</label>
            <input
              type="File"
              name="file"
              accept="image/png, image/jpeg"
              value={value.file}
              onChange={handleChange}
            />
            <br />

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

export default ConsumerRegister;
