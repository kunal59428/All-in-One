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


            <label>Item Image</label>
            <input
              type="File"
              name="file"
              accept="image/png, image/jpeg"
              value={value.file}
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

            <label>Discription</label>
            <textarea name="txt" cols="23" rows="4"></textarea>
            <br />

            

            <button onClick={submitForm}>Donate</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DonationForm;
