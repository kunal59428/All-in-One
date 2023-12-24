import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./NewArrival.css";
import { NavLink } from "react-router-dom";


const NewArrival = () => {

  const responsive={
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 3,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 2,
      partialVisibilityGutter: 30,
    },
  }
    return (
    <div className="container-Arrival">
      <div className="header-arrival">
      <div className='Arrival-head'>
            <div className="">
                <NavLink to="/">New Arrival</NavLink>
            </div>
        </div>

    <Carousel
      responsive={responsive}
      // autoPlay={true}
      // autoPlaySpeed={1500}
      infinite={true}
      
      slidesToSlide={1}
      swipeable
      transitionDuration={1000}
    >
      <div className="arrival-image">
        <img src="./donation/Almirah.webp" alt="Almirah"/>
        <div className="product-name">
         <h2>ALMIRAH</h2>
        <button className="btn" onClick={() => {
                            JSON.parse(localStorage.getItem("Donar_id")) ? alert("Items added to cart") :
                            alert("Login required for adding product")
                        }}>Add Item</button>
        </div>
      </div>
      <div className="arrival-image">
        <img src="./donation/2.jpg"  alt="/"/>
        <div className="product-name">
        <h2>ALMIRAH</h2>
        <button className="btn" onClick={() => {
                            JSON.parse(localStorage.getItem("Donar_id")) ? alert("Items added to cart") :
                            alert("Login required for adding product")
                        }}>Add Item</button>
        </div>
      </div>
      <div className="arrival-image">
        <img src="./donation/3.jpg" alt="/" />
        <div className="product-name">
         <h2>ALMIRAH</h2>
        <button className="btn" onClick={() => {
                            JSON.parse(localStorage.getItem("Donar_id")) ? alert("Items added to cart") :
                            alert("Login required for adding product")
                        }}>Add Item</button>
        </div>
      </div>
      <div className="arrival-image">
        <img src="./donation/5.png" alt="/" />
        <div className="product-name">
         <h2>ALMIRAH</h2>
        <button className="btn" onClick={() => {
                            JSON.parse(localStorage.getItem("Donar_id")) ? alert("Items added to cart") :
                            alert("Login required for adding product")
                        }}>Add Item</button>
        </div>
      </div>
    </Carousel>
      </div>
    </div>
  );
};

export default NewArrival;
