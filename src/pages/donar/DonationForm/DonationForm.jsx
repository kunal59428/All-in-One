import React, { useState } from "react";
import "../Lg.css";
import "./Dform.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Validation from "../dvalidation";
import { toast } from "react-toastify";
import { Button } from "@chakra-ui/react";

const DonationForm = () => {
  const [value, setValue] = useState({
    name: "",
    cat: "",
    file: "",
    phone: "",
    text: "",
    add: "",
  });

  const [errors, setErrors] = useState([]);

  // upload image
  const [profile, setProfile] = useState();
  const [loading, setLoading] = useState(false);

  const imgDetails = (pics) => {
    setLoading(true);
    if (pics === undefined) {
      toast("Please Select an image!", { type: "warning", theme: "colored" });
      return;
    }
    if (
      pics.type === "image/jpeg" ||
      pics.type === "image/jpg" ||
      pics.type === "image/png"
    ) {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "donationForm");
      data.append("cloud_name", "dktsmfsvf");
      fetch("https://api.cloudinary.com/v1_1/dktsmfsvf/image/upload", {
        method: "POST",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setProfile(data.url.toString());
          // console.log(data.url.toString())
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } else {
      toast("Please Select an formatted image!", {
        type: "warning",
        theme: "colored",
      });
      setLoading(false);
      return;
    }
  };

  // const cloud_name = "dktsmfsvf";
  // const [file, setFile] = useState();

  const navigate = useNavigate();

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    // console.log(profile);
    setErrors(Validation(value));
    if (
      value.name === "" ||
      value.phone === "" ||
      value.cat === "" ||
      value.text === "" ||
      value.add === ""
    ) {
      alert("All fields are required....");
    } else {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      await axios
        .post(
          "https://all-in-one-rew7.onrender.com/item/donation",
          { ...value, profile },
          config
        )
        .then((res) => {
          setValue(" ");
          // console.log(res.data);
          navigate("/");
          if (res.data.msg2) {
            alert(res.data.msg);
          } else {
            alert(res.data.msg);
          }
        })
        .catch((err) => console.log(err));
      setValue({
        name: "",
        cat: "",
        file: "",
        phone: "",
        text: "",
        add: "",
      });
    }
  };

  return (
    <div className=" Dform log-container">
      <div className="Dheader">
        <div className="don-login">
          <form method="post">
            <label>Category</label>
            <select name="cat" value={value.cat} onChange={handleChange}>
              <option value="">Select</option>
              <option value="Furniture">Furniture</option>
              <option value="Toy">Toy</option>
              <option value="Clothes">Clothes</option>
              <option value="Others">Others</option>
            </select>
            <br />
            {errors.cat && <p className="error">{errors.cat}</p>}
            <label>Item Name</label>
            <input
              type="text"
              name="name"
              value={value.name}
              onChange={handleChange}
            />
            <br />
            {errors.name && <p className="error">{errors.name}</p>}

            <label htmlFor="">Upload Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => imgDetails(e.target.files[0])}
            />
            <br />
            <label>Phone</label>
            <input
              type="number"
              name="phone"
              value={value.phone}
              onChange={handleChange}
            />
            <br/>

            <label>Address</label>
            <input
              type="text"
              name="add"
              value={value.add}
              onChange={handleChange}
            />
            <br />
            {errors.add && <p className="error">{errors.add}</p>}

            <label>Discription</label>
            <textarea
              name="text"
              value={value.text}
              cols="23"
              rows="4"
              onChange={handleChange}
            ></textarea>
            <br />
            {errors.text && <p className="error">{errors.text}</p>}

            <Button
              colorScheme="blue"
              color="white"
              width="100%"
              style={{ marginTop: 15 }}
              onClick={submitForm}
              isLoading={loading}
            >
              Register
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DonationForm;
