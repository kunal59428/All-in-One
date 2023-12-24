import React, {useEffect} from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch, useSelector } from 'react-redux';
import { getItems } from "../../Feature/ProductSlice";
import "./Otherproduct.css"



const Otherproduct = () => {
  const {product, isLoading} = useSelector((state) => state.product);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

const dispatch = useDispatch()
useEffect(() =>{
    dispatch(getItems())
},[])

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    miniLaptop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="carousel-main">
      <div className="carousel-container">
        <div className="carousel-heading">
        <div className='carousel-head'>
        <h1 data-text="Others-Product">Others-Product</h1>
        </div>
        </div>
        <Carousel
          responsive={responsive}
        //   autoPlay={true}
        //   autoPlaySpeed={1500}
          infinite={true}
        >
         {
                isLoading?<h2>Loading.....</h2>:
                product && product.map(item =>{
                return (
                  <div
                    className="card wrapper"
                    key={item._id}
                  >
                        <img src="./donation/1.jpg" alt="chair" />
                        <div className="product-name">

                        <h2>{item.name}</h2>
                        <button className="btn" onClick={() => {
                            JSON.parse(localStorage.getItem("Donar_id")) ? alert("Items added to cart") :
                            alert("Login required for adding product")
                        }}>Add Item</button>        
                        </div>
                  </div>
                );
              })
          }
        </Carousel>
      </div>
    </div>
  );
};

export default Otherproduct;
