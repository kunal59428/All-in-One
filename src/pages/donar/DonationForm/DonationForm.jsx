import React, { useState } from "react";
import "../Lg.css";
import "./Dform.css";
import axios from "axios";

const DonationForm = () => {
  // const [name, setName] = useState()
  // const [email, setEmail] = useState()
  // const [password, setPassword] = useState()
  // const [phone, setPhone] = useState()

  const [value, setValue] = useState({
    name: "",
    cat: "",
    file: "",
    phone: "",
    text: "",
  });

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
    // console.log(e.target.name)
  };

  const submitForm = async (e) => {
    e.preventDefault();
    console.log(value);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    await axios.post("http://localhost:8080/item/donation", value, config)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className=" Dform log-container">
      <div className="Dheader">
        <div className="don-login">
          <form>
            <label>Category</label>
            <select name="cat" value={value.cat} onChange={handleChange}>
              <option value="Select">Select</option>
              <option value="Furniture">Furniture</option>
              <option value="Toy">Toy</option>
              <option value="Clothes">Clothes</option>
              <option value="Others">Others</option>
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
            <textarea
              name="text"
              value={value.text}
              cols="23"
              rows="4"
              onChange={handleChange}
            ></textarea>
            <br />

            <button onClick={submitForm}>Donate</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DonationForm;
