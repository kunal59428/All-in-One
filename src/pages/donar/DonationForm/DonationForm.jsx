import React, { useState } from "react";
import "../DonarLg.css";
import "./Dform.css";

const DonationForm = () => {
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

  const submitForm = (e) => {
    e.preventDefault();
  };

  return (
    <div className=" Dform log-container">
      <div className="Dheader">
        <div className="don-login">
          <form>
            <label >Category</label>
            <select name="item">
            <option value="Select">Select</option>
              <option value="Furniture">Furniture</option>
              <option value="Toy">Toy</option>
              <option value="Clothes">Clothes</option>
              <option value=""></option>
            </select>
            <label>Item Name</label>
            <input
              type="text"
              name="name"
              value={value.name}
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

            <label>Password</label>
            <input
              type="password"
              name="password"
              value={value.password}
              onChange={handleChange}
            />
            <br />

            <label>Phone</label>
            <input
              type="number"
              name="phone"
              value={value.phone}
              onChange={handleChange}
            />
            <br />

            <button onClick={submitForm}>Donate</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DonationForm;
