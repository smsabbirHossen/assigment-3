import React, { useState } from "react";
import { useSelector } from "react-redux";
import logo from "../assets/images/logo.png";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import { BiShoppingBag } from "react-icons/bi";

const Navbar = () => {
  const [cart, setShowCart] = useState(false);
  const carts = useSelector((state) => state.carts);
  console.log(carts);
  return (
    <>
      <nav className="bg-[#171C2A] py-4">
        <div className="navBar">
          <a href="index.html">
            <img src={logo} alt="LWS" className="max-w-[140px]" />
          </a>

          <div className="flex gap-4">
            <a
              className="navHome"
              id="lws-home"
              onClick={() => setShowCart(false)}
            >
              Home
            </a>
            <a
              className="navCart"
              id="lws-cart"
              onClick={() => setShowCart(true)}
            >
              <BiShoppingBag size={20} />

              <span id="lws-totalCart">{carts.length}</span>
            </a>
          </div>
        </div>
      </nav>

      {cart ? <Cart /> : <Home />}
    </>
  );
};

export default Navbar;
