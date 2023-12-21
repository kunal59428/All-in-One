import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { GoSearch } from "react-icons/go";
import "./Nav.css";
import Category from "../Category/Category";

const Navbar = () => {
  //   const { cart } = useSelector((state) => state.cart);
  //   const { products } = useSelector((state) => state.products);

  const [search, setSearch] = useState();

  const [showham] = useState(false);

  const navigate = useNavigate();

  // useEffect(() => {
  //     if (localStorage.getItem('id')) {
  //         dispatch(getCartProduct(localStorage.getItem('id')))
  //     }
  //     // eslint-disable-next-line
  // }, [localStorage.getItem('id')])

  // useEffect(() => {
  //     dispatch(getData())
  //     // eslint-disable-next-line
  // }, [])

  useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("hamActive");
      navMenu.classList.toggle("hamActive");
      console.log("Clicked");
    });

    document.querySelectorAll(".nav-link").forEach((n) => {
      n.addEventListener("click", () => {
        hamburger.classList.remove("hamActive");
        navMenu.classList.remove("hamActive");
        console.log("click");
      });
    });
  }, [showham]);

  const handleChange = (data) => {
    setSearch(data.toLowerCase());
  };

  return (
    <>
      <div className="nav-main">
        <div className="brand-search">
          <div className="logo">
            <h3 onClick={() => navigate("/")}>
              <a href="index.html">
                <svg
                  id="logo-14"
                  width="70"
                  height="30"
                  viewBox="0 0 73 49"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {" "}
                  <path
                    d="M46.8676 24C46.8676 36.4264 36.794 46.5 24.3676 46.5C11.9413 46.5 1.86765 36.4264 1.86765 24C1.86765 11.5736 11.9413 1.5 24.3676 1.5C36.794 1.5 46.8676 11.5736 46.8676 24Z"
                    class="ccustom"
                    fill="#68DBFF"
                  ></path>{" "}
                  <path
                    d="M71.1324 24C71.1324 36.4264 61.1574 46.5 48.8529 46.5C36.5484 46.5 26.5735 36.4264 26.5735 24C26.5735 11.5736 36.5484 1.5 48.8529 1.5C61.1574 1.5 71.1324 11.5736 71.1324 24Z"
                    class="ccompli1"
                    fill="#FF7917"
                  ></path>{" "}
                  <path
                    d="M36.6705 42.8416C42.8109 38.8239 46.8676 31.8858 46.8676 24C46.8676 16.1144 42.8109 9.17614 36.6705 5.15854C30.5904 9.17614 26.5735 16.1144 26.5735 24C26.5735 31.8858 30.5904 38.8239 36.6705 42.8416Z"
                    class="ccompli2"
                    fill="#5D2C02"
                  ></path>{" "}
                </svg>
              </a>
              <span>Donation</span>
            </h3>
          </div>
          <div className="search">
            <div className="icons">
              <GoSearch />
            </div>
            <input
              type="text"
              name="search"
              value={search}
              onChange={(e) => handleChange(e.target.value)}
              placeholder="Search for Products, Brands and More"
              autoComplete="off"
            />
          </div>
        </div>
        <div className="nav-item">
          <ul className="nav-menu">
            <NavLink to="/" className="hoverBorder nav-link">
              Home
            </NavLink>
            <NavLink to="/product" className="hoverBorder nav-link">
              Products
            </NavLink>
            <NavLink to="/contact" className="hoverBorder nav-link">
              Contact
            </NavLink>

            <NavLink to="/login" className="hoverBorder nav-link">
              Login
            </NavLink>
            <NavLink to="/" className="cart-link nav-link">
              <FaCartShopping className="cart-trolley" />
            </NavLink>
          </ul>
          <div className="hamburger">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </div>
      </div>
      <Category />
    </>
  );
};

export default Navbar;
