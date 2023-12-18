import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./NewArrival.css";
import { NavLink } from "react-router-dom";


const NewArrival = () => {
  return (
    <div className="container-Arrival">
      <div className="header-arrival">
      <div className='Arrival-head'>
            <div className="">
                <NavLink to="/">New Arrival</NavLink>
            </div>
        </div>

    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlay
      autoPlaySpeed={5}
      centerMode={false}
      className=""
      containerClass="container-with-dots"
      customTransition="all 1s linear"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
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
      }}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
      transitionDuration={1000}
    >
      <div className="arrival-image">
        <img src="./donation/Almirah.webp" alt="Almirah"/>
        <div className="Arr-img">
        <h1>ALMIRAH</h1>
        <button className="btn">Add Item</button>
        </div>
      </div>
      <div className="arrival-image">
        <img src="./donation/2.jpg"  alt="/"/>
        <div className="Arr-img">
        <h1>ALMIRAH</h1>
        <button className="btn">Add Item</button>
        </div>
      </div>
      <div className="arrival-image">
        <img src="./donation/3.jpg" alt="/" />
        <div className="Arr-img">
        <h1>ALMIRAH</h1>
        <button className="btn">Add Item</button>
        </div>
      </div>
    </Carousel>
      </div>
    </div>
  );
};

export default NewArrival;
