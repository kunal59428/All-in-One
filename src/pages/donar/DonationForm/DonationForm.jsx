import React, { useState } from "react";
import "../Lg.css";
import "./Dform.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Validation from "../dvalidation";

const DonationForm = () => {
  // const [name, setName] = useState()
  // const [email, setEmail] = useState()
  // const [password, setPassword] = useState()
  // const [phone, setPhone] = useState()

    const [file, setFile] = useState(null);
  
    // const handleFileChange = (event) => {
    //   setFile(event.target.files[0]);
    // };
  
  //   const submitForm = async () => {
      

  
  //   // return (
  //   //   <div>
  //   //     <input type="file" onChange={handleFileChange} />
  //   //     <button onClick={handleUpload}>Upload</button>
  //   //   </div>
  //   // );
  // };
  // setValue
  const [value, setValue] = useState({
    name: "",
    cat: "",
    file: "",
    phone: "",
    text: "",
  });

  const [errors, setErrors] = useState([]);

  // const cloud_name = "dktsmfsvf";
  // const [file, setFile] = useState();

  const navigate = useNavigate();

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
    // console.log(e.target.name)
  };

  const handlefile = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "")
    axios.post('https://api.cloudinary.com/v1_1/dktsmfsvf/image/upload', formData)
    .then(res => setFile(res.data.secure_url))
    .catch(err => console.log(err));
  }

  const submitForm = async (e) => {
    e.preventDefault();
    setErrors(Validation(value));
    if(value.name === "" || value.phone === "" || value.cat === "" || value.text === ""){
      alert("All fields are required....");
    }
    else{
    
    
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    await axios.post("https://all-in-one-rew7.onrender.com/item/donation", value, config)
    .then((res) => {console.log(res.data)
      navigate("/")
      if(res.data.msg2){
        alert(res.data.msg)
      }
      else{
        alert(res.data.msg)
      }
    }).catch((err) => console.log(err));
  }


  // FILEUPLOAD
  // const formData = new FormData();
  //     formData.append('file', file);
  
  //     try {
  //       const response = await fetch('/api/upload', {
  //         method: 'POST',
  //         body: formData,
  //       });
  
  //       if (response.ok) {
  //         console.log('File uploaded successfully');
  //       } else {
  //         console.error('File upload failed');
  //       }
  //     } catch (error) {
  //       console.error('Error uploading file', error);
  //     }
   };
  

  return (
    <div className=" Dform log-container">
      <div className="Dheader">
        <div className="don-login">
          <form >
            <label>Category</label>
            <select name="cat" value={value.cat}   onChange={handleChange}>
              <option value="">Select</option>
              <option value="Furniture">Furniture</option>
              <option value="Toy">Toy</option>
              <option value="Clothes">Clothes</option>
              <option value="Others">Others</option>
            </select>
            <br/>
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

            <label>Item Image</label>
            <input
              type="File"
              name="file"
              accept="image/png, image/jpeg"
              value={value.file}
              onChange={handlefile}
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
            {errors.phone && <p className="error">{errors.phone}</p>}

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

            <button onClick={submitForm} >Donate</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DonationForm;
