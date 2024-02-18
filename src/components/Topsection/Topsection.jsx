import React from "react";
import "./Topsection.css";
import { useNavigate } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Topsection = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="home-data">
        <p className="homeTo">Welcome to</p>
        <div className="home-store">
          <h1 data-text="Donation Store.">Donation Store.</h1>
        </div>
        <p className="mid">
          The "All-in-One Donation App" project seeks to address the challenges
          and inefficiencies in the current charitable landscape by creating a
          comprehensive and user-friendly mobile application. This app aims to
          revolutionize the way individuals and organizations engage in
          philanthropy, making it easier to find, support, and track charitable
          causes while fostering community involvement and transparency
        </p>
        <button className="shop-btn" onClick={() => navigate("/products")}>
          Check More
        </button>
      </div>
      <div className="img-1">
        `{" "}
        <Carousel>
          <div>
            <img src="./donation/3.jpg" alt="" />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src="./donation/image-2.jpeg" alt="" />
            <p className="legend">Legend 2</p>
          </div>
          <div>
            <img src="./donation/1.jpg" alt="" />
            <p className="legend">Legend 3</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Topsection;