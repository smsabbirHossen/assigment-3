import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const CartList = () => {
  const carts = useSelector((state) => state.carts);
  return (
    <>
      {carts?.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}
    </>
  );
};

export default CartList;
