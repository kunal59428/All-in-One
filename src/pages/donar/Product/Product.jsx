import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../../../Feature/ProductSlice";
import "./product.css";
import Spinner from "../../../components/Spinner/Spinner";
import { addToCart } from "../../../Feature/cartSlice";
import { toast } from "react-toastify";

function Product() {
  const { product, isLoading } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  useEffect(() => {
    dispatch(getItems());
  }, []);

  return (
    <div className="product">
      {isLoading ? (
        <h2>
          <Spinner />
        </h2>
      ) : (
        product &&
        product.map((item) => {
          console.log(item.file)
          return (
            <div key={item._id} className="pcontainer">
              <div className="pheader">
                <img src={item.file} alt={item.name} />
                <img src="./donation/1.jpg" alt="chair" />
                <div className="pbutton">
                  <h3>{item.name}</h3>
                  <button
                    className="btn"
                    onClick={() => {
                      JSON.parse(localStorage.getItem("Donar_id"))
                        ? handleAddToCart(item)
                        : toast.error("Login Required",);
                    }}
                  >
                    Add Item
                  </button>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}

export default Product;
