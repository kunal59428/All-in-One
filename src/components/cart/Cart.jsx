import { useEffect } from "react";
import "./cart.css";
import { useDispatch, useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../../Feature/cartSlice";

import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  // Payment gateway

  const makePayment = async () => {
    const stripe = await loadStripe(
      "pk_test_51PNIw3IW4TOd5CqDlxKk98RkGEwnZoYKoG9lKNN93d8RImqnbZCxxLJqvksvAyLMLIalkWkHgPP6iD5bwLHBSOCU00NQJ6Y2vK"
    );
    const body = { products: cart };
    // console.log(body)
    const headers = {
      "Content-Type": "application/json",
    };
    const resp = await fetch("https://all-in-one-rew7.onrender.com/create-checkout-session", {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    });

    const session = await resp.json();
    const result = stripe.redirectToCheckout({ sessionId: session.id });
    if (result.error) {
      console.log(result.error);
    }
  };

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };
  const handleDecreaseCart = (item) => {
    dispatch(decreaseCart(item));
  };
  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(item));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cart.cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is currently empty</p>
          <div className="cartimg">
            <img src="./donation/emptycart.jpg" alt="Empty-cart" />
          </div>
          <div className="start-shopping">
            <Link to="/Product">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>
              <span>Start Shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="titles">
            <h3 className="quantity">Product Name</h3>
            <h3 className="quantity">Quantity</h3>
            <h3 className="total">Description</h3>
            <h3 className="product-title">Product Image</h3>
          </div>
          <div className="cart-items">
            {cart.cartItems &&
              cart.cartItems.map((pitem) => {
                return (
                  <div className="cartitem" key={pitem._id}>
                    <div className="cart-product">
                      <img src={pitem.profile} alt={pitem.name} />
                      <div>
                        <p>{pitem.desc}</p>
                        <button onClick={() => handleRemoveFromCart(pitem)}>
                          Remove
                        </button>
                      </div>
                    </div>
                        <h3>{pitem.name}</h3>
                    {/* <div className="cart-product-price">${pitem.price}</div> */}
                    <div className="cart-product-quantity">
                      <button onClick={() => handleDecreaseCart(pitem)}>
                        -
                      </button>
                      <div className="count">{pitem.cartQuantity}</div>
                      <button onClick={() => handleAddToCart(pitem)}>+</button>
                    </div>
                    {/* <div className="cart-product-total-price">
                      ${pitem.price * pitem.cartQuantity}
                    </div> */}
                    <div>{pitem.text}</div>
                  </div>
                );
              })}
          </div>
          <div className="cart-summary">
            <button className="clear-btn" onClick={() => handleClearCart()}>
              Clear Cart
            </button>
            <div className="cart-checkout">
              {/* <div className="subtotal">
                <span>Subtotal</span>
                <span className="amount">${cart.cartTotalAmount}</span>
              </div> */}
              {/* <p>Taxes and shipping calculated at checkout</p> */}
              <button onClick={makePayment}>Check out</button>
              <div className="continue-shopping">
                <Link to="/Product">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-arrow-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                    />
                  </svg>
                  <span>Continue Shopping</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
